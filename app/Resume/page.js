'use client'
import Image from "next/image"

const Resume = () => {
    return (
        <>
            <div className="resume-container w-[85%] mx-auto my-7">
                <div className="header flex flex-col lg:flex-row max-lg:gap-4 items-center justify-between w-full pb-3">
                    <div className="flex flex-col gap-2 max-lg:text-center">
                        <h3 className="text-xl font-semibold">Your Resume</h3>
                        <p className="text-center text-xs sm:text-sm text-gray-600">*This is just a random dummy resume used for design and layout purpose.</p>
                    </div>

                    <div className="btns flex items-center gap-3">
                        <button className="px-4 py-2 bg-blue-600 cursor-pointer text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"> Edit </button>
                        <button className="px-4 py-2 bg-blue-600 cursor-pointer text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"> Download </button>
                    </div>
                </div>

                <div className="resume mx-auto flex justify-center">
                    <img src="/images/DummyResume.webp" alt="dummy-resume" />
                </div>
            </div>
        </>
    )
}

export default Resume
