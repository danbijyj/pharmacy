import TimeCard from './TimeCard';
import DistrictSelector from './DistrictSelector';

const Hero = ({ selectedDistrict, onSelectDistrict, now }) => {
    return (
        <section className="bg-blue pt-32 pb-18">
            <div className="inner">
                <h1 className="text-3xl mb-25">
                    <span className="relative font-medium mr-1 px-1">
                        <span className="relative z-10">인천광역시</span>
                        <span className="absolute left-0 bottom-0 w-full h-4 bg-green z-0"></span>
                    </span>
                    약국 정보 모아보기
                </h1>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-between">
                        <h2 className="text-white text-6xl font-bold leading-20">
                            지금 열려있는
                            <br />
                            <span className="text-green">약국</span> 찾아줘
                        </h2>
                        <TimeCard now={now} />
                    </div>
                    <DistrictSelector
                        selectedDistrict={selectedDistrict}
                        onChange={onSelectDistrict}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
