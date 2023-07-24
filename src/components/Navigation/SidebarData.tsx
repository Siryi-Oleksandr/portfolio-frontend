import {  AiOutlineHome, AiOutlineSearch, AiFillFolderOpen, AiOutlineContacts } from 'react-icons/ai';
import { BiCabinet} from 'react-icons/bi'
import { SidebarItem } from 'types/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome size="25px" />,
        
      
    },
    {
        title: 'Search',
        path: '/search',
        icon: <AiOutlineSearch size="25px"  />
    },
    {
        title: 'Cabinet',
        path: '/cabinet',
        icon: <BiCabinet size="25px" />
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <AiFillFolderOpen size="25px" />
    },
   
    {
        title: 'Contacts',
        path: '/contacts',
        icon: <AiOutlineContacts size="25px" />
    }
];