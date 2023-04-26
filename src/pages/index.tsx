// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Button, Grid, Typography } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import mainLottie from '../lotties/working-person.json'

// ** Other View Imports
import WalkingDuck from '@/components/duck/walkingDuck'

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mainLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={4.5}>
        <img src="/logo.png" height={80} />
      </Grid>
      <Grid item xs={7.5} sx={{ mt: 1.5 }}>
        <WalkingDuck />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Lottie options={defaultOptions} height={250} width={300} />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="h4">잡스코어 측정하기</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          나의 업무 스타일과 우리 회사의 업무 스타일
          <br />
          나와 얼마나 잘 맞는지 까지 확인할 수 있어요
          <br />
          20문항이며 5분 내외에요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Link href="/loading">
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#F4BC00', width: '80%' }}
          >
            잡스코어 측정 시작하기
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Home
