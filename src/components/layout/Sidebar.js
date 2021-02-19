import SidebarElement from './SidebarElement';

const firstElementStyle = 'text-2xl mt-16';
const lastElementStyle = 'mb-16';

function Sidebar() {
    return (
            <div className="flex flex-col w-1/6 min-h-screen text-center justify-between bg-indigo-500">
                <SidebarElement class={firstElementStyle} name='Jan Schönfeld' link='/' />
                <SidebarElement name='About me' link='/about-me' />
                <SidebarElement name='Experience' link='/experiences' />
                <SidebarElement name='Technologies' link='/technologies' />
                <SidebarElement class={lastElementStyle} name='Contact' link="/contact" />
            </div>
    );
}

export default Sidebar;