import tw from "twin.macro";
import styled from 'styled-components'


export const StyledBox = styled.div`
    ${tw`
        mt-10
        flex
        justify-around
        flex-wrap
        gap-[30px]
    `}
`

export const StyledContainer = styled.div`
    ${tw`
        bg-gray-400
        rounded-xl
        w-[calc(40% - 10px)]
        text-wrap
        h-32
        flex
        flex-col
        items-center
        gap-2
        p-2
    `}
    h1{
        font-size: 30px;
        margin-bottom: 10px;
        cursor: pointer;
    }

    ${props => props.answer ? `
        h1:hover{
            color: white;
        }
    ` : `color: black;`}

    h1:hover{
        background-color: ${props => props.answer ? 'blue' : 'red'};
        border-radius: 15px;
    }
    p{
        font-size: 24px;
        margin-left: 10px;
        margin-right: 10px;
        text-wrap: wrap;
    }
    @media(max-width:768px){
        width: calc(100% - 10px)
    }
`