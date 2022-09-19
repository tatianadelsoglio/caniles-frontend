import { Drawer } from "antd";

const RightPanel = ({ visible, setVisible }) => {
  return (
    <Drawer
      visible={visible}
      placement="right"
      mask={false}
      onClose={() => setVisible(false)}
    >
      contenido
    </Drawer>
  );
};

export default RightPanel;
