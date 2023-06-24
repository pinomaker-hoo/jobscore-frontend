// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Button, Grid, Switch, Typography, TextField } from '@mui/material'

interface Props {
  name: string
  checked: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleNext: () => void
}

const CompanyPageView = ({
  name,
  handleChange,
  checked,
  handleNext,
}: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ mt: 10, ml: 3 }}>
        <Typography variant="h4">
          현재 재직중인
          <br />
          회사를 선택해 주세요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ ml: 3 }}>
        <Typography variant="body2">
          회사명을 선택시 잡스랭킹에 내 회사가 올라가요!
          <br />
          원치 않을경우 스위치를 눌러 비공개 해 주세요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Link href="/company/search">
          <TextField
            variant="standard"
            sx={{ width: '90%' }}
            placeholder="ex) 구글 코리아"
            disabled
            value={name}
          />
        </Link>
      </Grid>
      <Grid item xs={7} />
      <Grid item xs={2} sx={{ textAlign: 'right' }}>
        <Typography variant="body2" sx={{ py: 1 }}>
          {checked ? '비공개' : '공개'}
        </Typography>
      </Grid>
      <Grid item xs={3} sx={{ textAlign: 'right', pr: 3, mb: 20 }}>
        <Switch onChange={handleChange} value={checked} />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 2.8 }}>
        <Button
          variant="contained"
          size="large"
          sx={{ width: '80%' }}
          disabled={name === '' ? true : false}
          onClick={handleNext}
        >
          다음
        </Button>
      </Grid>
    </Grid>
  )
}

export default CompanyPageView
