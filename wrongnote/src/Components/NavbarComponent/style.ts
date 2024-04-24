import tw from "twin.macro";
import styled from 'styled-components'


export const StyledContainer = styled.div`
    ${tw`
        w-full
        flex
        justify-between
        text-2xl
        font-bold
        p-4
        bg-blue-500
        h-20
        items-center
    `}
`

export const StyledLogo = styled.div`
    ${tw`
        mr-auto
        bg-yellow-500
        rounded-xl
        p-1
        items-center
        flex
    `}
`
export const StyledSearch = styled.input`
    ${tw`
        mx-auto
        rounded-3xl
        h-10
        text-center
    `}
    transition: border-color 0.3s ease;
    &:focus{
        border-color: red;
    }
`
export const StyledTags = styled.a`
    ${tw`
        flex
        ml-auto
        `}
        gap: 20px
`