import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { GithubApiContext } from "../context/GithubApiContext";
// import { MemoizedGoX } from "../../public/memoizedIcons";
import ProfileSidebar from "./profilesidebar";
import RepositorySection from "./RepositorySection";
import WelcomePage from "./welcomepage";
import LoadingModal from "./LoadingModal";


function Body() {
  const { userData, token, repoData } =
    useContext(GithubApiContext);
  const [isLoading, setIsLoading] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    if (userData && token) {
      setIsLoading(true);
      controls.set("hidden");
      controls.start("visible").then(() => setIsLoading(false));
    }
  }, [userData, token, controls]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <main className="app-main">
      <AnimatePresence>
        {isLoading && <LoadingModal />}
      </AnimatePresence>
      {userData && token ? (
        <motion.div
          className="app-main-container"
          initial="hidden"
          animate={controls}
          variants={fadeIn}
        >
          {userData && <ProfileSidebar />}
          {repoData && <RepositorySection />}
        </motion.div>
      ) : (
        <WelcomePage />
      )}
    </main>
  );
}

export default Body;
