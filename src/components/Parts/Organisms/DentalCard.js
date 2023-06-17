import * as React from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

import Link from 'next/link'
import { useRouter } from 'next/router'

import ReserveCalrendarMini from '@/components/Parts/Organisms/Reserve/ReserveCalrendarMini'
const DentalCard = ({ ...data }) => {
  const dentalData = data.data
  const router = useRouter()
  const reserve = () => {
    router.push(`/reserve/${dentalData.id}`)
  }
  return (
    <Card sx={{ minWidth: 275 }} className="mb1 br0 pointer dental-card">
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {dentalData.selected_station?.remark}
        </Typography>
        <Typography variant="largeBold" component="div">
          {dentalData.dental_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <div className="mt1 mb1 flex gap-40-pc gap-10-sp">
          <div className="min-wi-150-sp min-wi-200-tb-pc he-150">
            <img
              src="/images/testSambnail.jpg"
              alt="テストサムネイル"
              className="wi100"
            />
          </div>
          <div>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {dentalData?.medical_treatments?.map((data, index) => (
                <React.Fragment key={index}>{data.title}/</React.Fragment>
              ))}
            </Typography>
            <Typography>test</Typography>
            <Typography>test</Typography>
          </div>
        </div>
        <ReserveCalrendarMini dentalData={dentalData} />
      </CardContent>
      <CardActions className="justify-center gap-40">
        <Button
          variant="contained"
          startIcon={<EventAvailableIcon />}
          onClick={reserve}>
          ネット予約
        </Button>
        <Link href={`tel:${dentalData.tel}`}>
          <a>
            <Button variant="outlined" startIcon={<LocalPhoneIcon />}>
              電話予約
            </Button>
          </a>
        </Link>
      </CardActions>
    </Card>
  )
}
export default DentalCard
