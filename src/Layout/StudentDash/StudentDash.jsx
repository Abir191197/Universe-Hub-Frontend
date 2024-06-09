import { Outlet } from "react-router-dom";
import STdashboard from "../../components/Student/Dashboard/STdashboard";




const StudentDash = () => {
    return (
        <div>
          <STdashboard></STdashboard>
            <Outlet></Outlet>
            
        </div>
    );
};

export default StudentDash;