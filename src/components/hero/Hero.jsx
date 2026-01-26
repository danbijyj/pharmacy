import TimeCard from './TimeCard';
import DistrictSelector from './DistrictSelector';

const Hero = ({ selectedDistrict, onSelectDistrict, now }) => {
    return (
        <section className="bg-blue pt-16 lg:pt-32 pb-6 md:pb-10 lg:pb-12">
            <div className="inner px-4 lg:px-0">
                <h1 className="text-l md:text-2xl lg:text-3xl mb-12 lg:mb-25">
                    <span className="relative font-medium mr-1 px-1">
                        <span className="relative z-10">인천광역시</span>
                        <span className="absolute left-0 bottom-0 w-full h-2 md:h-3 lg:h-4 bg-green z-0"></span>
                    </span>
                    약국 정보 모아보기
                </h1>
                <div className="flex flex-col lg:flex-row md:justify-between gap-6 md:gap-9 lg:gap-0">
                    <div className="flex flex-col gap-12 lg:gap-0 lg:justify-between">
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:leading-20 z-10">
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
