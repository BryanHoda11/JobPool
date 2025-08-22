'use client'

const Header = () => {
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
        </>
    )
}

export default Header
