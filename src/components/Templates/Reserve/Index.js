import { useState, useEffect } from 'react'
import HeadPaper from '@/components/Parts/Organisms/Reserve/HeadPaper'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import ReserveDateTable from '@/components/Parts/Organisms/Reserve/ReserveDateTable'
const Index = props => {
  const {
    dental,
    dates,
    examination,
    setExamination,
    medicalHopeId,
    setMedicalHopeId,
    calendarDisplayYM,
    dateChange,
    minDate,
  } = props
  const [dateSelect, setDateSelect] = useState(false)
  return (
    <>
      <HeadPaper dental={dental} />
      <Grid container spacing={2} className="relative">
        <Grid item xs={12} md={8} lg={8}>
          <Paper className="p1 br0">
            <div className="bg-iceberg text-c p1">
              <Typography variant="bold">当院での受診</Typography>
            </div>
            <div className="flex justify-around mt1">
              <input
                type="radio"
                name="examination"
                value="new"
                className="btnRadio"
                id="new"
                onChange={e => {
                  setExamination(e.target.value)
                }}
              />
              <label htmlFor="new" className="btnRadioLabel wi45">
                初めて
              </label>
              <input
                type="radio"
                name="examination"
                value="repeat"
                className="btnRadio"
                id="repeat"
                onChange={e => {
                  setExamination(e.target.value)
                }}
              />
              <label htmlFor="repeat" className="btnRadioLabel wi45">
                2回目以降
              </label>
            </div>
            <div className="bg-iceberg text-c p1 mt1">
              <Typography variant="bold">診療希望内容</Typography>
            </div>
            <div className="flex justify-around mt1 flex-wrap">
              {dental.treatments?.map((data, index) => (
                <>
                  <input
                    type="radio"
                    name="treat"
                    value={data.id}
                    className="btnRadio"
                    id={data.id}
                    onChange={e => {
                      setMedicalHopeId(e.target.value)
                    }}
                  />
                  <label
                    htmlFor={data.id}
                    className="btnRadioLabel wi45 mb1"
                    style={{ fontSize: '0.9rem' }}>
                    {data.title}
                  </label>
                </>
              ))}
            </div>
            <Button
              disabled={!examination || !medicalHopeId || dateSelect}
              variant="contained"
              fullWidth
              onClick={() => {
                setDateSelect(true)
              }}
              style={{ height: '50px' }}>
              日時を選択する
            </Button>
            {dateSelect && (
              <>
                <div className="bg-iceberg text-c p1 mt1">
                  <Typography variant="bold">予約日時</Typography>
                </div>
                <ReserveDateTable
                  dates={dates}
                  calendarDisplayYM={calendarDisplayYM}
                  dateChange={dateChange}
                  minDate={minDate}
                />
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className="relative">
          <Paper className="confirm-pc p1">
            <div className="bg-iceberg text-c">
              <Typography variant="bold">入力内容の確認</Typography>
            </div>
            <div className="bg-iceberg mt1">
              <Typography variant="bold">当院での受診</Typography>
            </div>
            <div className="mt1">
              <Typography variant="body1">初めて</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
export default Index
