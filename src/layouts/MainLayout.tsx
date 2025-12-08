import LayoutOne from "@/components/layout/layout-one";
import { GlobalLoader } from "@/components/loader/GlobalLoader";

const MainLayout = () => {
  return (
    <LayoutOne>
      <GlobalLoader />
    </LayoutOne>
  );
};

export default MainLayout;
