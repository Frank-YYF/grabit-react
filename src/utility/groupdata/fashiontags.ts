import { GroupTags, ProductItem } from "@/types/data.types";
import fashionallitem from "@/utility/data/fashionallitem";
import _ from "lodash";

const groupedByTags = _.groupBy(fashionallitem, "tags");

const fashiontags: GroupTags[] = _.map(groupedByTags, (items: ProductItem[], key: any): GroupTags => ({
    tags: key,
    count: items.length 
}));

export default fashiontags;