// ** Mui Imports
import { Button, Card, Grid, Typography } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import mainLottie from '@/lotties/walking-duck.json'

const SelectWantPageView = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mainLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container sx={{ backgroundColor: '#F4BC00', height: '100%' }}>
      <Grid item xs={12}>
        <img src="/selectTop.png" style={{ width: '100%' }} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          position: 'absolute',
          transform: 'translate(-10%, 35%)',
        }}
      >
        <Lottie options={defaultOptions} width={100} />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: -3, mb: -5 }}>
        <img src="/selectWantUser.png" style={{ width: '80%' }} />
      </Grid>
      <Grid item xs={0.5} />
      <Grid item xs={11}>
        <Card sx={{ width: '100%', p: 2, borderRadius: 2 }}>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: -2.5 }}>
              <img src="/selectYellow.png" />
            </Grid>
            <Grid item xs={12}>
              <img src="/selectBackYellow.png" />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography>우리 회사의 근무방식을 선택해주세요</Typography>
            </Grid>
            <Grid item xs={12} sx={{ mt: 5 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 2,
                  color: 'white',
                  backgroundColor: '#F4BC00',
                }}
              >
                정시 출/퇴근 근무
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 2,
                  color: 'white',
                  backgroundColor: '#F4BC00',
                }}
              >
                일부 재택 근무
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 2,
                  color: 'white',
                  backgroundColor: '#F4BC00',
                }}
              >
                탄력 근무제
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 2,
                  color: 'white',
                  backgroundColor: '#F4BC00',
                }}
              >
                완전 자율 근무제
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ height: 30 }} />
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={0.5} />
    </Grid>
  )
}

export default SelectWantPageView
