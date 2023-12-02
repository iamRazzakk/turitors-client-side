
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";


const AssinmentDetail = () => {
    // const data=useLoaderData()
    const [data, setData] = useState()
    console.log(data);
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/createAssainment/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            // .then((data) => console.log(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const pdf = form.pdf.value;
        const Note = form.Note.value;
        // console.log(pdf, Note);
        const sendPdf = {
            pdf: pdf,
            Note: Note,
            status: "pending",
        };
        axios.post('http://localhost:5000/submitedAssignment', sendPdf, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.acknowledged) {
                    toast.success('PDF and Note added successfully');
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
        <div className="">
            <div className="card card-side bg-gradient-to-r from-[#f1e7e7] text-black  to-[#87ceeb] shadow-xl">
                <figure><img src={data?.url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Title: {data?.title}</h2>
                    <h2 className="card-title">Difficulty Level: {data?.difficulty}</h2>
                    <p>Description: {data?.description}</p>
                    <p>Mark: {data?.marks}</p>
                    <div className="card-actions justify-end text-white">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
                            <form onSubmit={handleSubmit} className="modal-box bg-gradient-to-r from-[#f1e7e7] text-black  to-[#87ceeb] shadow-xl">
                                PDF Link: <input className="w-full bg-white p-4 rounded-xl" type="text" name="pdf" id="" /><br />
                                Note:  <input className="w-full bg-white p-4 rounded-xl" type="text" name="Note" id="" />
                                <button className="btn md:mt-4">Submit</button>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssinmentDetail;
