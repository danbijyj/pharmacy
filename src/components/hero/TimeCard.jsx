const TimeCard = ({ now }) => {
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const hh = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');

    return (
        <div className="w-110 bg-white rounded-lg flex flex-col justify-center items-center gap-10 py-20">
            <p className="text-4xl">
                {yyyy}. {mm}. {dd}
            </p>
            <p className="text-5xl font-semibold">
                <span className="text-green text-2xl font-bold mr-2">NOW</span>
                {hh} : {min}
            </p>
        </div>
    );
};

export default TimeCard;
