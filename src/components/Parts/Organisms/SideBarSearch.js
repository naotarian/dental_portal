import Typography from '@mui/material/Typography'
const SideBarSearch = props => {
  const { title, text } = props
  return (
    <>
      <div className="side-bar-search-card b-gray mb1 wi100">
        <div className="text-c bg-iceberg p1">
          <Typography variant="bold">{title}</Typography>
        </div>
        <div className="p1 text-c bg-white">
          <Typography variant="bold">{text}</Typography>
        </div>
      </div>
    </>
  )
}
export default SideBarSearch
