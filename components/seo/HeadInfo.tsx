import Head from 'next/head'
import React from 'react'

interface HeadProps {
 title: string
}

const HeadInfo: React.FC<HeadProps> = ({ title }) => {
 return (
  <Head>
   <title>{title}</title>
   <link rel="icon" href="/favicon.ico" />
  </Head>
 )
}

HeadInfo.defaultProps = {
 title: 'MY-PORTAL',
}

export default HeadInfo
