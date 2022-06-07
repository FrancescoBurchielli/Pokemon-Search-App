import { AxiosResponse } from "axios";
import axiosInstance from "./index";

export const fetchPokemon = async (name: string): Promise<AxiosResponse> => {
  return await axiosInstance.get(name + "/");
};
