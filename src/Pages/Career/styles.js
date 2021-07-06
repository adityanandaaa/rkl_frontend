import styled from 'styled-components';
import banner from './Media/career-banner.png';

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;

    @media (max-width: 414px){
        flex-direction: column;
    }
`

export const Wrapper = styled.div`
    // margin-top: 1em;
    width: 100vw;
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

    .join{
        margin-top: 8em;
        h1{
            font-style: normal;
            font-weight: 800;
            font-size: 52px;
            line-height: 150%;
            text-align: center;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            text-shadow: 0px 4px 20px rgba(255, 255, 255, 0.3);
        }
        h2{
            font-style: normal;
            font-weight: 500;
            font-size: 30px;
            line-height: 150%;
            text-align: center;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            width: 700px;
        }

    }

    @media (max-width: 414px){
        width: 413px;
        height: auto;
        // background-size: 414px 600px;
        .join{
            h1{
                font-size: 30px;
            }
            h2{
                font-size: 18px;
                width: 20em;
                padding-bottom: 5em;
            }
        }
    }
    
    
    
`

export const Content = styled.div`
    margin-top: 5em;
    margin-bottom: 120px;
    padding-left: 9em;
    padding-right: 9em;

    .title{
        font-weight: 800;
        font-size: 40px;
        line-height: 150%;
        text-align: center;
        letter-spacing: 0.02em;
        color: #000000;
        text-shadow: 0px 4px 20px rgba(255, 255, 255, 0.3);
        text-align: center;
    }
    .section{
        // padding-right: 12em;
        h1{
            font-weight: bold;
            font-size: 28px;
            line-height: 150%;
            letter-spacing: 0.02em;
            // width: 10em;
            // padding-right: 5em;
            // padding-left: 2em;
        }
        // ul{
        //     margin-left: 10em; 
        //     width: 90em; 
        // }
        li{
            font-weight: normal;
            font-size: 20px;
            line-height: 150%;
            letter-spacing: 0.02em;
        }
        .accor{
            // margin-left: 15em;
            width: 32em;
        }
        .card{
            font-size: 23px;
            color: black;
            border: none;
            background: white;
            
        }
        .line{
            border: 1px solid #000000;
            width: 100vw;
        }
        .description{
            padding-left: 1.5em;
        }
        
    }

    @media (max-width: 414px){
        .title{
            font-size: 25px;
        }
    }
`