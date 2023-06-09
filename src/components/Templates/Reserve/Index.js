import React, { useState, useEffect } from 'react'
import HeadPaper from '@/components/Parts/Organisms/Reserve/HeadPaper'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import ReserveDateTable from '@/components/Parts/Organisms/Reserve/ReserveDateTable'
import ReserveInformation from '@/components/Parts/Organisms/Reserve/ReserveInformation'
const Index = props => {
  const {
    dental,
    dates,
    examination,
    setExamination,
    sex,
    setSex,
    medicalHopeId,
    setMedicalHopeId,
    calendarDisplayYM,
    dateChange,
    minDate,
    maxDate,
    year,
    setYear,
    month,
    setMonth,
    day,
    setDay,
    reserveDay,
    setReserveDay,
    dayList,
    setDayList,
    reserveTime,
    setReserveTime,
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
              <label htmlFor="repeat" className="btnRadioLabel wi45 bold">
                2回目以降
              </label>
            </div>
            <div className="bg-iceberg text-c p1 mt1">
              <Typography variant="bold">診療希望内容</Typography>
            </div>
            <div className="flex justify-around mt1 flex-wrap">
              {dental.treatments?.map((data, index) => (
                <React.Fragment key={index}>
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
                    className="btnRadioLabel wi45 mb1 bold"
                    style={{ fontSize: '0.9rem' }}>
                    {data.title}
                  </label>
                </React.Fragment>
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
                  maxDate={maxDate}
                  reserveDay={reserveDay}
                  setReserveDay={setReserveDay}
                  dayList={dayList}
                  setDayList={setDayList}
                  reserveTime={reserveTime}
                  setReserveTime={setReserveTime}
                />
              </>
            )}
            {reserveDay && reserveTime && (
              <ReserveInformation
                sex={sex}
                setSex={setSex}
                year={year}
                setYear={setYear}
                month={month}
                setMonth={setMonth}
                day={day}
                setDay={setDay}
                reserveTime={reserveTime}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className="relative">
          <Paper className="confirm-pc p1">
            <div className="bg-iceberg text-c">
              <Typography variant="bold">入力内容の確認</Typography>
            </div>
            <div className="bg-iceberg mt1 pl1">
              <Typography variant="bold">当院での受診</Typography>
            </div>
            <div className="mt1 pl1">
              {examination && (
                <>
                  {examination === 'new' ? (
                    <Typography variant="body1">初めて</Typography>
                  ) : (
                    <Typography variant="body1">2回目以降</Typography>
                  )}
                </>
              )}
            </div>
            <div className="bg-iceberg mt1 pl1">
              <Typography variant="bold">診療希望内容</Typography>
            </div>
            <div className="mt1 pl1">
              {medicalHopeId && (
                <Typography>
                  {
                    dental.treatments.filter(
                      data => data.id == medicalHopeId,
                    )[0]?.title
                  }
                </Typography>
              )}
            </div>
            <div className="bg-iceberg mt1 pl1">
              <Typography variant="bold">ご予約の日付</Typography>
            </div>
            <div className="mt1 pl1">
              {reserveDay && <Typography>{reserveDay}</Typography>}
            </div>
            <div className="bg-iceberg mt1 pl1">
              <Typography variant="bold">ご予約の時間</Typography>
            </div>
            <div className="mt1 pl1">
              {reserveTime && <Typography>{reserveTime} ~ </Typography>}
            </div>
            <div className="mt1 text-c">
              <Button variant="contained">上記の内容で予約を確定する</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
export default Index
