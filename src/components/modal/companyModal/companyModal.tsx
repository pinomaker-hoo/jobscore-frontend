// ** Mui Imports
import { Button, Dialog, Grid, TextField, Typography } from '@mui/material'

// ** Type Imports
import { SaveCompanyType } from '@/types'
import BasicModal from '../basicModal'

interface Props {
  open: boolean
  company: SaveCompanyType
  setCompany: any
  openFalse: boolean
  handleCloseFalse: () => void
  handleClose: () => void
  regContent: () => void
}

const CompanyModalView = ({
  open,
  handleClose,
  company,
  setCompany,
  regContent,
  openFalse,
  handleCloseFalse,
}: Props) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <Grid container spacing={3} sx={{ p: 3 }}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography>회사 등록하기</Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography>
            사원수가 너무 적은 회사는 추가할 경우 <br />
            설문자를 특정할 수 있으니 주의해 주세요!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth
            label="회사명"
            value={company.name}
            onChange={setCompany}
            name="name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth
            label="회사 홈페이지 주소"
            value={company.url}
            onChange={setCompany}
            name="url"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            회사명의 정상적인 등록을 위해 <br /> 사업자등록증에 등록된 이름으로
            작성해주세요.
            <br />
            ex) 카카오 X / 주식회사 카카오 O
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" onClick={regContent}>
            등록하기
          </Button>
        </Grid>
      </Grid>
      {openFalse && (
        <BasicModal
          state={openFalse}
          handleClose={handleCloseFalse}
          title="데이터를 전부 입력해주세요!"
        />
      )}
    </Dialog>
  )
}

export default CompanyModalView
