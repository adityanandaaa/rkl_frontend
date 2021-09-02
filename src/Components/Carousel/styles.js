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
    .event{
        background-color: white;
        width: 350px;
        height: 500px;
        border-radius: 8px;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        margin: 1em 4.5em;
        :hover{
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            transition: 0.3s;
        }
        img{
            width: 100%;
            height: 290px;
            border-radius: 8px 8px 0 0;
            // margin-top: 1em;
        }
        cursor: pointer;
    }
    p{
        padding: 5px 10px;
    }
    .event_title{
        // width: 10em;
        height: 115px;
        font-size: 24px;
        font-weight: 600;

    }
    .cafe_name{
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 150%;
        color: #6A6A6A;
    }
    .event_date{
        font-family: Montserrat
        font-size: 18px;
        color: #828282;
        margin-top: -1em;
    }

    @media (max-width: 1280px){
        .event{
            width: 330px;
        }
    }

    @media (max-width: 1024px){
        .event{
            margin-left: 2em;
            width: 305px;
        }
    }

    @media (max-width: 768px){
        .event{
            margin-left: 1.5em;
            width: 240px;
        }
    }

    @media (max-width: 414px){
        .event{
            margin-left: 5em;
            width: 260px;
            height: 450px;
            img{
                margin: 0;
            }
        }
        .event_title{
            width: 11em;
            font-size: 20px;
        }
        .cafe_name{
            font-size: 18px;
        }
        .event_date{
            font-size: 18px;
        }
    }

    @media (max-width: 375px){
        .event{
            margin-left: 4em;
        }
        .event_title{
            width: 11em;
            font-size: 20px;
        }
        .cafe_name{
            font-size: 18px;
        }
        .event_date{
            font-size: 18px;
        }
    }


`
