import React from 'react';
import styled from 'styled-components';
import { metamaskImg, walletconnectImg, walletlinkImg, cancelImg2 } from '../../assets/images';
import s from '../../styles/main.module.css';

const WalletMenu = ({isOpened, changeIsOpened}) => {
    const MenuWrapper = styled.div`
        width: 400px;
        height: 550px;
        background: #3e464b;
        visibility: ${isOpened ? 'visible' : 'hidden'};
        border-radius: 10px;
    `;

    const Image = styled.img`
        width: 25px;
        height: 25px;
        margin-top: 30px;
        visibility: ${isOpened ? 'visible': 'hidden'};
        cursor: pointer;
    `;

    return (
        <>
            <MenuWrapper>
                <div className={s.wallet_fir_box}>
                    <div class={s.wallet_menu_wrapper}>
                        <img src={metamaskImg} className={s.wallet_menu_img} />
                        <div className={s.wallet_menu_big_text}>MetaMask</div>
                        <div className={s.wallet_menu_small_text}>Connect to your MetaMask Wallet</div>
                    </div>
                </div>
                <div className={s.wallet_sec_box}>
                    <div class={s.wallet_menu_wrapper}>
                        <img src={walletconnectImg} className={s.wallet_menu_img} />
                        <div className={s.wallet_menu_big_text}>WalletConnect</div>
                        <div className={s.wallet_menu_small_text}>Scan with WalletConnect to connect</div>
                    </div>
                </div>
                <div className={s.wallet_thr_box}>
                    <div class={s.wallet_menu_wrapper}>
                        <img src={walletlinkImg} className={s.wallet_menu_img} />
                        <div className={s.wallet_menu_big_text}>WalletLink</div>
                        <div className={s.wallet_menu_small_text}>Scan with WalletLink to connect</div>
                    </div>
                </div>
                
            </MenuWrapper>
            <Image src={cancelImg2} onClick={changeIsOpened} />
        </>
    );
}

export default WalletMenu;