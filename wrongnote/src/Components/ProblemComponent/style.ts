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

export const StyledContainer = styled.div<{answer: boolean}>`
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
        word-wrap: break-all;
    }
    @media(max-width:768px){
        width: calc(100% - 10px)
    }
`

export const StyledModalOverlay = styled.div`
    ${tw`
        fixed
        top-0
        left-0
        w-full
        h-full
        flex
        justify-center
    `}
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    align-items: center;
`
export const StyledModalContent = styled.div`
    ${tw`
        w-[80%]
        h-[80%]
        bg-white
        p-10
        rounded-md
        relative
    `}
`
export const StyledCloseButton = styled.div`
    ${tw`
        absolute
        top-[10px]
        right-[10px]
        bg-transparent	
        cursor-pointer
        text-[18px]
    `}
    &:hover{
        padding: 3px;
        background-color: rgba(0, 0, 0, 0.5);
    }
`