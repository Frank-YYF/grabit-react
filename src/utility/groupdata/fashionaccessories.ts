import { ProductItem, GroupCategory } from "@/types/data.types";
import accessorise from "@/utility/data/accessories";
import _ from "lodash";

const groupedByCategory = _.groupBy(accessorise, "category");

const fashionaccessories: GroupCategory[] = _.map(groupedByCategory, (items: ProductItem[], key: any): GroupCategory => ({
    category: key,
    count: items.length 
}));

export default fashionaccessories;