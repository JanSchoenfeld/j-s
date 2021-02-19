import { Link } from "react-router-dom";

function SidebarElement(props) {
    return (
        <Link className={props.class + ' text-white m-6 mr-4 ml-4 font-mono'} to={props.link}>{props.name}</Link>
        );
}

export default SidebarElement;