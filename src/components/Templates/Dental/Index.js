import { useState, useEffect } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import DentalCard from '@/components/Parts/Organisms/DentalCard'
import SearchDialog from '@/components/Parts/Organisms/Dialog/SearchDialog'
import DowChipArray from '@/components/Parts/Organisms/Reserve/DowChipArray'
import PrefectureChipArray from '@/components/Parts/Organisms/Reserve/PrefectureChipArray'
import SelectTreatChipArray from '@/components/Parts/Organisms/Reserve/SelectTreatChipArray'
import SideSearchArea from '@/components/Parts/Organisms/Reserve/SideSearchArea'
import axios from '@/lib/axios'
const Index = () => {
  const [dataFetch, setDataFetch] = useState(false)
  const [searchDialogOpen, setSearchDialogOpen] = useState(false)
  const [dentals, setDentals] = useState(null)
  const SearchDialogOpen = () => setSearchDialogOpen(true)
  const SearchDialogClose = () => setSearchDialogOpen(false)
  const [regions, setRegions] = useState(null)
  const [categories, setCategories] = useState(null)
  const [prefectures, setPrefectures] = useState(null)
  const [childCategories, setChildCategories] = useState(null)
  const [selectPrefecture, setSelectPrefecture] = useState([])
  const [checkTreat, setCheckTreat] = useState([])
  const [dow, setDow] = useState([])
  const [checkDow, setCheckDow] = useState([])
  const defaultFetch = async (treat, prefecture) => {
    const sendData = { treat, prefecture, checkDow }
    const res = await axios.post('/api/portal/dental', sendData)
    setDow(res.data.dow)
    setRegions(res.data.regions)
    setDentals(res.data.dentals)
    setCategories(res.data.categories)
    setPrefectures(res.data.prefectures)
    setChildCategories(res.data.children_categories)
    setDataFetch(true)
  }
  useEffect(() => {
    ;(async () => {
      defaultFetch(checkTreat, selectPrefecture, checkDow)
    })()
  }, [checkTreat, selectPrefecture, checkDow])
  const prefectureChange = async number => {
    const sendData = { prefecture: number, treat: checkTreat }
    setSelectPrefecture([number])
    const res = await axios.post('/api/portal/dental', sendData)
    setDentals(res.data.dentals)
    setPrefectures(res.data.prefectures)
  }
  const prefectureClear = () => {
    setSelectPrefecture([])
    defaultFetch()
  }
  const selectTreatChange = (e, id) => {
    if (e.target.checked) {
      setCheckTreat(prevState => [...prevState, id])
    }
    if (!e.target.checked) {
      setCheckTreat(prevState => prevState.filter(value => value !== id))
    }
  }
  const dowChange = (e, id) => {
    if (e.target.checked) {
      setCheckDow(prevState => [...prevState, id])
    }
    if (!e.target.checked) {
      setCheckDow(prevState => prevState.filter(value => value !== id))
    }
  }
  return (
    <>
      {dataFetch && (
        <Box sx={{ flexGrow: 1 }} className="mt1">
          <Grid container spacing={8}>
            <SideSearchArea
              selectPrefecture={selectPrefecture}
              prefectureClear={prefectureClear}
              regions={regions}
              prefectures={prefectures}
              categories={categories}
              checkTreat={checkTreat}
              selectTreatChange={selectTreatChange}
              prefectureChange={prefectureChange}
              dow={dow}
              checkDow={checkDow}
              dowChange={dowChange}
            />
            <Grid item xs={12} md={8} lg={8}>
              {selectPrefecture.length > 0 && (
                <div className="mb1">
                  <PrefectureChipArray
                    array={selectPrefecture}
                    setSelectPrefecture={setSelectPrefecture}
                    defaultFetch={defaultFetch}
                    prefectures={prefectures}
                  />
                </div>
              )}
              {checkTreat.length > 0 && (
                <div className="mb1">
                  <SelectTreatChipArray
                    array={checkTreat}
                    setCheckTreat={setCheckTreat}
                    childCategories={childCategories}
                  />
                </div>
              )}
              {checkDow.length > 0 && (
                <div className="mb1">
                  <DowChipArray
                    array={checkDow}
                    setCheckDow={setCheckDow}
                    dow={dow}
                    defaultFetch={defaultFetch}
                  />
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
                <DentalCard key={index} data={data} checkTreat={checkTreat} />
              ))}
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  )
}
export default Index
