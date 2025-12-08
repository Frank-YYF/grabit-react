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
                        list={"list-view"}
                        order={"order-lg-first order-md-last"}
                        lg={9}
                        xl={12}
                        isList={true} />
                </div>
            </section>

        </>
    )
}

export default page
