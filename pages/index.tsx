import { gql } from '@apollo/client'
import type { NextPage } from 'next'
import client from '../apollo-client'
import HeadInfo from '../components/seo/HeadInfo'
import styles from '../styles/Home.module.css'

interface Test {
 props: {
  countries: string[]
 }
}

const Home: NextPage<Test> = ({ props }) => {
 console.log(props)
 return (
  <div className={styles.container}>
   <HeadInfo title="MY-PORTAL!!" />

   <main className={styles.main}>
    <h1 className="text-center">zzzz</h1>
    <h1 className={styles.title}>
     Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>

    <p className={styles.description}>
     Get started by editing <code className={styles.code}>pages/index.tsx</code>
    </p>

    <div className={styles.grid}>
     <a href="https://nextjs.org/docs" className={styles.card}>
      <h2>Documentation &rarr;</h2>
      <p>Find in-depth information about Next.js features and API.</p>
     </a>

     <a href="https://nextjs.org/learn" className={styles.card}>
      <h2>Learn &rarr;</h2>
      <p>Learn about Next.js in an interactive course with quizzes!</p>
     </a>

     <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
      <h2>Examples &rarr;</h2>
      <p>Discover and deploy boilerplate example Next.js projects.</p>
     </a>

     <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card}>
      <h2>Deploy &rarr;</h2>
      <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
     </a>
     <div className={styles.grid}>
      {props.countries.map((country: any) => (
       <div key={country.code} className={styles.card}>
        <h3>
         <a href="#country-name" aria-hidden="true" className="aal_anchor" id="country-name">
          <svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16">
           <path
            fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
           ></path>
          </svg>
         </a>
         {country.name}
        </h3>
        <p>
         {country.code} - {country.emoji}
        </p>
       </div>
      ))}
     </div>
    </div>
   </main>
  </div>
 )
}

Home.getInitialProps = async () => {
 const { data } = await client.query({
  query: gql`
   query Countries {
    countries {
     code
     name
     emoji
    }
   }
  `,
 })

 return {
  props: {
   countries: data.countries.slice(0, 4),
  },
 }
}

export default Home
