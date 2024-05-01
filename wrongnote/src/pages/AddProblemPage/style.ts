import tw from "twin.macro";
import styled from "styled-components";

export const StyledBox = styled.div`
    ${tw`
        flex
        flex-col
        justify-between
        bg-gray-300
        m-4
        items-center
        w-1/2
        h-[80vh]
        mt-10
        rounded-2xl
        mr-auto
        ml-auto
    `}
`
export const StyledContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-[80%]
        mt-10
    `}
`
export const StyledProblem = styled.input`
    ${tw`
        
    `}
`
export const StyledAnswer = styled.input`
    ${tw`

    `}
`
export const StyledDescription = styled.input`
    ${tw`

    `}
`
export const StyledBtn = styled.button`
    ${tw`
        bg-yellow-300
        w-[80%]
        h-[7%]
        rounded-md
        font-bold
        text-xl
        mb-10
    `}
`