// ** Next imports
import Link from 'next/link'

// ** Mui Imports
import { Button, Card, Grid, Typography } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import mainLottie from '@/lotties/selectWant.json'
import animationData from '@/lotties/walking-duck.json'

const SelectWantIntroPageView = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mainLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const walkingDuck = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container sx={{ backgroundColor: '#F4BC00', height: '100vh' }}>
      <Grid item xs={12} sx={{ textAlign: 'center', mb: -5, mt: -5 }}>
        <Lottie options={defaultOptions} width={350} />
      </Grid>
      <Grid item xs={0.5} />
      <Grid item xs={11}>
        <Card sx={{ width: '100%', p: 2, borderRadius: 2 }}>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: -2.5 }}>
              <img src="/common/topBox.png" />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <img src="/common/logo.png" height={80} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography variant="h6">
                지금부터 <b>내가 원하는 회사</b> 에 대한
                <br /> 설문을 시작해요, 솔직하게 답변해주세요!
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Lottie options={walkingDuck} width={200} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography variant="body1">
                총 20문항이며 3분 정도 걸려요
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: 5 }}>
              <Link href="/selectWant">
                <Button
                  size="large"
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    borderColor: '#794A13',
                    color: 'black',
                  }}
                >
                  시작하기
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sx={{ height: 30 }} />
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={0.5} />
      <Grid item xs={12} sx={{ mb: 3 }} />
    </Grid>
  )
}

export default SelectWantIntroPageView
