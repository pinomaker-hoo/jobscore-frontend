// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Card, Grid, Typography, alpha, Button } from '@mui/material'

// ** Other View Imports
import WalkingDuck from '@/components/duck/walkingDuck'

const RankPageView = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4.5}>
        <img src="/common/rankLogo.png" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={7.5} sx={{ mt: 1.5 }}>
        <WalkingDuck />
      </Grid>
      <Grid item xs={12} sx={{ overflow: 'scroll', maxHeight: '730px' }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="h6" sx={{ ml: '5%' }}>
              회사별 잡스랭킹
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">부서별 랭킹</Typography>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                p: 3,
                background: alpha('#8CC6FF', 0.2),
                ml: '5%',
                boxShadow: 'none',
                borderRadius: 3,
                width: '90%',
              }}
            >
              <Grid container>
                <Grid item xs={2}>
                  <Typography variant="h6">1</Typography>
                </Grid>
                <Grid item xs={2}>
                  <img src={'/search/company.png'} />
                </Grid>
                <Grid item xs={5}>
                  구글 코리아
                </Grid>
                <Grid item xs={3}>
                  759
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                px: 3,
                py: 1,
                background: 'white',
                ml: '5%',
                boxShadow: 'none',
                borderColor: '#E1E1E1',
                border: 'solid',
                borderWidth: 1,
                borderRadius: 3,
                width: '90%',
              }}
            >
              <Typography>잡스코어 총합 높은 순 정렬</Typography>
            </Card>
          </Grid>
          {trash.map((item, index) => (
            <Grid item xs={12} sx={{ width: '90%', ml: '5%' }}>
              <Grid container>
                <Grid item xs={1.5}>
                  <Typography>{index + 1}</Typography>
                </Grid>
                <Grid item xs={1.5} sx={{ textAlign: 'center' }}>
                  <img src={'/search/company.png'} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ color: 'black' }}>
                    {item.name}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body1" sx={{ color: 'black' }}>
                    {item.score}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Link href="/">
              <Button
                variant="contained"
                sx={{ width: '80%', backgroundColor: '#6176FF' }}
              >
                다시 테스트 하러 가기
                <img
                  src="/common/hand.png"
                  style={{ marginLeft: '10px', width: '10%' }}
                />
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', my: -1 }}>
            <Link href="/rank">
              <Button
                variant="contained"
                sx={{ width: '80%', backgroundColor: '#6176FF' }}
              >
                다른 회사 잡스코어
                <img
                  src="/common/hand.png"
                  style={{ marginLeft: '10px', width: '10%' }}
                />
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              disabled
              sx={{ width: '80%', backgroundColor: '#6176FF' }}
            >
              나와 잘 맞는 회사 알아보기 (준비중)
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default RankPageView

const trash = [
  {
    name: 'Google',
    score: 720,
  },
  {
    name: 'Kakao',
    score: 720,
  },
  {
    name: 'Facebook',
    score: 720,
  },
  {
    name: 'Microsoft',
    score: 720,
  },
  {
    name: 'Apple',
    score: 720,
  },
  {
    name: 'Amazon',
    score: 720,
  },
  {
    name: 'Instagram',
    score: 720,
  },
  {
    name: 'Samsung',
    score: 720,
  },
  {
    name: 'SK',
    score: 720,
  },
  {
    name: 'Intel',
    score: 720,
  },
]
