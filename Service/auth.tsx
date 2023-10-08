import ultronClient from "./axiosClient";
import { apiRoutes } from ".";

export const getAuth:React.FC = ({queryKey}:any) => ultronClient.post(apiRoutes.authentication,queryKey[1])    