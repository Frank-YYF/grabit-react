import { GroupCategory, ProductItem } from "@/types/data.types";
import footwear from "@/utility/data/footwear";
import _ from "lodash";

const groupedByCategory = _.groupBy(footwear, "category");

const fashionfootwear: GroupCategory[] = _.map(groupedByCategory, (items: ProductItem[], key: any): GroupCategory => ({
    category: key,
    count: items.length 
}));

export default fashionfootwear;