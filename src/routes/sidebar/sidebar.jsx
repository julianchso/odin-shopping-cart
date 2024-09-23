import SidebarElement from './sidebarElement';
import SidebarType from './sidebarType';

export default function Sidebar() {
  return (
    <>
      <div className='sidebar'>
        <SidebarElement />
        <SidebarType />
      </div>
    </>
  );
}
