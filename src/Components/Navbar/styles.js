import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({direction}) => direction};
    justify-content: ${({justify}) => justify};
    align-items: ${({alignItems}) => alignItems};
    flex-wrap: ${({wrap}) => wrap};
    
`

export const Wrapper = styled.div`
    img{
        // width: 50px;
        height: 50px;
        margin-left: 5em;
    }
    a{
        color: white;
        font-size: 20px;
        font-weight: 700;
    }
    a:hover{
        color: #a97b50;
        transition: 0.3s;
    }
    div:nth-child(2){
        border: none;
        background-color: inherit;
    }
    .menu{
        margin-right: 3em;
    }
    
    @media (max-width: 414px){
        img{
            margin-left: 1em;
        }
        a{
            font-size: 14px;
        }
    }
`