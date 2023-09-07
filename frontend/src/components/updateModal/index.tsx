import { CloseButton, ModalContent, ModalOverlay } from "./styles";

interface ValidationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}


function ValidationSuccessModal({ isOpen, onClose }: ValidationSuccessModalProps) {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Validação concluída com sucesso</h2>
        <p>Seu arquivo foi validado com sucesso!</p>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ValidationSuccessModal;
