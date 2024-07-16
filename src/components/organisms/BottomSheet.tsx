import { HTMLAttributes, useRef } from "react";
import { useFocusTrap } from "../../hooks/useFocus";
import Button from "../atoms/Button";
import css from "./BottomSheet.module.scss";
import Dimm from "../atoms/Dimm";

interface BottomSheetProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  flex?: string;
  title: string;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function BottomSheet({
  isOpen = false,
  flex = "0.7",
  children,
  onClose,
  ...rest
}: BottomSheetProps) {
  const bottomSheetRef = useRef(null);
  useFocusTrap(bottomSheetRef, isOpen);
  return (
    <>
      <Dimm isOpen={isOpen}>
        <div
          ref={bottomSheetRef}
          role="dialog"
          aria-modal={isOpen}
          aria-labelledby="dialogTitle"
          className={`${css.wrapper} ${isOpen ? css.open : css.close}`}
          {...rest}
        >
          <div className={css.contents} tabIndex={0}>
            {children}
          </div>
          <div className={css.footer}>
            <Button onClick={onClose}>X</Button>
          </div>
        </div>
      </Dimm>
    </>
  );
}

export default BottomSheet;
