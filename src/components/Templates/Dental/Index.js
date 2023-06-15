import React, { useState } from 'react'

import Box from '@mui/material/Box'

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
  const [selectPrefecture, setSelectPrefecture] = useState([10])
  const [checkTreat, setCheckTreat] = useState([1])
  const defaultFetch = async (treat, prefecture) => {
    const sendData = { treat, prefecture }
    const res = await axios.post('/api/portal/dental', sendData)
    setRegions(res.data.regions)
    setDentals(res.data.dentals)
    setCategories(res.data.categories)
    setPrefectures(res.data.prefectures)
    setChildCategories(res.data.children_categories)
    setDataFetch(true)
  }
  React.useEffect(() => {
    ;(async () => {
      defaultFetch(checkTreat, selectPrefecture)
    })()
  }, [checkTreat, selectPrefecture])
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
  return (
    <>
      {dataFetch && (
        <Box sx={{ flexGrow: 1 }} className="mt1">
          <SideSearchArea
            defaultFetch={defaultFetch}
            selectPrefecture={selectPrefecture}
            prefectureClear={prefectureClear}
            regions={regions}
            prefectures={prefectures}
            categories={categories}
            checkTreat={checkTreat}
            setSelectPrefecture={setSelectPrefecture}
            setCheckTreat={setCheckTreat}
            childCategories={childCategories}
            searchDialogOpen={searchDialogOpen}
            SearchDialogClose={SearchDialogClose}
            SearchDialogOpen={SearchDialogOpen}
            dentals={dentals}
            selectTreatChange={selectTreatChange}
            prefectureChange={prefectureChange}
          />
        </Box>
      )}
    </>
  )
}
export default Index
