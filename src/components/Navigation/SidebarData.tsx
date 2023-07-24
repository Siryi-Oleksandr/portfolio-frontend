import {AiOutlineHistory,AiOutlineHome} from 'react-icons/ai';
import { FaCog, FaOpencart } from 'react-icons/fa';
import { SidebarItem } from 'types/SidebarItem';

export const SidebarData: SidebarItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiOutlineHome />,
        
      
    },
    {
        title: 'Search',
        path: '/search',
        icon: <FaOpencart />
    },
    {
        title: 'Cabinet',
        path: '/cabinet',
        icon: <AiOutlineHistory />
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <FaCog />
    },
    {
        title: 'About',
        path: '/about',
        icon: <FaCog />
    },
    {
        title: 'Contacts',
        path: '/contacts',
        icon: <FaCog />
    }
];