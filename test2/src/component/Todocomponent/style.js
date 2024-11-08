import styled from "styled-components";
import tw from "twin.macro";
import Button from '@mui/material/Button';


export const StyledContainer = styled.div`
    ${tw`
        bg-gray-700
        h-screen
        flex
        flex-col
        items-center
        pt-10
        gap-10
        `}
`

export const StyledTitle = styled.div`
    ${tw`
        text-[77px]
    `}
`


export const StyledCount = styled.div`
    ${tw`
        flex
        gap-5
    `}
    h2:first-child{
      ${tw`
        bg-black
        text-white
        p-3
        rounded-md
        `}
    }
    h2:last-child{
      ${tw`
        bg-blue-700
        text-white
        rounded-md
        p-3
        `}
    }
`

export const StyledInput = styled.div`
    ${tw`
        flex
        gap-5
        w-1/2
        h-[50px]
        items-center

        `}
        input{
            ${tw`
                w-full
                border
                rounded-md
                pl-3
                text-xl
                h-full
        `}
    }
`


export const StyledButton = styled(Button)`
    ${tw`
        h-full
    `}
`



export const StyledCheckBox = styled.div`
    ${tw`
        flex
        flex-col
        items-start
        w-1/2
        gap-3
        overflow-scroll
    `}
`

export const StyledTodoList = styled.div`
    ${tw`
        flex
        items-center
        w-full
        
    `}
    p{
    ${tw`
        text-lg
        `}
    }
`