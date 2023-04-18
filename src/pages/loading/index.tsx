// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Button, Grid } from '@mui/material'

const LoadingPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Link href="/loading">
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#F4BC00' }}
            fullWidth
          >
            설문 정보 가져오는 중...
          </Button>
        </Link>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  )
}

export default LoadingPage
