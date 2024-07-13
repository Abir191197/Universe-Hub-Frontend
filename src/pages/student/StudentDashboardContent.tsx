import EnrolCourse from "./EnrolCourse";
import StudentDashboardProfile from "./StudentDashboardProfile";

const StudentDashboardContent = () => {
    return (
      <div>
        <StudentDashboardProfile></StudentDashboardProfile>
        <div className="text-center text-2xl text-orange-500  font-bold mt-11">Enrol Courses</div>
        <EnrolCourse></EnrolCourse>
      </div>
    );
};

export default StudentDashboardContent;