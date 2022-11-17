import React from 'react';
import styled from 'styled-components';
import { DefaultInput } from '../styles/Elements/DefaultInput';

const SignUp = () => {

    const WrapperWithBackground = styled.div`
        width: 100%;
        height: 100vh;
        background: conic-gradient(#895c98, #dc4b1b, #5464e4, #895c98);
    `;
    const LogoText = styled.div` 
    position: absolute;
    left: 30%;
    right: 30%;
    top: 200px;
    font-family: 'Audiowide';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 82px;
    text-align: center;
    color: #FFFFFF;
    `;
    const SignUpBox = styled.div` 
    position: absolute;
    left: 30%;
    right: 30%;
    top: 300px;
    bottom: 7.06%;
    background: conic-gradient(from 160.79deg at 48.73% 39.55%, #DD4B19 -16.67deg, #5265E9 118.12deg, #DD4B19 343.33deg, #5265E9 478.12deg);
    background-blend-mode: darken;
    box-shadow: 2px 3px 70px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    text-align: center;
    `;
    const Email = styled(DefaultInput)`
    width: 70%;
    height: 80px;
    margin-top: 30px;
    `;
    const Password = styled(DefaultInput)`
    width: 70%;
    height: 80px;
    margin-top: 20px;
    `;
    const SignUpButton = styled.button`
    background: #FFFFFF;
    border-radius: 30px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-blend-mode: darken;
    width: 30%;
    height: 50px;
    margin-top: 40px;
    `;
    return (
        <>
          <WrapperWithBackground>
            <LogoText>SKKRYPTO</LogoText>
            <SignUpBox>
                <Email></Email>
                <Password></Password><br></br>
                <SignUpButton>Sign Up</SignUpButton>
            </SignUpBox>
          </WrapperWithBackground>
        </>
    )
}   

export default SignUp;