/* eslint-disable @typescript-eslint/no-explicit-any */

import AllCourseCard from "../../components/AllCourseCard";
import { useGetAllCoursesQuery } from "../../redux/features/Student Management/getAllCourseAPI";

const AllCourses = () => {
  const { data, error, isLoading } = useGetAllCoursesQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading courses</div>;
  }

  return (
    <div className="grid grid-cols-3grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {data?.data?.map((courses: any) => (
        <AllCourseCard key={courses?._id} courses={courses} />
      ))}
    </div>
  );
};

export default AllCourses;
