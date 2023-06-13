import * as React from 'react'
import { styled } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}))

export default function PrefectureChipArray(props) {
  const { array, setSelectPrefecture, defaultFetch } = props

  const handleDelete = chipToDelete => () => {
    setSelectPrefecture([])
    defaultFetch()
  }

  return (
    <>
      {array.map((data, index) => {
        return <Chip label={data} onDelete={handleDelete(data)} />
      })}
    </>
  )
}
