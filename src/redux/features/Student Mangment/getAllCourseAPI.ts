import { baseApi } from "../../api/baseApi";

const getAllCourseAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => ({
        url: "/courses",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCoursesQuery } = getAllCourseAPI; // Adjusted the export name to match the query name
