import ultronClient from "./axiosClient";
import { apiRoutes } from ".";

export const getProducts:React.FC = () => ultronClient.get(apiRoutes.product);
