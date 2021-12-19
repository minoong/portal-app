import Button from '@components/common/Button'
import * as classNames from 'classnames'
import { UserRole } from 'apollo/types/__generated__/globalTypes'
import { FormType } from 'containers/auth/FormContainer'
import React, { useState } from 'react'
import { FormState, UseFormGetValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import Toast, { toast } from '@components/common/Toast'

const testList: toast[] = [
 {
  id: 1,
  title: 'Success',
  description: 'This is a success toast component',
  type: 'SUCESS',
 },
]

type IProps<T> = {
 [P in keyof T]?: T[P]
} & {
 isSignIn: boolean
 register: UseFormRegister<FormType>
 getValues: UseFormGetValues<FormType>
 handleSubmit: UseFormHandleSubmit<FormType>
 onSubmit: () => void
 formState: FormState<FormType>
 loading: boolean
}

const Form: React.FC<IProps<FormType>> = ({ register, getValues, isSignIn, handleSubmit, onSubmit, formState, loading }) => {
 const { errors, isValid } = formState
 const [list, setList] = useState(testList)

 const onClick = () => {
  setList((state) => [...state, ...testList])
 }

 return (
  <>
   <form className="w-full mt-14" onSubmit={handleSubmit(onSubmit)}>
    <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full px-3">
      <label className="label" htmlFor="email">
       Email
      </label>
      <input
       {...register('email', {
        required: 'Email is required',
        pattern: {
         value:
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         message: '이메일 형식으로 입력하세요',
        },
       })}
       name="email"
       id="email"
       type="email"
       required
       placeholder="Email"
       className={classNames.default('input', { 'border-red-500': errors.email?.message })}
      />
      <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
     </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full px-3">
      <label className="label" htmlFor="password">
       Password
      </label>
      <input
       {...register('password', { required: 'Password is required' })}
       name="password"
       id="password"
       type="password"
       required
       placeholder="Password"
       className={classNames.default('input', { 'border-red-500': errors.password?.message })}
      />
      <p className="text-red-500 text-xs italic">{errors.password?.message}</p>
     </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full px-3">
      <label className="label" htmlFor="role">
       Role
      </label>
      <div className="relative">
       <select
        {...register('role', { required: 'Role is required' })}
        name="role"
        required
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="role"
       >
        {Object.keys(UserRole).map((role) => (
         <option key={role} value={role}>
          {role}
         </option>
        ))}
       </select>
       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
       </div>
      </div>
     </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
     <div className="w-full px-3">
      <button onClick={onClick} type="button">
       add
      </button>
      <Toast toastList={list} position="toast-top-right" dismissTime={5000} />
      <Button isActive={isValid} isLoading={loading}>
       Sign In
      </Button>
     </div>
    </div>
   </form>
  </>
 )
}

export default Form
