import Repositories from "../components/Repositories";
import Sidebar from "../components/Sidebar";
import useApiHook from "../components/context/useApiHook";
import StarterPage from "./StarterPage";
const ProfilePage = () => {
  const { userData, repoData, token } = useApiHook();

  return (
    <div className="app-main">
      {(userData || repoData) && token && (
        <div className="app-main-container">
          {userData && <Sidebar />}
          {repoData && <Repositories />}
        </div>
      )}
      {!((userData || repoData) && token) && <StarterPage />}
    </div>
  );
};
export default ProfilePage;
