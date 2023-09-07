import { createContext } from "react";

interface IError {
  code : string;
  message: string;
}


interface FileContextProps {
  file: File[];
  setFile: (file: File[]) => void;
  errors: IError[];
  setErrors: (errors: IError[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  success: boolean;
  setSuccess: (success: boolean) => void;
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}
export const FileContext = createContext<FileContextProps>({
  file: [],
  setFile: () => {},
  errors: [],
  setErrors: () => {},
  loading: false,
  setLoading: () => {},
  success: false,
  setSuccess: () => {},
  showModal: false,
  setShowModal: () => {},
});
