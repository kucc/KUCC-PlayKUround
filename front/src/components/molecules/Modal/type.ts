export type ModalProps = {
  leftLabel: string;
  rightLabel: string;
  title: string;
  show: boolean;
  description: Array<string>;
  onClickRightButton: () => void;
  onClickLeftButton: () => void;
  onClickOverlay: () => void;
};

export interface ModalOverlayProps {
  show: boolean;
}
