import cacheKey from "../../Constant/chechKey";
import { useQuery } from "@tanstack/react-query";
import { getAuth } from "../../Service/auth";

export const useGetAuth = (user:{username:string,password:string}) => useQuery([cacheKey.auth,user],getAuth)