import { JSX, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
  mainRoutes,
  minimalRoutes,
  modernRoutes,
  noLayoutRoutes,
} from "./routes";
import { RouteItem } from "./types/route.types";
import { Loader } from "./components/loader";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "./store/reducers/filterReducer";

// Loading component for lazy-loaded routes
const LoadingFallback = () => <Loader />;

// Auth guard component
interface ProtectedRouteProps {
  element: JSX.Element;
  meta?: {
    requiresAuth?: boolean;
  };
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, meta }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear selectedCategory when switching layouts
    dispatch(setSelectedCategory([]));
  }, [location.pathname, dispatch]);

  const isAuthenticated = localStorage.getItem("login_user") !== null; // Replace with your auth logic
  if (meta?.requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.VITE_APP_PATH || "/"}>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Main Layout Routes */}
          <Route element={<mainRoutes.layout />}>
            {mainRoutes.routes.map((route: RouteItem) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <ProtectedRoute element={route.element} meta={route.meta} />
                }
              />
            ))}
          </Route>

          {/* Minimal Layout Routes */}
          <Route element={<minimalRoutes.layout />}>
            {minimalRoutes.routes.map((route: RouteItem) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <ProtectedRoute element={route.element} meta={route.meta} />
                }
              />
            ))}
          </Route>

          {/* Modern Layout Routes */}
          <Route element={<modernRoutes.layout />}>
            {modernRoutes.routes.map((route: RouteItem) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <ProtectedRoute element={route.element} meta={route.meta} />
                }
              />
            ))}
          </Route>

          {/* Routes without Layout */}
          {noLayoutRoutes.map((route: RouteItem) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute element={route.element} meta={route.meta} />
              }
            />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
