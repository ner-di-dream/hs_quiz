import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'

const Home = () => {
    const navigate = useNavigate();
    
    const handleClickButton = () => {
        // useHistory
        navigate('/question');
    }

    return (
        <Wrapper>
            <Header>하스 퀴즈!</Header>
            <Title>하스왕 간단 테스트!</Title>
            <Button onClick={handleClickButton}>
                <StartText>시작</StartText>
            </Button>
        </Wrapper>
    )
}

export default Home;


const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
    font-family: 'Jua', sans-serif;
    height: 100vh;
    width: 100%;
    background-color: #FFE6E6;

    /* 나머지는 빅데스크탑 */

    @media screen and (max-width:1799px) {
    /* 데스크탑 */
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
    }

    @media screen and (max-width:899px) {
    /* 모바일 가로, 타블렛 세로 */
    }

    @media screen and (max-width:599px) {
    /* 모바일 세로 */
    }
`

const Header = styled.div`
    font-size: 40pt;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
`

const Title = styled.div`
    font-size: 30pt;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const Button = styled.div`
    display: flex;
    font-size: 30pt;
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    border: 5px solid black;
    border-radius: 25px;

    :hover {
        background-color: blue;
        transition-duration: 0.5s;
    }
 
    :not(:hover) {
        background-color: rgb(27, 0, 255, 0.5);
        transition-duration: 0.5s;
    }

    /* 나머지는 빅데스크탑 */
    
    margin: 100px auto;
    width: 400px;
    height: 100px;

    @media screen and (max-width:1799px) {
    /* 데스크탑 */
        margin: 75px auto;
        width: 300px;
        height: 75px;
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
        margin: 60px auto;
        width: 240px;
        height: 60px;
    }

    @media screen and (max-width:899px) and (min-height:600px) {
    /* 타블렛 세로 */
        margin: 45px auto;
        width: 180px;
        height: 45px;
    }

    @media screen and (max-width:899px) and (max-height:599px) {
    /* 모바일 가로 */
        margin: 45px auto;
        width: 180px;
        height: 45px;
    }

    @media screen and (max-width:599px) {
    /* 모바일 세로 */
        margin: 30px auto;
        width: 120px;
        height: 30px;
    }
`

const StartText = styled.div`
    display: flex;
    font-size: 24pt;
    text-align: center;
    justify-content: center;
    align-items: center;
`