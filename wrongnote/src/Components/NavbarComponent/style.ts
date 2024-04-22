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
    `}
`

export const StyledLogo = styled.a`
    ${tw`
        mr-auto
        bg-yellow-500
        rounded-xl
        p-1
        items-center
        flex
    `}
`
export const StyledSearch = styled.a`
    ${tw`
        mx-auto
    `}
`
export const StyledTags = styled.a`
    ${tw`
        flex
        ml-auto
        `}
        gap: 20px
`