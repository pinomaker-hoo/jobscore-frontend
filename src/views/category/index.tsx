import { Button, Grid, Typography } from '@mui/material'

const CategoryPageView = () => {
  return (
    <Grid container spacing={1.5}>
      <Grid item xs={12} sx={{ mt: 22, ml: 1.5 }}>
        <Typography variant="h5">
          현재 근무중인
          <br /> 부서를 선택해 주세요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ ml: 1.5, mb: 2 }}>
        <Typography variant="body2">
          부서를 선택시 잡스랭킹에 부서별 평점이 올라가요!
          <br /> 원치 않을경우 비공개를 선택해 주세요
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{ ml: 1.5 }}>
        <Button variant="outlined" fullWidth>
          경영 & 기획
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="outlined" fullWidth>
          디자인
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" fullWidth>
          재무 & 회계
        </Button>
      </Grid>
      <Grid item xs={3} sx={{ ml: 1.5 }}>
        <Button variant="outlined" fullWidth>
          마케팅
        </Button>
      </Grid>
      <Grid item xs={2.5}>
        <Button variant="outlined" fullWidth>
          무역
        </Button>
      </Grid>
      <Grid item xs={2.5}>
        <Button variant="outlined" fullWidth>
          유통
        </Button>
      </Grid>
      <Grid item xs={2.5}>
        <Button variant="outlined" fullWidth>
          생산
        </Button>
      </Grid>
      <Grid item xs={3} sx={{ ml: 1.5 }}>
        <Button variant="outlined" fullWidth>
          서비스
        </Button>
      </Grid>
      <Grid item xs={2.5}>
        <Button variant="outlined" fullWidth>
          영업
        </Button>
      </Grid>
      <Grid item xs={2.5}>
        <Button variant="outlined" fullWidth>
          건설
        </Button>
      </Grid>
      <Grid item xs={2.5}>
        <Button variant="outlined" fullWidth>
          개발
        </Button>
      </Grid>
      <Grid item xs={2.5} sx={{ ml: 1.5 }}>
        <Button variant="outlined" fullWidth>
          교육
        </Button>
      </Grid>
      <Grid item xs={2.5}>
        <Button variant="outlined">MD</Button>
      </Grid>
      <Grid item xs={4}>
        <Button variant="outlined" fullWidth>
          PO & PM
        </Button>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={2.5} sx={{ ml: 1.5 }}>
        <Button variant="outlined" fullWidth>
          기타
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant="outlined" fullWidth>
          비공개
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 10 }}>
        <Button variant="contained" size="large" sx={{ width: '80%' }}>
          다음
        </Button>
      </Grid>
    </Grid>
  )
}

export default CategoryPageView
