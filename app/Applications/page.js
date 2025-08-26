'use client'

import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Applications = () => {
    return (
        <>
            <div className="applications-wrapper min-h-screen flex flex-col mt-10">
                <h2 className="text-lg sm:text-2xl font-semibold text-center my-8 mx-3 text-gray-800">View all your Applications here!</h2>

                <div className="w-full max-sm:px-4 sm:w-[75%] mx-auto bg-white rounded-xl shadow-lg max-sm:overflow-x-scroll">
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-100 max-sm:text-xs text-center">
                                <th className="px-4 py-3 font-semibold">Job Role</th>
                                <th className="px-4 py-3 font-semibold">Applied on</th>
                                <th className="tpx-4 py-3 font-semibold">Application Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white hover:bg-gray-50 transition max-sm:text-xs">
                                <td className="px-4 py-3 rounded-l-lg text-gray-800">Software Engineer</td>
                                <td className="px-4 py-3 text-gray-500">17-07-2025</td>
                                <td className="px-4 py-3 rounded-r-lg text-right">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-semibold bg-blue-700 text-white rounded-lg">
                                        <IoMdCheckmark /> Applied
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50 transition max-sm:text-xs">
                                <td className="px-4 py-3 rounded-l-lg text-gray-800">Frontend Engineer</td>
                                <td className="px-4 py-3 text-gray-500">08-05-2025</td>
                                <td className="px-4 py-3 rounded-r-lg text-right">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-semibold bg-blue-700 text-white rounded-lg">
                                        <IoMdCheckmark /> Applied
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50 transition max-sm:text-xs">
                                <td className="px-4 py-3 rounded-l-lg text-gray-800">Data Analyst</td>
                                <td className="px-4 py-3 text-gray-500">12-03-2025</td>
                                <td className="px-4 py-3 rounded-r-lg text-right">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-semibold bg-gray-200 rounded-lg">
                                        <AiOutlineMinus /> Seen
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50 transition max-sm:text-xs">
                                <td className="px-4 py-3 rounded-l-lg text-gray-800">Marketing Executive</td>
                                <td className="px-4 py-3 text-gray-500">23-01-2025</td>
                                <td className="px-4 py-3 rounded-r-lg text-right">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-semibold bg-red-600 text-white rounded-lg">
                                        <RxCross2 /> Rejected
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Applications
