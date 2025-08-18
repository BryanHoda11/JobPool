'use client'
import { useState, useEffect } from "react"

const Jobs = () => {
  const [Jobdetails, setJobdetails] = useState({ jobs: [] });

  const Categories = [
    { name: "IT/Technology" },
    { name: "Engineering" },
    { name: "Marketing" },
    { name: "Designing" },
    { name: "Sales" },
    { name: "Artificial Intelligence (AI)" },
    { name: "Finance & Accounting" },
    { name: "Human Resource (HR)" },
    { name: "Operations & Supply Chain" },
    { name: "Data Science & Analytics" },
    { name: "Legal & Compliance" },
    { name: "Cybersecurity" },
    { name: "Teacher" },
    { name: "DevOps & Cloud" },
    { name: "Media & Communications" },
    { name: "Content Writing" },
    { name: "Sports & Fitness" },
    { name: "Agriculture & Food Industry" }
  ]

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("https://remotive.com/api/remote-jobs");
      const data = await response.json();
      setJobdetails(data);
    };

    fetchJobs();
  }, []);

  return (
    <>
      <div className="header mx-4 my-2">
        <h2 className="text-xl pb-3 font-semibold text-center">Explore job categories that fit for your role!</h2>

        <div className="job-categories px-4 flex items-center mx-auto justify-start gap-2 w-[90%] overflow-x-auto whitespace-nowrap scrollbar-hide">
          {Categories.map((c) => (
            <div key={c.name} className="chip text-sm bg-gray-200 cursor-pointer hover:scale-105 hover:font-semibold transition-all duration-300 rounded-full px-3 py-2 inline-flex items-center justify-center">
              {c.name}
            </div>
          ))}
        </div>
      </div>
      <hr className="opacity-40 my-5 w-[60%] mx-auto" />

      <div className="search my-4 mt-7 w-[85%] mx-auto">
        <input type="text" name="search" id="search" placeholder="Search Jobs" className="border px-4 py-3 rounded-xl text-lg w-full" />
      </div>

      <div className="jobs-container w-[80%] mx-auto">
        <h3 className="text-2xl font-semibold pb-4">Current Job Openings :</h3>
        {Jobdetails.jobs.map((j) => (
          <div key={j.id} className="job-card my-6 w-full h-auto mx-auto p-6 bg-white shadow-md rounded-2xl border hover:shadow-lg transition-shadow duration-300">
            {/* Job Title */}
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer">{j.title}</h2>
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium">{j.job_type}</span>
            </div>

            {/* Company Info */}
            <div className="flex items-center gap-3 mt-3">
              <img src={j.company_logo || "https://via.placeholder.com/40x40?text=🏢"} alt="logo" className="w-10 h-10 object-contain bg-gray-50"/>
              <div>
                <h3 className="text-xl font-medium text-gray-700">{j.company_name}</h3>
                <p className="text-sm text-gray-500">{j.category}</p>
              </div>
            </div>

            {/* Salary + Meta */}
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
              <p className="flex items-center gap-1">
                💰 <span className="font-medium">{j.salary || "Not Disclosed"}</span>
              </p>
              <p className="flex items-center gap-1">📍 {j.location || "Remote"}</p>
            </div>

            {/* Description */}
            <p
              className="mt-4 text-gray-600 line-clamp-5"
              dangerouslySetInnerHTML={{ __html: j.description }}
            ></p>

            {/* Action Buttons */}
            <div className="mt-5 flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition">
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Jobs
