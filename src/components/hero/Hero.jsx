import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import TimeCard from './TimeCard';
import DistrictSelector from './DistrictSelector';

const Hero = ({ selectedDistrict, onSelectDistrict, now }) => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from('.hero-subtitle', {
                y: 20,
                opacity: 0,
                duration: 0.6,
            });

            tl.from(
                '.hero-title span',
                {
                    y: 60,
                    opacity: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power3.out',
                },
                '-=0.2',
            );

            tl.from(
                '.time-card',
                {
                    y: 40,
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.6,
                },
                '-=0.3',
            );

            tl.from(
                '.district-main',
                {
                    y: 40,
                    autoAlpha: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                },
                '-=0.4',
            );

            tl.from(
                '.layer-back-1',
                {
                    y: -30,
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'back.out(1.7)',
                },
                '-=0.3',
            );

            tl.from(
                '.layer-back-2',
                {
                    y: -50,
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'back.out(1.7)',
                },
                '-=0.2',
            );

            tl.from(
                '.district-logo',
                {
                    y: -80,
                    autoAlpha: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                },
                '-=0.3',
            );
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="bg-blue pt-16 lg:pt-32 pb-6 md:pb-10 lg:pb-12"
        >
            <div className="inner px-4 lg:px-0">
                <h1 className="hero-subtitle text-l md:text-2xl lg:text-3xl mb-12 lg:mb-25">
                    <span className="relative font-medium mr-1 px-1">
                        <span className="relative z-10">인천광역시</span>
                        <span className="absolute left-0 bottom-0 w-full h-2 md:h-3 lg:h-4 bg-green z-0"></span>
                    </span>
                    약국 정보 모아보기
                </h1>

                <div className="flex flex-col lg:flex-row md:justify-between gap-6 md:gap-9 lg:gap-0">
                    <div className="flex flex-col gap-12 lg:gap-0 lg:justify-between">
                        <h2 className="hero-title text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-20 z-10">
                            <span>지금 </span>
                            <span>열려있는</span>
                            <span className="block">
                                <span className="text-green">약국 </span>
                                <span>찾아줘</span>
                            </span>
                        </h2>

                        <div className="time-card z-20">
                            <TimeCard now={now} />
                        </div>
                    </div>

                    <div className="district-box">
                        <DistrictSelector
                            selectedDistrict={selectedDistrict}
                            onChange={onSelectDistrict}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
