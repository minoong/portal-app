import { useMutation } from '@apollo/client'
import Form from '@components/auth/Form'
import { LOGIN_MUTATION } from 'apollo/auth/mutation/signUp'
import { UserRole } from 'apollo/types/__generated__/globalTypes'
import { loginMutation, loginMutationVariables } from 'apollo/types/__generated__/loginMutation'
import React, { useState } from 'react'
import { useForm, UseFormGetValues, UseFormRegister } from 'react-hook-form'

interface IProps {
 isSignIn: boolean
}

export interface FormType {
 email: string
 password: string
 role: UserRole
}

const FormContainer: React.FC<IProps> = ({ isSignIn }) => {
 const { register, getValues, handleSubmit, formState } = useForm<FormType>({
  mode: 'onChange',
  defaultValues: {
   role: UserRole.Client,
  },
 })

 console.log(formState.isValid)

 const onCompleted = (payload: loginMutation) => {
  console.log(payload)
 }

 const [loginMutation, { loading, error, data: loginMutationResult }] = useMutation<loginMutation, loginMutationVariables>(LOGIN_MUTATION, {
  onCompleted,
 })

 const onSubmit = () => {
  if (loading) return

  const { email, password, role } = getValues()

  loginMutation({
   variables: {
    loginInput: {
     email,
     password,
    },
   },
  })
 }
 return (
  <>
   <Form
    register={register}
    getValues={getValues}
    isSignIn={isSignIn}
    handleSubmit={handleSubmit}
    onSubmit={onSubmit}
    formState={formState}
    loading={loading}
   />
  </>
 )
}

export default FormContainer
