import ultronClient from "./axiosClient";
import { apiRoutes } from ".";

export const getProducts = () => ultronClient.get(apiRoutes.product);
