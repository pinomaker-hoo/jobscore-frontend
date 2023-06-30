// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect, useState } from 'react'

// ** Mui Imports
import { Button, Grid } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import loadingCity from '../../lotties/loading-city.json'
import workingDuck from '../../lotties/walking-duck.json'

const LoadingPage = () => {
  const router = useRouter()

  const [numDots, setNumDots] = useState<number>(1)

  const defaultOptionsDuck = {
    loop: true,
    autoplay: true,
    animationData: workingDuck,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingCity,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setNumDots((numDots) => {
        if (numDots === 3) {
          return 1
        }

        return numDots + 1
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      router.push('/company')
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Grid container spacing={6} sx={{ mt: 57 }}>
      <Grid item xs={4} />
      <Grid item xs={2}>
        <Lottie options={defaultOptionsDuck} height={80} width={80} />
      </Grid>
      <Grid item xs={6}>
        <Lottie options={defaultOptions} height={75} width={75} />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: -8 }}>
        <Link href="/company">
          <Button variant="contained" size="large" sx={{ width: '80%' }}>
            설문 정보 가져오는 중 {'. '.repeat(numDots)}
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default LoadingPage
