import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { menuImg, etherImg } from '../assets/images';
import MainFooter from '../components/MainFooter/MainFooter';
import Menu from '../components/Menu';
import WalletMenu from '../components/WalletMenu/WalletMenu';
import s from '../styles/main.module.css';

const Main = () => {

    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isWalletBoxOpen, setIsWalletBoxOpen] = useState(false);

    const WrapperWithBackground = styled.div`
        width: 100%;
        height: 100vh;
        background: conic-gradient(#895c98, #dc4b1b, #5464e4, #895c98);
    `;

    const NavigationBarWrapper = styled.div`
        width: 100%;
        height: 100px;
        line-height: 100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    const LogoText = styled.div`
        font-size: 2rem;
        color: white;
        font-family: 'Audiowide';
        margin-right: 8.5vw;
    `;

    const MenuWrapper = styled.div`
        display: flex;
        width: 50%;
        justify-content: center;
        margin-right: 5vw;
    `;

    const MenuItem = styled.div`
        font-size: 1rem;
        color: white;
        font-family: 'Montserrat Bold';
        margin-right: 5vw;
    `;

    const WalletBtn = styled.div`
        width: 135px;
        height: 35px;
        background-color: white;
        border-radius: 50px;
        margin-top: 33px;
        display: flex;
        line-height: 40px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;

    const GradientText = styled.div`
        background: linear-gradient(to top left, #895c98, #dc4b1b, #5464e4, #895c98);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-family: 'Audiowide';
        font-size: 0.95rem;
    `;

    const WalletImage = styled.img`
        width: 23px;
        height: 23px;
        display: block;
        margin-right: 8px;
    `;

    const MenuImage = styled.img`
        width: 30px;
        height: 30px;
        display: block;
        margin-top: 35px;
        margin-right: 15px;
        cursor: pointer;
    `;

    const fadeIn = keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    `;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

    const DarkBg = styled.div`
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        visibility: ${!isMenuOpened && !isWalletBoxOpen ? 'hidden' : 'visible'};
        animation-duration: 0.25s;
        animation-timing-function: ease-out;
        animation-name: ${fadeIn};
        animation-fill-mode: forwards;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const openMenu = async () => {
        setIsMenuOpened(!isMenuOpened);
    }

    const openWalletMenu = async () => {
        setIsWalletBoxOpen(!isWalletBoxOpen);
    }

    return (
        <>
            <WrapperWithBackground>
                <NavigationBarWrapper>
                    <LogoText>SKKRYPTO</LogoText>
                    <MenuWrapper>
                        <MenuItem>PROJECT</MenuItem>
                        <MenuItem>POLLING</MenuItem>
                        <MenuItem>PROPOSALS</MenuItem>
                        <MenuItem>ABOUT</MenuItem>
                    </MenuWrapper>
                    <MenuImage src={menuImg} onClick={openMenu} />
                    <WalletBtn onClick={openWalletMenu}>
                        <WalletImage src={etherImg} />
                        <GradientText>WALLET</GradientText>
                    </WalletBtn>
                </NavigationBarWrapper>
                <div className={s.small_h}>Decentralized Autonomous Organization</div>
                <div class={s.title}>SKKRYPTO DAO</div>
                <div className={s.btn_wrapper}>
                    <div class={s.join_btn}>Join us!</div>
                </div>
            </WrapperWithBackground>
            <MainFooter />
            <DarkBg>
                <Menu isOpened={isMenuOpened} changeIsOpened={openMenu} />
                <WalletMenu isOpened={isWalletBoxOpen} changeIsOpened={openWalletMenu} />
            </DarkBg>
        </>
    )
}   

export default Main;