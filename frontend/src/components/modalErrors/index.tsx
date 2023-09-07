import { CloseButton, ModalContent, ModalOverlay } from "./styles";

interface ErrorsModalProps {
  isOpen: boolean;
  onClose: () => void;
  errors: { code: string; message: string }[];
}

function ErrorsModal({ isOpen, onClose, errors }: ErrorsModalProps) {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Erros de validação</h2>
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error.message}</li>
          ))}
        </ul>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ErrorsModal;
