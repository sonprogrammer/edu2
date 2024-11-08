import tw from "twin.macro";
import styled from "styled-components";
import { Button } from '@mui/material'

export const Styledhi = styled.div`
    ${tw`
        h-screen
        bg-blue-300
        flex
        flex-col
        items-center
        pt-20
        `}
`

export const StyledTitle = styled.div`
    ${tw`
        text-3xl
        font-bold
        mb-10
    `}
`
export const StyledInput = styled.div`
    ${tw`
        h-[36px]
        w-1/2
        flex
        items-center
        gap-5
        mb-10   
    `}
    input{
      ${tw`
            rounded-md
            h-full
            pl-3
            w-full
        `}
    }
`

export const StyledButton = styled(Button)`
    ${tw`
        h-full
    `}
`

export const StyledInfo = styled.div`
    ${tw`

    `}
`
export const StyledTitl = styled.div`
    ${tw`

    `}
`