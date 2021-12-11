import { gql, useQuery } from '@apollo/client'
import HeadInfo from '@components/seo/HeadInfo'
import { RESTAURANTS_QUERY } from 'apollo/queries/test'
import type { NextPage } from 'next'
import { useState } from 'react'
import {
 restaurantsPageQuery,
 restaurantsPageQueryVariables,
 restaurantsPageQuery_allCategories,
 restaurantsPageQuery_allCategories_categories,
} from 'types/__generated__/restaurantsPageQuery'
import client from '../apollo-client'
import styles from '../styles/Home.module.css'

interface Test {
 props: {
  countries: restaurantsPageQuery
 }
}

const Home: NextPage<Test> = ({ props }) => {
 console.log(props)

 return (
  <div className={styles.container}>
   <HeadInfo title="MY-PORTAL" />

   <main className={styles.main}>hi</main>
  </div>
 )
}

Home.getInitialProps = async () => {
 const { data } = await client.query<restaurantsPageQuery, restaurantsPageQueryVariables>({
  query: RESTAURANTS_QUERY,
  variables: {
   input: {
    page: 1,
   },
  },
 })

 return {
  props: {
   countries: data,
  },
 }
}

export default Home
