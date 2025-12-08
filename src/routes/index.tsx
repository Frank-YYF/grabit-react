import { lazy } from "react";
import { LayoutRouteConfig, RouteItem } from "../types/route.types";

// Layouts
import MainLayout from "@/layouts/MainLayout";
import MinimalLayout from "@/layouts/MinimalLayout";
import ModernLayout from "@/layouts/ModernLayout";
import NotFound from "@/pages/not-found";

// Use lazy loading for pages
// main
const AboutUs = lazy(() => import("@/pages/main/about-us/page"));
const BlogRightSidebar = lazy(
  () => import("@/pages/main/blog-right-sidebar/page")
);
const ProductAccordingFullWidth = lazy(
  () => import("@/pages/main/product-according-full-width/page")
);
const ShopLeftSidebarCol4 = lazy(
  () => import("@/pages/main/shop-left-sidebar-col-4/page")
);
const VendorEdit = lazy(() => import("@/pages/main/vendor-edit/page"));
const BannerFullWidthCol3 = lazy(
  () => import("@/pages/main/banner-full-width-col-3/page")
);
const Cart = lazy(() => import("@/pages/main/cart/page"));
const ProductAccordingLeftSidebar = lazy(
  () => import("@/pages/main/product-according-left-sidebar/page")
);
const ShopListFullCol2 = lazy(
  () => import("@/pages/main/shop-list-full-col-2/page")
);
const VendorList = lazy(() => import("@/pages/main/vendor-list/page"));
const BannerFullWidthCol4 = lazy(
  () => import("@/pages/main/banner-full-width-col-4/page")
);
const CatalogMultiVendor = lazy(
  () => import("@/pages/main/catalog-multi-vendor/page")
);
const ProductAccordingRightSidebar = lazy(
  () => import("@/pages/main/product-according-right-sidebar/page")
);
const ShopListLeftSidebar = lazy(
  () => import("@/pages/main/shop-list-left-sidebar/page")
);
const VendorList2 = lazy(() => import("@/pages/main/vendor-list-2/page"));
const BannerLeftSidebar = lazy(
  () => import("@/pages/main/banner-left-sidebar/page")
);
const CatalogSingleVendor = lazy(
  () => import("@/pages/main/catalog-single-vendor/page")
);
const ProductFullWidth = lazy(
  () => import("@/pages/main/product-full-width/page")
);
const ShopListRightSidebar = lazy(
  () => import("@/pages/main/shop-list-right-sidebar/page")
);
const VendorProfile = lazy(() => import("@/pages/main/vendor-profile/page"));
const BannerLeftSidebarCol3 = lazy(
  () => import("@/pages/main/banner-left-sidebar-col-3/page")
);
const Checkout = lazy(() => import("@/pages/main/checkout/page"));
const ProductLeftSidebar = lazy(
  () => import("@/pages/main/product-left-sidebar/page")
);
const ShopRightSidebarCol3 = lazy(
  () => import("@/pages/main/shop-right-sidebar-col-3/page")
);
const VendorSetting = lazy(() => import("@/pages/main/vendor-setting/page"));
const BannerLeftSidebarCol4 = lazy(
  () => import("@/pages/main/banner-left-sidebar-col-4/page")
);
const Compare = lazy(() => import("@/pages/main/compare/page"));
const ProductRightSidebar = lazy(
  () => import("@/pages/main/product-right-sidebar/page")
);
const ShopRightSidebarCol4 = lazy(
  () => import("@/pages/main/shop-right-sidebar-col-4/page")
);
const VendorSettingEdit = lazy(
  () => import("@/pages/main/vendor-setting-edit/page")
);
const BannerRightSidebar = lazy(
  () => import("@/pages/main/banner-right-sidebar/page")
);
const ContactUs = lazy(() => import("@/pages/main/contact-us/page"));
const ProfileEdit = lazy(() => import("@/pages/main/profile-edit/page"));
const TermsCondition = lazy(() => import("@/pages/main/terms-condition/page"));
const VendorUpload = lazy(() => import("@/pages/main/vendor-upload/page"));
const BannerRightSidebarCol3 = lazy(
  () => import("@/pages/main/banner-right-sidebar-col-3/page")
);
const Faq = lazy(() => import("@/pages/main/faq/page"));
const Register = lazy(() => import("@/pages/main/register/page"));
const TrackOrder = lazy(() => import("@/pages/main/track-order/page"));
const Wishlist = lazy(() => import("@/pages/main/wishlist/page"));
const BannerRightSidebarCol4 = lazy(
  () => import("@/pages/main/banner-right-sidebar-col-4/page")
);
const ForgotPassword = lazy(() => import("@/pages/main/forgot-password/page"));
const ResetPassword = lazy(() => import("@/pages/main/reset-password/page"));
const TrackOrder2 = lazy(() => import("@/pages/main/track-order-2/page"));
const Wishlist2 = lazy(() => import("@/pages/main/wishlist-2/page"));
const BlogDetailFullWidth = lazy(
  () => import("@/pages/main/blog-detail-full-width/page")
);
const Home = lazy(() => import("@/pages/main/home/page"));
const ShopFullWidthCol3 = lazy(
  () => import("@/pages/main/shop-full-width-col-3/page")
);
const UserFollow = lazy(() => import("@/pages/main/user-follow/page"));
const Wishlist3 = lazy(() => import("@/pages/main/wishlist-3/page"));
const BlogDetailLeftSidebar = lazy(
  () => import("@/pages/main/blog-detail-left-sidebar/page")
);
const ShopFullWidthCol4 = lazy(
  () => import("@/pages/main/shop-full-width-col-4/page")
);
const UserHistory = lazy(() => import("@/pages/main/user-history/page"));
const BlogDetailRightSidebar = lazy(
  () => import("@/pages/main/blog-detail-right-sidebar/page")
);
const Login = lazy(() => import("@/pages/main/login/page"));
const ShopFullWidthCol5 = lazy(
  () => import("@/pages/main/shop-full-width-col-5/page")
);
const UserInvoice = lazy(() => import("@/pages/main/user-invoice/page"));
const BlogFullWidth = lazy(() => import("@/pages/main/blog-full-width/page"));
const Orders = lazy(() => import("@/pages/main/orders/page"));
const OrderDetail = lazy(() => import("@/pages/main/orders/[id]/OrderDetail"));
const ShopFullWidthCol6 = lazy(
  () => import("@/pages/main/shop-full-width-col-6/page")
);
const UserProfile = lazy(() => import("@/pages/main/user-profile/page"));
const BlogLeftSidebar = lazy(
  () => import("@/pages/main/blog-left-sidebar/page")
);
const PrivacyPolicy = lazy(() => import("@/pages/main/privacy-policy/page"));
const ShopLeftSidebarCol3 = lazy(
  () => import("@/pages/main/shop-left-sidebar-col-3/page")
);
const VendorDashboard = lazy(
  () => import("@/pages/main/vendor-dashboard/page")
);

// const ProductFullWidth = lazy(
//   () => import("@/pages/main/product-full-width/page")
// );
// const ProductLeftSidebar = lazy(
//   () => import("@/pages/main/product-left-sidebar/page")
// );

// minimal
const Fashion = lazy(() => import("@/pages/minimal/fashion/page"));

const FashionShopLeftSidebarCol3 = lazy(() => import("@/pages/minimal/fashion-shop-left-sidebar-col-3/page"));

// modern
const FashionTwo = lazy(() => import("@/pages/modern/fashiontwo/page"));

export const mainRoutes: LayoutRouteConfig = {
  layout: MainLayout,
  routes: [
    {
      path: "/about-us",
      element: <AboutUs />,
      meta: {
        title: "about-us",
        requiresAuth: false,
      },
    },

    {
      path: "/blog-right-sidebar",
      element: <BlogRightSidebar />,
      meta: {
        title: "blog-right-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/product-according-full-width",
      element: <ProductAccordingFullWidth />,
      meta: {
        title: "product-according-full-width",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-left-sidebar-col-4",
      element: <ShopLeftSidebarCol4 />,
      meta: {
        title: "shop-left-sidebar-col-4",
        requiresAuth: false,
      },
    },

    {
      path: "/vendor-edit",
      element: <VendorEdit />,
      meta: {
        title: "vendor-edit",
        requiresAuth: true,
      },
    },

    {
      path: "/banner-full-width-col-3",
      element: <BannerFullWidthCol3 />,
      meta: {
        title: "banner-full-width-col-3",
        requiresAuth: false,
      },
    },

    {
      path: "/cart",
      element: <Cart />,
      meta: {
        title: "cart",
        requiresAuth: false,
      },
    },

    {
      path: "/product-according-left-sidebar",
      element: <ProductAccordingLeftSidebar />,
      meta: {
        title: "product-according-left-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-list-full-col-2",
      element: <ShopListFullCol2 />,
      meta: {
        title: "shop-list-full-col-2",
        requiresAuth: false,
      },
    },

    {
      path: "/vendor-list",
      element: <VendorList />,
      meta: {
        title: "vendor-list",
        requiresAuth: true,
      },
    },

    {
      path: "/banner-full-width-col-4",
      element: <BannerFullWidthCol4 />,
      meta: {
        title: "banner-full-width-col-4",
        requiresAuth: false,
      },
    },

    {
      path: "/catalog-multi-vendor",
      element: <CatalogMultiVendor />,
      meta: {
        title: "catalog-multi-vendor",
        requiresAuth: false,
      },
    },

    {
      path: "/product-according-right-sidebar",
      element: <ProductAccordingRightSidebar />,
      meta: {
        title: "product-according-right-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-list-left-sidebar",
      element: <ShopListLeftSidebar />,
      meta: {
        title: "shop-list-left-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/vendor-list-2",
      element: <VendorList2 />,
      meta: {
        title: "vendor-list-2",
        requiresAuth: true,
      },
    },

    {
      path: "/banner-left-sidebar",
      element: <BannerLeftSidebar />,
      meta: {
        title: "banner-left-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/catalog-single-vendor",
      element: <CatalogSingleVendor />,
      meta: {
        title: "catalog-single-vendor",
        requiresAuth: false,
      },
    },

    {
      path: "/product-full-width",
      element: <ProductFullWidth />,
      meta: {
        title: "product-full-width",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-list-right-sidebar",
      element: <ShopListRightSidebar />,
      meta: {
        title: "shop-list-right-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/vendor-profile",
      element: <VendorProfile />,
      meta: {
        title: "vendor-profile",
        requiresAuth: true,
      },
    },

    {
      path: "/banner-left-sidebar-col-3",
      element: <BannerLeftSidebarCol3 />,
      meta: {
        title: "banner-left-sidebar-col-3",
        requiresAuth: false,
      },
    },

    {
      path: "/checkout",
      element: <Checkout />,
      meta: {
        title: "checkout",
        requiresAuth: false,
      },
    },

    {
      path: "/product-left-sidebar",
      element: <ProductLeftSidebar />,
      meta: {
        title: "product-left-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-right-sidebar-col-3",
      element: <ShopRightSidebarCol3 />,
      meta: {
        title: "shop-right-sidebar-col-3",
        requiresAuth: false,
      },
    },

    {
      path: "/vendor-setting",
      element: <VendorSetting />,
      meta: {
        title: "vendor-setting",
        requiresAuth: true,
      },
    },

    {
      path: "/banner-left-sidebar-col-4",
      element: <BannerLeftSidebarCol4 />,
      meta: {
        title: "banner-left-sidebar-col-4",
        requiresAuth: false,
      },
    },

    {
      path: "/compare",
      element: <Compare />,
      meta: {
        title: "compare",
        requiresAuth: false,
      },
    },

    {
      path: "/product-right-sidebar",
      element: <ProductRightSidebar />,
      meta: {
        title: "product-right-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-right-sidebar-col-4",
      element: <ShopRightSidebarCol4 />,
      meta: {
        title: "shop-right-sidebar-col-4",
        requiresAuth: false,
      },
    },

    {
      path: "/vendor-setting-edit",
      element: <VendorSettingEdit />,
      meta: {
        title: "vendor-setting-edit",
        requiresAuth: true,
      },
    },

    {
      path: "/banner-right-sidebar",
      element: <BannerRightSidebar />,
      meta: {
        title: "banner-right-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/contact-us",
      element: <ContactUs />,
      meta: {
        title: "contact-us",
        requiresAuth: false,
      },
    },

    {
      path: "/profile-edit",
      element: <ProfileEdit />,
      meta: {
        title: "profile-edit",
        requiresAuth: true,
      },
    },

    {
      path: "/terms-condition",
      element: <TermsCondition />,
      meta: {
        title: "terms-condition",
        requiresAuth: false,
      },
    },

    {
      path: "/vendor-upload",
      element: <VendorUpload />,
      meta: {
        title: "vendor-upload",
        requiresAuth: true,
      },
    },

    {
      path: "/banner-right-sidebar-col-3",
      element: <BannerRightSidebarCol3 />,
      meta: {
        title: "banner-right-sidebar-col-3",
        requiresAuth: false,
      },
    },

    {
      path: "/faq",
      element: <Faq />,
      meta: {
        title: "faq",
        requiresAuth: false,
      },
    },

    {
      path: "/register",
      element: <Register />,
      meta: {
        title: "register",
        requiresAuth: false,
      },
    },

    {
      path: "/track-order",
      element: <TrackOrder />,
      meta: {
        title: "track-order",
        requiresAuth: false,
      },
    },

    {
      path: "/wishlist",
      element: <Wishlist />,
      meta: {
        title: "wishlist",
        requiresAuth: false,
      },
    },

    {
      path: "/banner-right-sidebar-col-4",
      element: <BannerRightSidebarCol4 />,
      meta: {
        title: "banner-right-sidebar-col-4",
        requiresAuth: false,
      },
    },

    {
      path: "/forgot-password",
      element: <ForgotPassword />,
      meta: {
        title: "forgot-password",
        requiresAuth: false,
      },
    },

    {
      path: "/reset-password",
      element: <ResetPassword />,
      meta: {
        title: "reset-password",
        requiresAuth: false,
      },
    },

    {
      path: "/track-order-2",
      element: <TrackOrder2 />,
      meta: {
        title: "track-order-2",
        requiresAuth: false,
      },
    },

    {
      path: "/wishlist-2",
      element: <Wishlist2 />,
      meta: {
        title: "wishlist-2",
        requiresAuth: false,
      },
    },

    {
      path: "/blog-detail-full-width",
      element: <BlogDetailFullWidth />,
      meta: {
        title: "blog-detail-full-width",
        requiresAuth: false,
      },
    },

    {
      path: "/",
      element: <Home />,
      meta: {
        title: "home",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-full-width-col-3",
      element: <ShopFullWidthCol3 />,
      meta: {
        title: "shop-full-width-col-3",
        requiresAuth: false,
      },
    },

    {
      path: "/user-follow",
      element: <UserFollow />,
      meta: {
        title: "user-follow",
        requiresAuth: false,
      },
    },

    {
      path: "/wishlist-3",
      element: <Wishlist3 />,
      meta: {
        title: "wishlist-3",
        requiresAuth: false,
      },
    },

    {
      path: "/blog-detail-left-sidebar",
      element: <BlogDetailLeftSidebar />,
      meta: {
        title: "blog-detail-left-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-full-width-col-4",
      element: <ShopFullWidthCol4 />,
      meta: {
        title: "shop-full-width-col-4",
        requiresAuth: false,
      },
    },

    {
      path: "/user-history",
      element: <UserHistory />,
      meta: {
        title: "user-history",
        requiresAuth: true,
      },
    },

    {
      path: "/blog-detail-right-sidebar",
      element: <BlogDetailRightSidebar />,
      meta: {
        title: "blog-detail-right-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/login",
      element: <Login />,
      meta: {
        title: "login",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-full-width-col-5",
      element: <ShopFullWidthCol5 />,
      meta: {
        title: "shop-full-width-col-5",
        requiresAuth: false,
      },
    },

    {
      path: "/user-invoice",
      element: <UserInvoice />,
      meta: {
        title: "user-invoice",
        requiresAuth: true,
      },
    },

    {
      path: "/blog-full-width",
      element: <BlogFullWidth />,
      meta: {
        title: "blog-full-width",
        requiresAuth: false,
      },
    },

    {
      path: "/orders",
      element: <Orders />,
      meta: {
        title: "orders",
        requiresAuth: true,
      },
    },

    {
      path: "/orders/:id",
      element: <OrderDetail />,
      meta: {
        title: "orders detail",
        requiresAuth: true,
      },
    },

    {
      path: "/shop-full-width-col-6",
      element: <ShopFullWidthCol6 />,
      meta: {
        title: "shop-full-width-col-6",
        requiresAuth: false,
      },
    },

    {
      path: "/user-profile",
      element: <UserProfile />,
      meta: {
        title: "user-profile",
        requiresAuth: true,
      },
    },

    {
      path: "/blog-left-sidebar",
      element: <BlogLeftSidebar />,
      meta: {
        title: "blog-left-sidebar",
        requiresAuth: false,
      },
    },

    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
      meta: {
        title: "privacy-policy",
        requiresAuth: false,
      },
    },

    {
      path: "/shop-left-sidebar-col-3",
      element: <ShopLeftSidebarCol3 />,
      meta: {
        title: "shop-left-sidebar-col-3",
        requiresAuth: false,
      },
    },

    {
      path: "/vendor-dashboard",
      element: <VendorDashboard />,
      meta: {
        title: "vendor-dashboard",
        requiresAuth: true,
      },
    },
  ],
};

export const minimalRoutes: LayoutRouteConfig = {
  layout: MinimalLayout,
  routes: [
    {
      path: "/fashion",
      element: <Fashion />,
      meta: {
        title: "Fashion",
        requiresAuth: false,
      },
    },
    {
      path: "/fashion-shop-left-sidebar-col-3",
      element: <FashionShopLeftSidebarCol3 />,
      meta: {
        title: "Fashion Shop Left Sidebar",
        requiresAuth: false,
      },
    },
  ],
};

export const modernRoutes: LayoutRouteConfig = {
  layout: ModernLayout,
  routes: [
    {
      path: "/fashiontwo",
      element: <FashionTwo />,
      meta: {
        title: "Fashion Two",
        requiresAuth: false,
      },
    },
  ],
};

export const noLayoutRoutes: RouteItem[] = [
  {
    path: "/not-found",
    element: <NotFound />,
    meta: {
      title: "NotFound",
      requiresAuth: false,
    },
  },
];

export const allRoutes = [mainRoutes, minimalRoutes, modernRoutes];
