import * as React from 'react'

import Chip from '@mui/material/Chip'

export default function SelectTreatChipArray(props) {
  const { array, setCheckTreat, childCategories } = props
  const handleDelete = (chipToDelete, data) => {
    setCheckTreat(prevState => prevState.filter(value => value !== data))
  }

  return (
    <>
      {array.map((data, index) => {
        const category = childCategories.filter(c => c.id === data)
        return (
          <Chip
            key={index}
            className="mb05 mr05"
            label={category[0].title}
            onDelete={e => handleDelete(e, data)}
          />
        )
      })}
    </>
  )
}
