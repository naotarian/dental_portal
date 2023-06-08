import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import CloseIcon from '@mui/icons-material/Close'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 360,
  height: '90vh',
  bgcolor: 'background.paper',
  border: '1px solid #dfdfdf',
  boxShadow: 24,
  p: 0,
}
const SearchDialog = props => {
  const { searchDialogOpen, SearchDialogClose } = props
  return (
    <div>
      <Modal
        open={searchDialogOpen}
        onClose={SearchDialogClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div className="wi100 bg-gray pt1 pb1 text-c relative">
            <Typography variant="bold">詳細検索</Typography>
            <CloseIcon
              className="absolute right-20"
              onClick={SearchDialogClose}
            />
          </div>
          <div className="p1">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
export default SearchDialog
