import { Col, Row } from "antd";
import useWindowSize from "components/main/hookMain/useWindowSize";
import SideDrawer from "components/ui/main/estructuraMain/sideDrawer/contentDrawer";
import SideMenu from "components/ui/main/estructuraMain/sideDrawer/contentDrawer";
import Header from "components/ui/main/estructuraMain/sideDrawer/contentDrawer";
import "./styles.css";


const MainLayout = ({ mainChildren }) => {
    const { width } = useWindowSize();
  
    return (
      <Row className="flexContainer">
        <Col className="sidebar">
          {width && width > 700 ? (
            <>
              <SideMenu />
              <SideDrawer />
            </>
          ) : null}
        </Col>
        <Col className="mainView">
          <Header />
          <Row className="pageContent">
            <Col className="col-mainchildren">{mainChildren}</Col>
          </Row>
        </Col>
      </Row>
    );
  };
  
  export default MainLayout;