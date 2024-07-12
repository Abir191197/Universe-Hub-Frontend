import { baseApi } from "../../api/baseApi";

const getWhoLogInAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWhoLogIn: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetWhoLogInQuery } = getWhoLogInAPI; 