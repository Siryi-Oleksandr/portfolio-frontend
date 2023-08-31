import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
// import { BiCabinet } from 'react-icons/bi';
import { SidebarItem } from 'types/SidebarItem';
import { HiOutlineSparkles } from 'react-icons/hi';

export const SidebarData: SidebarItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <AiOutlineHome size="25px" />,
  },
  {
    title: 'Search',
    path: '/search',
    icon: <AiOutlineSearch size="25px" />,
  },
  {
    title: 'Subscription',
    path: '/subscription',
    icon: <HiOutlineSparkles size="25px" />,
  },
  // {
  //   title: 'Cabinet',
  //   path: '/cabinet',
  //   icon: <BiCabinet size="25px" />,
  // },
  // {
  //   title: 'Portfolio',
  //   path: '/portfolio/:userId',
  //   icon: <AiFillFolderOpen size="25px" />,
  // },
];
