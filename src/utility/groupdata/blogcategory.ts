import { BlogContent, GroupCategory } from "@/types/data.types";
import blogcontent from "@/utility/data/blogcontent";
import _ from "lodash";

const groupedByCategory = _.groupBy(blogcontent, "category");

const blogcategory: GroupCategory[] = _.map(groupedByCategory, (items: BlogContent[], key: any): GroupCategory => ({
    category: key,
    count: items.length 
}));

export default blogcategory;