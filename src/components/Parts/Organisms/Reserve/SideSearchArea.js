import React from 'react'

import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Grid from '@mui/material/Grid'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import SideBarSearch from '@/components/Parts/Organisms/SideBarSearch'

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right" />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 1000,
    padding: '2rem',
    paddingTop: '1rem',
    border: '1px solid #dadde9',
  },
}))
const SideSearchArea = props => {
  const {
    selectPrefecture,
    prefectureClear,
    regions,
    prefectures,
    categories,
    checkTreat,
    selectTreatChange,
    prefectureChange,
  } = props
  return (
    <Grid item xs={4} className="pc-only">
      <HtmlTooltip
        className="p2"
        title={
          <React.Fragment>
            <div className="bb-gray flex justify-space pb1">
              <Typography variant="largeBold">エリア・駅</Typography>
              <Button
                variant="outlined"
                disabled={selectPrefecture.length == 0}>
                市区町村
              </Button>
            </div>
            <div className="mb1 mt1 text-r">
              <Button
                variant="outlined"
                disabled={selectPrefecture.length == 0}
                onClick={prefectureClear}>
                選択をクリア
              </Button>
            </div>
            {regions.map((data, index) => (
              <React.Fragment key={index}>
                <div className="mb05 mt1">
                  <Typography key={index} variant="bold">
                    {data.region_name}
                  </Typography>
                </div>
                <div className="flex gap-20">
                  {data.prefectures.map((data2, index2) => (
                    <Typography className="white-noerap" key={index2}>
                      <Button
                        variant="text"
                        onClick={() => prefectureChange(data2.id)}>
                        {data2.name}
                      </Button>
                    </Typography>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </React.Fragment>
        }>
        <Button className="wi100 p0">
          <SideBarSearch
            title="エリア・駅"
            text={
              selectPrefecture.length > 0
                ? prefectures.filter(c => c.id === selectPrefecture[0])[0].name
                : '指定なし'
            }
          />
        </Button>
      </HtmlTooltip>
      <div className="side-bar-search-card b-gray mb1 wi100">
        <div className="text-c bg-iceberg p1">
          <Typography variant="bold">診療内容</Typography>
        </div>
        <div className="p1 bg-white">
          {categories.map((data, index) => (
            <React.Fragment key={index}>
              <div className="mb05 mt1">
                <Typography key={index} variant="bold">
                  {data.title}
                </Typography>
              </div>
              <div className="flex flex-wrap">
                {data.children.map((data2, index2) => (
                  <FormGroup key={index2}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkTreat.includes(data2.id)}
                          onChange={e => selectTreatChange(e, data2.id)}
                        />
                      }
                      label={data2.title}
                    />
                  </FormGroup>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}
          </React.Fragment>
        }>
        <Button className="wi100 p0">
          <SideBarSearch title="ネット予約" />
        </Button>
      </HtmlTooltip>
    </Grid>
  )
}
export default SideSearchArea
