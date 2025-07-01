import {
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  ChangeEvent,
  LabelHTMLAttributes,
} from "react";

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}
export interface RadioGroupContextType {
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  line?: boolean;
}

export interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  id?: string;
  label?: string;
}

export interface RadioGroupProps {
  direction?: string;
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
  children: ReactNode;
  legend?: string;
}

export interface AccordionProviderProps {
  children: React.ReactNode;
  type: "single" | "multiple";
}
export interface AccordionContextType {
  activeIndexes: number[];
  setActiveIndexes: React.Dispatch<React.SetStateAction<number[]>>;
  type: "single" | "multiple";
}

export interface AccordionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  type?: "single" | "multiple";
}

export interface AccordionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  openIcon?: "plus" | "dash" | "spinner";
  closeIcon?: "plus" | "dash" | "spinner";
  children: React.ReactNode;
  toggleItem?: () => void;
}

export interface AccordionItemProps {
  children: React.ReactNode;
  index: number;
}

export interface AccordionPanelProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column";
  gap?: number;
}

export interface BarChartProps {
  title?: string;
  labels: string[];
  datasets: any[];
}

export interface DoughnutChartProps {
  percentage: number;
}

export interface DimmProps extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

export interface TabContextType<T> {
  activeTab: T;
  setActiveTab: (value: T) => void;
}

export interface TabProviderProps<T> {
  children: ReactNode;
  value: T;
  onChange: (value: T) => void;
}

export interface TabProps {
  label: string;
  value: string;
}

export interface TabListProps {
  children: ReactNode;
}

export interface TabPanelProps<T> {
  children: React.ReactNode;
  value: T;
}

export interface TabsProps<T> {
  children: React.ReactNode;
  value: T;
  onChange: (value: T) => void;
}

export interface IconProps extends HTMLAttributes<HTMLButtonElement> {
  type: "plus" | "dash" | "spinner" | "close";
}

export interface SelectContextType {
  selectedValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
  focusedIndex: number;
  setFocusedIndex: (index: number) => void;
}
export interface SelectProps {
  children: ReactNode;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  index: number;
}

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface SwiperButtonProps extends HTMLAttributes<HTMLSpanElement> {
  isPaused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SwiperButtonProps extends HTMLAttributes<HTMLSpanElement> {
  isPaused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface DarkModeProviderProps {
  children: React.ReactNode;
}

/* 바텀시트 */
export interface BottomSheetProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  title: string;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/* 다이얼로그 */
export interface DialogProps {
  type?: "confirm" | "alert";
  isOpen: boolean;
  title: string;
  content: string;
  confirmButtonText?: string;
  cancleButtonText?: string;
  onConfirm?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/* 토스트 */
export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  setIsOpen: any;
  timer: number;
}
