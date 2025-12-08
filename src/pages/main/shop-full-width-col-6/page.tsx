import CategorySliderOne from '@/components/category/CategorySliderOne'
import FullWidth from '@/components/full-width/FullWidth'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb'


const page = () => {
  return (
    <>


      <Breadcrumb title={"Shop Page"} />
      <CategorySliderOne />
      <FullWidth lg={12} xl={2} />

    </>
  )
}

export default page
