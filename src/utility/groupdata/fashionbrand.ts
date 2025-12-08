import { GroupBrand, ProductItem } from "@/types/data.types";
import fashionallitem from "@/utility/data/fashionallitem";
import _ from "lodash";

const groupedByCategory = _.groupBy(fashionallitem, "brand");

const fashionbrand: GroupBrand[] = _.map(groupedByCategory, (items: ProductItem[], key: any): GroupBrand => ({
    brand: key,
    count: items.length 
}));

export default fashionbrand;