import { useEffect } from "react";
import EnrolCourse from "./EnrolCourse";
import StudentDashboardProfile from "./StudentDashboardProfile";

const StudentDashboardContent = () => {
  useEffect(() => {
    // Inject Botpress chatbot script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "https://mediafiles.botpress.cloud/48256a3c-04c9-44dc-bfa3-af660f1609fb/webchat/v2.1/config.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <StudentDashboardProfile />

      <div className="flex justify-center mt-11 mb-8">
        {/* Added mb-8 for the gap */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-8xl p-4">
          <div className="text-center text-2xl text-blue-500 font-bold">
            Subscribed Courses

          </div>
        </div>
      </div>
     
      <EnrolCourse />
    </div>
  );
    return (
      <div>
        <StudentDashboardProfile></StudentDashboardProfile>
        <div className="text-center text-2xl text-orange-500  font-bold mt-11">Enrol Courses</div>
        <EnrolCourse></EnrolCourse>
      </div>
    );

};

export default StudentDashboardContent;
