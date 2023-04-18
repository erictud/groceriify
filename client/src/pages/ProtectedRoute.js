import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/layout/LoadingSpinner";
import { useAppContext } from "../context/appContext";

export default function ProtectedRoute({ children }) {
  const { isLoadingUserData, user } = useAppContext();
  if (isLoadingUserData)
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );

  if (!user) {
    return <Navigate to="/auth" />;
  }
  return children;
}
