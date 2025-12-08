import { GroupWeight, Item } from "@/types/data.types";
import shopitem from "@/utility/data/shopitem";
import _ from "lodash";

const groupedByWeight = _.groupBy(shopitem, "weight");

const sidebarweight: GroupWeight[] = _.map(groupedByWeight, (items: Item[], key: any): GroupWeight => ({
    weight: key,
    count: items.length,
}));

export default sidebarweight;