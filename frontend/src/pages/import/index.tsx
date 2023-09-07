import { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { FileContext } from "../../context/fileContext";
import ValidationSuccessModal from "../../components/validationSuccessModal";
import UpdateModal from "../../components/updateModal";
import { Dropzone, FilesPreview, Section } from "./style";
import ErrorsModal from "../../components/modalErrors";

function Import() {
  const { setFile, success, file, setErrors, errors, setShowModal, showModal } =
    useContext(FileContext);

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles);
    },
    [setFile]
  );

  const handleValidateCsv = async () => {
    try {
      const response = await axios.post("http://localhost:3000/validate", {
        file: file,
      });

      console.log(response);

      if (response.data.errors.length > 0) {
        setErrors(response.data.errors);
        setShowModal(true);
      } else {
        setShowSuccessModal(true); // Mostrar o modal de sucesso
      }
    } catch (error) {
      console.error("Erro ao validar o arquivo CSV:", error);
    }
  };

  const handleUpdate = async () => {
    setShowUpdateModal(true);
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
        <h4>Files</h4>
        <ul>{files}</ul>
      </FilesPreview>
      <button onClick={handleValidateCsv}>Validar</button>
      <button disabled={!success} onClick={handleUpdate}>
        Atualizar
      </button>
      <ErrorsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        errors={errors}
      />
      <ValidationSuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
      <UpdateModal
        isOpen={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
      />
    </Section>
  );
}

export default Import;
