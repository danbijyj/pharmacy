import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const StatusFilter = ({ onChange }) => {
    const [active, setActive] = useState('all');
    const indicatorRef = useRef(null);
    const containerRef = useRef(null);

    const base =
        'relative z-10 flex-1 rounded-full cursor-pointer text-center text-xs md:text-base lg:text-2xl py-1 md:py-2 transition-all duration-200';
    const activeCls = 'text-blue font-semibold';
    const inactiveCls =
        'text-gray-500 hover:text-blue hover:shadow-[0_0_10px_rgba(73,112,230,0.2)]';

    const handleClick = (value) => {
        setActive(value);
        onChange?.(value);
    };

    useEffect(() => {
        const container = containerRef.current;
        const indicator = indicatorRef.current;
        if (!container || !indicator) return;

        const activeBtn = container.querySelector(`[data-status="${active}"]`);

        if (!activeBtn) return;

        const containerRect = container.getBoundingClientRect();
        const btnRect = activeBtn.getBoundingClientRect();

        const x = btnRect.left - containerRect.left - 4;

        gsap.to(indicator, {
            x,
            width: btnRect.width,
            duration: 0.3,
            ease: 'power2.out',
        });
    }, [active]);

    return (
        <div className="inner px-4 lg:px-0">
            <div
                ref={containerRef}
                className="relative flex justify-between bg-sky mb-6 p-1 rounded-full gap-1 md:gap-2 overflow-hidden"
                role="tablist"
            >
                <span
                    ref={indicatorRef}
                    className="absolute top-1 left-1 bottom-1 bg-white rounded-full shadow-sm"
                />

                <button
                    data-status="all"
                    type="button"
                    role="tab"
                    aria-selected={active === 'all'}
                    onClick={() => handleClick('all')}
                    className={`${base} ${
                        active === 'all' ? activeCls : inactiveCls
                    }`}
                >
                    약국 전체
                </button>

                <button
                    data-status="open"
                    type="button"
                    role="tab"
                    aria-selected={active === 'open'}
                    onClick={() => handleClick('open')}
                    className={`${base} ${
                        active === 'open' ? activeCls : inactiveCls
                    }`}
                >
                    영업중
                </button>

                <button
                    data-status="soon"
                    type="button"
                    role="tab"
                    aria-selected={active === 'soon'}
                    onClick={() => handleClick('soon')}
                    className={`${base} ${
                        active === 'soon' ? activeCls : inactiveCls
                    }`}
                >
                    곧 영업 종료
                </button>

                <button
                    data-status="closed"
                    type="button"
                    role="tab"
                    aria-selected={active === 'closed'}
                    onClick={() => handleClick('closed')}
                    className={`${base} ${
                        active === 'closed' ? activeCls : inactiveCls
                    }`}
                >
                    영업 종료
                </button>
            </div>
        </div>
    );
};

export default StatusFilter;
