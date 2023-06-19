import * as React from 'react'

import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'

const ReserveDateTable = props => {
  const {
    dates,
    calendarDisplayYM,
    dateChange,
    minDate,
    maxDate,
    reserveDay,
    setReserveDay,
    dayList,
    reserveTime,
    setReserveTime,
    setReserveDayYmd,
    reserveDayYmd,
  } = props
  const cal = date => {
    return [...Array(7)].map((_, i) => {
      if (date[i].is_past) {
        return (
          <TableCell
            key={i}
            align="center"
            className="min-10 p-x10-y4"
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
          className="p-x10-y4"
          key={i}
          style={{
            borderRight: '1px solid #ddd',
            color: date[i].color,
            background: reserveDayYmd === date[i]?.day_ymd ? '#dff2f6' : '',
          }}>
          <Button
            style={{ color: date[i].color, fontWeight: 'bold' }}
            className="min-10 p0"
            disabled={date[i].is_closed}
            onClick={() => reserveDateSelect(date[i]?.day, date[i]?.day_ymd)}>
            {date[i]?.date}
            <br />
            {date[i].is_closed ? '休' : '⚪︎'}
          </Button>
        </TableCell>
      )
    })
  }
  const reserveDateSelect = (day, dayYmd) => {
    setReserveTime('')
    setReserveDay(day)
    setReserveDayYmd(dayYmd)
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
        <Button
          variant="outlined"
          onClick={() => dateChange('next')}
          disabled={maxDate === calendarDisplayYM}>
          翌月
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 650 }} className="b-gray">
          <TableHead>
            <TableRow>
              <TableCell align="center" className="border-r-gray p-x10-y4">
                月
              </TableCell>
              <TableCell align="center" className="border-r-gray p-x10-y4">
                火
              </TableCell>
              <TableCell align="center" className="border-r-gray p-x10-y4">
                水
              </TableCell>
              <TableCell align="center" className="border-r-gray p-x10-y4">
                木
              </TableCell>
              <TableCell align="center" className="border-r-gray p-x10-y4">
                金
              </TableCell>
              <TableCell
                align="center"
                className="border-r-gray color-saturday p-x10-y4">
                土
              </TableCell>
              <TableCell align="center" className="color-sunday p-x10-y4">
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
      {reserveDay && (
        <div className="mt2">
          <div className="bg-iceberg text-c p1 mt1 mb1 relative">
            <Typography variant="bold">時間を選択してください。</Typography>
            <span className="caption2">必須</span>
          </div>
          <div className="flex gap-20 flex-wrap ">
            {dayList?.map((data, index) => (
              <Button
                key={index}
                variant={data === reserveTime ? 'contained' : 'outlined'}
                onClick={() => {
                  setReserveTime(data)
                }}>
                {data}
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
export default ReserveDateTable
