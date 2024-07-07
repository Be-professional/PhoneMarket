import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="md:flex justify-between items-center shadow-2xl p-2">
            <h1 className="text-3xl font-extrabold"> <span className="text-blue-400">Phone</span> <span className="text-light-green-600">Market</span></h1>
            <div>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to='/' 
                        className={({isActive})=>isActive?"bg-blue-gray-300 p-1 rounded-md":''}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorites' 
                        className={({isActive})=>isActive?'bg-blue-gray-300 p-1 rounded-md':''}
                        > Favorites </NavLink>
                    </li>
                    <li>
                        <NavLink to='login'
                        className={({isActive})=>isActive?'bg-blue-gray-300 p-1 rounded-md':''}>Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;