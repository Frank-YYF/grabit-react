import { GroupCategory, Item } from "@/types/data.types";
import shopitem from "@/utility/data/shopitem";
import _ from "lodash";

const groupedByCategory = _.groupBy(shopitem, "category");

const shopcategory: GroupCategory[] = _.map(groupedByCategory, (items: Item[], key: any): GroupCategory => ({
    category: key,
    count: items.length 
}));

export default shopcategory;