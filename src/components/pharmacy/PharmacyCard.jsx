import {
    IoCall,
    IoAlarmOutline,
    IoHomeOutline,
    IoMicOutline,
} from 'react-icons/io5';

const PharmacyCard = ({ data }) => {
    if (!data) return null;

    const { dutyName, dutyAddr, dutyTel1, dutyInf } = data;

    const now = new Date();
    const day = now.getDay() === 0 ? 7 : now.getDay();

    const start = Number(data[`dutyTime${day}s`]);
    const close = Number(data[`dutyTime${day}c`]);

    const toMinutes = (hhmm) => {
        const h = Math.floor(hhmm / 100);
        const m = hhmm % 100;
        return h * 60 + m;
    };

    const nowMin = now.getHours() * 60 + now.getMinutes();
    const startMin = start ? toMinutes(start) : null;
    const closeMin = close ? toMinutes(close) : null;

    const isOpen =
        startMin !== null &&
        closeMin !== null &&
        nowMin >= startMin &&
        nowMin < closeMin;

    const isClosingSoon =
        isOpen && closeMin - nowMin > 0 && closeMin - nowMin <= 30;

    const isClosed = !isOpen;

    let statusDotCls = 'bg-gray-400';
    if (isOpen) statusDotCls = 'bg-blue';
    if (isClosingSoon) statusDotCls = 'bg-blue-sub';

    const formatTime = (hhmm) => {
        if (!hhmm) return null;
        const h = String(Math.floor(hhmm / 100)).padStart(2, '0');
        const m = String(hhmm % 100).padStart(2, '0');
        return `${h}:${m}`;
    };

    const closeTimeText = close ? formatTime(close) : null;

    const mapQuery =
        dutyAddr && dutyName
            ? `${dutyAddr} ${dutyName}`
            : dutyAddr || dutyName || null;
    const kakaoMapUrl = mapQuery
        ? `https://map.kakao.com/?q=${encodeURIComponent(mapQuery)}`
        : null;
    const naverMapUrl = mapQuery
        ? `https://map.naver.com/v5/search/${encodeURIComponent(mapQuery)}`
        : null;

    const btnCls =
        'bg-white hover:bg-blue transition rounded-full text-xl lg:text-2xl text-blue hover:text-green border hover:border-blue cursor-pointer p-2 inline-flex';
    const disabledCls =
        'bg-white rounded-full text-xl lg:text-2xl text-gray-300 border cursor-not-allowed p-2 inline-flex';

    return (
        <li
            className="flex flex-col md:flex-row 
        items-start md:items-center 
        justify-between 
        gap-4 
        px-4 md:px-8 lg:px-12 
        py-4 lg:py-6 
        shadow-card bg-white rounded-lg 
        border border-gray-200 
        mb-6"
        >
            <div className="flex-1 min-w-0">
                <h3
                    className={`text-lg lg:text-2xl font-medium flex items-center gap-2 mb-1 lg:mb-2 ${
                        isClosed ? 'text-gray-400' : ''
                    }`}
                >
                    <span
                        className={`inline-block w-4 h-4 rounded-full ${statusDotCls}`}
                        title={
                            isClosingSoon
                                ? '곧 영업 종료'
                                : isOpen
                                  ? '영업중'
                                  : '영업 종료'
                        }
                    />
                    {dutyName}
                </h3>

                <p className="font-[Pretendard] break-keep flex items-start lg:items-center gap-2">
                    <span className="inline-block text-gray-400 mt-1 lg:mt-0">
                        <IoHomeOutline />
                    </span>
                    <span className="leading-relaxed">{dutyAddr}</span>
                </p>

                <p className="font-[Pretendard] break-keep flex items-start lg:items-center gap-2">
                    <span className="inline-block text-gray-400 mt-1 lg:mt-0">
                        <IoAlarmOutline />
                    </span>
                    {isClosingSoon && closeTimeText && (
                        <>
                            <span className="text-gray-600 font-medium">
                                곧 종료
                            </span>
                            오늘 {closeTimeText}까지 영업
                        </>
                    )}
                    {!isClosingSoon && isOpen && closeTimeText && (
                        <>오늘 {closeTimeText}까지 영업</>
                    )}
                    {isClosed && <>지금은 영업 종료</>}
                </p>

                <p className="font-[Pretendard] break-keep flex items-start lg:items-center gap-2">
                    {dutyInf && (
                        <>
                            <span className="inline-block text-gray-400 mt-1 lg:mt-0">
                                <IoMicOutline />
                            </span>
                            <span className=" text-gray-600">{dutyInf}</span>
                        </>
                    )}
                </p>
            </div>

            <div className="w-full md:w-auto shrink-0">
                <ul className="flex justify-center md:justify-end gap-6 md:gap-2 lg:gap-4 flex-nowrap">
                    {dutyTel1 && (
                        <li>
                            <a
                                href={!isClosed ? `tel:${dutyTel1}` : '#'}
                                className={!isClosed ? btnCls : disabledCls}
                                aria-label="전화 걸기"
                                title={
                                    isClosed
                                        ? '영업 종료로 전화 불가'
                                        : `전화번호: ${dutyTel1}`
                                }
                                onClick={(e) => {
                                    if (isClosed) e.preventDefault();
                                }}
                            >
                                <IoCall />
                            </a>
                        </li>
                    )}
                    <li>
                        <a
                            href={kakaoMapUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${kakaoMapUrl ? btnCls : disabledCls} group`}
                            onClick={(e) => {
                                if (!kakaoMapUrl) e.preventDefault();
                            }}
                            aria-label="카카오 지도 보기"
                            title="카카오 지도에서 보기"
                        >
                            <img
                                src="/images/map-kakao.png"
                                alt="카카오 지도"
                                className="w-5 lg:w-6 h-5 lg:h-6 transition group-hover:scale-110"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href={naverMapUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${naverMapUrl ? btnCls : disabledCls} group`}
                            onClick={(e) => {
                                if (!naverMapUrl) e.preventDefault();
                            }}
                            aria-label="네이버 지도 보기"
                            title="네이버 지도에서 보기"
                        >
                            <img
                                src="/images/map-naver.png"
                                alt="네이버 지도"
                                className="w-5 lg:w-6 h-5 lg:h-6 transition group-hover:scale-110"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    );
};

export default PharmacyCard;
