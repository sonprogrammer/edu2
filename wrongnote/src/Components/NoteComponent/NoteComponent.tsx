import React, { ChangeEvent, useState } from 'react'
import { StyledBox, StyledTextarea } from './style'

export default function NoteComponent() {
    const [noteContent, setNoteContent] = useState('')

    const handleNoteChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
        setNoteContent(e.target.value)
    }
    
  return (
    <StyledBox>
      <StyledTextarea
        value={noteContent}
        onChange={handleNoteChange}
        placeholder='write your note here'
      >

      </StyledTextarea>
    </StyledBox>
  )
}
