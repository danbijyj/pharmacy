import StatusSummary from './status/StatusSummary';
import StatusFilter from './status/StatusFilter';
import PharmacyList from './PharmacyList';
import LoadMoreButton from './LoadMoreButton';

const Pharmacy = ({
    now,
    allPharmacies,
    visibleCount,
    onLoadMore,
    selectedDistrict,
    statusFilter,
    onChangeStatusFilter,
}) => {
    const day = now.getDay() === 0 ? 7 : now.getDay();

    const toMinutes = (hhmm) => {
        const h = Math.floor(hhmm / 100);
        const m = hhmm % 100;
        return h * 60 + m;
    };

    const nowMin = now.getHours() * 60 + now.getMinutes();

    const getTodayTimes = (pharmacy) => {
        const start = Number(pharmacy[`dutyTime${day}s`]);
        const close = Number(pharmacy[`dutyTime${day}c`]);
        if (!start || !close) return { startMin: null, closeMin: null };
        return {
            startMin: toMinutes(start),
            closeMin: toMinutes(close),
        };
    };

    const openPharmacies = allPharmacies.filter((p) => {
        const { startMin, closeMin } = getTodayTimes(p);
        if (startMin === null || closeMin === null) return false;
        return nowMin >= startMin && nowMin < closeMin;
    });

    const closingSoonPharmacies = allPharmacies.filter((p) => {
        const { startMin, closeMin } = getTodayTimes(p);
        if (startMin === null || closeMin === null) return false;
        const diffMin = closeMin - nowMin;
        return diffMin > 0 && diffMin <= 30;
    });

    const closedPharmacies = allPharmacies.filter((p) => {
        const { startMin, closeMin } = getTodayTimes(p);
        if (startMin === null || closeMin === null) return true;
        return nowMin < startMin || nowMin >= closeMin;
    });

    let baseList = allPharmacies;

    if (statusFilter === 'open') baseList = openPharmacies;
    if (statusFilter === 'soon') baseList = closingSoonPharmacies;
    if (statusFilter === 'closed') baseList = closedPharmacies;

    baseList = [...baseList].sort((a, b) =>
        a.dutyName.localeCompare(b.dutyName, 'ko'),
    );

    const displayedList = baseList.slice(0, visibleCount);

    const hasMore = displayedList.length < baseList.length;

    return (
        <section className=" mb-35">
            <StatusSummary
                selectedDistrict={selectedDistrict}
                openCount={openPharmacies.length}
                closingSoonCount={closingSoonPharmacies.length}
                closedCount={closedPharmacies.length}
            />
            <StatusFilter onChange={onChangeStatusFilter} />
            <PharmacyList pharmacies={displayedList} />
            {hasMore && <LoadMoreButton onClick={onLoadMore} />}
        </section>
    );
};

export default Pharmacy;
