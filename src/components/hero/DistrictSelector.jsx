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
        'py-1 md:py-2 rounded-full border transition cursor-pointer';
    const activeBtn = 'bg-blue text-white border-blue font-semibold';
    const inactiveBtn =
        'bg-white border-black hover:border-blue hover:text-blue';

    return (
        <div className="relative w-full lg:w-175 shadow-xl">
            <div className="absolute -top-58 md:-top-85 lg:-top-60 right-5 md:right-10 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 opacity-35 w-40 md:w-70 lg:w-auto">
                <img src="/images/logo.png" className="block w-full" />
            </div>
            <div
                className="absolute -top-4 md:-top-6 lg:-top-10 left-1/2 -translate-x-1/2 w-18/20 lg:w-165 h-full bg-[#4970E6] rounded-lg
    "
            />
            <div
                className="absolute -top-2 md:-top-3 lg:-top-5 left-1/2 -translate-x-1/2 w-19/20 lg:w-170 h-full bg-[#7191F0] rounded-lg
    "
            />
            <div className="relative z-10 bg-sky rounded-lg w-full p-4 md:p-8 lg:p-13 text-base md:text-lg lg:text-2xl">
                <h3 className="font-semibold mb-3 md:mb-5 lg:mb-10 text-center">
                    구/군 선택
                </h3>
                <div className="grid grid-cols-2 gap-3 md:gap-5 mb-3 md:mb-5">
                    {districts.map((district) => {
                        const isActive = selectedDistrict === district;
                        return (
                            <button
                                key={district}
                                onClick={() => onChange(district)}
                                className={`${baseBtn} ${
                                    isActive ? activeBtn : inactiveBtn
                                }`}
                            >
                                #{district}
                            </button>
                        );
                    })}
                </div>
                <button
                    onClick={() => onChange('전체')}
                    className={`${baseBtn} w-full font-semibold ${
                        selectedDistrict === '전체' ? activeBtn : inactiveBtn
                    }`}
                >
                    #인천광역시 전체
                </button>
            </div>
        </div>
    );
};

export default DistrictSelector;
