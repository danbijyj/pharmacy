import axios from 'axios';

const BASE_URL = '/api/B552657/ErmctInsttInfoInqireService/getParmacyFullDown';

export const fetchPharmacies = async ({ pageNo = 1, numOfRows = 25200 }) => {
    const res = await axios.get(BASE_URL, {
        params: {
            serviceKey: import.meta.env.VITE_PHARMACY_API_KEY,
            pageNo,
            numOfRows,
            _type: 'json',
        },
    });

    return res.data.response.body.items?.item || [];
};
