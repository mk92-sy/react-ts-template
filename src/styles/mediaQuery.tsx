import React from "react";
import { useMediaQuery } from "react-responsive";

interface MediaQueryProps {
  children: React.ReactNode;
}

export const Desktop = ({ children }: MediaQueryProps) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  return isDesktop ? <>{children}</> : null;
};

export const Tablet = ({ children }: MediaQueryProps) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  return isTablet ? <>{children}</> : null;
};

export const Mobile = ({ children }: MediaQueryProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <>{children}</> : null;
};
