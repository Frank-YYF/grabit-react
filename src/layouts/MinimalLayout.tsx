import LayoutTwo from "@/components/layout/layout-two";
import { GlobalLoader } from "@/components/loader/GlobalLoader";

const MinimalLayout = () => {
  return (
    <LayoutTwo>
      <GlobalLoader />
    </LayoutTwo>
  );
};

export default MinimalLayout;
