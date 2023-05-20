import { Provider } from "react-redux";
import { store } from "./store";

export const Proveedor = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
