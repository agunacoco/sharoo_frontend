function setInterceptors(instance) {
    instance.interceptors.request.use(
      function (config) {
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
              const { status } = await instance.post("/users/refreshToken");
              if (status === 200) {
                  return instance(error.config);
              }
          }
        }
        return Promise.reject(error);
      }
    );
  
    return instance;
  }
  
  export default setInterceptors;
  