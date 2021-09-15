import styled from 'styled-components';
import aboutCover from './Media/about-cover.jpg'
import contactCover from './Media/contact-background.png'
import contactCoverMobile from './Media/contact-background-mobile.png'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    width: 100%;
`

export const Wrapper = styled.div`
    // margin-top: 1em;

    .description{
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 150%;
        letter-spacing: 0.02em;
        text-align: center;
        padding-left: 6em;
        padding-right: 6em;
        margin-top: 3em;
    }
    .download{
        background: black;
        color: white;
        font-size: 20px;
        font-weight: 500;
        width: 328px;
        height: 60px;
        margin-top: 70px;
        border-radius: 0;
    }
    .vision{
        margin-top: 5em;
        h1{
            font-size: 40px;
            font-weight: 800;
            margin-right: 160px;
        }
        p{
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            width: 35em;
            // margin-left: 100px;
            line-height: 150%;
            letter-spacing: 0.02em;
            color: #000000;
        }
    }
    .moto-line{
        width: 967px;
        height: 1px;
        background: radial-gradient(50.88% 47576398.75% at 50.88% 0%, #000000 0%, rgba(0, 0, 0, 0) 100%);
        margin-top: 1em;

    }
    .mission{
        margin-top: 3em;
        h1{
            margin-left: 160px;
            font-size: 40px;
            font-weight: 800;
        }
        p{
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 17px;
            width: 35em;
            line-height: 150%;
            letter-spacing: 0.02em;
            color: #000000;
        }
    }

    @media (max-width: 1024px){
        .description{
            font-size: 25px;
        }
        .vision{
            h1{
                font-size: 30px;
                margin-right: 50px;
            }
        }
        .mission{
            h1{
                font-size: 30px;
                margin-left: 50px;
            }
        }
    }

    @media (max-width: 768px){
        .description{
            font-size: 18px;
        }
        .download{
            width: 285px;
            font-size: 16px;
        }
        .vision{
            h1{
                font-size: 30px;
                // margin-left: 2em;
            }
            p{
                width: 30em;
            }
        }
        .mission{
            h1{
                font-size: 30px;
                margin-right: 2em;
            }
            p{
                width: 30em;
                margin-left: 4em;
            }
        }
    }
    @media (max-width: 414px){
        .description{
            font-size: 16px;
            text-align: center;
            padding: 0;
            width: 305px;
        }
        .download{
            font-size: 16px;
            width: 320px;
            height: 40px;
        }
        .vision{
            flex-direction: column;
            align-items: center;
            h1{
                margin-right: 0;
                font-size: 25px;
            }
            p{
                font-size: 17px;
                width: 20em;
                margin-left: 0;
                text-align: center;
            }
        }
        .moto-line{
            width: 400px;
            background: radial-gradient(50.88% 47576398.75% at 50.88% 0%, #000000 0%, rgba(0, 0, 0, 0) 100%);
            margin-top: 1em;
    
        }
        .mission{
            flex-direction: column-reverse;
            align-items: center;
            h1{
                text-align: center;
                font-size: 25px;
            }
            p{
                font-size: 17px;
                width: 20em;
                margin-left: 0;
                text-align: center;
            }
        }
    }
    @media (max-width: 375px){
        .vision{
            h1{
                font-size: 25px;
            }
            p{
                font-size: 16px;
                margin-left: 0;
            }
        }
        .mission{
            h1{
                font-size: 25px;
            }
            li{
                font-size: 16px;
            }
        }
    }
`

export const Header = styled.div`
    // background-image: url(${({background}) => background});
    background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${aboutCover});
    background-repeat:no-repeat;
    // -webkit-background-size:cover;
    // -moz-background-size:cover;
    // -o-background-size:cover;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 600px;

    h1{
        color: white;
        font-size: 64px;
        font-weight: 800;
        // font-family: "Brandon Grotesque";
        margin-top: 3em;
    }

    @media (max-width: 768px){
        h1{
            font-size: 50px;
            margin-top: 3.8em;
        }
    }

    @media (max-width: 414px){
        h1{
            font-size: 35px;
            margin-top: 5.5em;
        }
    }
    
`

export const Contact = styled.div`
    margin-top: 7em;
    margin-bottom: 120px;
    // padding-left: 13em;
    // padding-right: 13em;
    background-image: url(${contactCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 150px;
    
    h1{
        font-size: 40px;
        font-weight: 700;
        margin-left: 9em;
    }
    span{
        border-bottom: 2px solid black;
    }
    img{
        width: 25px;
        height: 25px;
        margin-left: 3em;
    }
    p{
        margin-left: 1em;
    }

    @media (max-width: 768px){
        .title{
            margin-left: -3em;
        }
        h1{
            font-size: 25px;
        }
    }

    @media (max-width: 414px){
        background-image: url(${contactCoverMobile});
        background-size: cover;
        background-position: center;
        height: 200px;
        .title{
            margin-left: -1em;
        }
        .wrapper{
            flex-direction: column;
            align-items: center;
        }
        .contact-wrap{
            padding-left: 5em;
        }
        h1{
            font-size: 25px;
            font-weight: 800;
            margin-left: 4em;
            border-bottom: 2px solid black;
            // width: 20em;
        }
        span{
            border: none;
        }
        p{
            // margin: 0;
        }
    }

    @media (max-width: 375px){
        .title{
            margin-left: -3em;
        }
        .contact-wrap{
            padding-left: 4em;
        }
    }

    
`