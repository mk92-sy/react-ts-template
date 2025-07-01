import { useRef } from "react";
import { useFocusTrap } from "../../../hooks/useFocus";
import Button from "../../atoms/button";
import css from "./BottomSheet.module.scss";
import { Dimm } from "components/atoms/dimm";
import * as TYPES from "types";

function BottomSheet({
  isOpen = false,
  title,
  children,
  onClose,
  ...rest
}: TYPES.BottomSheetProps) {
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
          <div className={css.title} tabIndex={0}>
            {title}
          </div>
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
