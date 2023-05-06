// ** Mui Imports
import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'

interface Props {
  state: boolean
  title: string
  handleClose: () => void
}

const BasicModal = ({ state, handleClose, title }: Props) => {
  return (
    <Dialog open={state}>
      <DialogTitle sx={{ textAlign: 'center', mt: 1 }}>{title}</DialogTitle>
      <DialogActions sx={{ mt: -2 }}>
        <Button onClick={handleClose}>확인</Button>
      </DialogActions>
    </Dialog>
  )
}

export default BasicModal
