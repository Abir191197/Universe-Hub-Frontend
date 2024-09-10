import EnrolCourse from "./EnrolCourse";
import StudentDashboardProfile from "./StudentDashboardProfile";

const StudentDashboardContent = () => {
  return (
    <div>
      <StudentDashboardProfile />

      <div className="flex justify-center mt-11 mb-8"> {/* Added mb-8 for the gap */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-8xl p-4">
          <div className="text-center text-2xl text-blue-500 font-bold">
            Subscribed Courses
            <body>
            <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/48256a3c-04c9-44dc-bfa3-af660f1609fb/webchat/v2.1/config.js"></script>

            </body>
            
          </div>
        </div>
      </div>
     
      <EnrolCourse />
    </div>
  );
};

export default StudentDashboardContent;
