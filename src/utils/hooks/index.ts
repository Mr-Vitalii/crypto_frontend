import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
    selectIsLoggedIn,
    selectIsRefreshing,
    selectUser,
} from "redux/auth/selectors";
import { AppDispatch, RootState } from "redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const isRefreshing = useAppSelector(selectIsRefreshing);
    const user = useAppSelector(selectUser);

    return {
        isLoggedIn,
        isRefreshing,
        user,
    };
};
