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
    .close-icon{
        position: absolute;
        color: white;
        cursor: pointer;
        font-size: 20px;
    }
`

export const Paper = styled.div`
    width: 950px;
    height: 500px;
    font-size: 40px;
    background: white;

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


    @media (max-width: 768px){
        width: 710px;
        height: 400px;

        img{
            width: 318px;
            height: 336px;
        }
        .detail-wrap{
            margin-top: 1em;
        }
        .title p{
            font-weight: 600;
            font-size: 20px;
        }
        .title h1{
            font-size: 24px;
        }
        .date{
            margin-top: 0.5em;
            h2{
                font-size: 20px;
            }
            p{
                font-size: 16px;
            }
        }
        .description{
            h2{
                font-size: 20px;
            }
            p{
                font-size: 16px;
            }
        }
        .location{
            h2{
                font-size: 20px;
            }
            p{
                font-size: 16px;
            }
        }

    }

    @media (max-width: 414px){
        width: 414px;
        height: 100vh;
        .content-wrap{
            display: flex;
            flex-direction: column;
        }
        img{
            width: 100%;
            height: 320px;
            margin-top: 1em;
            padding: 0;
        }
        .detail-wrap{
            margin-top: 1em;
        }
        .title p{
            font-weight: 600;
            font-size: 14px;
            margin-top: -1em;
        }
        .title h1{
            font-size: 22px;
        }
        .date{
            margin-top: 0.5em;
            h2{
                font-size: 16px;
            }
            p{
                font-size: 14px;
            }
        }
        .description{
            h2{
                font-size: 16px;
            }
            p{
                font-size: 14px;
            }
        }
        .location{
            h2{
                font-size: 16px;
            }
            p{
                font-size: 14px;
            }
        }
        .close-icon{
            position: absolute;
            // fill: black;
            top: 1.5em;
            right: 1em;
            margin-top: 5em;
        }
    }
    @media (max-width: 375px){
        width: 375px;
        height: 100vh;
        img{
            width: 100%;
            height: 375px;
        }
        .detail-wrap{
            margin-top: 1em;
        }
        .description{
            p{
                font-size: 14px;
                width: 20em;
            }
        }

    }
`