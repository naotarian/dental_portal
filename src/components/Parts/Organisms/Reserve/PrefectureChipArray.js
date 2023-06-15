import * as React from 'react'

import Chip from '@mui/material/Chip'

export default function PrefectureChipArray(props) {
  const { array, setSelectPrefecture, defaultFetch, prefectures } = props

  const handleDelete = chipToDelete => () => {
    setSelectPrefecture([])
    defaultFetch()
  }

  return (
    <>
      {array.map((data, index) => {
        const prefecture = prefectures.filter(c => c.id === data)
        return (
          <Chip
            label={prefecture[0].name}
            onDelete={handleDelete(data)}
            key={index}
          />
        )
      })}
    </>
  )
}
