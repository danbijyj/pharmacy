import PharmacyCard from './PharmacyCard';

const PharmacyList = ({ pharmacies }) => {
    if (!pharmacies || pharmacies.length === 0) {
        return <p className="text-center pt-12">약국 데이터가 없습니다.</p>;
    }

    return (
        <div className="inner px-4 lg:px-0">
            <ul>
                {pharmacies.map((pharmacy) => (
                    <PharmacyCard key={pharmacy.hpid} data={pharmacy} />
                ))}
            </ul>
        </div>
    );
};

export default PharmacyList;
