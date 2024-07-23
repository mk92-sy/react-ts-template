import { useDesktopView } from "hooks/useDesktopView";
import A0001DesktopContents from "components/templates/desktop/A0001";
import A0001MobileContents from "components/templates/mobile/A0001";

export default function A0001Page() {
  const isDesktopView = useDesktopView();
  return isDesktopView ? <A0001DesktopContents /> : <A0001MobileContents />;
}
