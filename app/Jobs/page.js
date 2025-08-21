'use client'
import Modal from "@/components/Modal";
import { useState, useEffect } from "react"

const Jobs = () => {
  const [Fetchdetails, setFetchdetails] = useState(false);
  const [salary, setsalary] = useState(100);
  const [Jobdetails, setJobdetails] = useState({ jobs: [] });
  const [search, setSearch] = useState("");

  // Modal States
  const [selectedJob, setSelectedJob] = useState(null);
  const [ToggleModal, setToggleModal] = useState(false);

  const closeModal = () => {
    setSelectedJob(null);
    setToggleModal(false);
  };

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
      setFetchdetails(true);
    };

    fetchJobs();
  }, []);

  const filteredJobs = Jobdetails.jobs.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) ||
    Number(j.salary) >= Number(salary)
  );

  return (
    <>
      <div className="header mx-4 my-2">
        <h2 className="text-xl pb-3 font-semibold text-center">Explore job categories that fit your role!</h2>

        <div className="job-categories px-4 flex items-center mx-auto justify-start gap-2 w-[90%] overflow-x-auto whitespace-nowrap scrollbar-hide">
          {Categories.map((c) => (
            <div key={c.name} className="chip text-sm bg-gray-200 cursor-pointer hover:scale-105 hover:font-semibold transition-all duration-300 rounded-full px-3 py-2 inline-flex items-center justify-center">
              {c.name}
            </div>
          ))}
        </div>
      </div>

      <div className="search my-4 mt-7 w-[75%] mx-auto">
        <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Search Jobs" className="border px-4 py-3 rounded-xl text-lg w-full" />
      </div>

      <hr className="opacity-40 my-8 w-[60%] mx-auto" />

      <div className="jobs-container flex justify-center items-start gap-7 w-[85%] mx-auto">
        <div className="left-filters sticky top-16 w-[30%] bg-white rounded-2xl shadow-xl p-4">
          <h3 className="text-xl font-semibold pt-4">Filters</h3>
          <div className="keyword flex flex-col gap-2 py-4">
            <label htmlFor="">Keyword Search</label>
            <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Eg: Design, IT, Sales..." className="text-sm border px-4 py-3 rounded-xl w-full" />
          </div>

          <div className="job-type py-4">
            <label htmlFor="">Job Type</label>
            <ul className="flex flex-col">
              <li className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" />
                <span>Remote</span>
              </li>
              <li className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" />
                <span>Internship</span>
              </li>
              <li className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" />
                <span>Hybrid</span>
              </li>
            </ul>
          </div>

          <div className="keyword flex flex-col gap-2 py-4">
            <label htmlFor="">Location</label>
            <input type="text" name="search" id="search" placeholder="Eg: Mumbai, Delhi, Florida, LA..." className="text-sm border px-4 py-3 rounded-xl w-full" />
          </div>

          <div className="salary-range w-full flex flex-col gap-2 py-4">
            <label className="text-gray-700 font-medium">Salary Range</label>
            <input type="range" min="0" max="400000" value={salary} onChange={(e) => setsalary(e.target.value)} className="w-full accent-blue-600 cursor-pointer" />

            <div className="flex justify-between text-sm text-gray-500">
              <span>Unpaid</span>
              <span>{`$${salary}k`}</span>
            </div>
          </div>

          <div className="experience w-full flex flex-col gap-2 py-4">
            <label htmlFor="">Work Experience</label>
            <input type="number" name="" id="exp" placeholder="Years of Experience" className="text-sm border px-2 py-2 rounded-xl w-full" />
          </div>

          <hr className="opacity-40 mt-5 w-[60%] mx-auto" />
        </div>

        <div className="right-jobs w-[70%]">
          {Fetchdetails ? (
            filteredJobs.length > 0 ? (
              filteredJobs.slice(0, 10).map((j) => (
                <div key={j.id} onClick={() => { setSelectedJob(j);  setToggleModal(true); }} className="job-card mb-6 w-full h-auto mx-auto p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-700">
                  <div className="flex items-start justify-between">
                    <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer"> {j.title}</h2>
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium">{j.job_type} </span>
                  </div>

                  <h3 className="text-xl pt-3 text-gray-700">{j.company_name}</h3>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                    <p>Salary : {j.salary || "Not Disclosed"}</p> |
                    <p>Job Location : {j.location || "Remote"}</p> |
                    <p>Category : {j.category}</p>
                  </div>

                  <p className="mt-4 text-gray-600 line-clamp-5" dangerouslySetInnerHTML={{ __html: j.description }}></p>

                  <div className="mt-5 flex gap-3 items-center justify-end">
                    <button className="px-4 py-2 bg-blue-600 cursor-pointer text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"> Apply Now </button>
                    <button className="px-4 py-2 bg-gray-100 cursor-pointer text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition"> Save </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-10"> No jobs match your filters. </p>
            )
          ) : (
            <div className="loader text-center flex items-center justify-center gap-3 text-lg text-gray-500 py-10">
              <span className="spinner h-5 w-5 rounded-full border-2 border-black"></span>
              Loading...
            </div>
          )}
        </div>
      </div>

      <Modal isOpen={ToggleModal} onClose={closeModal} job={selectedJob} />
    </>
  )
}

export default Jobs
