import React from 'react';
import styled from 'styled-components';

const Award = (props) => {

    if(props.score >= 100)
    {
        return (
            <AwardText>
            <p style={{color: "goldenrod"}}>퍼펙트! 당신은 진정한 하스왕!</p>
            </AwardText>
        )
    }
    else if(props.score >= 90)
    {
        return (
            <AwardText>
            <p style={{color: "deepskyblue"}}>여관주인 밑에서 일해보시는 건 어떤가요?</p>
            </AwardText>
        )
    }
    else if(props.score >= 80)
    {
        return (
            <AwardText>
            <p style={{color: "mediumaquamarine"}}>하스 내공이 상당하시군요.</p>
            </AwardText>
        )
    }
    else if(props.score >= 70)
    {
        return (
            <AwardText>
            <p style={{color: "gold"}}>하잘알 인정합니다.</p>
            </AwardText>
        )
    }
    else if(props.score >= 60)
    {
        return (
            <AwardText>
            <p style={{color: "grey"}}>참 잘했어요!</p>
            </AwardText>
        )
    }
    else
    {
        return (
            <AwardText>
            <p style={{color: "maroon"}}>하스백성 대신에 하스왕이 되거라...</p>
            </AwardText>
        )
    }
}

const AwardText = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 20vh;

    /* 나머지는 빅데스크탑 */
    font-size: 64pt;

    @media screen and (max-width:1799px) {
    /* 데스크탑 */
    font-size: 52pt;
    }

    @media screen and (max-width:1199px) {
    /* 타블렛 가로 */
    font-size: 40pt;
    }

    @media screen and (max-width:899px) {
    /* 모바일 가로, 타블렛 세로 */
    font-size: 32pt;
    }

    @media screen and (max-width:599px) {
    /* 모바일 세로 */
    font-size: 24pt;
    }
`

export default Award;