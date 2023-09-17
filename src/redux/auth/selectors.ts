export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state: any) => state.auth.isRefreshing;

export const selectUser = (state: any) => state.auth.user;

export const selectAuthIsLoading = (state: any) => state.auth.isLoading;
