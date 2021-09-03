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
            width: 250px;
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
        cursor: pointer;
    }

    @media (max-width: 768px){
        .description{
            padding-left: 80px;
            padding-right: 80px;
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
            h1{
                font-size: 35px;
            }
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

    @media (max-width: 768px){
        width: 350px;   
    }
    @media (max-width: 414px){
        width: 380px; 
    }
    @media (max-width: 375px){
        width: 90%;
        height: 153px;
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
        margin-top: 30px;
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

    @media (max-width: 768px){
        .promo h1{
            font-size: 30px;
        }
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
                // width: 185px;
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
        .line{
            width: 15em;
        }
        .promo{
            img{
                // width: 170px;
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

    @media (max-width: 768px){
        margin-top: 30em;
        h1{
            font-size: 34px;
        }
        .line{
            width: 10em;
        }
        img{
            width: 640px;
            height: 425px;
        }
    }

    @media (max-width: 414px){
        margin-top: 25em;
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
    @media (max-width: 375px){
       img{
           width: 350px;
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
    padding-left: 20em;
    padding-right: 23em;

    p{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        width: 25em;
    }
    .location-wrap{
        // margin-right: 15em;
    }
    .icon{
        width: 30px;
        height: 30px;
        margin-top: 10px;

    }
    span{
        margin-left: 10px;
    }
    .insta{
        // position: absolute;
        // margin-top: 3em;
        text-decoration: none;
        text-transform: lowercase;
        display: inline-block;
        color: white;
        font-size: 18px;
        font-weight: bold;
        word-spacing: -3px;
    }
    img{
        width: 200px;
        height: 200px;
        // margin-bottom: 1em;
    }

    @media (max-width: 1280px){
        padding-left: 30em;
        .location-wrap{
            padding-left: 2em;
        }
    }

    @media (max-width: 1024px){
        padding-left: 20em;
    }

    @media (max-width: 768px){
        width: 100%;
        height: 250px;
        padding-left: 4em;
        padding-right: 6em;
        p{
            font-size: 14px;
        }
        img{
            width: 140px;
            height: 160px;
        }
        .icon{
            width: 25px;
            height: 25px;
        }
    }

    @media (max-width: 414px){
        padding: 0;
        height: 375px;
        .logo{
            flex-direction: column;
        }
        .logo div:nth-child(1){
            height: 130px;
        }
        .logo div:nth-child(2){
            margin-bottom: 3em;
        }
        img{
            height: 200px;
        }
        .location-wrap{
            p, a{
                font-size: 14px;
                padding-left: 2em;
            }
        }
    }

    @media (max-width: 375px){
        p{
            width: 23em;
        }
    }

    
    
`


