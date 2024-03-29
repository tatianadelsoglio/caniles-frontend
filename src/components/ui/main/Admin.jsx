import React, { useState } from "react";
import "./Admin.css";
import {
  HomeOutlined,
  CalendarOutlined,
  ContainerOutlined,
  TeamOutlined,
  GitlabOutlined,
  ShopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  // UserOutlined,
  // PoweroffOutlined,
  // SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Inicio from "./inicio/Inicio";
import Adopcion from "./adopcion/Adopcion";
import Pasantes from "./pasante/Pasantes";
import Animales from "./animales/Animales";
import Campañas from "./campañas/Campañas";
import Veterinarias from "./veterinarias/Veterinarias";
import Reportes from "./reportes/Reportes";
import Suscriptores from "./suscriptores/Suscriptores";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Inicio", "1", <HomeOutlined />),
  getItem("Animales", "2", <GitlabOutlined />),
  getItem("Adopción", "3", <ContainerOutlined />),
  getItem("Pasantes", "4", <TeamOutlined />),
  getItem("Campañas", "5", <CalendarOutlined />),
  getItem("Veterinarias", "6", <ShopOutlined />),
  getItem("Reportes", "7", <PieChartOutlined />),
  getItem("Suscriptores", "8", <MailOutlined />),
  // getItem("Navigation One", "sub1", <MailOutlined />, [
  //   getItem("Option 5", "5"),
  //   getItem("Option 6", "6"),
  //   getItem("Option 7", "7"),
  //   getItem("Option 8", "8"),
  // ]),
  // getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
  //   getItem("Option 9", "9"),
  //   getItem("Option 10", "10"),
  //   getItem("Submenu", "sub3", null, [
  //     getItem("Option 11", "11"),
  //     getItem("Option 12", "12"),
  //   ]),
  // ]),
];

const Admin = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [opcionSelect, setOpcionSelect] = useState("");

  const onSelect = (e) => {
    switch (true) {
      case e.key === "1":
        setOpcionSelect("Inicio");
        break;
      case e.key === "2":
        setOpcionSelect("Animales");
        break;
      case e.key === "3":
        setOpcionSelect("Adopción");
        break;
      case e.key === "4":
        setOpcionSelect("Pasantes");
        break;
      case e.key === "5":
        setOpcionSelect("Campañas");
        break;
      case e.key === "6":
        setOpcionSelect("Veterinarias");
        break;
      case e.key === "7":
        setOpcionSelect("Reportes");
        break;
      case e.key === "8":
        setOpcionSelect("Suscriptores");
        break;

      default:
        break;
    }
    console.log("click", e.key);
  };

  return (
    <div className="div_wrapper_admin">
      <div className="div_menu_vertical">
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onSelect={onSelect}
        />
      </div>
      <div className="div_contenido_admin">
        <div className="div_btn_menu">
          <Button
            className="btn_menu_admin"
            type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 16,
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "1%",
            }}
          >
            {opcionSelect}
          </div>
          {/* <div
          className="menu_usuario"
            style={{
              width: "10%",
            }}
          >
            <Menu mode="horizontal" style={{ height: "95%" }} className="menu_usuario">
              <Menu.SubMenu key="SubMenu" title="Admin" icon={<UserOutlined />}>
                <Menu.Item key="20" icon={<SettingOutlined />}>
                  Configuración
                </Menu.Item>
                <Menu.Item key="21" icon={<PoweroffOutlined />}>
                  Cerrar Sesión
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </div> */}
        </div>
        <div>
          {opcionSelect && opcionSelect === "Inicio" ? <Inicio/> : (null)}
          {opcionSelect && opcionSelect === "Animales" ? <Animales/> : (null)}
          {opcionSelect && opcionSelect === "Adopción" ? <Adopcion/> : (null)}
          {opcionSelect && opcionSelect === "Pasantes" ? <Pasantes/> : (null)}
          {opcionSelect && opcionSelect === "Campañas" ? <Campañas/> : (null)}
          {opcionSelect && opcionSelect === "Veterinarias" ? <Veterinarias/> : (null)}
          {opcionSelect && opcionSelect === "Reportes" ? <Reportes/> : (null)}
          {opcionSelect && opcionSelect === "Suscriptores" ? <Suscriptores/> : (null)}

        </div>
      </div>
    </div>
  );
};

export default Admin;
