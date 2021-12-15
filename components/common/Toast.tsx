import React, { useEffect, useState } from 'react'
import * as classNames from 'classnames'

type toast = {
 title: string
 description: string
}

interface IProps {
 position: 'toast-top-right' | 'toast-bottom-right' | 'toast-top-left' | 'toast-bottom-left' | 'toast-top-center' | 'toast-bottom-center'
 toastList: toast[]
}

const Toast: React.FC<IProps> = ({ position, toastList }) => {
 const [list, setList] = useState(toastList)

 useEffect(() => {
  setList(toastList)
 }, [toastList, list])
 return (
  <div className={classNames.default('notification-container fixed box-border text-base z-50', position)}>
   {list.map((toast, i) => (
    <div key={i} className={`notification toast bg-white relative w-96 `}>
     <button>X</button>
     <div className="notification-image">image</div>
     <div>
      <p className="notification-title">{toast.title}</p>
      <p className="notification-message">{toast.description}</p>
     </div>
    </div>
   ))}
  </div>
 )
}

export default Toast
