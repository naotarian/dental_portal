import { useState, useEffect } from 'react'
import Template from '@/components/Templates/Reserve/Index'
import { useRouter } from 'next/router'
import axios from '@/lib/axios'
import Head from 'next/head'

import Header from '@/components/Parts/Template/Header'
const reserve = () => {
  const router = useRouter()
  const [manageId, setManageId] = useState('')
  const [dental, setDental] = useState(null)
  const [dates, setDates] = useState(null)
  const [calendarDisplayYM, setCalendarDisplayYM] = useState('')
  const [nextDate, setNextDate] = useState('')
  const [prevDate, setPrevDate] = useState('')
  const [minDate, setMinDate] = useState('')
  const [maxDate, setMaxDate] = useState('')
  const [dayList, setDayList] = useState(null)
  // 患者様情報の入力
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')
  const [examination, setExamination] = useState('')
  const [sex, setSex] = useState('')
  const [medicalHopeId, setMedicalHopeId] = useState('')
  const [lastName, setLastName] = useState('')
  const [lastNameKana, setLastNameKana] = useState('')
  const [firstName, setFirstName] = useState('')
  const [firstNameKana, setFirstNameKana] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [fixed, setFixed] = useState('')
  const [remark, setRemark] = useState('')
  const [reserveDay, setReserveDay] = useState('')
  const [reserveTime, setReserveTime] = useState('')
  const [reserveDayYmd, setReserveDayYmd] = useState('')
  //validationMessage
  const [errors, setErrors] = useState(null)
  useEffect(() => {
    ;(async () => {
      if (!router.isReady) return
      const id = router.query.id
      setManageId(id)
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
  const submit = async () => {
    try {
      const sendData = {
        manageId,
        examination,
        sex,
        medicalHopeId,
        year,
        month,
        day,
        lastName,
        lastNameKana,
        firstName,
        firstNameKana,
        email,
        mobile,
        fixed,
        remark,
        reserveDay,
        reserveTime,
        reserveDayYmd,
      }
      setErrors(null)
      const res = await axios.post('/api/portal/reserve/regist', sendData)
      router.push('/reserve/complate')
    } catch (error) {
      setErrors(error.response.data.errors)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
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
              submit={submit}
              errors={errors}
              setReserveDayYmd={setReserveDayYmd}
            />
          )}
        </div>
      </div>
    </>
  )
}
export default reserve
