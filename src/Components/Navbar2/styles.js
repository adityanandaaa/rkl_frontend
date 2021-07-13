import styled from "styled-components";
import banner from './Media/mainbanner.jpg'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ wrap }) => wrap};
`;

export const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        // font-family: 'Poppins', sans-serif;
    } 
    nav{
        display: flex;
        height: 80px;
        width: 100%;
        // background: #1b1b1b;
        background: transparent;
        align-items: center;
        justify-content: space-between;
        padding: 0 50px 0 100px;
        flex-wrap: wrap;
    }
    nav .logo{
        height: 50px;
    }
    nav ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }
    nav ul .close{
        display: none;
    }
    nav ul li{
        margin: 0 5px;
    }
    nav ul li a{
        color: #f2f2f2;
        text-decoration: none;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        padding: 8px 15px;
        border-radius: 5px;
        letter-spacing: 1px;
        transition: all 0.3s ease;
    }
    nav ul li a.active,
        nav ul li a:hover{
        color: #a97b50;
        // background: #fff;
    }
    nav .menu-btn i{
    // color: #fff;
    // font-size: 22px;
        cursor: pointer;
        display: none;
    }
    .socmed{
        display: none;
    }
    input[type="checkbox"]{
        display: none;
    }
    @media (max-width: 1000px){
        nav{
            padding: 0 40px 0 50px;
        }
    }
    @media (max-width: 920px) {
        nav .menu-btn i{
            display: block;
        }
        #click:checked ~ .menu-btn i:before{
            // content: "\f00d";
        }
        nav ul{
            position: fixed;
            top: 0px;
            left: -100%;
            background: #000000;
            height: 100vh;
            width: 100%;
            text-align: left;
            display: block;
            transition: all 0.5s ease;
        }
        nav ul .close{
            display: block;
            // color: white;
        }
        #click:checked ~ ul{
            left: 0;
        }
        nav ul li{
            width: 100%;
            margin: 20px 0;
        }
        nav ul li a{
            width: 100%;
            margin-left: -100%;
            display: block;
            font-weight: bold;
            font-size: 26px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            // transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        #click:checked ~ ul li a{
            margin-left: 40px;
        }
        nav ul li a.active,
        nav ul li a:hover{
            background: none;
            color: #a97b50;
        }
        .socmed{
            display: flex;
            margin-top: 2em;
            img{
                height: 32px;
                margin-left: 2em;
            }
        }
    }
`;

export const Header = styled.div`
    background-image: url(${banner});
    background-size: cover;
    width: 100%;
    height: 100vh;

    .description{
        color: white;
        font-size: 45px;
        font-weight: 800;
        text-align: left;
        width: 24em;
        margin-top: 2.5em;
        line-height: 150%;
        letter-spacing: 0.02em;
        text-shadow: 0px 4px 30px #a97b50;
    }
    .brands{
        img{
            width: 200px;
            height: 200px;
        }
    }
    .brands div:nth-child(2){
        padding-left: 15em;
        padding-right: 15em;
    }
    

    @media (max-width: 414px){
        width: 100%;
        height: 100vh;
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
        .brands div:nth-child(2){
            padding: 0;
        }
        .brands{
            img{
                width: 200px;
                height: 200px;
            }
        }
    }
    
    
`
