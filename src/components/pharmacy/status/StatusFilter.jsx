import { useState } from 'react';

const StatusFilter = ({ onChange }) => {
    const [active, setActive] = useState('all');
    const base =
        'w-18 md:w-40 lg:w-72 rounded-full cursor-pointer text-center text-xs md:text-base lg:text-2xl py-1 md:py-2';
    const activeCls = 'bg-white border border-blue font-semibold text-blue';
    const inactiveCls = 'text-gray-600 hover:text-blue';
    const handleClick = (value) => {
        setActive(value);
        onChange?.(value);
    };

    return (
        <div className="inner px-4 lg:px-0">
            <ul
                className="flex justify-between bg-sky mb-6 p-1 rounded-full gap-1 md:gap-2"
                role="tablist"
            >
                <li>
                    <button
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
                </li>
                <li>
                    <button
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
                </li>
                <li>
                    <button
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
                </li>
                <li>
                    <button
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
                </li>
            </ul>
        </div>
    );
};

export default StatusFilter;
