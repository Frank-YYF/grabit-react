import FashionFilter from '@/components/fashion-filter/FashionFilter';
import FashionCategorySlider from '@/components/fashion-filter/category-slider/FashionCategorySlider';

const page = () => {

  return (
    <>
      <section className="gi-shop padding-tb-40">
        <div className="container test">
          <FashionCategorySlider />
          <FashionFilter />
        </div>
      </section>
    </>
  )
}

export default page;
