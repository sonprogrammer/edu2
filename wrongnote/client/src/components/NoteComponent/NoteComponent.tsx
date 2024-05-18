import React, { ChangeEvent, useEffect, useState } from 'react'
import { StyledBox, StyledBtn, StyledTextarea } from './style'
import axios from 'axios'

export default function NoteComponent() {
    const [noteContent, setNoteContent] = useState('')
    const [updateContent, setUpdateContent] = useState('')
    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
      const fetchCurrentUser = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/account/current-user', { withCredentials: true })
          setCurrentUser(response.data._id)
        } catch (error) {
          console.log('failed to get current user', error)
        }
      }
      fetchCurrentUser()
    }, [])


    useEffect(()=>{
      const fetchnote = async () =>{
        try {
          const result = await axios.get(`http://localhost:3000/api/note/${currentUser}`)
          setNoteContent(result.data[0].content)
          console.log('dudlfd',result.data)
        } catch (error) {
          console.log('fetchnote error', error)
        }
      }
      fetchnote()
    },[currentUser])

    const handleNoteChange = async(e: ChangeEvent<HTMLTextAreaElement>)=>{
        setNoteContent(e.target.value)
    }

    const handleSaveNote = async () => {
      try {
        await axios.put(`http://localhost:3000/api/note/edit/${currentUser}`, { content: noteContent })
      } catch (error) {
        console.log('error', error)
      }
  }
    
  return (
    <StyledBox>
      <StyledTextarea
        value={noteContent}
        onChange={handleNoteChange}
        placeholder='write your note here...'
      />
    <StyledBtn onClick={handleSaveNote}>Save</StyledBtn>

    </StyledBox>
  )
}
