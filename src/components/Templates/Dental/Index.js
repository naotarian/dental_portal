import * as React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import DentalCard from '@/components/Parts/Organisms/DentalCard'
import SearchDialog from '@/components/Parts/Organisms/Dialog/SearchDialog'
import SideBarSearch from '@/components/Parts/Organisms/SideBarSearch'
import PrefectureChipArray from '@/components/Parts/Organisms/Reserve/PrefectureChipArray'
import axios from '@/lib/axios'
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right" />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 1000,
    padding: '2rem',
    paddingTop: '1rem',
    border: '1px solid #dadde9',
  },
}))
const Index = () => {
  const [dataFetch, setDataFetch] = React.useState(false)
  const [searchDialogOpen, setSearchDialogOpen] = React.useState(false)
  const [dentals, setDentals] = React.useState(null)
  const SearchDialogOpen = () => setSearchDialogOpen(true)
  const SearchDialogClose = () => setSearchDialogOpen(false)
  const [regions, setRegions] = React.useState(null)
  const [selectPrefecture, setSelectPrefecture] = React.useState([])
  const defaultFetch = async () => {
    const res = await axios.get('/api/portal/dental')
    setRegions(res.data.regions)
    setDentals(res.data.dentals)
    setDataFetch(true)
  }
  React.useEffect(() => {
    ;(async () => {
      defaultFetch()
      // const res = await axios.get('/api/portal/dental')
      // setRegions(res.data.regions)
      // setDentals(res.data.dentals)
      // setDataFetch(true)
    })()
  }, [])
  const prefectureChange = async (number, name) => {
    const sendData = { number }
    setSelectPrefecture([name])
    const res = await axios.post('/api/portal/dental', sendData)
    setDentals(res.data.dentals)
  }
  const prefectureClear = () => {
    setSelectPrefecture([])
    defaultFetch()
  }
  return (
    <>
      {dataFetch && (
        <Box sx={{ flexGrow: 1 }} className="mt1">
          <Grid container spacing={8}>
            <Grid item xs={4} className="pc-only">
              <HtmlTooltip
                className="p2"
                title={
                  <React.Fragment>
                    <div className="bb-gray flex justify-space pb1">
                      <Typography variant="largeBold">エリア・駅</Typography>
                      <Button
                        variant="outlined"
                        disabled={selectPrefecture.length == 0}>
                        市区町村
                      </Button>
                    </div>
                    <div className="mb1 mt1 text-r">
                      <Button
                        variant="outlined"
                        disabled={selectPrefecture.length == 0}
                        onClick={prefectureClear}>
                        選択をクリア
                      </Button>
                    </div>
                    {regions.map((data, index) => (
                      <React.Fragment key={index}>
                        <div className="mb05 mt1">
                          <Typography key={index} variant="bold">
                            {data.region_name}
                          </Typography>
                        </div>
                        <div className="flex gap-20">
                          {data.prefectures.map((data2, index2) => (
                            <Typography className="white-noerap" key={index2}>
                              <Button
                                variant="text"
                                onClick={() =>
                                  prefectureChange(data2.id, data2.name)
                                }>
                                {data2.name}
                              </Button>
                            </Typography>
                          ))}
                        </div>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                }>
                <Button className="wi100 p0">
                  <SideBarSearch
                    title="エリア・駅"
                    text={
                      selectPrefecture.length > 0
                        ? selectPrefecture
                        : '指定なし'
                    }
                  />
                </Button>
              </HtmlTooltip>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">Tooltip with HTML</Typography>
                    {regions.map((data, index) => (
                      <Typography color="inherit" key={index}>
                        Tooltip with HTML
                      </Typography>
                    ))}
                  </React.Fragment>
                }>
                <Button className="wi100 p0">
                  <SideBarSearch title="治療内容" />
                </Button>
              </HtmlTooltip>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">Tooltip with HTML</Typography>
                    <em>{"And here's"}</em> <b>{'some'}</b>{' '}
                    <u>{'amazing content'}</u>. {"It's very engaging. Right?"}
                  </React.Fragment>
                }>
                <Button className="wi100 p0">
                  <SideBarSearch title="ネット予約" />
                </Button>
              </HtmlTooltip>
            </Grid>
            <Grid item xs={12} md={12} lg={8}>
              {selectPrefecture.length > 0 && (
                <div className="mb1">
                  <PrefectureChipArray
                    array={selectPrefecture}
                    setSelectPrefecture={setSelectPrefecture}
                    defaultFetch={defaultFetch}
                  />
                  {/* <ChipArray /> */}
                </div>
              )}
              <SearchDialog
                searchDialogOpen={searchDialogOpen}
                SearchDialogClose={SearchDialogClose}
              />
              <div className="sp-only">
                <div className="flex justify-around mb1">
                  <Button variant="outlined" color="inherit" className="br0">
                    現在地検索
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    className="br0"
                    onClick={SearchDialogOpen}>
                    詳細検索
                  </Button>
                </div>
              </div>
              {dentals?.map((data, index) => (
                <DentalCard key={index} data={data} />
              ))}
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}
export default Index
