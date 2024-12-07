import styled from "styled-components";
import tw from "twin.macro";


export const StyledBtn = styled.div`
    ${tw`
        flex
        justify-center
        bg-purple-300
        py-2
        text-white
        font-bold
        rounded-xl
        mt-auto
    `}
    &:hover{
        cursor: pointer;
    }
`   

export const StyledModalContainer = styled.div`
    ${tw`
        fixed
        flex
        justify-center
        items-center
        inset-0
        bg-black
        bg-opacity-50
        z-50
    `}
`
export const StyledModalContent = styled.div`
  ${tw`
    bg-gray-100
    p-5
    rounded-lg
    w-[80%]  
    max-w-[320px]
    h-[30%]
    flex
    flex-col
    items-center
    relative
    justify-around
  `}
`;

export const StyledClose = styled.div`
    ${tw`
        absolute
        flex
        justify-center
        items-center
        right-3
        top-8
        w-[30px]
        h-[30px]
        rounded-full
    `}
    &:hover{
        ${tw`
            bg-purple-300
            rounded-xl
            p-2
            text-white
        `}
    }
`
export const StyledInput = styled.div`
    ${tw`
        p-2
        pl-3
    `}
    input{
        ${tw`
            bg-purple-200
            rounded-md
            p-2
        `}
    }
`
export const StyledSubmit = styled.button`
    ${tw`
        bg-violet-200
        px-10
        py-1
        rounded-md
        font-bold
    `}
`