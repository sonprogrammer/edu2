import React from 'react'
import { StyledAnswer, StyledBox, StyledContainer, StyledContent } from './style'

export default function TestComponent() {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledContent>문제내용fdsafdsfdasfdsafadsf sdafsdafdsafdsafasdfadsfsdafasdfsadfadsdddfdfdfdfdfdf dfdfdfdfd</StyledContent>
                <StyledAnswer cols={40} rows={3} placeholder='정답을 입력하세요' />
            </StyledContainer>
            <StyledContainer>
                <StyledContent>문제내용</StyledContent>
                <StyledAnswer cols={40} rows={3} placeholder='정답을 입력하세요' />
            </StyledContainer>
            <StyledContainer>
                <StyledContent>문제내용</StyledContent>
                <StyledAnswer cols={40} rows={3} placeholder='정답을 입력하세요' />
            </StyledContainer>
            <StyledContainer>
                <StyledContent>문제내용</StyledContent>
                <StyledAnswer cols={40} rows={3} placeholder='정답을 입력하세요' />
            </StyledContainer>
        </StyledBox>
    )
}
