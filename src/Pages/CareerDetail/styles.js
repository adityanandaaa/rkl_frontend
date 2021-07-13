import styled from 'styled-components';
import banner from './Media/career-banner.png';

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;
    height: 100%;
    @media (max-width: 414px){
        flex-direction: column;
    }
`

export const Wrapper = styled.div`
    // margin-top: 1em;
    width: 100%;
`

export const Header = styled.div`
    background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${banner});
    background-repeat:no-repeat;
    // -webkit-background-size:cover;
    // -moz-background-size:cover;
    // -o-background-size:cover;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 600px;

    h1{
        font-style: normal;
        font-weight: 800;
        font-size: 60px;
        line-height: 150%;
        text-align: center;
        margin-bottom: 2.5em;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        text-shadow: 0px 4px 20px rgba(255, 255, 255, 0.3);
    }

    @media (max-width: 414px){
        h1{
            // font-size: 50px;
            // width: 20em;
        }
        h2{
            font-size: 18px;
            width: 20em;
            padding-bottom: 5em;
        }
    }
`

export const Content = styled.div`
    margin-top: 100px;
    padding-left: 200px;
    padding-right: 230px;
    h1{
        font-family: Inter;
        font-style: normal;
        font-weight: 800;
        font-size: 28px;
        line-height: 150%;
        // text-align: center;
        letter-spacing: 0.02em;
        color: #000000;
    }
    p{
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        width: 900px;
        margin-top: 30px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #000000;
    }
    ul{
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        width: 900px;
        // margin-top: 30px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #000000;
    }
    button{
        background: black;
        color: white;
        width: 261px;
        height: 60px;
        font-size: 18px;
        border-radius: 0;
        margin-top: 30px;
        margin-bottom: 300px;
    }

    @media (max-width: 414px){
        padding-left: 1em;
        h1{
            font-size: 22px;
        }
        p{
            font-size: 18px;
            width: 20em;
        }
        ul{
            font-size: 18px;
            width: 20em;
            margin-top: 2em;
        }
    }

    @media (max-width: 375px){
        p{
            width: 19em;
        }
    }
`