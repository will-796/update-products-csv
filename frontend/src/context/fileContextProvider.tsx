interface FileContextProviderProps {
  children: React.ReactNode;
}
import { useMemo, useState } from "react";
import { FileContext } from "./fileContext";

export default function FileContextProvider({
  children,
}: FileContextProviderProps) {
  const [file, setFile] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const value = useMemo(
    () => ({
      file,
      errors,
      loading,
      success,
      showModal,
      setFile,
      setErrors,
      setLoading,
      setSuccess,
      setShowModal,
    }),
    [
      file,
      errors,
      loading,
      success,
      showModal,
    ]
  );
  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
}
