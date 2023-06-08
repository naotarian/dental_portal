import Head from 'next/head'

import Header from '@/components/Parts/Template/Header'
import Template from '@/components/Templates/Dental/Index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dentalドットコム | 歯科医院一覧</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="manage-container mt-header">
        <div className="content-wrap-1000">
          <Template />
        </div>
      </div>
    </>
  )
}
