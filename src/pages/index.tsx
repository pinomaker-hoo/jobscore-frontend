// ** Next Imports
import Link from 'next/link'

// ** React Imports
import { useEffect } from 'react'

// ** Mui Imports
import { Button, Grid, Typography } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import mainLottie from '../lotties/working-person.json'

// ** Other View Imports
import WalkingDuck from '@/components/duck/walkingDuck'

// ** Redux Imports
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { initialState, initialize } from '@/store/app/user'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()

  const userState = useSelector((state: RootState) => state.user)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mainLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    if (userState !== initialState) {
      dispatch(initialize())
    }
  }, [userState])

  return (
    <Grid container spacing={6}>
      <Grid item xs={4.5}>
        <img src="/common/logo.png" height={80} />
      </Grid>
      <Grid item xs={7.5} sx={{ mt: 1.5 }}>
        <WalkingDuck />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: -5 }}>
        <Lottie options={defaultOptions} height={250} width={300} />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="h4">잡스코어 측정하기</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          우리 회사와 내 원는 회사의 점수는?
          <br />총 40문항이며 10분 정도 소요돼요
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
