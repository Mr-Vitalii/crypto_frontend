export const selectFavoriteCoins = (state: any) => state.coins.favoriteCoins;

export const selectAllCoins = (state: any) => state.coins.coins;

export const selectFavoriteCoinsIsLoading = (state: any) =>
    state.coins.favoriteCoinsIsLoading;

export const selectCoinsIsLoading = (state: any) => state.coins.coinsIsLoading;
