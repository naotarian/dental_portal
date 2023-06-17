import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0)]
const ReserveCalrendarMini = props => {
  const { dentalData } = props
  return (
    <TableContainer component={Paper}>
      <Table ize="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {dentalData?.calendarMin?.map((row, index) => (
              <TableCell
                align="center"
                component="th"
                scope="row"
                key={index}
                className={
                  row.is_holiday
                    ? 'color-holiday br-gray p0'
                    : row.dow_number == 7
                    ? 'color-sunday  br-gray p0'
                    : row.dow_number == 6
                    ? 'color-saturday br-gray p0'
                    : ' br-gray p0'
                }>
                {row.dow}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {dentalData?.calendarMin?.map((row, index) => (
              <TableCell
                component="th"
                scope="row"
                key={index}
                align="center"
                className="br-gray p0 pt1">
                {row.display_day}
                <br />
                <Button variant="text">⚪︎</Button>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default ReserveCalrendarMini
