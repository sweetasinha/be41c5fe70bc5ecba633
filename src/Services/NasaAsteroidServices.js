import http from "../HttpService/httpService";
import { API_BASE_URL } from "./../Configs/config";
import { NASA_API_KEY } from "./../Helpers/Constants";

export const GetAsteroidInfo = (id) =>
  http.get(`${API_BASE_URL}/${id}?api_key=${NASA_API_KEY}`);

export const GetRandomAsteroidInfo = () =>
  http.get(`${API_BASE_URL}/browse?api_key=DEMO_KEY`);
