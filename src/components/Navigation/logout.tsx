import { SlLogout} from 'react-icons/sl';
import { NavIcon } from './Sidebar.styled';
import { IconContext } from 'react-icons';

const LogoutBtn = () => { 
    return (
        <IconContext.Provider value={{ className: "slider-icons" }}>
            <NavIcon to="login">
                <SlLogout />
            </NavIcon>
        </IconContext.Provider>
        
    )
}

export default LogoutBtn;