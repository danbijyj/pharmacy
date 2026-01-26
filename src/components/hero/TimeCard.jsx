const TimeCard = ({ now }) => {
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');

    return (
        <div className="w-full lg:w-110 z-10">
            <div
                className="rounded-lg flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-10 py-6 lg:py-20 shadow-xl"
                style={{
                    backgroundImage: `
                      radial-gradient(
                        circle at top left,
                        rgba(30, 95, 201, 0.25),
                        transparent 55%
                      ),
                      radial-gradient(
                        circle at bottom right,
                        rgba(12, 33, 151, 0.25),
                        transparent 70%
                      ),
                      linear-gradient(#ffffff, #ffffff)
                    `,
                }}
            >
                <p className="text-lg md:text-2xl lg:text-4xl text-gray-800">
                    {yyyy}. {mm}. {dd}
                </p>

                <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                    <span className="text-green text-lg lg:text-2xl font-bold mr-2">
                        NOW
                    </span>
                    {hh} : {min}
                </p>
            </div>
        </div>
    );
};

export default TimeCard;
