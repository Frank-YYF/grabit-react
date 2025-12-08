import { useNavigate } from "react-router-dom";

export default function RootPage() {
  const navigate = useNavigate();
  navigate("/home");
  // This component will never actually render anything
  // because it immediately redirects to the main home page
  return null;
}
