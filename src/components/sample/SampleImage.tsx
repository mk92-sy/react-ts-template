import React, { ImgHTMLAttributes } from "react";
import css from "./Sample.module.scss";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  // 추가적인 커스텀 props가 필요하다면 여기에 정의
  // propsName: data type (ex. string, number, boolean...)
}

const SampleImage: React.FC<ImageProps> = ({ className, alt, ...rest }) => {
  return (
    <img className={`${css.image} ${className || ""}`} alt={alt} {...rest} />
  );
};

export default SampleImage;
