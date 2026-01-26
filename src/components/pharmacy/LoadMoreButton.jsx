const LoadMoreButton = ({ onClick }) => {
    return (
        <div className="text-center">
            <button
                onClick={onClick}
                className="cursor-pointer bg-blue text-white w-100 text-2xl font-semibold rounded-full py-5 hover:text-green transition"
            >
                약국 더보기
            </button>
        </div>
    );
};

export default LoadMoreButton;
