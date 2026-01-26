import { FiChevronsUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const TopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const trigger = window.innerWidth <= 820 ? 80 : 100;
            setShow(window.scrollY > trigger);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!show) return null;
    return (
        <button
            className="fixed right-4 lg:right-10 bottom-10 w-9 lg:w-12 h-9 lg:h-12 bg-gray-300/70 rounded-md text-blue hover:text-green transition text-2xl lg:text-4xl flex items-center justify-center cursor-pointer z-50"
            onClick={scrollToTop}
        >
            <FiChevronsUp />
        </button>
    );
};

export default TopButton;
