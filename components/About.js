import AboutImg from '../assets/about.jpg';

export default function About() {
    const config = {
        intro: 'Hi, I am Nithya Sree, a dedicated and detail-oriented Data Analyst passionate about transforming data into actionable insights.',
        expertise: 'I specialize in analyzing complex datasets, building interactive dashboards, and creating data-driven solutions that drive business success.',
        tools: 'I am proficient in tools like Excel, SQL, Tableau, and Python, enabling me to manage, analyze, and visualize data effectively.',
        goal: 'My goal is to leverage data analytics to uncover trends, optimize strategies, and support decision-making processes across organizations.',
        skills: ['Excel', 'SQL', 'Tableau', 'Python', 'Power BI', 'Data Visualization', 'Statistics', 'Data Cleaning'],
    };

    return (
        <section
            className="flex flex-col md:flex-row bg-gray-100 px-8 py-16"
            id="about"
        >
            {/* Left Section: About Content */}
            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-gray-800 text-center md:text-left">
                <h1 className="text-5xl font-extrabold mb-6 text-purple-700 border-b-4 border-purple-500 w-fit">
                    About Me
                </h1>
                <p className="pb-4 text-lg leading-relaxed">{config.intro}</p>
                <p className="pb-4 text-lg leading-relaxed">{config.expertise}</p>
                <p className="pb-4 text-lg leading-relaxed">{config.tools}</p>
                <p className="text-lg leading-relaxed mb-6">{config.goal}</p>

                {/* Skills Section */}
                <h2 className="text-4xl font-bold text-purple-700 mb-4">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {config.skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg font-semibold hover:shadow-xl transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Right Section: Image */}
            <div className="py-5 md:w-1/2 flex justify-center md:justify-end items-center md:mt-0 mt-6">
                <img
                    className="rounded-lg shadow-lg w-[200px] md:w-[250px] h-[auto] md:h-[300px] object-cover"
                    src={AboutImg}
                    alt="About Me"
                />
            </div>
        </section>
    );
}
