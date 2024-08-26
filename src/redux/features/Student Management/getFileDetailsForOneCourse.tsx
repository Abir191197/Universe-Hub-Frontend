import { baseApi } from "../../api/baseApi"; // Adjust the import path as needed

const courseFilesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFilesForCourse: builder.query({
      query: (courseId) => ({
        url: `/files-Upload/CourseFile/${courseId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFilesForCourseQuery } = courseFilesApi;
