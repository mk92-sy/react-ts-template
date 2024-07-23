import { useDesktopView } from "hooks/useDesktopView";
import A0003DesktopContents from "components/templates/desktop/A0003";
import A0003MobileContents from "components/templates/mobile/A0003";

export default function A0003Page() {
  const isDesktopView = useDesktopView();
  return isDesktopView ? <A0003DesktopContents /> : <A0003MobileContents />;
}
