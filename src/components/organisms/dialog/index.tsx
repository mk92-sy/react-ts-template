import { useRef } from "react";
import { useFocusTrap } from "../../../hooks/useFocus";
import Button from "../../atoms/button";
import css from "./Dialog.module.scss";
import { Dimm } from "components/atoms/dimm";

import * as TYPES from "types";

const Dialog = ({
  isOpen = false,
  type = "alert",
  title,
  content,
  confirmButtonText = "확인",
  cancleButtonText = "취소",
  onConfirm,
  onClose,
  ...rest
}: TYPES.DialogProps) => {
  const dialogRef = useRef(null);
  useFocusTrap(dialogRef, isOpen);
  return (
    <>
      <Dimm isOpen={isOpen}>
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal={isOpen}
          aria-labelledby="dialogTitle"
          className={`${css.wrapper} ${isOpen ? css.open : css.close}`}
          {...rest}
        >
          <div className={css.header}>
            <h2 id="dialogTitle" tabIndex={0}>
              {title}
            </h2>
          </div>
          <div className={css.contents} tabIndex={0}>
            {content}
          </div>
          <div className={css["btn-wrap"]}>
            {type === "confirm" && (
              <Button onClick={onConfirm}>{confirmButtonText}</Button>
            )}
            <Button onClick={onConfirm ? onConfirm : onClose}>
              {onConfirm ? confirmButtonText : cancleButtonText}
            </Button>
          </div>
          <div className={css.footer}>
            <Button onClick={onClose}>X</Button>
          </div>
        </div>
      </Dimm>
    </>
  );
};

export default Dialog;
