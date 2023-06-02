import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Header from '../components/Parts/Template/Header'
import Typography from '@mui/material/Typography'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dentalドットコム</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="manage-container mt-header p1">
        <div className="content-wrap-1000">
          <div className="top-visual filter-60">
            <div className="p1" id="topSearchArea">
              <Typography variant="h2" className="stand-out color-white">
                条件別で歯科医院を検索！！
              </Typography>
            </div>
            {/* <img src="/images/top/top2.png" className="wi100 filter-50" /> */}
          </div>
        </div>
      </div>
    </>
  )
}
