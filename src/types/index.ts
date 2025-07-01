import {
  HTMLAttributes,
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

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
