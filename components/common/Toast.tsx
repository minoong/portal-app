import React, { useEffect, useState } from 'react'
import * as classNames from 'classnames'
import { AiFillCheckCircle, AiOutlineClose } from 'react-icons/ai'
import { useInterval } from 'hooks/useInterval'

export type toast = {
 id: number
 title: string
 description: string
 type?: 'SUCESS' | 'INFO' | 'ERROR' | 'WARNING'
}

interface IProps {
 position: 'toast-top-right' | 'toast-bottom-right' | 'toast-top-left' | 'toast-bottom-left'
 toastList: toast[]
 autoDelete?: boolean
 dismissTime?: number
}

const Toast: React.FC<IProps> = ({ position, toastList, dismissTime }) => {
 console.log(toastList)
 const [list, setList] = useState(toastList)

 useEffect(() => {
  setList([...toastList])
 }, [toastList])

 useEffect(() => {
  const interval = setInterval(() => {
   if (toastList.length && list.length) {
    deleteToast(toastList[0].id)
   }
  }, dismissTime)

  return () => {
   clearInterval(interval)
  }

  // eslint-disable-next-line
}, [toastList, dismissTime, list]);

 const deleteToast = (id: number) => {
  const listItemIndex = list.findIndex((e) => e.id === id)
  const toastListItem = toastList.findIndex((e) => e.id === id)
  list.splice(listItemIndex, 1)
  toastList.splice(toastListItem, 1)
  setList([...list])
 }

 return (
  <div className={classNames.default('notification-container fixed box-border text-base z-50 w-full md:w-96 p-0.5', position, `${position}-position`)}>
   {list.map((toast, i) => (
    <div key={i} className={`notification rounded-xl mb-2 p-0.5 toast bg-white relative border border-gray-200 ${position}`}>
     <div className="flex min-w-full items-stretch">
      <div>{toast.type === 'SUCESS' && <AiFillCheckCircle size={31} />}</div>
      <div className="flex-initial flex flex-col pl-0.5" style={{ flex: 1 }}>
       <div className="w-full font-bold">{toast.title}</div>
       <div className="text-gray-500">{toast.description}</div>
      </div>
      <div>
       <AiOutlineClose />
      </div>
     </div>
    </div>
   ))}
  </div>
 )
}

export default Toast
