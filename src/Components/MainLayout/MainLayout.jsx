import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;