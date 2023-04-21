// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Button, Grid } from '@mui/material'

const LoadingPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 85 }}>
        <Link href="/company">
          <Button variant="contained" size="large" sx={{ width: '80%' }}>
            설문 정보 가져오는 중...
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default LoadingPage
