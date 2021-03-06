import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
`

export const Wrapper = styled.div`
    *{
        scroll-behavior: smooth;
    }
    background-color: black;
    position: relative;
    bottom: 0;
    left: 0;
    min-height: 355px;
    color: white;
    padding-top: 2em;
    padding-left: 12em;
    padding-right: 10em;

    @media (width: 1280px){
        padding-left: 8em;
        padding-right: 8em;
    }

    @media (width: 1920px){
        padding-left: 25em;
        padding-right: 25em;
    }
    
    .logo{
        width: 120px;
        height: 50px;
    }
    .description{
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        width: 30em;
        margin-top: 10px;
        line-height: 150%;
        letter-spacing: 0.02em;
    }
    .email{
        font-weight: 300;
        font-size: 24px;
        width: 9em;
        line-height: 150%;
        letter-spacing: 0.02em;
        padding-top: 20px;
        padding-bottom: 10px;
        cursor: pointer;
    }
    .menu-wrap{
        margin-left: 100px;
    }
    .menu{
        width: 15em;
        a:nth-child(n){
            cursor: pointer;
        }
    }
    .menu a:nth-child(2){
        margin-left: 82px;
        :nth-last-child(2){
            margin-left: 73px;
        }
    }
    
    .footer-line{
        border: 1px solid white;
        width: 65em;
        // margin-top: 30px;
    }
    a{
        color: white;
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        margin-top: 10px;
        line-height: 150%;
        letter-spacing: 0.02em;
    }
    // .copy-icon{
    //     // margin-top: 1.5em;
    //     img{
    //         // margin-top: 4px;
    //         width: 17px;
    //         height: 17px;
    //     }

    @media (max-width: 1024px){
        max-width: 100%;
        height: 25em;
        padding-left: 9em;
        .logo{
            width: 100px;
            height: 45px;
        }
        .description{
            font-style: normal;
            font-weight: 300;
            font-size: 18px;
            width: 22em;
        }
        .email{
            font-size: 18px;
        }
        .menu-wrap{
            // margin-left: 70px;
        }
        .footer-line{
            width: 46em;
        }
        a{
            font-size: 22px;
        }
        .menu a:nth-child(2){
            margin-left: 82px;
            img{
                width: 20px;
                height: 20px;
            }
            :nth-last-child(2){
                margin-left: 73px;   
            }
        }

    }
    @media (max-width: 768px){
        max-width: 100%;
        padding-left: 70px;
        .logo{
            width: 100px;
            height: 45px;
        }
        .description{
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            width: 22em;
        }
        .email{
            font-size: 16px;
        }
        .menu-wrap{
            margin-left: 70px;
        }
        .footer-line{
            border: 1px solid white;
            width: 40em;
        }
        a{
            font-size: 18px;
            margin-top: 10px;
        }
        .menu a:nth-child(2){
            margin-left: 82px;
            img{
                width: 20px;
                height: 20px;
            }
            :nth-last-child(2){
                margin-left: 73px;   
            }
        }
    }
        

    @media (max-width: 414px){
        max-width: 100%;
        height: auto;
        padding: 3em 3em;
        flex-direction: column;
        // .logo{
        //     width: 50px;
        //     height: 50px;
        // }
        .description{
            font-size: 14px;
            width: 24em;
            margin-top: 10px;
        }
        .email{
            font-size: 14px;
            padding-top: 20px;
        }
        .footer-line{
            border: 1px solid white;
            width: 20em;
            margin-top: 30px;
        }
        .wrap{
            flex-direction: column;
        }
        a{
            color: white;
            text-decoration: none;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            margin-top: 15px;
            line-height: 150%;
            letter-spacing: 0.02em;
        }
        .copy-icon{
            margin-top: 1.5em;
            img{
                margin-top: 4px;
                width: 17px;
                height: 17px;
            }
            p{
                font-size: 14px;
                padding: 1.8px;
            }
        }
        .menu-wrap{
            // margin-right: 5em;
            margin: 0;
        }
    }

    @media (max-width: 375px){
        .description{
            font-size: 14px;
            width: 22em;
        }
        .footer-line{
            width: 18em;
        }
        .copy-icon{
            // margin-left: -1.5em;
            p{
                font-size: 14px;
            }
        }

    }

`