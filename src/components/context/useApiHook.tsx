import { useContext } from "react";
import { ApiContext, ApiContextProps } from "./ApiProvider";

const useApiHook = () => {
  const context = useContext(ApiContext) as ApiContextProps;
  return context;
};

export default useApiHook;