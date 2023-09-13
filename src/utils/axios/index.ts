import axios from "axios";

export const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
});

export const instanceAuth = axios.create({
    baseURL: "http://localhost:5000/api/",
});

export const setAuthHeader = (token: string) => {
    instanceAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    instanceAuth.defaults.headers.common.Authorization = "";
};

export const newsInstance = axios.create({
    baseURL: "https://min-api.cryptocompare.com/data/v2/",
});

export const coinGeckoApi = axios.create({
    baseURL: "https://api.coingecko.com/api/v3",
});
