export interface ISnackbarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    error: boolean;
    severity: "success" | "error" | "info" | "warning";
    successMessage?: string;
    errorMessage: string;
}
