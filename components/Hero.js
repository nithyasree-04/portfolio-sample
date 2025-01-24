import HeroImg from '../assets/hero.jpg';

export default function Hero() {
    const config = {
        subtitle: 'I am a Data Analyst specializing in turning data into actionable insights.',
    };

    return (
        <section className="flex flex-col md:flex-row items-center px-6 py-20 bg-gray-100">
            {/* Image Section (Left side) */}
            <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                <img className="w-64 md:w-80 rounded-lg shadow-md" src={HeroImg} alt="Nithya Sree" />
            </div>

            {/* Text Section (Right side) */}
            <div className="md:w-1/2 flex flex-col items-start md:items-start text-center md:text-left">
                <h1 className="text-gray-800 text-5xl font-bold mb-4 leading-tight">
                    Hi, <br /> I'm <span className="text-purple-600">Nithya Sree</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6">{config.subtitle}</p>
            </div>
        </section>
    );
}
