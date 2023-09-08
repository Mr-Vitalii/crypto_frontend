import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "redux/auth/selectors";
import { AppDispatch, RootState } from "redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const user = useAppSelector(selectUser);

    return {
        isLoggedIn,
        user,
    };
};
