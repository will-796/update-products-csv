import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { FileContext } from "../../context/fileContext";
import { ButtonContainer, Dropzone, FilesPreview, Section, Title } from "./style";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

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



      setApiData(response.data);
      setShowModal(true);
      setSuccess(response.data.valid);
      if (!response.data.valid) {
        setFile([]);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao validar arquivo!");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
    },
    maxFiles: 1,
  });

  const updateProducts = async () => {
    try {
      const formData = new FormData();
      formData.append("csv", file[0]);
      toast.promise(
        axios.post("http://localhost:3000/update", formData),
        {
          pending: "Atualizando produtos...",
          success: "Produtos atualizados com sucesso!",
          error: "Erro ao atualizar produtos!",
        },
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        })
      setFile([]);
      setSuccess(false);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao atualizar produtos!");
    }
  };

  return (
    <Section className="container">
      <Title>Carregue seu arquivo</Title>
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
        {file.length === 0 ? (
          <p>Nenhum arquivo selecionado</p>
        ) : (
          <p>
            {file[0].name} - {file[0].size} bytes
          </p>
        )}
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
