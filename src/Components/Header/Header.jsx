import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="md:flex justify-between items-center">
            <h1 className="text-3xl font-extrabold"> <span className="text-blue-400">Phone</span> <span className="text-fuchsia-500">Market</span></h1>
            <div>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to='/' 
                        className={({isActive})=>isActive?"bg-slate-300 p-1 rounded-md":''}
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorites' 
                        className={({isActive})=>isActive?'bg-slate-300 p-1 rounded-md':''}
                        > Favorites </NavLink>
                    </li>
                    <li>
                        <NavLink to='login'
                        className={({isActive})=>isActive?'bg-slate-300 p-1 rounded-md':''}>Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;