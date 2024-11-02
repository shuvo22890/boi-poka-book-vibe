import NavItem from "./NavItem";

const Links = () => {
    return (<>
        <li>
            <NavItem to="/" name="Home"/>
        </li>

        <li>
            <NavItem to="/listed-books" name="Listed Books"/>
        </li>

        <li>
            <NavItem to="/pages-to-read" name="Pages to Read"/>
        </li>
    </>);
};

export default Links;