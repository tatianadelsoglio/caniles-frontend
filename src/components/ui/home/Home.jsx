import React from "react";
import { Layout, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = ({ children }) => {
  let navigate = useNavigate();
  const { Header, Content, Footer } = Layout;

  return (
    <>
      <Header className="header_Layout">
        <Row className="header_row">
          <Col>
            <div className="header_titulo">
              <div className="div_nombre_titulo">CANILES</div>
              <div className="div_subtitulo">Refugio de Animales</div>
            </div>
          </Col>
          <Col>
            <div className="div_header_nav">
              <nav>
                <ul className="div_nav">
                  <li>Nosotros</li>
                  <li>Adopta</li>
                  <li>Apoyanos</li>
                  <li>Campañas</li>
                  <li>Veterinarias</li>
                  <li>Contacto</li>
                  <li>Suscribíte</li>
                </ul>
              </nav>
            </div>
          </Col>
          <Col>
            <div className="div_login">
              <Button
                className="div_btn_sesion"
                onClick={() => navigate("/login")}
              >
                Iniciar Sesión
              </Button>
            </div>
          </Col>
        </Row>
      </Header>
      <Content className="content_Layout">

      </Content>
      <Footer className="footer_Layout">
        Todos los derechos reservados @2022
      </Footer>
    </>
  );
};

export default Home;
