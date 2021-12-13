import Button from '@components/common/Button'
import HeadInfo from '@components/seo/HeadInfo'
import FormContainer from 'containers/auth/FormContainer'
import { NextPage } from 'next'
import React from 'react'

const signIn: NextPage = () => {
 return (
  <>
   <HeadInfo title="MY-PORTAL | Sign In" />
   <div className="flex items-center flex-col bg-blue-500 mt-20">
    <div className="w-full max-w-screen-sm px-5 items-center bg-white relative">
     <div className="p-4 bg-red-300 rounded-lg absolute -top-9 m-auto w-40 right-0 left-0 text-center">My-Portal</div>
     <FormContainer isSignIn={true} />
    </div>
   </div>
  </>
 )
}

export default signIn
