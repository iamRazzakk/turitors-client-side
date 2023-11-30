import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Category = ({ cate }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const pdf = form.dpf.value;
    const textarea = form.textarea.value;
    const email = form.email.value;

    const formData = {
      pdf: pdf,
      textarea: textarea,
      email: email,
      url: cate.url,
      marks: cate.marks,
      title: cate.title,
      type: "pending",
    };
    axios
      .post('http://localhost:5000/submitedAssignment', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        if (response.data.acknowledged) {
          toast.success('Take assignment added successfully');
          document.getElementById("my_modal_3").close();
        } else {
          toast.error('Something is missing');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleDelete = () => {
    Swal.fire({
      title: "Delete Confirmation",
      text: "Are you sure you want to delete this category?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/createAssainment/${cate._id}`)
          .then((response) => {
            if (response.data.message === "Category deleted successfully") {
              Swal.fire({
                title: "Success",
                text: "Category deleted successfully",
                icon: "success",
              });
            } else if (response.data.message === "Category not found") {
              Swal.fire({
                title: "Error",
                text: "Category not found",
                icon: "error",
              });
            } else {
              Swal.fire({
                title: "Error",
                text: "Failed to delete category",
                icon: "error",
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              title: "Error",
              text: "An error occurred while deleting the category",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full h-44 object-cover" src={cate.url} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark-text-white">{cate.title}</h5>
        <p>{cate.marks}</p>
        <p className="mb-3 font-normal text-gray-700 dark-text-gray-400">{cate.description}</p>
        <div className="flex gap-4">
          {
            cate.email === user?.email ? <>
              <Link to={`/TotalassinmentUpdate/${cate._id}`}>
                <button className="btn btn-link bg-white">Update</button>
              </Link>
            </> :
              <>

                <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-link bg-white">Take Assignment</button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <form onSubmit={handleSubmit} className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">PDF Link</span>
                        </label>
                        <input type="text" name="dpf" placeholder="Enter PDF Link" className="input input-bordered" required />
                      </div>
                      <div className="form-control mt-5">
                        <textarea className="textarea" name="textarea" placeholder="Enter your text"></textarea>
                      </div>
                      <div>
                        <input className="m-10" type="email" defaultValue={`${user.email}`} name="email" id="" />
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                      </div>

                    </form>
                    <Toaster></Toaster>
                  </div>
                </dialog>

              </>
          }

          {
            cate.email === user?.email && <>
              <button className="btn btn-outline btn-warning" onClick={handleDelete}>
                Delete
              </button>
            </>
          }

        </div>
      </div>
    </div>
  );
};

export default Category;
