import SidebarElement from './sidebarElement';
import SidebarType from './sidebarType';

export default function sidebar() {
  return (
    <>
      <div className='sidebar'>
        <SidebarElement />
        <SidebarType />
      </div>
    </>
  );
}
