import { useState } from "react";
import { Row } from "antd";
import { FiMenu, FiSidebar } from "react-icons/fi";
import useWindowSize from "components/hooks/useWindowSize";
import RightPanel from "components/ui/Layout/rightPanel/RightPanel";

const Header = () => {
  const { width } = useWindowSize();
  const [visible, setVisible] = useState(false);

  return (
    <Row className="pageHeader">
      <div className="header-menu-wrapper">
        {width && width > 700 ? null : <FiMenu />}
      </div>
      <div className="header-menu-wrapper">
        <div className="item-header" onClick={() => setVisible(true)}>
          <FiSidebar />
        </div>
      </div>

      <RightPanel visible={visible} setVisible={setVisible} />
    </Row>
  );
};

export default Header;
