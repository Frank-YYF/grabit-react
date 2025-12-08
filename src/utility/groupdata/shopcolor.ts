import { GroupColor, Item } from "@/types/data.types";
import shopitem from "@/utility/data/shopitem";
import _ from "lodash";

const groupedByColor = _.groupBy(shopitem, "color");
const shopcolor: GroupColor[] = _.map(groupedByColor, (items: Item[], key: any): GroupColor => ({
    color: key,
    count: items.length,
}));

export default shopcolor;