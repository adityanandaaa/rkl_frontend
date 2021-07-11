import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;
    height: 100%;

    
`

export const Wrapper = styled.div`
    .title{
        font-weight: 600;
        font-size: 24px;
        line-height: 150%;
        letter-spacing: 0.02em;
        width: 12em;
    }
    .date{
        font-weight: normal;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #828282;
    }

`
