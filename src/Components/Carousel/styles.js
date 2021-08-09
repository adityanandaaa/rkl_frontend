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
        margin-left: 5em;
        img{
            width: 275px;
            height: 290px;
            margin-top: 1em;
        }
        cursor: pointer;
    }
    .event_title{
        width: 10em;
        font-size: 24px;
        font-weight: 600;
        height: 2.5em;
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

    @media (max-width: 414px){
        .event{
            img{
                width: 260px;
                height: 290px;
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
            img{
                width: 230px;
                height: 270px;
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


`
