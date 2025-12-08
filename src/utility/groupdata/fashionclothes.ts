import { GroupCategory, ProductItem } from "@/types/data.types";
import clothes from "@/utility/data/clothes";
import _ from "lodash";

const groupedByCategory = _.groupBy(clothes, "category");

const fashionclothes: GroupCategory[] = _.map(groupedByCategory, (items: ProductItem[], key: any): GroupCategory => ({
    category: key,
    count: items.length 
}));

export default fashionclothes;