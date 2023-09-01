import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectors";
import { AppDispatch, RootState } from "redux/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
  const isLogged = !!sessionStorage.getItem("token");
  const user = useSelector(selectUser);

  return {
    isLogged,
    user,
  };
};
