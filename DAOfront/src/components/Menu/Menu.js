import React from 'react';
import styled from 'styled-components';
import { cancelImg, accountImg } from '../../assets/images';
import s from '../../styles/main.module.css';

const Menu = ({isOpened, changeIsOpened}) => {

    const MenuWrapper = styled.div`
        position: absolute;
        right: 0;
        width: 300px;
        height: 100vh;
        background: linear-gradient(#5464e4 10%, #895c98 40%, #dc4b1b 90%);
        visibility: ${isOpened ? 'visible' : 'hidden'};
    `;

    const XImg = styled.img`
        position: absolute;
        top: 30px;
        right: 30px;
        width: 25px;
        height: 25px;
        display: block;
        cursor: pointer;
    `;
    return (
        <>
            <MenuWrapper>
                <XImg src={cancelImg} onClick={changeIsOpened} />
                <div className={s.wrapper_for_layout}>
                    <div className={s.menutitle}>SKKRYPTO</div>
                    <div class={s.acc_btn}>
                        <img src={accountImg} className={s.acc_img} />
                        Account
                    </div>
                    <div class={s.line}></div>
                </div>
                <div class={s.menu_item_wrapper}>
                    <div className={s.menu_item}><span style={{fontSize: "1rem"}}>🦄</span> APPLY</div>
                    <div className={s.menu_item}><span style={{fontSize: "1rem"}}>💁🏻‍♀️</span> FAQs</div>
                    <div className={s.menu_item}>PROJECTS</div>
                    <div className={s.menu_item}>POLLING</div>
                    <div className={s.menu_item}>PROPOSALS</div>
                    <div className={s.menu_item}>ABOUT</div>
                </div>
            </MenuWrapper>
        </>
    );
}

export default Menu;