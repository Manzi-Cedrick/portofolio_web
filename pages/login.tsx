import { NextPage } from 'next'
import { getProviders, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import SignInForm from '../components/auth/SignInForm'
import { LoginFormDummy, LoginStructure } from '../utils/data.types'
import ProviderButton from './auth/ProviderButton'

const Login: NextPage = ({providers}:any) => {
  const { data: session } = useSession();
  // const [providers, setProviders] = useState<any>();
  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     setProviders(res);
  //   })
  // }, [])
  
  console.log('Providers', providers);
  const router = useRouter()
  const [FormData, setFormData] = useState<LoginStructure>(LoginFormDummy);

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const logUser = signIn('credentials', { redirect: false, email: FormData?.email, password: FormData?.password, callback: `${window.location.origin}` });
      if (!logUser) {
        throw new Error('User not found');
      } else router.push('/content/dashboard');
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      {!session ?
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[90vh] lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="/assets/logo.svg" alt="logo" />
            Cedrick Portfolio
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" method='post' onSubmit={(e) => handleSubmit} >
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input value={FormData?.email} onChange={(e) => setFormData({ ...FormData, email: e.target.value })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input value={FormData?.password} onChange={(e) => setFormData({ ...FormData, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••••••••••••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required={true} />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-backG hover:underline ">Forgot password?</a>
                </div>
                <button type="submit" className="w-full text-white bg-backG hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                {/* <button className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex place-items-center justify-center gap-6" onClick={handleSignOut}><FaGithub/> Sign In with Github </button>*/}
                <ProviderButton providers={providers}/>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
        : <span className='text-white '>User Successfully logged in</span>
      }
    </section>
  )
}

export default Login

export async function getServerSideProps() {
  return {
    props: { 
      providers : await getProviders()
     },
  }
}