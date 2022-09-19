import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "components/context/GlobalContext";
import { FiActivity, FiGrid, FiTrello, FiUsers } from "react-icons/fi";
import { Tooltip } from "antd";

const ModuleMenu = () => {
  const history = useHistory();

  const {
    activeMenuItem,
    setActiveMenuItem,
    setActiveModuleItem,
    setSideDrawerConfig,
  } = useContext(GlobalContext);

  const handleChange = (route, idMenu) => {
    history.push(route);
    setActiveMenuItem(idMenu);
    setActiveModuleItem(idMenu);
    setSideDrawerConfig({ visible: false, content: "" });
  };

  return (
    <div className="menu-modulos">
      <Tooltip placement="right" title={"Dashboard"} mouseEnterDelay={0.3}>
        <div
          className={activeMenuItem === 3 ? "item-menu-selected" : "item-menu"}
          onClick={() => handleChange("/", 3)}
        >
          <FiActivity
            className={
              activeMenuItem === 3 ? "icon-menu-selected" : "icon-menu"
            }
          />
        </div>
      </Tooltip>
      <Tooltip placement="right" title={"Empresas"} mouseEnterDelay={0.3}>
        <div
          className={activeMenuItem === 4 ? "item-menu-selected" : "item-menu"}
          onClick={() => handleChange("/empresas", 4)}
        >
          <FiGrid
            className={
              activeMenuItem === 4 ? "icon-menu-selected" : "icon-menu"
            }
          />
        </div>
      </Tooltip>
      <Tooltip placement="right" title={"Personas"} mouseEnterDelay={0.3}>
        <div
          className={activeMenuItem === 5 ? "item-menu-selected" : "item-menu"}
          onClick={() => handleChange("/personas", 5)}
        >
          <FiUsers
            className={
              activeMenuItem === 5 ? "icon-menu-selected" : "icon-menu"
            }
          />
        </div>
      </Tooltip>
      <Tooltip placement="right" title={"Negocios"} mouseEnterDelay={0.3}>
        <div
          className={activeMenuItem === 6 ? "item-menu-selected" : "item-menu"}
          onClick={() => handleChange("/negocios", 6)}
        >
          <FiTrello
            className={
              activeMenuItem === 6 ? "icon-menu-selected" : "icon-menu"
            }
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default ModuleMenu;
