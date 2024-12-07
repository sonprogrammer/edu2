import styled from "styled-components";
import tw from "twin.macro";

export const StyledContainer = styled.div`
    ${tw`
        flex
        w-full
        justify-evenly
        py-7
        bg-purple-400
        font-bold
        `}
`

export const StyledBar = styled.div`
    ${tw`
        w-[2px]
        h-[20px]
        bg-purple-200
        
    `}
`