import * as React from 'react'
import Typography from '@mui/material/Typography'
import SideBarSearch from '@/components/Parts/Organisms/SideBarSearch'
import DentalCard from '@/components/Parts/Organisms/DentalCard'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import theme from '@/components/default'
import SearchDialog from '@/components/Parts/Organisms/Dialog/SearchDialog'
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right" />
))(({}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    // fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))
const Index = () => {
  const [searchDialogOpen, setSearchDialogOpen] = React.useState(false)
  const SearchDialogOpen = () => setSearchDialogOpen(true)
  const SearchDialogClose = () => setSearchDialogOpen(false)
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="mt1">
        <Grid container spacing={8}>
          <Grid item xs={4} className="pc-only">
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Tooltip with HTML</Typography>
                  <em>{"And here's"}</em> <b>{'some'}</b>{' '}
                  <u>{'amazing content'}</u>. {"It's very engaging. Right?"}
                </React.Fragment>
              }>
              <Button className="wi100 p0">
                <SideBarSearch title="エリア・駅" />
              </Button>
            </HtmlTooltip>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Tooltip with HTML</Typography>
                  <em>{"And here's"}</em> <b>{'some'}</b>{' '}
                  <u>{'amazing content'}</u>. {"It's very engaging. Right?"}
                </React.Fragment>
              }>
              <Button className="wi100 p0">
                <SideBarSearch title="治療内容" />
              </Button>
            </HtmlTooltip>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Tooltip with HTML</Typography>
                  <em>{"And here's"}</em> <b>{'some'}</b>{' '}
                  <u>{'amazing content'}</u>. {"It's very engaging. Right?"}
                </React.Fragment>
              }>
              <Button className="wi100 p0">
                <SideBarSearch title="ネット予約" />
              </Button>
            </HtmlTooltip>
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <div className="mb1">
              <Typography variant="bold">【土曜診療】</Typography>
            </div>
            <SearchDialog
              searchDialogOpen={searchDialogOpen}
              SearchDialogClose={SearchDialogClose}
            />
            <div className="sp-only">
              <div className="flex justify-around mb1">
                <Button variant="outlined" color="inherit" className="br0">
                  現在地検索
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  className="br0"
                  onClick={SearchDialogOpen}>
                  詳細検索
                </Button>
              </div>
            </div>
            <DentalCard />
            <DentalCard />
            <DentalCard />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default Index
