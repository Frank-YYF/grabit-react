import FashionTwoSlider from '@/components/hero/FashionTwoSlider';
import CategorySliderThree from '@/components/category/CategorySliderThree';
import FashionTwoDeal from '@/components/deal/FashionTwoDeal';
import SummerBanner from '@/components/banner/SummerBanner';
import FashionTwoBanners from '@/components/banner/FashionTwoBanners';
import Services from '@/components/service/Services';
import TrendingFashionTwo from '@/components/trending/TrendingFashionTwo';
import FashionTwoBlog from '@/components/blog/FashionTwoBlog';
import NewsletterModalOne from '@/components/model/NewsletterModalOne';

const page = () => {
  return (
    <>
      <NewsletterModalOne />
      <FashionTwoSlider />
      <CategorySliderThree />
      <FashionTwoDeal />
      <SummerBanner />
      <FashionTwoBanners />
      <Services />
      <TrendingFashionTwo />
      <FashionTwoBlog />
    </>
  )
}

export default page
