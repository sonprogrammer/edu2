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
export const StyledSearch = styled.input.attrs({placeholder: 'Search'})`
    ${tw`
        mx-auto
        rounded-3xl
        h-10
        text-left
        px-4
        outline-none
    `}
    
`
export const StyledTags = styled.div`
    ${tw`
        flex
        ml-auto
        text-white
    `}
        gap: 20px;
        & > a:hover {
            color: yellow;
        }
`