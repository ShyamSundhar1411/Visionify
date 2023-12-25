import { Outlet } from "react-router-dom";
import NavBarComponent from "../components/NavBarComponent";
const HomeLayout = () => {
    return (
        <div>
            <NavBarComponent />
            <Outlet/>
        </div>
    );
}

export default HomeLayout;