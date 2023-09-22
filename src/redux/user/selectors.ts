export const selectIsLoggedIn = (state: any) => state.user.isLoggedIn;

export const selectIsRefreshing = (state: any) => state.user.isRefreshing;

export const selectUser = (state: any) => state.user.user;

export const selectAuthIsLoading = (state: any) => state.user.isLoading;
