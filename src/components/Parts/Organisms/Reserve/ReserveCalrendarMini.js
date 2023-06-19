import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { useRouter } from 'next/router'

const ReserveCalrendarMini = props => {
  const router = useRouter()
  const { dentalData } = props
  const dateCheck = row => {
    router.push(`/reserve/${dentalData.id}?day=${row.day}`)
  }
  return (
    <TableContainer component={Paper}>
      <Table size="small">
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
                className="br-gray py-05 px-0">
                {row.display_day}
                <br />
                <Button
                  variant="text"
                  onClick={() => dateCheck(row)}
                  className="px-0"
                  disabled={row.threshold === 0}>
                  {row.threshold >= 3 ? '◎' : row.threshold === 0 ? 'x' : '⚪︎'}
                </Button>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default ReserveCalrendarMini
