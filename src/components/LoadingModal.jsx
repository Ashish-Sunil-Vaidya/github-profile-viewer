import { motion } from "framer-motion";

function LoadingModal() {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.1 } },
  };

  return (
    <motion.div
      className="loading-modal"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
    >
      Loading...
    </motion.div>
  );
}

export default LoadingModal;
