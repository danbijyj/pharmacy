import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TimeCard = ({ now }) => {
    const timeRef = useRef(null);

    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');

    useEffect(() => {
        gsap.fromTo(
            timeRef.current,
            { scale: 0.95, opacity: 0.6 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                ease: 'power2.out',
            },
        );
    }, [hh, min]);

    return (
        <div className="w-full lg:w-110 z-10">
            <div className="relative rounded-2xl overflow-hidden p-6 lg:p-10 backdrop-blur-md border border-sky/40 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white/55">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-10 -left-10 w-45 h-45 bg-blue/40 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-45 h-45 bg-green/25 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-4 lg:gap-6">
                    <p className="text-sm md:text-lg lg:text-xl text-gray-700 tracking-wide">
                        {yyyy}. {mm}. {dd}
                    </p>

                    <div ref={timeRef} className="flex items-center gap-3">
                        <span className="flex items-center gap-2 text-sm md:text-lg lg:text-2xl font-bold">
                            <span className="text-lightgreen dot">●</span>
                            <span className="text-lightgreen">NOW</span>
                        </span>

                        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                            {hh}
                        </span>

                        <span className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-600">
                            :
                        </span>

                        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                            {min}
                        </span>
                    </div>

                    <div className="w-full h-[2px] lg:h-[3px] bg-gradient-to-r from-transparent via-lightgreen to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default TimeCard;
