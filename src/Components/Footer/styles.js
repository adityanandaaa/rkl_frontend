import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};

    // @media (max-width: 414px){
    //     flex-direction: column;
    // }
    
`

export const Wrapper = styled.div`
    background-color: black;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 350px;
    color: white;
    // margin-top: 120px;
    padding-top: 2em;
    padding-left: 140px;
    
    .logo{
        width: 50px;
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
        line-height: 150%;
        letter-spacing: 0.02em;
        padding-top: 20px;
    }
    .menu{
        width: 15em;
    }
    .footer-line{
        border: 1px solid white;
        width: 65em;
        margin-top: 30px;
    }
    a{
        color: white;
        text-decoration: none;
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        // margin-top: 15px;
        line-height: 150%;
        letter-spacing: 0.02em;
    }
    // .copy-icon{
    //     margin-top: 1.5em;
    //     img{
    //         margin-top: 4px;
    //         width: 17px;
    //         height: 17px;
    //     }
        

    @media (max-width: 414px){
        max-width: 100%;
        height: auto;
        padding: 3em 3em;
        flex-direction: column;
        .logo{
            width: 50px;
            height: 50px;
        }
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
            
        }
        .menu-wrap{
            margin-right: 5em;
        }
        .copy-icon{
            p{
                font-size: 14px;
                padding: 1.8px;
            }
        }
    }

    @media (max-width: 375px){
        .email{
            margin-left: -1.5em;
        }
        .footer-line{
            width: 20em;
            margin-left: -1.5em;
        }
        .copy-icon{
            margin-left: -1.5em;
            p{
                font-size: 14px;
            }
        }

    }

`