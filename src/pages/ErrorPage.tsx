import { forwardRef, HTMLProps } from "react";

const ErrorPage = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  (props, ref) => {
    return (
      <div className="page" ref={ref}>
        에러페이지
      </div>
    );
  }
);

export default ErrorPage;
