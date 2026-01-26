import { useEffect, useState } from 'react';
import { fetchPharmacies } from './assets/api/pharmacy';

import Hero from './components/hero/Hero';
import Pharmacy from './components/pharmacy/Pharmacy';
import Footer from './components/footer/Footer';
import TopButton from './components/topbutton/TopButton';

const App = () => {
    const [allPharmacies, setAllPharmacies] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);
    const [selectedDistrict, setSelectedDistrict] = useState('전체');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [statusFilter, setStatusFilter] = useState('all');
    const [now, setNow] = useState(new Date());

    const loadPharmacies = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await fetchPharmacies({
                pageNo: 1,
                numOfRows: 25200,
            });
            const incheonOnly = data.filter((item) =>
                item.dutyAddr?.includes('인천'),
            );

            setAllPharmacies(incheonOnly);
        } catch {
            setError('약국 데이터를 불러오지 못했습니다.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadPharmacies();
    }, []);

    const filteredByDistrict = allPharmacies.filter((item) => {
        if (selectedDistrict === '전체') return true;
        return item.dutyAddr?.startsWith(`인천광역시 ${selectedDistrict}`);
    });

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 10);
    };

    useEffect(() => {
        setVisibleCount(10);
    }, [selectedDistrict, statusFilter]);

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main>
            <Hero
                selectedDistrict={selectedDistrict}
                onSelectDistrict={setSelectedDistrict}
                now={now}
            />
            {isLoading && (
                <p className="text-center py-12">
                    약국 데이터를 불러오는 중입니다.
                </p>
            )}
            {error && <p className="text-center py-12 text-red-500">{error}</p>}
            {!isLoading && !error && (
                <Pharmacy
                    allPharmacies={filteredByDistrict}
                    visibleCount={visibleCount}
                    onLoadMore={handleLoadMore}
                    selectedDistrict={selectedDistrict}
                    statusFilter={statusFilter}
                    onChangeStatusFilter={setStatusFilter}
                    now={now}
                />
            )}
            <Footer />
            <TopButton />
        </main>
    );
};

export default App;
