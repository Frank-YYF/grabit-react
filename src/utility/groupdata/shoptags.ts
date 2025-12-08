import { GroupTags, Item } from "@/types/data.types";
import shopitem from "@/utility/data/shopitem";
import _ from "lodash";

const groupedByTags = _.groupBy(shopitem, "tags");

const shoptags: GroupTags[] = _.map(groupedByTags, (items: Item[], key: any): GroupTags => ({
    tags: key,
    count: items.length,
}));

export default shoptags;