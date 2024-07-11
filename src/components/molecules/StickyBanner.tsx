import { useState } from "react";
import { Button, Icon } from "../atoms";

export default function StickyBanner() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div className={`sticky-banner ${isOpen ? "open" : ""}`} role="alert">
      <div className="content">
        <p>
          <strong>OOOO 앱</strong>으로
          <br />
          편리하게 이용해보세요! ({isOpen ? "열림" : "닫힘"})
        </p>
        <Button
          ripple={false}
          onClick={() => setIsOpen(false)}
          style={{ backgroundColor: "transparent", width: 24, height: 24 }}
        >
          <Icon type="close" />
        </Button>
      </div>
    </div>
  );
}
