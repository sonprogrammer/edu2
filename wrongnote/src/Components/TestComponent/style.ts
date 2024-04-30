import tw from "twin.macro";
import styled from "styled-components";

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
    h-[calc(40% - 10px)]
    flex
    flex-col
    items-center
    gap-2
    p-2
    mb-[10px]
    `}
    @media(max-width:768px){
        width: calc(100% - 10px)
    }
`
export const StyledContent = styled.div`
    ${tw`

    `}
`
export const StyledAnswer = styled.textarea`
    ${tw`
        w-full
    `}
`