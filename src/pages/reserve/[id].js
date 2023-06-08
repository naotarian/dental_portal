import { useState, useEffect } from 'react'
import Template from '@/components/Templates/Reserve/Index'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import Head from 'next/head'

import Header from '@/components/Parts/Template/Header'
const reserve = () => {
  const router = useRouter()
  const [dental, setDental] = useState(null)
  useEffect(() => {
    ;(async () => {
      if (!router.isReady) return
      const id = router.query.id
      const res = await axios.post('/api/portal/dental/detail', { id })
      setDental(res.data.dental)
      console.log(res)
    })()
  }, [router.asPath])
  return (
    <>
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
            {dental && <Template dental={dental} />}
          </div>
        </div>
      </>
    </>
  )
}
export default reserve
