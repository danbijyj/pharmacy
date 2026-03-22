const LoadMoreButton = ({ onClick }) => {
    return (
        <div className="text-center px-4 lg:px-0">
            <button
                onClick={onClick}
                className="group relative overflow-hidden cursor-pointer 
                bg-blue text-white 
                w-full md:w-100 
                text-lg md:text-xl lg:text-2xl 
                font-semibold rounded-full 
                py-3 lg:py-5 
                transition-all duration-300
                hover:text-green
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(73,112,230,0.4)]
                active:scale-95"
            >
                <span className="absolute inset-0 pointer-events-none">
                    <span
                        className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/20 skew-x-[-20deg] 
                    transition-all duration-700 group-hover:left-[125%]"
                    />
                </span>
                약국 더보기
            </button>
        </div>
    );
};

export default LoadMoreButton;
