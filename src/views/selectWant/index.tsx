// ** Mui Imports
import { Button, Card, Grid, Typography } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import mainLottie from '@/lotties/selectWant.json'

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
      <Grid item xs={3} sx={{ pl: 3, pt: 3 }}>
        <img src="/common/backWhite.png" />
      </Grid>
      <Grid item xs={9} sx={{ textAlign: 'right', pr: 3, pt: 3 }}>
        <Typography variant="h6" sx={{ color: 'white' }}>
          1/40
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: -5, mb: -5 }}>
        <Lottie options={defaultOptions} width={350} />
      </Grid>
      <Grid item xs={0.5} />
      <Grid item xs={11}>
        <Card sx={{ width: '100%', p: 2, borderRadius: 2, height: 470 }}>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: -2.5 }}>
              <img src="/common/topBox.png" />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', my: 2 }}>
              <Typography variant="h6">내가 원하는 회사의</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{
                  p: 2,
                  backgroundColor: '#EBEBEB',
                  boxShadow: 'none',
                  textAlign: 'center',
                  borderRadius: 2,
                }}
              >
                <Typography variant="body2">
                  받고있는 급여대비 업무량은 어느 정도 인가요?
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sx={{ mt: 5 }}>
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
                정시 출/퇴근 근무
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
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
                일부 재택 근무
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
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
                탄력 근무제
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
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
