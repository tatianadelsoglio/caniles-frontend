import { useContext } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { GlobalContext } from "components/context/GlobalContext";
import LogoBrocoly from "components/assets/LogoBrocoly";
import ModuleMenu from "components/ui/Layout/menu/ModuleMenu";

const TopMenu = () => {
  const { setSideDrawerConfig, activeMenuItem, setActiveMenuItem } =
    useContext(GlobalContext);

  return (
    <div className="sidebar-top">
      <LogoBrocoly className="logo-container" />
      <div className="menu-tools">
        <div
          className={
            activeMenuItem === "d1" ? "item-menu-selected" : "item-menu"
          }
          onClick={() => {
            setActiveMenuItem("d1");
            setSideDrawerConfig({ visible: true, content: "plus" });
          }}
        >
          <FiPlus
            className={
              activeMenuItem === "d1" ? "icon-menu-selected" : "icon-menu"
            }
          />
        </div>
        <div
          className={
            activeMenuItem === "d2" ? "item-menu-selected" : "item-menu"
          }
          onClick={() => {
            setActiveMenuItem("d2");
            setSideDrawerConfig({ visible: true, content: "search" });
          }}
        >
          <FiSearch
            className={
              activeMenuItem === "d2" ? "icon-menu-selected" : "icon-menu"
            }
          />
        </div>
      </div>
      <ModuleMenu />
    </div>
  );
};

export default TopMenu;
