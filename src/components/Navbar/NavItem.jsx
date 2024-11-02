import { NavLink } from "react-router-dom";

const NavItem = ({to, name}) => {
    return (<NavLink
        to={to}
        className={({isActive})=> "border hover:bg-white hover:text-prime px-5 py-3 text-lg hover:border-prime mx-1 " + (isActive ? 'border-prime rounded-lg font-semibold text-prime' : "text-desc border-white")}
    >
        {name}
    </NavLink>);
};

export default NavItem;