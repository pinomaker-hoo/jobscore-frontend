// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect } from 'react'

// ** Mui Imports
import { Card, Grid, Typography } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import loadingEnd from '../../lotties/loading-end.json'

// ** Other View Imports
import WalkingDuck from '@/components/duck/walkingDuck'

const EndLoadingPage = () => {
  const router = useRouter()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingEnd,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      router.push('/result')
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={4.5}>
        <img src="/logo.png" height={80} />
      </Grid>
      <Grid item xs={7.5} sx={{ mt: 1.5 }}>
        <WalkingDuck />
      </Grid>
      <Grid item xs={12} sx={{ mt: 8 }}>
        <Lottie options={defaultOptions} height={250} width={300} />
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            p: 3,
            width: '80%',
            ml: '10%',
            backgroundColor: '#E8F4FF',
            boxShadow: 'none',
          }}
        >
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography variant="h6">설문 결과를 계산하고 있어요</Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body1">잠시만 기다려주세요</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default EndLoadingPage
