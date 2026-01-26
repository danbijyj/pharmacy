const LoadMoreButton = ({ onClick }) => {
    return (
        <div className="text-center px-4 lg:px-0">
            <button
                onClick={onClick}
                className="cursor-pointer bg-blue text-white w-full md:w-100 text-lg md:text-xl lg:text-2xl font-semibold rounded-full py-3 lg:py-5 hover:text-green transition"
            >
                약국 더보기
            </button>
        </div>
    );
};

export default LoadMoreButton;
