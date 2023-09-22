export interface IWatchlistCoin {
    coinId: string;
    name: string;
    owner: {
        _id: string;
    };
    _id: string;
}

//* REDUX

export interface IWatchlistState {
    watchlistCoins: IWatchlistCoin[];
    isLoading: boolean;
}
