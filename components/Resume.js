import ResumeImg from '../assets/resume.png';

export default function Resume() {
    const config = {
        link: 'https://www.africau.edu/images/default/sample.pdf', // Replace with your actual resume link
    };

    return (
        <section id="resume" className="flex flex-col md:flex-row bg-white px-6 py-16">
            {/* Left Section: Resume Image */}
            <div className="py-5 md:w-1/2 flex justify-center items-center">
                <img
                    className="w-[280px] md:w-[350px] rounded-lg shadow-xl"
                    src={ResumeImg}
                    alt="Resume Preview"
                />
            </div>

            {/* Right Section: Resume Content */}
            <div className="md:w-1/2 flex justify-center items-center">
                <div className="flex flex-col text-gray-800 text-center md:text-left">
                    <h1 className="text-3xl font-semibold border-b-4 border-purple-500 mb-6 w-[180px] mx-auto md:mx-0">
                        My Resume
                    </h1>
                    <p className="text-lg mb-6 leading-relaxed">
                        Take a deeper look into my professional background, skills, and achievements. You can explore my resume online or download it for future reference.
                    </p>
                    <div>
                        <a
                            href={config.link}
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all"
                            download
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
