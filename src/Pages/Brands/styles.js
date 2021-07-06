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
    width: 100vw;
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
    width: 100vw;
    height: 600px;
    
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
    width: 500px;
    height: 200px;
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
    width: 100vw;
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
        position: absolute;
        img{
            width: 270px;
            height: 370px;
        }
        
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
    img{
        width: 900px;
        height: 530px;
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
    width: 100vw;
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
    
`


