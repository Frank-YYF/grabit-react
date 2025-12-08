import FullWidth from "@/components/full-width/FullWidth";
import CategorySliderOne from "@/components/category/CategorySliderOne";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";

const page = () => {
  return (
    <>


      <Breadcrumb title={"Shop Page"} />
      <CategorySliderOne />
      <FullWidth classCol={"gi-col-5"} lg={12} itemsPerPage={15} />

    </>
  );
};

export default page;
