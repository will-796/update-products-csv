import { useCallback, useContext, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { FileContext } from "../../context/fileContext";
import { ButtonContainer, Dropzone, FilesPreview, Section } from "./style";

import ValidationModal from "../../components/validationModal";

function Import() {
  const {
    showModal,
    success,
    file,
    setFile,
    setApiData,
    setShowModal,
    setSuccess,
  } = useContext(FileContext);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles);
    },
    [setFile]
  );

  const handleValidateCsv = async () => {
    try {
      const formData = new FormData();
      formData.append("csv", file[0]);

      const response = await axios.post(
        "http://localhost:3000/validate",
        formData
      );

      console.log(response.data);

      setApiData(response.data);
      setShowModal(true);
      setSuccess(response.data.valid);
      if (!response.data.valid) {
        setFile([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop,
      accept: {
        "text/csv": [".csv"],
      },
      maxFiles: 1,
    });

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const updateProducts = async () => {
    try {
      const formData = new FormData();
      formData.append("csv", file[0]);

      const response = await axios.post(
        "http://localhost:3000/update",
        formData
      );

      console.log(response.data);
      setFile([]);
      setSuccess(false);
      alert("Produtos atualizados com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log("file mudou");
  }, [file]);
  
  return (
    <Section className="container">
      <h1>Carregue seu arquivo</h1>
      <Dropzone {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Solte os arquivos aqui ...</p>
        ) : (
          <p>
            Arraste e solte alguns arquivos aqui, ou clique para selecionar
            arquivos
          </p>
        )}
      </Dropzone>
      <FilesPreview>
        <h4>Arquivos</h4>
        <ul>{files}</ul>
      </FilesPreview>
      <ButtonContainer>
        <button onClick={handleValidateCsv}>Validar</button>
        <button disabled={!success} onClick={updateProducts}>
          Atualizar
        </button>
      </ButtonContainer>

      <ValidationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </Section>
  );
}

export default Import;
