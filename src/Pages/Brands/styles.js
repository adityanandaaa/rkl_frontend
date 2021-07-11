import styled from 'styled-components';

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

export const Header = styled.div`
    // background-image: url(${({background}) => background});
    background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${({background}) => background});
    background-repeat:no-repeat;
    // -webkit-background-size:cover;
    // -moz-background-size:cover;
    // -o-background-size:cover;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 600px;

    .brand{
        margin-bottom: 9em;
    }
    @media (max-width: 414px){
        .brand{
            width: 300px;
        }
    }
    
`

export const Content = styled.div`
    .description{
        font-family: Inter;
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        text-align: center;
        letter-spacing: 0.02em;
        padding-left: 150px;
        padding-right: 150px;
        margin-top: 4.5em;
    }
    .title{
        // font-family: Merriweather Sans;
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
        line-height: 150%;
        text-align: center;
        letter-spacing: 0.02em;
        margin-top: 2em;
    }
    .line{
        border: 1px solid #000000;
        width: 15em;
    }
    .menu{
        margin-top: 5em;
        h1{
            font-weight: 800;
            font-size: 50px;
            color: white;
        }
    }

    @media (max-width: 414px){
        .description{
            font-size: 16px;
            padding-left: 3em;
            padding-right: 3em;
        }
        .title{
            font-size: 30px;
        }
        .line{
            border: 1px solid #000000;
            width: 13em;
        }
        .menu{
            flex-direction: column;
            align-items: center;
            margin-top: 2em;
        }
    }
`

export const Menu = styled.div`
    // background-image: url(${({background}) => background});
    background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${({background}) => background});
    background-repeat:no-repeat;
    // -webkit-background-size:cover;
    // -moz-background-size:cover;
    // -o-background-size:cover;
    background-size:cover;
    background-position:center;
    width: 530px;
    height: 180px;

    @media (max-width: 414px){
        width: 380px; 
    }
    @media (max-width: 375px){
        width: 100%;
    }
`

export const Event = styled.div`
    // background-image: url(${({background}) => background});
    background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${({background}) => background});
    background-repeat:no-repeat;
    // -webkit-background-size:cover;
    // -moz-background-size:cover;
    // -o-background-size:cover;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 300px;
    margin-top: 5em;

    h1{
        color: white;
        font-weight: 800;
        font-size: 40px;
        line-height: 150%;
        text-align: center;
        letter-spacing: 0.02em;
    }
    .line{
        border: 1px solid #FFFFFF;
        width: 22em;
    }
    .promo{
        margin-top: 2em;
    }
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

    @media (max-width: 414px){
        // background: none;
        h1{
            // color: black;
            font-size: 30px;
        }
        .line{
            // border: 1px solid #000000;
            width: 17em;
        }
        .promo{
            // position: absolute;
            img{
                width: 185px;
                height: 240px;
            }
            
        }
        .title{
            font-size: 16px;
        }
        .date{
            font-size: 14px;
            width: 10em;
        }
    }

    @media (max-width: 375px){
        h1{
            font-size: 25px;
        }
        line{
            width: 15em;
        }
        .promo{
            img{
                width: 170px;
            }
        }
        .title{
            font-size: 15px;
        }
    }
`

export const Gallery = styled.div`
    margin-top: 22em;
    h1{
        font-weight: 800;
        font-size: 40px;
        line-height: 150%;
        text-align: center;
        letter-spacing: 0.02em;
    }
    .line{
        border: 1px solid #000000;
        width: 12em;
    }
    .pic{
        margin-top: 3em;
    }
    img{
        width: 900px;
        height: 530px;
    }

    @media (max-width: 414px){
        margin-top: 15em;
        h1{
            font-size: 30px;
        }
        .pic{
            margin-top: 1em;
        }
        img{
            width: 370px;
            height: 270px;
        }
    }
`

export const Location = styled.div`
    // background-image: url(${({background}) => background});
    background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${({background}) => background});
    background-repeat:no-repeat;
    // -webkit-background-size:cover;
    // -moz-background-size:cover;
    // -o-background-size:cover;
    background-size:cover;
    background-position:center;
    width: 100%;
    height: 350px;
    margin-top: 5em;
    padding-left: 15em;
    padding-right: 13em;

    p{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
    }
    .insta{
        position: absolute;
        margin-top: 3em;
    }
    img{
        height: 200px;
        margin-bottom: 2em;
    }

    @media (max-width: 414px){
        padding: 0;
        .logo{
            flex-direction: column;
        }
        .location-wrap{
            flex-direction: column;
            // justify-content: flex-start;
            padding-bottom: 2em;
            p{
                font-size: 14px;
                // text-align: center;
                padding-left: 3.5em;
            }
        }
    }
    
`


