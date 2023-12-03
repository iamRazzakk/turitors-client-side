
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateAssignment = () => {
  const { user } = useContext(AuthContext)
  const { _id, title, difficulty, description, marks, url } = useLoaderData();
  console.log(title);
  const handleUpdate = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const difficulty = form.difficulty.value;
    const description = form.description.value
    const marks = form.marks.value;
    const url = form.url.value
    const email = form.email.value
    const dueDate = form.dueDate.value;
    console.log(title, difficulty, description, marks, url, dueDate);
    const addData = {
      title: title,
      email: email,
      difficulty: difficulty,
      description: description,
      marks: marks,
      url: url,
      dueDate: dueDate,
      status: 60,
    }
    fetch(`http://localhost:5000/updateAssignment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(addData)
    })
      .then(response => {
        if (response.ok) {
          toast.success('Assignment Update successfully');
        } else {
          toast.error('Something is missing');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('An error occurred while adding the assignment');
      });


  }
  return (
    <div>
      <h2>Update Assignment</h2>
      <div>
        <form onSubmit={handleUpdate} className="card-body text-white">
          <div className="form-control">
            <div className="flex">
              <div className="flex-1">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" placeholder="Title" defaultValue={title} name="title" className="input input-bordered" required />
              </div>
              <div className="flex-1 ml-4">
                <label >Assignment difficulty level:</label>
                <select name="difficulty" defaultValue={difficulty} className="w-full text-white bg-none" id="cars">
                  <option value="Easy" selected>Easy</option>
                  <option value="Medium" >Medium</option>
                  <option value="Hard" >Hard</option>
                </select>
              </div>
            </div>


          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input type="text" defaultValue={description} name="description" placeholder="Description" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name="email" defaultValue={`${user?.email}`} placeholder="Email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Marks</span>
            </label>
            <input type="text" name="marks" defaultValue={marks} placeholder="Marks" className="input input-bordered" required />
          </div>

          <div className="flex">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="url" name="url" defaultValue={url} placeholder="Photo URL" className="input input-bordered" required />
            </div>
            <div className="flex-1 ml-4">
              <label>Date:</label>
              <input type="date" name="dueDate" className="w-full" />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Assignment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAssignment;
