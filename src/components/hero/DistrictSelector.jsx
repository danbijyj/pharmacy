import gsap from 'gsap';

const districts = [
    '계양구',
    '남동구',
    '동구',
    '미추홀구',
    '부평구',
    '서구',
    '연수구',
    '중구',
    '강화군',
    '옹진군',
];

const DistrictSelector = ({ selectedDistrict, onChange }) => {
    const baseBtn =
        'relative overflow-hidden py-1 md:py-2 rounded-full border cursor-pointer transition-all duration-150';

    const activeBtn =
        'bg-blue text-white border-blue font-semibold shadow-[0_0_20px_rgba(73,112,230,0.5)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]';

    const inactiveBtn =
        'bg-white border-black hover:border-blue hover:text-blue hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]';

    const handleClick = (e, district) => {
        onChange(district);

        const btn = e.currentTarget;
        const ripple = btn.querySelector('.ripple');

        if (!ripple) return;

        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        gsap.fromTo(
            ripple,
            { scale: 0, opacity: 0.5 },
            {
                scale: 2,
                opacity: 0,
                duration: 0.6,
                ease: 'power2.out',
            },
        );

        gsap.to(btn, {
            scale: 0.9,
            duration: 0.08,
            yoyo: true,
            repeat: 1,
            ease: 'power1.out',
        });
    };

    return (
        <div className="district-wrapper relative w-full lg:w-175">
            <div
                className="district-logo absolute opacity-35
            -top-65 md:-top-90 lg:-top-60 
            right-5 md:right-10 lg:right-10           
            w-40 md:w-70 lg:w-auto"
            >
                <img src="/images/logo.png" className="block w-full" />
            </div>

            <div className="layer-back-2 absolute -top-4 md:-top-6 lg:-top-10 left-1/2 -translate-x-1/2 w-18/20 lg:w-165 h-full bg-[#4970E6] rounded-lg" />
            <div className="layer-back-1 absolute -top-2 md:-top-3 lg:-top-5 left-1/2 -translate-x-1/2 w-19/20 lg:w-170 h-full bg-[#7191F0] rounded-lg" />

            <div className="district-main relative z-10 bg-sky rounded-lg w-full p-4 md:p-8 lg:p-13 text-base md:text-lg lg:text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <h3 className="font-semibold mb-3 md:mb-5 lg:mb-10 text-center">
                    구/군 선택
                </h3>

                <div className="grid grid-cols-2 gap-3 md:gap-5 mb-3 md:mb-5">
                    {districts.map((district) => {
                        const isActive = selectedDistrict === district;

                        return (
                            <button
                                key={district}
                                onClick={(e) => handleClick(e, district)}
                                className={`${baseBtn} ${
                                    isActive ? activeBtn : inactiveBtn
                                }`}
                            >
                                <span className="relative z-10">
                                    #{district}
                                </span>

                                <span className="ripple absolute rounded-full bg-white/40 scale-0 pointer-events-none"></span>
                            </button>
                        );
                    })}
                </div>

                <button
                    onClick={(e) => handleClick(e, '전체')}
                    className={`${baseBtn} w-full font-semibold ${
                        selectedDistrict === '전체' ? activeBtn : inactiveBtn
                    }`}
                >
                    <span className="relative z-10">#인천광역시 전체</span>
                    <span className="ripple absolute rounded-full bg-white/40 scale-0 pointer-events-none"></span>
                </button>
            </div>
        </div>
    );
};

export default DistrictSelector;
