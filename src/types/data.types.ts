import { RootState } from "@/store";

export interface moreItem {
    rating: number;
    image: string;
    title: string;
    oldPrice: number;
    newPrice: number;
    category?: string;
    weight?: string;
    color?: string;
    tags?: string;
}


export interface Facts {
    name: string;
    counter: string;
    discription: string;
    item: number;
  }

 export interface Team {
    name: string;
    image: string;
    title: string;
  }
  export interface Testimonials {
    name: string;
    image: string;
    subimage: string;
    category: string;
    description: string;
    subimagetwo: string;
  }

   export interface FashionBanner {
    name: string;
    image: string;
    num : number
  }

  export interface Blog {
    name: string;
    image: string;
    date: string;
    title: string;
    month?: string;

  }

  export interface BlogContent {
    category: string;
    image: string;
    date: string;
    title: string;
    description: string;
  }
  
  export interface Deal {
    category: string;
    sale: string;
    image: string;
    imageTwo: string;
    oldPrice: number;
    newPrice: number;
    title: string;
    weight?: string;
    rating: any;
    status: string;
    location: string;
    brand: string;
    sku: number;
    quantity: number;
    id: number;
  }

  export interface Category {
    name: string;
    percentage: string;
    icon?: string;
    image: string;
    item: number;
    num?: number;
  }

  export interface ProductCategory {
    category: string;
    sale: string;
    image: string;
    imageTwo: string;
    oldPrice: number;
    newPrice: number;
    title: string;
    rating: any;
    status: string;
    location: string;
    brand: string;
    sku: number;
    quantity: number;
    color1 : any;
    color2 : any;
    color3 : any;
    size1: string;
    size2: string;
    id: number;
  }

   export interface Questions {
    questions: string;
    ans: string;
  }

   export interface FashionDeal {
    category: string;
    sale: string;
    image: string;
    imageTwo: string;
    oldPrice: number;
    newPrice: number;
    title: string;
    waight: string;
    rating: any;
    Status: string;
    location: string;
    brand: string;
    sku: number;
    quantity: number;
    color1: number;
    color2: number;
    color3: number;
    size1: string;
    size2: string;
    id: number
  }

  export interface Fashion {
    name: string;
    image: string;
    title: string;
    oldPrice: number;
    newPrice: number;
    quantity: number;
    id: number;
  }

  export interface Policy {
    questions: string;
  }

  export interface ProductImage {
    image: string;
  }

  export interface Product {
    id: string;
    title: string;
    image: string;
    newPrice: number;
  }

  export interface ProductItem {
    category: string;
    sale: string;
    image: string;
    imageTwo: string;
    oldPrice: number;
    newPrice: number;
    href?: string;
    title: string;
    waight?: string;
    rating: any;
    status: string;
    location: string;
    brand: string;
    sku: number;
    quantity: number;
    id : number;
    tags?: string;
  }

  export interface Service {
    name: string;
    icon: string;
    title: string;
  }

  export interface Selling {
    name: string;
    image: string;
    title: string;
    oldPrice: number;
    newPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  export interface Rated {
    name: string;
    image: string;
    title: string;
    oldPrice: number;
    newPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  export interface Trending {
    name: string;
    image: string;
    title: string;
    oldPrice: number;
    newPrice: number;
    waight: string
    quantity: number;
    id: number;
  }

  export interface VendorList {
    id: number;
    name: string;
    description: string;
    image: string;
    level: number;
    levelOutOf: number;
    products: number;
    month_since: number;
    year_since: number;
  }

  export interface VendorListTwo {
    id: number;
    name: string;
    description: string;
    image: string;
    level: number;
    levelOutOf: number;
    products: number;
  }

  export interface Term {
    questions: string;
  }

  export interface WrapperAnimationFCProps {
    children: React.ReactNode | React.ReactNode[];
    triggerOnce: boolean;
    className: string;
    index?: any;
    postData?: any;
  }
  
  export type ProductType = {
    id: number;
    name: string;
    thumb: string;
    price: string;
    count: number;
    color: string;
    size: string;
  };
  
  export type ProductStoreType = {
    id: number;
    name: string;
    thumb: string;
    price: number;
    count: number;
    color: string;
    size: string;
  };
  
  export enum TemplateEnum {
    THEME = "theme",
    TEMPLATE = "template",
  }
  
  export type ProductContentType<> = {
    url?: string;
    statekey: keyof RootState;
    postData?: any;
    WrapperAnimation?: React.FunctionComponent<WrapperAnimationFCProps>;
    // index?: any;
    wrapperClass?: any;
    containerTagName?: any;
    hasPaginate?: boolean;
    sortBy?: any;
    onSuccess?: (data: any) => void;
    onError?: (data: any) => void;
    view?: any;
    itemColClass?: any;
  };
  
  export interface Order {
    orderId: string;
    date: string;
    shippingMethod: string;
    totalItems: number;
    totalPrice: number;
    status: string;
    products: Product[];
  }

  export interface RecentBlog {
    category: string;
    image: string;
    date: string;
    title: string;
    description: string
  }

  export interface Shop {
    category: string;
    icon: string;
  }
  export interface Item {
    id: number;
    title: string;
    name?: string;
    category?: string;
    newPrice: number;
    waight?: string;
    sale?: string;
    image: string;
    imageTwo?: string;
    date?: string;
    oldPrice: number;
    href?: string;
    weight?: string;
    rating?: any;
    status?: string;
    location?: string;
    brand?: string;
    sku?: number;
    quantity: number;
    color?: string;
    tags?: string;
    wishlist?: string;
    color1?: string;
    color2?: string;
    color3?: string;
    size1?: string;
    size2?: string;
  }

  export interface Weight {
    color: string;
  }

  export interface Shoptags{
    tags: string,
    count: number,
  }

  export interface GroupCategory {
    category: string,
    count: number,
  }

  export interface GroupTags {
    tags: string,
    count: number,
  }

  export interface GroupBrand  {
    brand: string,
    count: number,
  }

  export interface GroupColor  {
    color: string,
    count: number,
  }

  export interface GroupWeight {
    weight: string,
    count: number,
  }

  export interface Option {
    value: string;
    tooltip: string;
  }
  
  export interface RegistrationData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    postCode: string;
    country: string;
    state: string;
    profilePhoto?: string;
    description: string;
    password?: string;
    uid?: any;
  }

  export interface VendorData {
    email: string;
    phoneNumber: string;
    home_address: string;
    office_address: string;
    profilePhoto?: string;
    description: string;
    taxIdName?: string;
    ssnOrEin?: string;
    panNo?: string;
    businessType?: string;
    bankName?: string;
    bankAccountNo?: string;
  }

  export interface Wishlist {
    title: string;
    newPrice: number;
    waight: any;
    image: string;
    date: string;
    status: string;
  }

  export interface Address {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    state: string;
  }
    
  export interface Country {
    id: number;
    name: any;
    iso2: string;
  }
  
  export interface State {
    id: number;
    name: any;
    state_code: string;
    country_code: string; 
  }
  
  export interface City {
    id: number;
    name: any;
    iso2: string;
  }

  export interface Tag {
    name: string;
  }
  
  export interface LinkAttr {
    name: string;
    href: string;
    slug?: string;
  }

  export interface MenuLinkAttr {
    name: string;
    href: string;
    subname?: LinkAttr[];
  }

  export interface VendorImage {
    index: number;
    image: string;
  }