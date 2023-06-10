import { useState, useEffect } from 'react'
import Template from '@/components/Templates/Reserve/Index'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import Head from 'next/head'

import Header from '@/components/Parts/Template/Header'
const reserve = () => {
  const router = useRouter()
  const [dental, setDental] = useState(null)
  const [dates, setDates] = useState(null)
  const [examination, setExamination] = useState('')
  const [sex, setSex] = useState('')
  const [medicalHopeId, setMedicalHopeId] = useState('')
  const [calendarDisplayYM, setCalendarDisplayYM] = useState('')
  const [nextDate, setNextDate] = useState('')
  const [prevDate, setPrevDate] = useState('')
  const [minDate, setMinDate] = useState('')
  const [maxDate, setMaxDate] = useState('')
  // 患者様情報の入力
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [lastName, setLastName] = useState('')
  const [lastNameKana, setLastNameKana] = useState('')
  const [firstName, setFirstName] = useState('')
  const [firstNameKana, setFirstNameKana] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [fixed, setFixed] = useState('')
  const [remark, setRemark] = useState('')

  const [reserveDay, setReserveDay] = useState('')
  const [dayList, setDayList] = useState(null)
  const [reserveTime, setReserveTime] = useState('')
  useEffect(() => {
    ;(async () => {
      if (!router.isReady) return
      const id = router.query.id
      const res = await axios.post('/api/portal/dental/detail', { id })
      setDental(res.data.dental)
    })()
  }, [router.asPath])
  useEffect(() => {
    ;(async () => {
      if (!router.isReady) return
      const id = router.query.id
      const res = await axios.post('/api/portal/reserve/calendar', {
        id,
        medicalHopeId,
      })
      setDates(res.data.dates)
      setCalendarDisplayYM(res.data.display_ym)
      setNextDate(res.data.next_date)
      setPrevDate(res.data.prev_date)
      setMinDate(res.data.min_date)
      setMaxDate(res.data.max_date)
      setDayList(res.data.date_list)
    })()
  }, [medicalHopeId])
  const dateChange = async kind => {
    if (!router.isReady) return
    const id = router.query.id
    const res = await axios.post('/api/portal/reserve/calendar', {
      id,
      medicalHopeId,
      ym: kind == 'prev' ? prevDate : nextDate,
    })
    setDates(res.data.dates)
    setCalendarDisplayYM(res.data.display_ym)
    setNextDate(res.data.next_date)
    setPrevDate(res.data.prev_date)
    setDayList(res.data.date_list)
  }
  return (
    <>
      <Head>
        <title>Dentalドットコム | 歯科医院一覧</title>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="manage-container mt-header">
        <div className="content-wrap-1000">
          {dental && (
            <Template
              dental={dental}
              dates={dates}
              examination={examination}
              setExamination={setExamination}
              sex={sex}
              setSex={setSex}
              medicalHopeId={medicalHopeId}
              setMedicalHopeId={setMedicalHopeId}
              calendarDisplayYM={calendarDisplayYM}
              dateChange={dateChange}
              minDate={minDate}
              maxDate={maxDate}
              year={year}
              setYear={setYear}
              month={month}
              setMonth={setMonth}
              day={day}
              setDay={setDay}
              reserveDay={reserveDay}
              setReserveDay={setReserveDay}
              dayList={dayList}
              setDayList={setDayList}
              reserveTime={reserveTime}
              setReserveTime={setReserveTime}
              setLastName={setLastName}
              setFirstName={setFirstName}
              setLastNameKana={setLastNameKana}
              setFirstNameKana={setFirstNameKana}
              lastName={lastName}
              firstName={firstName}
              lastNameKana={lastNameKana}
              firstNameKana={firstNameKana}
              email={email}
              setEmail={setEmail}
              mobile={mobile}
              setMobile={setMobile}
              fixed={fixed}
              setFixed={setFixed}
              remark={remark}
              setRemark={setRemark}
            />
          )}
        </div>
      </div>
    </>
  )
}
export default reserve
