"use client"
import { RxCross2 } from "react-icons/rx";

const Modal = ({ isOpen, onClose, job }) => {
    if (!isOpen || !job) return null;

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <div className="bg-white p-6 h-[700px] max-w-[600px] shadow-xl relative overflow-y-scroll">

                    <button className="flex justify-self-end cursor-pointer relative pb-3 text-gray-500 hover:text-gray-800" onClick={onClose}>
                        <RxCross2 size={20}/>
                    </button>

                    <h2 className="text-2xl font-semibold">{job.title}</h2>
                    <p className="text-gray-600 mt-2">{job.company_name}</p>
                    <div className="text-sm text-gray-500 mt-2">
                        Salary : {job.salary || "Not Disclosed"} | Job Location : {job.location || "Remote"} | Category : {job.category}
                    </div>

                    <p className="py-4 text-gray-700" dangerouslySetInnerHTML={{ __html: job.description }} />

                    <div className="flex gap-3 items-center justify-end">
                        <button className="px-4 py-2 bg-blue-600 cursor-pointer text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"> Apply Now </button>
                        <button className="px-4 py-2 bg-gray-100 cursor-pointer text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition"> Save </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
