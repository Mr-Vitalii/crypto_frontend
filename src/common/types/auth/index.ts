import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

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
}

export interface IPropsRegister<TFieldValues extends FieldValues = CommonFormData> {
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
}
