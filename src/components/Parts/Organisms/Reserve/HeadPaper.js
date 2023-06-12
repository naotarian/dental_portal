import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
const HeadPaper = props => {
  const { dental } = props
  return (
    <Paper className="p1 mb1">
      <div>
        <Typography variant="h1">{dental.dental_name}</Typography>
        <Typography variant="bold">
          {dental.selected_station?.remark}
        </Typography>
      </div>
      <div>
        <Typography variant="body1Red">
          {' '}
          混雑状況により万が一時間変更がある場合、
          医院固定番号からご連絡致します。 御了承下さい。
        </Typography>
      </div>
    </Paper>
  )
}
export default HeadPaper
