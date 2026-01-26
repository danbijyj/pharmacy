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
    const baseBtn = 'py-2 rounded-full border transition cursor-pointer';
    const activeBtn = 'bg-blue text-white border-blue font-semibold';
    const inactiveBtn =
        'bg-white border-black hover:border-blue hover:text-blue';

    return (
        <div className="relative w-175 shadow-xl">
            <div className="absolute -top-60 left-1/2 -translate-x-1/2 opacity-30">
                <img src="/images/logo.png" />
            </div>
            <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-165 h-full bg-[#4970E6] rounded-lg
    "
            />
            <div
                className="absolute -top-5 left-1/2 -translate-x-1/2 w-170 h-full bg-[#7191F0] rounded-lg
    "
            />
            <div className="relative z-10 bg-sky rounded-lg w-175 p-13 text-2xl">
                <h3 className="font-semibold mb-10 text-center">구/군 선택</h3>
                <div className="grid grid-cols-2 gap-5 mb-5">
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
