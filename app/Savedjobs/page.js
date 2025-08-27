'use client'

import { useEffect, useState } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

const savedJobs = [
  {
    id: "JP-101",
    title: "UI/UX Designer",
    savedDate: "21-08-2025",
  },
  {
    id: "JP-102",
    title: "Backend Developer",
    savedDate: "15-07-2025",
  },
  {
    id: "JP-103",
    title: "Product Manager",
    savedDate: "02-06-2025",
  },
  {
    id: "JP-104",
    title: "Sales Executive Manager",
    savedDate: "24-05-2025",
  },
];

const Saved_jobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(stored);
  }, []);

  const handleUnsave = (id) => {
    const updated = savedJobs.filter((job) => job.id !== id);
    setSavedJobs(updated);
    localStorage.setItem("savedJobs", JSON.stringify(updated));

    toast('Job Removed!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="saved-wrapper min-h-screen flex flex-col mt-10">
        <h2 className="text-lg sm:text-2xl font-semibold text-center my-8 mx-3 text-gray-800">
          View all your Saved jobs!
        </h2>
        {savedJobs.length > 0 ? (
          <div className="flex flex-col gap-6 items-center w-full sm:w-[75%] h-[450px] overflow-y-scroll mx-auto">
            {savedJobs.map((job) => (
              <div key={job.id} className="w-full bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border border-gray-100" >
                <div className="flex items-center gap-4">
                  <span className="text-blue-500 cursor-pointer hover:text-blue-200"> <BsBookmarkFill size={20} onClick={() => handleUnsave(job.id)} /> </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 cursor-pointer hover:underline">{job.title} </h3>
                    <p className="text-sm text-gray-500"> Job ID : <span className="font-mono">{job.id}</span> </p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium"> Saved on {job.savedDate} </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl text-gray-500 text-center">No jobs saved yet.</p>
        )}
      </div>
    </>
  );
};

export default Saved_jobs;
