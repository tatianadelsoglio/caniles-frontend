import { Image, Tooltip } from "antd";
import { GlobalContext } from "components/context/GlobalContext";
import { useContext } from "react";
import { FiLifeBuoy, FiSliders } from "react-icons/fi";

const BottomMenu = () => {
  const { setSideDrawerConfig, activeMenuItem, setActiveMenuItem } =
    useContext(GlobalContext);

  return (
    <div className="sidebar-bottom">
      <Tooltip placement="right" title={"Configuración"} mouseEnterDelay={0.3}>
        <div
          className={
            activeMenuItem === "d3" ? "item-menu-selected" : "item-menu"
          }
          onClick={() => {
            setSideDrawerConfig({ visible: true, content: "config" });
            setActiveMenuItem("d3");
          }}
        >
          <FiSliders
            className={
              activeMenuItem === "d3" ? "icon-menu-selected" : "icon-menu"
            }
          />
        </div>
      </Tooltip>
      <Tooltip placement="right" title={"Ayuda"} mouseEnterDelay={0.3}>
        <div
          className={
            activeMenuItem === "d4" ? "item-menu-selected" : "item-menu"
          }
          onClick={() => {
            setSideDrawerConfig({ visible: true, content: "help" });
            setActiveMenuItem("d4");
          }}
        >
          <FiLifeBuoy
            className={
              activeMenuItem === "d4" ? "icon-menu-selected" : "icon-menu"
            }
          />
        </div>
      </Tooltip>

      <div
        className="workspace-menu"
        onClick={() => {
          setActiveMenuItem("d5");
          setSideDrawerConfig({ visible: true, content: "workspace" });
        }}
      >
        <Image
          className="workspace-menu-image"
          preview={false}
          src="https://media-exp1.licdn.com/dms/image/C4E0BAQEi7WQM8e_lmQ/company-logo_200_200/0/1519887595757?e=2147483647&v=beta&t=q8gDjZwSEQmeBHBKTsKSOlBnT_3FrmdE_19S6X928w4"
        />
      </div>

      <div
        className="user-menu"
        onClick={() => {
          setActiveMenuItem("d6");
          setSideDrawerConfig({ visible: true, content: "profile" });
        }}
      >
        <Image
          preview={false}
          className="user-menu-image"
          //src="https://c.tenor.com/t2-Zy0F7UYIAAAAC/akshay-kumar-gif.gif"
          src="https://c.tenor.com/t2-Zy0F7UYIAAAAC/akshay-kumar-gif.gif"
          // src="https://lh3.googleusercontent.com/IOUyj1rBguhOzspIU2Ynmueq31O_twYXXHuShObKR2sPxshKSu0LVVwWZmq6TEVZPV2E=s86"
        />
      </div>
    </div>
  );
};

export default BottomMenu;
