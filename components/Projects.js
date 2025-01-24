export default function Projects() {
    const config = {
        projects: [
            {
                description: 'Women Safety using AI CCTV Surveillance.',
                link: 'https://github.com/yourgithub/women-safety'
            },
            {
                description: 'Healthcare Solutions for Rural People.',
                link: 'https://github.com/yourgithub/healthcare-rural'
            },
            {
                description: 'To-Do List Web App built with Python.',
                link: 'https://github.com/yourgithub/todo-python'
            }
        ]
    }

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-light text-black">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-accent mb-5 w-[150px] font-semibold text-center">Projects</h1>
                    <p className="text-center text-lg mb-8">
                        These are some of my impactful projects. I have built them with innovative technologies. Check them out below!
                    </p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row justify-center gap-6'>
                    {config.projects.map((project, index) => (
                        <div key={index} className='bg-white shadow-lg rounded-lg p-6 text-center'>
                            <p className='text-lg font-medium mb-4'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
