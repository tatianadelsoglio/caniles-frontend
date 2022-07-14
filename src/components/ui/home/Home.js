import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  let navigate = useNavigate();

  return (
    <>
      <div className="home_wrapper">

        <div className="home_header">
          <div className="div_titulo">
            <div className="div_nombre">CANILES</div>
            <div className="div_subnombre">Refugio de Animales</div>
          </div>

          <div>ESPACIO</div>

          <div className="div_nav_wrapper">
            <nav>
              <ul className="div_nav_ul">
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
          
          <div className="div_home_login">
            <Button
              className="div_home_button"
              onClick={() => navigate("/login")}
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
        {/* <div className="home_content">Content</div>
        <div className="home_footer">Footer</div> */}
      </div>
    </>
  );
};

export default Home;
