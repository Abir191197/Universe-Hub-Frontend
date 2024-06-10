import { Outlet } from "react-router-dom";
import STdashboard from "../../components/Student/Dashboard/STdashboard";




const StudentDash = () => {
    return (
        <div className=" ">
            {/* if want to change full body color bg here */}
        <STdashboard></STdashboard>
        <Outlet></Outlet>
      </div>
    );
};

export default StudentDash;