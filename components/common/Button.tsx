import React from 'react'

interface IProps {
 isActive: boolean
 isLoading: boolean
}

const Button: React.FC<IProps> = ({ isActive, isLoading, children }) => {
 return (
  // eslint-disable-next-line jsx-a11y/no-redundant-roles
  <button
   type="submit"
   className={`text-lg font-medium focus:outline-none text-white py-4 w-full  transition-colors ${
    isActive ? 'bg-lime-600 hover:bg-lime-700' : 'bg-gray-300 pointer-events-none'
   }`}
   role="button"
  >
   {isLoading ? 'Loading...' : children}
  </button>
 )
}

export default Button
