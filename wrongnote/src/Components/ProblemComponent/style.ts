import tw from "twin.macro";
import styled from 'styled-components'

export const StyledContainer = styled.div`
    ${tw`
        bg-gray-400
        rounded-xl
        w-[calc(40% - 10px)]
        text-wrap
    `}
    @media(max-width:768px){
        width: calc(100% - 10px)
    }
`