import { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import SignInForm from '../../components/auth/SignInForm'

const Login:NextPage = () => {
    const {data :session} = useSession();
  return (
    <>
    {session ? (
        <span>User Successfully logged in</span>
    ):(
        <>
        <SignInForm GithubSignIn={()=>signIn()}/>
        </>
    )
}
    </>
  )
}

export default Login