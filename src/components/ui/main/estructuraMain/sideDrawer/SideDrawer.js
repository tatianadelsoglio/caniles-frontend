import { Drawer } from "antd";
import { GlobalContext } from "components/context/GlobalContext";
import { useContext } from "react";
import ConfigContent from "components/ui/main/estructuraMain/sideDrawer/contentDrawer";
import HelpContent from "components/ui/main/estructuraMain/sideDrawer/contentDrawer";
import PlusContent from "components/ui/main/estructuraMain/sideDrawer/contentDrawer";
import SearchContent from "components/ui/main/estructuraMain/sideDrawer/contentDrawer";
import WorkspaceContent from "components/ui/main/estructuraMain/sideDrawer/contentDrawer";
import ProfileContent from "components/ui/main/estructuraMain/sideDrawer/contentDrawer";


const SideDrawer = () => {
  const {
    sideDrawerConfig,
    setSideDrawerConfig,
    setActiveMenuItem,
    activeModuleItem,
  } = useContext(GlobalContext);

  const handleContent = () => {
    const { content } = sideDrawerConfig;

    switch (true) {
      case content === "config":
        return <ConfigContent />;
      case content === "help":
        return <HelpContent />;
      case content === "plus":
        return <PlusContent />;
      case content === "search":
        return <SearchContent />;
      case content === "workspace":
        return <WorkspaceContent />;
      case content === "profile":
        return <ProfileContent />;
      default:
        break;
    }
  };

  return (
    <Drawer
      destroyOnClose={true}
      onClose={() => {
        //* mantengo el ultimo modulo como item activo cuando cierro el drawer
        setActiveMenuItem(activeModuleItem);
        setSideDrawerConfig({ visible: false, content: "" });
      }}
      closeIcon={null}
      visible={sideDrawerConfig.visible}
      placement="left"
    >
      {handleContent()}
    </Drawer>
  );
};

export default SideDrawer;
