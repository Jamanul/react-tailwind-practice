const NavPath = ({navPath}) => {

    return (
        <li className="mr-6">
            <a href={navPath.path}>{navPath.name}</a>
        </li>
    );
};

export default NavPath;