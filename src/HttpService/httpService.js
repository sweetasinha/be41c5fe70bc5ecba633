import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (expectedError) {
      if (!error.response?.data?.success && error.response?.data?.message) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("An unwanted error occurred");
    }
  }
);

export default {
  get: axios.get,
  post: axios.post,
};
