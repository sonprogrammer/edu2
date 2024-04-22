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
    `}
`

export const StyledLogo = styled.div`
    ${tw`
        mr-auto
    `}
`
export const StyledSearch = styled.div`
    ${tw`
        mx-auto
    `}
`
export const StyledTags = styled.div`
    ${tw`
        flex
        ml-auto
        `}
        gap: 20px
`