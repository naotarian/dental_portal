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
  const [medicalHopeId, setMedicalHopeId] = useState('')
  const [calendarDisplayYM, setCalendarDisplayYM] = useState('')
  const [nextDate, setNextDate] = useState('')
  const [prevDate, setPrevDate] = useState('')
  const [minDate, setMinDate] = useState('')
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
  }
  return (
    <>
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
                medicalHopeId={medicalHopeId}
                setMedicalHopeId={setMedicalHopeId}
                calendarDisplayYM={calendarDisplayYM}
                dateChange={dateChange}
                minDate={minDate}
              />
            )}
          </div>
        </div>
      </>
    </>
  )
}
export default reserve
