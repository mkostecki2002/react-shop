import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function LoadingOverlay() {
  const { isLoading } = useContext(AppContext);
  if (!isLoading) return null;
  return (
    <div className="loading-overlay">
      <div className="spinner">Loading</div>
    </div>
  );
}
export default LoadingOverlay;
