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
    // @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        z-index: 1000;

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
        z-index: 1000;
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
    color: #fff;
    font-size: 22px;
        cursor: pointer;
        display: none;
    }
    .home{
        display: none;
    }
    .dropdown a{
        font-size: 20px;
        font-style: normal;
        font-weight: bold;
        line-height: 150%;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        padding: 0 15px;
    }
    // .dropdown {
    //     float: left;
    //     // overflow: hidden;
    // }
    
    .dropdown .dropbtn {
        font-size: 20px;  
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;

        :hover{
            color: #a97b50;
        }
    }
    
    
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: transparent;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border-bottom: 0.5px solid white;
        z-index: 1;
    }
    
    .dropdown-content a {
        float: none;
        color: white;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }
    
    .dropdown-content a:hover {
        background-color: #ddd;
    }
    
    .dropdown:hover .dropdown-content {
        display: block;
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
        nav .logo{
            width: 100px;
            height: 45px;
        }
        nav ul li a{
            font-size: 16px;
        }
        .dropdown .dropbtn{
            font-size: 16px;
        }
        .dropdown-content a{
            font-size: 16px;
        }
    }
    @media (max-width: 700px) {
        nav{
            // height 100vw;

        }
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
            height: 100%;
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
            overflow: hidden;
        }
        #click:checked ~ div{
            overflow: hidden;
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
        .home{
            display: block;
        }
        .dropdown .dropbtn{
            font-size: 26px;
            // margin-top: -1em;
        }
        
        .dropdown-content{
            margin-left: 2em;
            position: static;
            // min-width: 100px;
            width: 10em;
            border-bottom: none;
            a{
                font-size: 15px;
            }
        }

        .dropdown-content a{
            font-size: 20px;
            font-weight: 500;
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
            margin-left: 3.5em;
            img{
                height: 32px;
                margin-left: 2em;
            }
        }
    }

    @media (max-width: 414px){
        .dropdown-content{
            margin-left: 1em;
            position: static;
            width: 5em;
            border-bottom: none;
            // a{
            //     font-size: 15px;
            // }
        }

        .socmed{
            margin-left: 3.5em;
            img{
                margin-left: 1.5em;
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
