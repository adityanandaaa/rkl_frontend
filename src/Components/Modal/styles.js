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
    // margin-top: 1em;
    width: 100%;
    .paper{
        width: 950px;
        height: 500px;
        font-size: 55px;
        background: red;
    }
`

export const Paper = styled.div`
    width: 950px;
    height: 500px;
    font-size: 40px;
    background: white;

    .close-icon{
        position: absolute;
        top: 7em;
        right: 7em;
        color: white;
        cursor: pointer;
    }
    img{
        width: 430px;
        height: 430px;
        padding-left: 35px;
    }
    .detail-wrap{
        margin-top: 2em;
        margin-left: 1em;
    }
    .title{
        margin: 0;
        padding: 0;
        p{
            font-weight: 600;
            font-size: 24px;
            height: 1em;
            letter-spacing: 0.02em;
            color: #027A48;
        }
        h1{
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            letter-spacing: 0.02em;
            // padding-bottom: 1em;
        }
        
    }
    .date{
        margin-top: 0.5em;
        h2{
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 150%;
            letter-spacing: 0.02em;
            color: #000000;
        }
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: 0.02em;
        }
    }
    .description{
        h2{
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 150%;
            letter-spacing: 0.02em;
            color: #000000;
        }
        p{
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: 0.02em;
        }
    }
    .location{
        h2{
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 150%;
            letter-spacing: 0.02em;
            color: #000000;
        }
        p{
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 0.02em;
            color: #00000;
        }

    }
`