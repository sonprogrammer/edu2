import tw from "twin.macro";
import styled from "styled-components";

export const StyledPlus = styled.div`
    ${tw`
        absolute
        bottom-10
        right-10
        w-20
        h-20
        text-center
        text-white
        bg-blue-200
        text-7xl
        font-semibold
        rounded-full
        cursor-pointer
    `}
    transition: transform 0.3s;
    &:hover{
        transform: scale(1.2)
    }
    


`