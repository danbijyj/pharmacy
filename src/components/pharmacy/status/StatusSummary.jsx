const formatNumber = (num) => {
    return num.toLocaleString();
};

const StatusSummary = ({
    selectedDistrict,
    openCount,
    closingSoonCount,
    closedCount,
}) => {
    return (
        <div className="relative px-4 lg:px-0 mb-6 md:mb-10 lg:mb-12">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-blue" />
            <div className="inner bg-white rounded-lg shadow-status relative z-10 p-6 md:py-10 lg:py-12">
                <div className="text-center mb-6 md:mb-10 lg:mb-12">
                    <h3 className="relative inline-block z-10 md:text-lg lg:text-xl px-1">
                        인천광역시 {selectedDistrict} 약국 검색 결과
                        <span className="absolute left-0 bottom-0 w-full h-3 bg-green -z-10"></span>
                    </h3>
                </div>
                <ul className="flex flex-col md:flex-row items-start md:items-center justify-between text-center">
                    <li className="flex flex-1 items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-blue"></span>
                            <span className="text-blue font-medium">
                                영업중
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <strong className="text-lg md:text-2xl font-semibold">
                                {formatNumber(openCount)}
                            </strong>
                            곳
                        </div>
                    </li>
                    <li className="hidden md:block w-px md:h-6 lg:h-8 bg-gray-300" />
                    <li className="flex flex-1 items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-blue-sub"></span>
                            <span className="text-blue-sub font-medium">
                                곧 영업 종료
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <strong className="text-lg md:text-2xl font-semibold">
                                {formatNumber(closingSoonCount)}
                            </strong>
                            곳
                        </div>
                    </li>
                    <li className="hidden md:block w-px md:h-6 lg:h-8 bg-gray-300" />
                    <li className="flex flex-1 items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                            <span className="text-gray-400 font-medium">
                                영업 종료
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <strong className="text-lg md:text-2xl font-semibold">
                                {formatNumber(closedCount)}
                            </strong>
                            곳
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default StatusSummary;
