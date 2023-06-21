import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
const ReserveInformation = props => {
  const {
    setSex,
    year,
    setYear,
    month,
    setMonth,
    day,
    setDay,
    setLastNameKana,
    setFirstNameKana,
    setFirstName,
    setLastName,
    setEmail,
    setMobile,
    setFixed,
    setRemark,
  } = props
  const yearChange = event => {
    setYear(event.target.value)
  }
  const monthChange = event => {
    setMonth(event.target.value)
  }
  const dayChange = event => {
    setDay(event.target.value)
  }

  const yearSelectSet = () => {
    return [...Array(100)].map((_, i) => {
      return (
        <MenuItem value={1923 + i} key={i}>
          {1923 + i}年
        </MenuItem>
      )
    })
  }
  const monthSelectSet = () => {
    return [...Array(12)].map((_, i) => {
      return (
        <MenuItem value={i + 1} key={i}>
          {i + 1}月
        </MenuItem>
      )
    })
  }
  const daySelectSet = () => {
    if (!year || !month) return
    let datesOfYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const datesOfFebruary = isLeapYear(year) ? 29 : 28
    datesOfYear = [31, datesOfFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    return [...Array(datesOfYear[month - 1])].map((_, i) => {
      return (
        <MenuItem value={i + 1} key={i}>
          {i + 1}日
        </MenuItem>
      )
    })
  }
  const isLeapYear = year =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  return (
    <>
      <div className="bg-iceberg text-c p1 mt1">
        <Typography variant="bold">患者様情報の入力</Typography>
      </div>
      <Grid
        container
        spacing={2}
        className="b-gray text-c p0 mt1 al-stretch"
        style={{ margin: '0 auto', width: '100%' }}>
        <Grid item xs={12} md={3} lg={3} className="p1 bb-gray">
          <Typography variant="bold">氏名</Typography>
          <span className="caption">必須</span>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          lg={9}
          className="p1 gap-20 bl-gray-pc bb-gray">
          <div className="flex gap-20 mb1">
            <TextField
              label="姓"
              size="small"
              onChange={e => {
                setLastName(e.target.value)
              }}
            />
            <TextField
              label="名"
              size="small"
              onChange={e => {
                setFirstName(e.target.value)
              }}
            />
          </div>
          <div className="flex gap-20">
            <TextField
              label="姓(フリガナ)"
              size="small"
              onChange={e => {
                setLastNameKana(e.target.value)
              }}
            />
            <TextField
              label="名(フリガナ)"
              size="small"
              onChange={e => {
                setFirstNameKana(e.target.value)
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={3} lg={3} className="p1 bb-gray">
          <Typography variant="bold">メールアドレス</Typography>
          <span className="caption">必須</span>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          lg={9}
          className="p1 gap-20 bl-gray-pc bb-gray">
          <TextField
            label="メールアドレス"
            size="small"
            fullWidth
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3} className="p1 bb-gray">
          <Typography variant="bold">電話番号</Typography>
          <span className="caption">どちらか必須</span>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          lg={9}
          className="p1 gap-20 bl-gray-pc  bb-gray">
          <TextField
            label="携帯電話"
            size="small"
            fullWidth
            className="mb1"
            onChange={e => {
              setMobile(e.target.value)
            }}
          />
          <TextField
            label="固定電話"
            size="small"
            fullWidth
            onChange={e => {
              setFixed(e.target.value)
            }}
          />
        </Grid>
        <Grid item xs={12} md={3} lg={3} className="p1 bb-gray">
          <Typography variant="bold">生年月日</Typography>
          <span className="caption">必須</span>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          lg={9}
          className="p1 gap-20 bl-gray-pc  bb-gray">
          <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
            <InputLabel>年</InputLabel>
            <Select value={year} label="年" onChange={yearChange}>
              {yearSelectSet()}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
            <InputLabel>月</InputLabel>
            <Select value={month} label="月" onChange={monthChange}>
              {monthSelectSet()}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, maxWidth: 120 }} size="small">
            <InputLabel>日</InputLabel>
            <Select value={day} label="日" onChange={dayChange}>
              {daySelectSet()}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3} lg={3} className="p1 bb-gray">
          <Typography variant="bold">性別</Typography>
          <span className="caption">必須</span>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          lg={9}
          className="p1 gap-20 bl-gray-pc  bb-gray">
          <div className="flex justify-around mt1">
            <input
              type="radio"
              name="sex"
              value="women"
              className="btnRadio"
              id="woman"
              onChange={e => {
                setSex(e.target.value)
              }}
            />
            <label htmlFor="woman" className="btnRadioLabel wi45">
              女性
            </label>
            <input
              type="radio"
              name="sex"
              value="man"
              className="btnRadio"
              id="man"
              onChange={e => {
                setSex(e.target.value)
              }}
            />
            <label htmlFor="man" className="btnRadioLabel wi45">
              男性
            </label>
          </div>
        </Grid>
        <Grid item xs={12} md={3} lg={3} className="p1 bb-gray">
          <Typography variant="bold">備考</Typography>
          <span className="any">任意</span>
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          lg={9}
          className="p1 gap-20 bl-gray-pc  bb-gray">
          <TextField
            fullWidth
            multiline
            rows={4}
            placeholder="歯科医師に事前にお伝えしたいことがあればご記入ください。"
            onChange={e => {
              setRemark(e.target.value)
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}
export default ReserveInformation
