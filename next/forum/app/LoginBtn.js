'use client'

import { signIn, signOut } from 'next-auth/react'

export default function LoginBtn() {
  return (
    <>
      <button
        onClick={() => {
          signIn()
        }}>
        login
      </button>
      <button
      style={{marginLeft: '12px'}}
        onClick={() => {
          signOut()
        }}>
        signout
      </button>
    </>
  )
}
