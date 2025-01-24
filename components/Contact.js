export default function Contact() {
    const config = {
        email: 'nithyasree04112005@gmail.com',
        phone: '+9807654379',
    };

    return (
        <section id="contact" className="flex flex-col bg-light px-5 py-32 text-gray-900">
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-extrabold border-b-4 border-purple-500 mb-6 pb-2 w-[180px]">
                    Contact Me
                </h1>
                <p className="text-lg mb-8 px-6 max-w-2xl mx-auto">
                    I would love to hear from you! Whether it's about a potential project or just to connect, feel free to reach out. Here’s how you can contact me:
                </p>
                
                <div className="flex flex-col items-center space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-auto">
                        <h2 className="text-xl font-semibold mb-4">Email</h2>
                        <p className="text-lg text-gray-700">{config.email}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-auto">
                        <h2 className="text-xl font-semibold mb-4">Phone</h2>
                        <p className="text-lg text-gray-700">{config.phone}</p>
                    </div>
                </div>

                <div className="mt-10">
                    <a
                        href={`mailto:${config.email}`}
                        className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 transition"
                    >
                        Send an Email
                    </a>
                </div>
            </div>
        </section>
    );
}
