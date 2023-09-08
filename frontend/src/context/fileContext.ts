import { createContext } from "react";

interface IErrorDetail {
  code: string;
  message: string;
}

interface IProductReturn {
  code: string;
  name: string;
  newPrice: number;
  oldPrice: number;
  errors: string[];
}

export interface apiData {
  valid: boolean;
  products: IProductReturn[];
  errors: IErrorDetail[];
}

interface FileContextProps {
  file: File[];
  setFile: (file: File[]) => void;
  apiData: apiData;
  setApiData: (data: apiData[]) => void;
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
  apiData: { valid: false, products: [], errors: [] },
  setApiData: () => {},
  loading: false,
  setLoading: () => {},
  success: false,
  setSuccess: () => {},
  showModal: false,
  setShowModal: () => {},
});
