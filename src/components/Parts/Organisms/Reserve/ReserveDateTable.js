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
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]
const ReserveDateTable = props => {
  return (
    <>
      <div className="flex justify-space mt1 mb1">
        <Button variant="outlined">前月</Button>
        <Typography variant="bold">2023年6月</Typography>
        <Button variant="outlined">翌月</Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">月</TableCell>
              <TableCell align="center">火</TableCell>
              <TableCell align="center">水</TableCell>
              <TableCell align="center">木</TableCell>
              <TableCell align="center">金</TableCell>
              <TableCell align="center" className="color-saturday">
                土
              </TableCell>
              <TableCell align="center" className="color-sunday">
                日
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">○</TableCell>
                <TableCell align="center">×</TableCell>
                <TableCell align="center">○</TableCell>
                <TableCell align="center">○</TableCell>
                <TableCell align="center">○</TableCell>
                <TableCell align="center">○</TableCell>
                <TableCell align="center">○</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
export default ReserveDateTable
