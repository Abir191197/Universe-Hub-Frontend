import { baseApi } from "../../api/baseApi";

const getAllCourseAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: ({ page, limit }) => ({
        url: `/courses?page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCoursesQuery } = getAllCourseAPI;
