import { SlLogout} from 'react-icons/sl';
import { AuthIcon, BtnText } from './login.styled';
import { IconContext } from 'react-icons';

const LogoutBtn = () => { 
    return (
        <IconContext.Provider value={{ className: "slider-icons" }}>
            <AuthIcon to="login">
                <SlLogout  size="20px"/>
                <BtnText>LogOut</BtnText>
            </AuthIcon>
        </IconContext.Provider>
        
    )
}

export default LogoutBtn;