import Admin from "components/ui/main";
import MainLayout from "components/ui/estructuraMain/MainLayout";

const DashboardView = () => {
  return <MainLayout mainChildren={<Admin/>} />;
};

export default DashboardView;