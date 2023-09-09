import { useContext } from "react";
import { CloseButton, ModalContent, ModalOverlay, Table, Title } from "./styles";
import { FileContext } from "../../context/fileContext";

interface ValidationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ValidationModal({ isOpen, onClose }: ValidationSuccessModalProps) {
  const { apiData, showModal } = useContext(FileContext);


  const renderProductErrors = (errors: string[]) => {
    if (!errors || errors.length === 0) {
      return <span>Nenhum erro encontrado</span>;
    }

    return (
      <ul>
        {errors.map((error, errorIndex) => (
          <li key={errorIndex}>{error}</li>
        ))}
      </ul>
    );
  };
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title valid={apiData.valid}>{apiData.valid ? "produtos validos" : "produtos inválidos"}</Title>
        <Table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Preço atual</th>
              <th>Novo preço</th>
              <th>Erros encontrados</th>
            </tr>
          </thead>
          <tbody>
          {showModal &&
              apiData.products.map((product, index) => (
                <tr key={index}>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.oldPrice}</td>
                  <td>{product.newPrice}</td>
                  <td>{renderProductErrors(product.errors)}</td>
                </tr>
              ))}
            {showModal &&
              apiData.errors.map((error, index) => (
                <tr key={index}>
                  <td>{error.code}</td>
                  <td colSpan={4}>{error.message}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ValidationModal;
