function SidebarElement(props) {
    return (
        <a className={props.class + ' text-white m-6 mr-4 ml-4 font-mono'} href={props.link}>{props.name}</a>
        );
}

export default SidebarElement;