import React from 'react';
import styled from 'styled-components';
import { metamaskImg, walletconnectImg, walletlinkImg, cancelImg2 } from '../../assets/images';
import s from '../../styles/main.module.css';
import Web3 from 'web3';

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

    //--------------------Wallet Connect Functions-----------------------//
    // 1. Connect to metamask
    async function connectToMetamask() {
        if (window.ethereum) {
           await window.ethereum.request({ method: "eth_requestAccounts" });
           window.web3 = new Web3(window.ethereum);
           const account = web3.eth.accounts;
           //Get the current MetaMask selected/active wallet
           const walletAddress = account.givenProvider.selectedAddress;
           console.log(`Wallet Address : ${walletAddress}`);
        
        } else {
            console.log("No wallet");
        }
    }
    

    return (
        <>
            <MenuWrapper>
                <div className={s.wallet_fir_box} onClick={() => {connectToMetamask()}}>
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