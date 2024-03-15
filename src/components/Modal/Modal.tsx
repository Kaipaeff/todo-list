import { ModalProps } from '../../types/Interfaces';
import { ModalOverlayStyles, ModalContentStyles } from './Modal.styles';

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlayStyles onClick={handleBackdropClick}>
      <ModalContentStyles>{children}</ModalContentStyles>
    </ModalOverlayStyles>
  );
};

export default Modal;
