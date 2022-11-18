import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MailIcon } from '../assets/images/mail.svg';
import { ReactComponent as PwIcon } from '../assets/images/pw.svg';
import { LoginIcon } from '../assets/images';

const Login = () => {

    const inputStyle = {
        background: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '15px',
        display: 'block',
        width: '370px',
        height: '55px',
        border: 'none',
        outline: 'none',
        marginBottom: '15px',
        fontFamily: 'Montserrat Light',
        color: 'white',
        paddingLeft: '55px',
        fontSize: '1rem'
    }

    const IconWrapper = {
        position: 'relative'
    }

    const IconStyle = {
        position: 'absolute',
        top: '20px',
        left: '20px'
    }

    const LoginImgStyle = {
        width: '18px',
        height: '18px',
        marginLeft: '5px'
    }
    return (
        <>
            <WrapperWithBackground>
                <LogoText>SKKRYPTO</LogoText>
                <InputWrapper>
                    <div style={IconWrapper}>
                        <MailIcon style={IconStyle} />
                        <input style={inputStyle} placeholder="example@gmail.com" />
                    </div>
                    <div style={IconWrapper}>
                        <PwIcon style={IconStyle} />
                        <input style={inputStyle} placeholder="Password" type="password" />
                    </div>
                    <LoginBtn><GradientText>LOG IN</GradientText> <img src={LoginIcon} style={LoginImgStyle} /></LoginBtn>
                </InputWrapper>
                <div style={{fontFamily: 'Montserrat Light', color: 'white', marginTop: '50px'}}>Don't have a account?<span style={{fontFamily: 'Montserrat SemiBold', marginLeft: '10px'}}>Sign up</span></div>
                <div style={{fontFamily: 'Montserrat SemiBold', color: 'white', marginTop: '10px'}}>Forgot password?</div>
            </WrapperWithBackground>
        </>
    );
}

export default Login;

const WrapperWithBackground = styled.div`
    width: 100%;
    height: 100vh;
    background: conic-gradient(from 155.95deg at 50% 50%, #DD4B19 -16.67deg, #5265E9 118.12deg, #DD4B19 343.33deg, #5265E9 478.12deg);
    background-blend-mode: darken;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LogoText = styled.div`
    font-size: 45px;
    color: white;
    font-family: 'Audiowide';
    margin-bottom: 20px;
`;

const InputWrapper = styled.div`
    width: 450px;
    height: 250px;
    background: conic-gradient(from 160.79deg at 48.73% 39.55%, #DD4B19 -16.67deg, #5265E9 118.12deg, #DD4B19 343.33deg, #5265E9 478.12deg);
    background-blend-mode: darken;
    box-shadow: 2px 3px 70px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginBtn = styled.div`
    width: 150px;
    height: 40px;
    background-color: white;
    border-radius: 30px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GradientText = styled.div`
    background: conic-gradient(from 155.95deg at 50% 50%, #DD4B19 -16.67deg, #5265E9 118.12deg, #DD4B19 343.33deg, #5265E9 478.12deg);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-family: 'Montserrat Bold';
    font-size: 0.95rem;
`;