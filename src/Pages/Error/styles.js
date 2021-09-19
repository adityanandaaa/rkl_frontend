import styled from 'styled-components'
import banner from './Media/error.png'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;

    @media (max-width: 414px){
        // flex-direction: column;
    }
`

export const Wrapper = styled.div`
    margin-top: 27em;
    h1{
        font-size: 43px;
        font-weight: 800;
        // font-family: "lala";
        color: #000000;
    }
    h2{
        font-size: 28px;
        font-weight: 500;
        color: #888888;
        text-align: center;
        line-height: 30px;
    }
    button{
        width: 128px;
        height: 55px;
        background: #000000;
        color: white;
        border: none;
        border-radius: 0;
        margin-top: 2em;
    }

    @media (max-width: 1280px){
        margin-top: 22em;
    }
    @media (max-width: 414px){
        margin-top: 18em;
        h1{
            font-size: 25px;
        }
        h2{
            font-size: 20px;
        }
        button{
            width: 110px;
            height: 50px;
        }
    }
`

export const Header = styled.div`
    background-image: url(${banner});
    background-size: cover;
    // background-position: center;
    width: 100%;
    height: 100%;
    
    @media (max-width: 1024px){
        background-position: center;
    }
    
`