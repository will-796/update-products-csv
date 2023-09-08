interface FileContextProviderProps {
  children: React.ReactNode;
}
import { useMemo, useState } from "react";
import { FileContext, apiData } from "./fileContext";

export default function FileContextProvider({
  children,
}: FileContextProviderProps) {
  const [file, setFile] = useState<File[]>([]);
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const value = useMemo(
    () => ({
      file,
      apiData,
      loading,
      success,
      showModal,
      setFile,
      setApiData,
      setLoading,
      setSuccess,
      setShowModal,
    }),
    [
      file,
      apiData,
      loading,
      success,
      showModal,
    ]
  );
  return <FileContext.Provider value={value}>{children}</FileContext.Provider>;
}
