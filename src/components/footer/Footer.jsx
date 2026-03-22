const Footer = () => {
    return (
        <footer className="relative py-10 lg:py-18">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue/60 to-transparent" />

            <div
                className="inner text-center text-[#6B82C7] text-sm 
                transition-all duration-300 
                hover:text-blue
                hover:tracking-wide"
            >
                <p className="opacity-80 hover:opacity-100 transition duration-300">
                    Data provided by Public Data Portal (data.go.kr)
                </p>
            </div>
        </footer>
    );
};

export default Footer;
