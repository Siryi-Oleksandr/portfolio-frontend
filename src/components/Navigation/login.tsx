import { SlLogin} from 'react-icons/sl';
import { AuthIcon } from './login.styled';
import { IconContext } from 'react-icons';


const LoginBtn = () => { 
    return (
        <IconContext.Provider value={{ className: "slider-icons" }}>
            <AuthIcon to="login">
                <SlLogin size="24px"/>
            </AuthIcon>
        </IconContext.Provider>
        
    )
}

export default LoginBtn;