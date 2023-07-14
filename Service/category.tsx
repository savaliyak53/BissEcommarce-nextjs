import ultronClient from "./axiosClient";
import { apiRoutes } from ".";

export const getCategories: React.FC = () =>
  ultronClient.get(apiRoutes.categories);
