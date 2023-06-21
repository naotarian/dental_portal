import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import TrainIcon from '@mui/icons-material/Train'

import Link from 'next/link'
import { useRouter } from 'next/router'

import ReserveCalrendarMini from '@/components/Parts/Organisms/Reserve/ReserveCalrendarMini'
const DentalCard = ({ checkTreat, ...data }) => {
  const dentalData = data.data
  const router = useRouter()
  const reserve = () => {
    router.push(`/reserve/${dentalData.id}`)
  }
  return (
    <Card className="mb1 br0 pointer dental-card">
      <CardContent>
        <div className="flex">
          {dentalData.selected_station?.remark && (
            <>
              <TrainIcon color="info" />
              <Typography
                sx={{ fontSize: 16 }}
                color="text.secondary"
                gutterBottom>
                {dentalData.selected_station?.remark}
              </Typography>
            </>
          )}
        </div>
        <Typography variant="largeBold" component="div">
          {dentalData.dental_name}
        </Typography>

        <div className="mt1 mb1 flex gap-40-pc gap-10-sp">
          <div className="min-wi-150-sp max-wi-150-sp min-wi-200-tb-pc max-wi-200-tb-pc he-150">
            <img
              src="/images/testSambnail.jpg"
              alt="テストサムネイル"
              className="wi100"
            />
          </div>
          {dentalData?.medical_treatments.length > 0 && (
            <div className="pc-only">
              <Typography variant="bold" className="mb05">
                対応している治療内容
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {dentalData?.medical_treatments?.map((data, index) => (
                  <span
                    key={index}
                    style={{
                      color: checkTreat.includes(data.id) ? 'red' : '#333',
                    }}>
                    {data.title}/
                  </span>
                ))}
              </Typography>
            </div>
          )}
          <div className="sp-only">
            <Button
              variant="contained"
              fullWidth
              className="mb1"
              startIcon={<EventAvailableIcon />}
              onClick={reserve}>
              ネット予約
            </Button>
            <Link href={`tel:${dentalData.tel}`}>
              <a>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<LocalPhoneIcon />}>
                  電話予約
                </Button>
              </a>
            </Link>
          </div>
        </div>
        <ReserveCalrendarMini dentalData={dentalData} />
      </CardContent>
      <CardActions className="justify-center gap-40 pc-only">
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
