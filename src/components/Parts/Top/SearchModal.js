import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
const SearchModal = props => {
  const { openSearchModal, searchModalClose } = props
  return (
    <div>
      <Modal
        keepMounted
        open={openSearchModal}
        onClose={searchModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box className="topSearchModal">
          <div className="p1">
            <div className="text-r mb1">
              <Button
                variant="outlined"
                onClick={searchModalClose}
                className="float">
                閉じる
              </Button>
            </div>
            <Typography variant="h6" component="h2" className="mb1">
              駅名・エリアやキーワードを入力して、歯科医院を検索しましょう。
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <TextField label="駅・エリア" size="small" fullWidth />
                </Grid>
                <Grid item xs={7}>
                  <TextField label="キーワード" size="small" fullWidth />
                </Grid>
              </Grid>
            </Box>
          </div>
          <div className="absolute bottom-0 left-0 pt1 pb1 bg-iceberg sp-width text-c pc-modal-width">
            <Button
              variant="contained"
              onClick={searchModalClose}
              className="float">
              閉じる
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
export default SearchModal
