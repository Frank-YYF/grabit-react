import Shop from '@/components/shop-sidebar/Shop'
import CategorySliderOne from '@/components/category/CategorySliderOne'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'



const page = () => {
  return (
    <>


      <Breadcrumb title={"Shop Page"} />
      <section className="gi-shop">
        <div className="container">
          <CategorySliderOne />
          <Shop
            lg={9}
            xl={4} />
        </div>
      </section>

    </>
  )
}

export default page
