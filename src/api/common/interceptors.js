import { store } from "@/store/index";
import { getAuthFromCookie } from "@/utils/cookies.js";

export function setInterceptors(instance) {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      // console.log(config);
      console.log(config);
      config.headers.Authorization =
        store.getters["userToken"] || getAuthFromCookie();
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      // 재요청인데
      return Promise.reject(error);
    }
  );
  return instance;
}
