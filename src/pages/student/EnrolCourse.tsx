import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { useGetAllCoursesQuery } from "../../redux/features/Student Mangment/getAllCourseAPI";
 // Corrected the import path

const EnrolCourse = () => {
  const { data, error, isLoading } = useGetAllCoursesQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading courses</div>;
  }

  return (
    <div>
      {data?.data?.length > 0 ? (
        <ul>
          {data.data.map(
            (course: {
              _id: Key | null | undefined;
              courseName:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | null
                | undefined;
              createdAt: string | number | Date;
              updatedAt: string | number | Date;
            }) => (
              <li key={course._id}>
                <h3>{course.courseName}</h3>
                <p>Created At: {new Date(course.createdAt).toLocaleString()}</p>
                <p>Updated At: {new Date(course.updatedAt).toLocaleString()}</p>
              </li>
            )
          )}
        </ul>
      ) : (
        <div>No courses available</div>
      )}
    </div>
  );

};

export default EnrolCourse;
