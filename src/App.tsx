import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import useApiHook from "./components/context/useApiHook";
import { ImSpinner2 } from "react-icons/im";

const App = () => {
  const { error, isLoading } = useApiHook();
  return (
    <div className="App">
      <Navbar />
      {!error && !(isLoading.isRepoLoading || isLoading.isUserLoading) && (
        <ProfilePage />
      )}
      {error && (
        <div className="app-main text-3xl justify-center items-center text-red-500 bg-[rgba(255,0,0,.05)]">
          {error}
        </div>
      )}
      {(isLoading.isRepoLoading || isLoading.isUserLoading) && (
        <div className="app-main text-3xl justify-center items-center text-blue-500 bg-[rgba(0,0,255,.05)]">
          <div className="mr-3">
            <ImSpinner2 className="animate-spin" />
          </div>{" "}
          Loading...
        </div>
      )}
      <Footer />
    </div>
  );
};
export default App;
