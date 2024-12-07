import styled from "styled-components";
import tw from "twin.macro";


interface StyledBtnProps {
    isInCart: boolean;
    disabled?: boolean;
  }

export const StyledContainer = styled.div`
    ${tw`
        p-7
        flex
        border-4
        border-zinc-700
        mb-3
        items-center
        relative
    `}
`
export const StyledImage = styled.div<{ imageUrl?: string }>`
  ${tw`
    p-5
    rounded-full
    w-[74px]
    h-[74px]
  `}
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const StyledContent = styled.div`
    ${tw`
        ml-5
        text-xl
        font-bold
    `}
`
export const StyledBtn = styled.div<StyledBtnProps>`
    ${tw`
        absolute
        right-3
        bottom-3
        bg-blue-400
        p-2
        rounded-xl
        text-white
        `}
        background-color: ${(props) => (props.isInCart ? 'rgb(165 180 252)' : 'rgb(139 92 246)')}; 
        pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
        opacity: ${(props) => (props.disabled ? 0.5 : 1)};

        &:hover{
            cursor: pointer;
        }
`

export const StyledDeleteBtn = styled.div`
        ${tw`
        absolute
        right-3
        bottom-3
        bg-red-400
        p-2
        rounded-xl
        text-white
        `}
        &:hover{
            cursor: pointer;
        }
`