import Shop from '@/components/shop-sidebar/Shop';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import CategorySliderOne from '@/components/category/CategorySliderOne';

const page = () => {

  return (
    <>


      <Breadcrumb title={"Shop Page"} />
      <section className="gi-shop">
        <div className="container">
          <CategorySliderOne />
          <Shop
            order={"order-lg-last order-md-first"}
            lg={9}
            xl={4}
          />
        </div>
      </section>

    </>
  )
}

export default page;
