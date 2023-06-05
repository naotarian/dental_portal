import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Header from '../components/Parts/Template/Header'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import SearchModal from '@/components/Parts/Top/SearchModal'
import Grid from '@mui/material/Grid'
import { useRouter } from 'next/router'

export default function Home() {
  const [openSearchModal, setOpenSearchModal] = useState(false)
  const handleOpen = () => setOpenSearchModal(true)
  const searchModalClose = () => setOpenSearchModal(false)
  const router = useRouter()
  const list = () => {
    router.push('/dental/list')
  }
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
      <div className="manage-container mt-header">
        <div className="content-wrap-1000">
          <div className="top-visual filter-60">
            <div className="p1" id="topSearchArea">
              <Typography variant="h2" className="stand-out color-white">
                条件別で歯科医院を検索！！
              </Typography>
              <SearchModal
                openSearchModal={openSearchModal}
                searchModalClose={searchModalClose}
              />
              <Paper className="p1">
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} lg={4}>
                    <TextField
                      size="small"
                      placeholder="駅名・エリア"
                      InputProps={{
                        readOnly: true,
                      }}
                      onClick={handleOpen}
                    />
                  </Grid>
                  <Grid item xs={12} md={8} lg={8}>
                    <TextField
                      size="small"
                      placeholder="キーワード"
                      InputProps={{
                        readOnly: true,
                      }}
                      onClick={handleOpen}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    className="top-badge-area sp-only mt1">
                    <span className="search-badge" onClick={list}>
                      土曜診療
                    </span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    className="top-badge-area pc-only mt1">
                    <span className="search-badge" onClick={list}>
                      土曜診療
                    </span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    className="top-badge-area pc-only">
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                    <span className="search-badge">土曜診療</span>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
