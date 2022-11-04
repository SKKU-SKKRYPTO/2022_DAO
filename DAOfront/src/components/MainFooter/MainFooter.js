import React from 'react';
import styled from 'styled-components';
import { elispeImg, discordIcon, twitIcon, facebookIcon, youtubeIcon, githubIcon } from '../../assets/images';

const MainFooter = () => {

    const FooterWapper = styled.div`
        width: 100%;
        height: 330px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background-image: url(${elispeImg});
        background-position: bottom 0px right 0px;
        background-size: 750px 350px;
        background-repeat: no-repeat;
    `;

    const Image = styled.img`
        width: 750px;
        height: 350px;
        position: absolute;
        right: 0;
    `;

    const FooterMenuWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    `;

    const TitleText = styled.div`
        font-family: 'Montserrat SemiBold';
        font-size: 1rem;
    `;

    const ContentText = styled.div`
        font-family: 'Montserrat Medium';
        font-size: 0.9rem;
        margin-top: 15px;
    `;

    const Icon = styled.img`
        width: 20px;
        height: 20px;
        margin-right: 15px;
        margin-top: 15px;
    `;
    return (
        <>
            <FooterWapper>
                {/*<Image src={elispeImg} />*/}
                <FooterMenuWrapper>
                    <TitleText>Official Community Channels</TitleText>
                    <div>
                        <Icon src={discordIcon} />
                        <Icon src={twitIcon} />
                        <Icon src={facebookIcon} />
                        <Icon src={youtubeIcon} />
                        <Icon src={githubIcon} />
                    </div>
                </FooterMenuWrapper>
                <FooterMenuWrapper>
                    <TitleText>Projects</TitleText>
                    <ContentText>Forum</ContentText>
                    <ContentText>Operational Manual</ContentText>
                    <ContentText>Governance FAQs</ContentText>
                    <ContentText>GovTracking Sheet</ContentText>
                    <ContentText>Monthly Gov Cycle</ContentText>
                    <ContentText>Weekly Gov Cycle</ContentText>
                </FooterMenuWrapper>
                <FooterMenuWrapper>
                    <TitleText>Polling</TitleText>
                    <ContentText>Forum</ContentText>
                    <ContentText>Operational Manual</ContentText>
                    <ContentText>Governance FAQs</ContentText>
                    <ContentText>GovTracking Sheet</ContentText>
                    <ContentText>Monthly Gov Cycle</ContentText>
                    <ContentText>Weekly Gov Cycle</ContentText>
                </FooterMenuWrapper>
                <FooterMenuWrapper>
                    <TitleText>Proposals</TitleText>
                    <ContentText>Forum</ContentText>
                    <ContentText>Operational Manual</ContentText>
                    <ContentText>Governance FAQs</ContentText>
                    <ContentText>GovTracking Sheet</ContentText>
                    <ContentText>Monthly Gov Cycle</ContentText>
                    <ContentText>Weekly Gov Cycle</ContentText>
                </FooterMenuWrapper>
                <FooterMenuWrapper>
                    <TitleText>Development Channels</TitleText>
                    <div>
                        <Icon src={discordIcon} />
                        <Icon src={twitIcon} />
                        <Icon src={facebookIcon} />
                        <Icon src={githubIcon} />
                    </div>
                </FooterMenuWrapper>
            </FooterWapper>
        </>
    );
}

export default MainFooter;