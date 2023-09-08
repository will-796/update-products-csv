import { useContext } from "react";
import { CloseButton, ModalContent, ModalOverlay, Table } from "./styles";
import { FileContext } from "../../context/fileContext";

interface ValidationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ValidationModal({ isOpen, onClose }: ValidationSuccessModalProps) {
  const { apiData, showModal } = useContext(FileContext);
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
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
              apiData.products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td>{product.code}</td>
                    <td>{product.name}</td>
                    <td>{product.oldPrice}</td>
                    <td>{product.newPrice}</td>
                    <td>
                      {product.errors.map((error, index) => {
                        return <span key={index}>{error}</span>;
                      })}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ValidationModal;
