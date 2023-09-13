import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface CommonFormData {
    email: string;
    password: string;
    name?: string;
    username?: string;
    confirmPassword?: string;
}

export interface IPropsLogin<
    TFieldValues extends FieldValues = CommonFormData,
> {
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    navigate: (to: string) => void;
    loading: boolean;
}

export interface IPropsRegister<
    TFieldValues extends FieldValues = CommonFormData,
> {
    register: UseFormRegister<TFieldValues>;
    errors: FieldErrors<TFieldValues>;
    navigate: (to: string) => void;
    loading: boolean;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    firstName: string;
    userName: string;
    email: string;
    password: string;
}

//* REDUX TYPE

interface User {
    id: string | null;
    firstName: string;
    userName: string;
    email: string;
    avatarURL: string;
}

export interface IAuthState {
    token: string;
    user: User;
    isLoggedIn: boolean;
    isLoading: boolean;
}

export interface AuthData {
    token: string;
    user: User;
}

export interface UserAttributes {
    firstName: string;
    userName: string;
    email: string;
}

export interface IPasswordData {
    oldPassword: string;
    newPassword: string;
}
