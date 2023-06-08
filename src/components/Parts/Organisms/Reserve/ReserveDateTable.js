import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
const ReserveDateTable = props => {
  const { dates, calendarDisplayYM, dateChange, minDate } = props
  const cal = date => {
    return [...Array(7)].map((_, i) => {
      if (date[i].is_past) {
        return (
          <TableCell
            align="center"
            style={{
              background: '#f5f5f5',
              borderRight: '1px solid #ddd',
              color: date[i].color,
            }}>
            {date[i]?.date}
          </TableCell>
        )
      }
      return (
        <TableCell
          align="center"
          style={{ borderRight: '1px solid #ddd', color: date[i].color }}>
          {date[i]?.date}
          <br />
          {date[i].is_closed ? '休' : '⚪︎'}
        </TableCell>
      )
    })
  }
  return (
    <>
      <div className="flex justify-space mt1 mb1">
        <Button
          variant="outlined"
          onClick={() => dateChange('prev')}
          disabled={minDate === calendarDisplayYM}>
          前月
        </Button>
        <Typography variant="bold">{calendarDisplayYM}</Typography>
        <Button variant="outlined" onClick={() => dateChange('next')}>
          翌月
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 650 }} className="b-gray">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="border-r-gray">
                月
              </TableCell>
              <TableCell align="center" className="border-r-gray">
                火
              </TableCell>
              <TableCell align="center" className="border-r-gray">
                水
              </TableCell>
              <TableCell align="center" className="border-r-gray">
                木
              </TableCell>
              <TableCell align="center" className="border-r-gray">
                金
              </TableCell>
              <TableCell
                align="center"
                className="border-r-gray color-saturday">
                土
              </TableCell>
              <TableCell align="center" className="color-sunday">
                日
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dates.map((date, index) => {
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {cal(date)}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
export default ReserveDateTable
