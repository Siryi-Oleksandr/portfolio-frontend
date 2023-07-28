import { HiUserAdd} from 'react-icons/hi';
import { AuthIcon, BtnText } from './login.styled';
import { IconContext } from 'react-icons';


const RegisterBtn = () => { 
    return (
        <IconContext.Provider value={{ className: "slider-icons" }}>
            <AuthIcon to="register">
                <HiUserAdd size="20px" />
                <BtnText>SignUp</BtnText>
            </AuthIcon>
        </IconContext.Provider>
        
    )
}

export default RegisterBtn;