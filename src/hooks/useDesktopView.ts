import { isDesktop } from "react-device-detect";
import { useMediaQuery } from "react-responsive";

export const useDesktopView = () => {
  if(useMediaQuery({ minWidth: 1025 }) && isDesktop){
    return true
  }else{
    return false
  }
}