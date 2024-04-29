import tw from "twin.macro";
import styled from '@emotion/styled';

export const StyledBox = styled.div`
    ${tw`
        w-full
    `}
`
export const StyledTextarea = styled.textarea`
    ${tw`
        w-full
        h-[100vh]
        p-32
        bg-blue-100
        text-2xl
        focus:border-blue-500
        focus:outline-none
    `}
`