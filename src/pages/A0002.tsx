import { useDesktopView } from "hooks/useDesktopView";
import A0002DesktopContents from "components/templates/desktop/A0002";
import A0002MobileContents from "components/templates/mobile/A0002";

export default function A0002Page() {
  const isDesktopView = useDesktopView();
  return isDesktopView ? <A0002DesktopContents /> : <A0002MobileContents />;
}
