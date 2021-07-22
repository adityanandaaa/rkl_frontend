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
    .vacancies{
        padding-left: 9em;
        padding-right: 9em;
        margin-bottom: 2em;
        margin-top: -5em;
    }

    @media (max-width: 768px){
        .vacancies{
            padding-left: 3em;
            padding-right: 3em;
        }
    }

    @media (max-width: 414px){
        .vacancies{
            padding-left: 3.5em;
        }
    }

    @media (max-width: 375px){
        .vacancies{
            padding-left: 2.5em;
        }
    }
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
            margin-bottom: 5em;

        }

    }

    @media (max-width: 768px){
        height: 550px;
        .join{
            h1{
                font-size: 46px;
            }
            h2{
                font-size: 25px;
                width: 23em;
            }
        }
    }

    @media (max-width: 414px){
        .join{
            h1{
                font-size: 30px;
            }
            h2{
                font-size: 18px;
                width: 18em;
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
    }
    .field{
        width: 250px;
    }
    
    @media (max-width: 768px){
        padding-left: 2em;
        padding-right: 2em;
        .field{
            width: 200px;
        }
    }

    @media (max-width: 414px){
        .title{
            font-size: 25px;
        }
        .field{
            width: 20em;
            margin-top: 1em;
        }
    }
`

export const Card = styled.div`
    width: 302px;
    height: 150px;
    margin-top: 2em;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    p{
        margin: 0;
        width: 260px;
    }
    .position{
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #000000;
    }
    .location{
        font-family: Inter;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 150%;
        color: #6A6A6A;
        
    }
    :hover{
        cursor: pointer;
        box-shadow: 0px 12px 15px rgba(0, 0, 0, 0.1);
        transition: 0.3s;
    }

    @media (max-width: 414px){
        height: 110px;
        .position{
            font-size: 18px;
        }
        .location{
            font-size: 16px;
        }
    }

    
`