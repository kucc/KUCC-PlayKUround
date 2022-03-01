export type ModalProps = {
  leftLabel: string;
  rightLabel: string;
  title: string;
  description: Array<string>;
  onClickRightButton: () => void;
  onClickLeftButton: () => void;
};
