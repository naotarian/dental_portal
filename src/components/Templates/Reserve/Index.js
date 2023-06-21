import React, { useState, useRef } from 'react'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

import { Typography } from '@mui/material'

import HeadPaper from '@/components/Parts/Organisms/Reserve/HeadPaper'
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
    setLastNameKana,
    setFirstNameKana,
    setFirstName,
    setLastName,
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    email,
    setEmail,
    mobile,
    setMobile,
    fixed,
    setFixed,
    remark,
    setRemark,
    submit,
    errors,
    reserveDayYmd,
    setReserveDayYmd,
  } = props
  const [dateSelect, setDateSelect] = useState(false)
  const scrollCalendarmRef = useRef(null)
  const err = () => {
    if (errors) {
      return errors.map((data, i) => {
        return (
          <Stack sx={{ width: '100%' }} key={i} spacing={2} className="mb05">
            <Alert severity="error">{data}</Alert>
          </Stack>
        )
      })
    }
  }

  return (
    <>
      {err()}
      <HeadPaper dental={dental} />
      <Grid container spacing={2} className="relative">
        <Grid item xs={12} md={8} lg={8}>
          <Paper className="p1 br0">
            <div className="bg-iceberg text-c p1 relative">
              <Typography variant="bold">当院での受診</Typography>
              <span className="caption2">必須</span>
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
              <label htmlFor="new" className="btnRadioLabel wi45 bold">
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
            <div className="bg-iceberg text-c p1 mt1 relative">
              <Typography variant="bold">診療希望内容</Typography>
              <span className="caption2">必須</span>
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
                <div
                  className="bg-iceberg text-c p1 mt1 relative"
                  id="calendar">
                  <Typography variant="bold">予約日時</Typography>
                  <span className="caption2">必須</span>
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
                  reserveDayYmd={reserveDayYmd}
                  setReserveDayYmd={setReserveDayYmd}
                />
              </>
            )}
            <div ref={scrollCalendarmRef} />
            {reserveDay && reserveTime && (
              <ReserveInformation
                setSex={setSex}
                year={year}
                setYear={setYear}
                month={month}
                setMonth={setMonth}
                day={day}
                setDay={setDay}
                lastName={lastName}
                setLastName={setLastName}
                setFirstName={setFirstName}
                setLastNameKana={setLastNameKana}
                setFirstNameKana={setFirstNameKana}
                setEmail={setEmail}
                setMobile={setMobile}
                setFixed={setFixed}
                remark={remark}
                setRemark={setRemark}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className="relative">
          <Paper className="confirm-pc p1">
            <div className="bg-iceberg text-c">
              <Typography variant="bold">入力内容の確認</Typography>
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">当院での受診</Typography>
            </div>
            <div className="mt05 pl1">
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
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">診療希望内容</Typography>
            </div>
            <div className="mt05 pl1">
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
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">ご予約の日付</Typography>
            </div>
            <div className="mt05 pl1">
              {reserveDay && <Typography>{reserveDay}</Typography>}
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">ご予約の時間</Typography>
            </div>
            <div className="mt05 pl1">
              {reserveTime && <Typography>{reserveTime} ~ </Typography>}
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">氏名</Typography>
            </div>
            <div className="mt05 pl1">
              <Typography>
                {lastName}
                {firstName}
              </Typography>
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">氏名(フリガナ )</Typography>
            </div>
            <div className="mt05 pl1">
              <Typography>
                {lastNameKana}
                {firstNameKana}
              </Typography>
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">メールアドレス</Typography>
            </div>
            <div className="mt05 pl1">
              <Typography>{email}</Typography>
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">携帯電話番号</Typography>
            </div>
            <div className="mt05 pl1">
              {mobile ? (
                <Typography>{mobile}</Typography>
              ) : (
                <Typography>入力なし</Typography>
              )}
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">固定電話番号</Typography>
            </div>
            <div className="mt05 pl1">
              {fixed ? (
                <Typography>{fixed}</Typography>
              ) : (
                <Typography>入力なし</Typography>
              )}
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">生年月日</Typography>
            </div>
            <div className="mt05 pl1">
              <Typography>
                {year && year}年{month && month}月{day && day}日
              </Typography>
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">性別</Typography>
            </div>
            <div className="mt05 pl1">
              <Typography>
                {!sex ? '選択なし' : sex === 'women' ? '女性' : '男性'}
              </Typography>
            </div>
            <div className="bg-iceberg mt05 pl1">
              <Typography variant="bold">備考</Typography>
            </div>
            <div className="mt05 pl1">
              {remark ? (
                <Typography>{remark}</Typography>
              ) : (
                <Typography>入力なし</Typography>
              )}
            </div>
            <div className="mt05 text-c">
              <Button variant="contained" onClick={submit}>
                上記の内容で予約を確定する
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
export default Index
