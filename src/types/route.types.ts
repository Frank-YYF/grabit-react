import { ComponentType, JSX } from "react";

export interface RouteItem {
  path: string;
  element: JSX.Element;
  children?: RouteItem[];
  title?: string;
  isPrivate?: boolean;
  meta?: MetaData;
}

export interface LayoutRouteConfig {
  layout: ComponentType;
  routes: RouteItem[];
}

export interface MetaData {
  title: string;
  description?: string;
  requiresAuth?: boolean;
}
