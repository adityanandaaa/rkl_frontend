import styled from 'styled-components';
import banner from './Media/mainbanner.jpg';
import rectangle from './Media/rectangle.png'

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
    // margin-top: 1em;
    width: 100%;
`

export const Header = styled.div`
    background-image: url(${banner});
    background-size: cover;
    width: 100%;
    height: 100%;

    .description{
        color: white;
        font-size: 45px;
        font-weight: 800;
        text-align: left;
        width: 24em;
        margin-top: 2.5em;
        line-height: 150%;
        letter-spacing: 0.02em;
        text-shadow: 0px 4px 30px #fff;
    }
    .brands{
        img{
            width: 200px;
            height: 200px;
        }
    }
    // .brands div:nth-child(2){
    //     padding-left: 15em;
    //     padding-right: 15em;
    // }
    .second a:nth-child(1){
        padding-left: 15em;
        // padding-right: 15em;
    }
    .second a:nth-child(2){
        // padding-left: 15em;
        padding-right: 15em;
    }
    

    @media (max-width: 414px){
        width: 100%;
        height: auto;
        .description{
            font-size: 22px;
            width: 15em;
        }
        .brands :nth-child(1){
            flex-direction: column;
            align-items: center;
        }
        .brands :nth-child(2){
            flex-direction: column;
            align-items: center;

        }
        .second a:nth-child(1){
            padding: 0;
        }
        .second a:nth-child(2){
            padding: 0;
        }
        .brands div:nth-child(2){
            padding: 0;
        }
        .brands :nth-child(2) img:last-child {
            margin-top: 3em;
        }
        .brands{
            img{
                width: 200px;
                height: 200px;
            }
        }
    }
    
    
`

export const Events = styled.div`
    margin-top: 3em;
    h1{
        font-size: 40px;
        font-weight: 800;
        // text-decoration: underline;
        text-align: center;
        padding-bottom: 5px;
        letter-spacing: 0.02em;
    }
    .line{
        border: 1px solid #000000;
        width: 20em;
    }
    .event{
        margin-left: 5em;
        img{
            width: 275px;
            height: 290px;
            margin-top: 1em;
        }
    }
    .event_title{
        width: 10em;
        font-size: 24px;
        font-weight: 600;
        height: 2.5em;
    }
    .event_date{
        font-size: 18px;
        color: #828282;
    }

    @media (max-width: 414px){
        h1{
            font-size: 26px;
        }
        .line{
            border: 1px solid #000000;
            width: 14em;
        }
        .event{
            margin-left: 7em;
            img{
                width: 190px;
                height: 212px;
                margin-top: 1em;
            }
        }
        .event_title{
            font-size: 20px;
            font-weight: 600;
        }
        .event_date{
            font-size: 16px;
        }
        
    }
    @media (max-width: 375px){
        .event{
            margin-left: 6em;
        }
    }

`

export const Gallerys = styled.div`
    // width: 99.8%;
    margin-top: 5em;
    .title{
        background: url(${rectangle});
        // padding: 10px;
    }
    h1{
        font-size: 40px;
        font-weight: 800;
        // text-decoration: underline;
        text-align: center;
        letter-spacing: 0.02em;
    }
    .line{
        border: 1px solid #000000;
        width: 10em;
        margin-bottom: 5px;
    }

`

export const Parts = styled.div`
    margin-top: 30em;
    margin-bottom: 120px;
    // padding-left: 12em;
    // padding-right: 10em;
    span{
        font-size: 35px;
    }
    h1{
        font-size: 25px;
        font-weight: 700;
        line-height: 150%;
        // width: 10em;
        letter-spacing: 0.02em;
    }
    .input{
        border-radius: 0;
        border: 2px solid black;
        width: 420px;
        height: 50px;
        margin-left: 2em;
    }
    button{
        background: black;
        color: white;
        width: 120px;
        height: 50px;
        font-size: 18px;
        border-radius: 0;
    }

    @media (max-width: 414px){
        padding: 0;
        h1{
            text-align: center;
            margin-top: 2em;
        }
        br{
            display: none;
        }
        span{
            font-size: 25px;
        }
        .lala{
            flex-direction: column;
        }
        .input{
            width: 22em;
        }
        button{
            margin-top: 2em;
            margin-left: 1.5em;
            width: 20em;
        }
    }

    @media (max-width: 375px){
        .input{
            width: 19em;
        }
        button{
            width: 17em;
            margin-left: 1.8em;
        }
    }

`