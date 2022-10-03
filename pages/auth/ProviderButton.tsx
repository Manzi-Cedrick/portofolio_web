import { signIn } from 'next-auth/react';
import React from 'react'

const ProviderButton = ({providers}:any) => {
  return (
    <>
    {providers &&
      Object.values(providers).map((provider:any) => (
        <div key={provider.name}>
          <button
            onClick={() => {
              signIn(provider.id);
            }}
            className='bg-white h-12 w-full'
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
  </>
  )
}

export default ProviderButton