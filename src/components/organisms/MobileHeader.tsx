import DarkModeToggleButton from "../atoms/DarkModeToggleButton";
import Title from "../atoms/Title";

export default function MobileHeader() {
  return (
    <header className="sticky-header">
      <Title>Mobile Sticky Header</Title>
      <DarkModeToggleButton />
    </header>
  );
}
