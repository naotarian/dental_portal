import * as React from 'react'

import Chip from '@mui/material/Chip'

export default function DowChipArray(props) {
  const { array, setCheckDow, dow, defaultFetch } = props

  const handleDelete = (chipToDelete, data) => {
    setCheckDow(prevState => prevState.filter(value => value !== data))
    defaultFetch()
  }

  return (
    <>
      {array.map((data, index) => {
        const dowTarget = dow.filter(c => c.id === data)
        return (
          <Chip
            label={dowTarget[0].name}
            onDelete={e => handleDelete(e, data)}
            key={index}
          />
        )
      })}
    </>
  )
}
