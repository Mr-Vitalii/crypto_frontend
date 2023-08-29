import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";


interface User {
  id: string | null;
  firstName: string;
  userName: string;
  email: string;
  avatarURL: string;
};

interface WatchList {
  id: string| null;
  name: string;
  assetId: string;
};

export interface CommonFormData {
  email: string;
  password: string;
  name?: string;
  username?: string;
  confirmPassword?: string;
}

export interface IPropsLogin<TFieldValues extends FieldValues = CommonFormData> {
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  navigate: (to: string) => void;
}

export interface IPropsRegister<TFieldValues extends FieldValues = CommonFormData> {
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  navigate: (to: string) => void;
}

export interface IAuthState {
  user: {
    user: User;
    token: string;
  };
  isLoading: boolean;
}
