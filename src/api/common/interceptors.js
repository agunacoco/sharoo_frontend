import userStore from "../../store/modules/user";

function setInterceptors(instance) {
  instance.interceptors.request.use(
    function (config) {
      // 요청 보내기 전에 헤더에 토큰 넣어줌
      config.headers.Authorization = `Bearer ${userStore.state.accessToken}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      if (error.response.status === 401) {
        if (error.response.data.message === "TokenExpired") {
          const {
            data: { accessToken },
          } = await instance.post("/users/refreshToken");

          // vuex에 access token 갱신
          userStore.state.accessToken = accessToken;
          return instance(error.config);
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

export default setInterceptors;
