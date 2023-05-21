// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import {
  Grid,
  alpha,
  Typography,
  Card,
  Divider,
  LinearProgress,
  Button,
} from '@mui/material'

// ** Other View Imports
import WalkingDuck from '@/components/duck/walkingDuck'
import DounetChart from '@/components/chart/dounetChart'

const ResultPageView = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4.5}>
        <img src="/common/logo.png" height={80} />
      </Grid>
      <Grid item xs={7.5} sx={{ mt: 1.5 }}>
        <WalkingDuck />
      </Grid>
      <Grid item xs={12} sx={{ overflow: 'scroll', maxHeight: '730px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card
              sx={{
                p: 3,
                width: '90%',
                ml: '5%',
                backgroundColor: alpha('#B8DDFF', 0.2),
                boxShadow: 'none',
                borderRadius: 3,
              }}
            >
              <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
                    우리 회사 잡스코어
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mb: -5 }}>
                  <DounetChart />
                </Grid>
                <Grid item xs={12}>
                  <Divider
                    sx={{
                      borderColor: 'white',
                      borderWidth: 1.5,
                      width: '90%',
                      ml: '5%',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="body2">
                    <b>
                      꿈의 회사가 실존 하네요! <br />
                      나는 지금 회사에 몇퍼센트 만족하시나요?
                    </b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Divider
                    sx={{
                      borderColor: 'white',
                      borderWidth: 1.5,
                      width: '90%',
                      ml: '5%',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
                    우리 회사의 잡스타일은?
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <img src="/type/type1.png" style={{ width: '90%' }} />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography
                    sx={{ ml: '10%', width: '80%', color: '#2084F2' }}
                    variant="h6"
                  >
                    "지상낙원" 스타일
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{ ml: '10%', width: '80%', fontSize: 12 }}
                    variant="body2"
                  >
                    몸과 마음 다 여유로운 회사 생활이 될 수 있겠어요.
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ mt: 3 }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    업무 강도 점수
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right', mt: 3 }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    182 / 200
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={30}
                    color="error"
                    sx={{
                      height: 14,
                      borderRadius: 5,
                      backgroundColor: alpha('#B4B4B4', 0.2),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    업무 강도 높음
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    업무 강도 낮음
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ my: 1 }}>
                  <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    출 퇴근 자유도
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    182 / 200
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    color="error"
                    sx={{
                      height: 14,
                      borderRadius: 5,
                      backgroundColor: alpha('#B4B4B4', 0.2),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    자유롭지 않음
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    자유로움
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ my: 1 }}>
                  <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    복지 점수
                  </Typography>
                </Grid>
                <Grid item xs={7} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    182 / 200
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    color="error"
                    sx={{
                      height: 14,
                      borderRadius: 5,
                      backgroundColor: alpha('#B4B4B4', 0.2),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    복지 적음
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    복지 많음
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ my: 1 }}>
                  <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    성장 가능성
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    182 / 200
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    color="error"
                    sx={{
                      height: 14,
                      borderRadius: 5,
                      backgroundColor: alpha('#B4B4B4', 0.2),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    성장 가능성 적음
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    성장 가능성 높음
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                p: 3,
                width: '90%',
                ml: '5%',
                backgroundColor: '#FFFBEE',
                boxShadow: 'none',
                borderRadius: 3,
              }}
            >
              <Grid container>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
                    내가 원하는 회사 잡스코어
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mb: -5 }}>
                  <DounetChart />
                </Grid>
                <Grid item xs={12}>
                  <Divider
                    sx={{
                      borderColor: 'white',
                      borderWidth: 1.5,
                      width: '90%',
                      ml: '5%',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="body2">
                    <b>
                      꿈의 회사가 실존 하네요! <br />
                      나는 지금 회사에 몇퍼센트 만족하시나요?
                    </b>
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Divider
                    sx={{
                      borderColor: 'white',
                      borderWidth: 1.5,
                      width: '90%',
                      ml: '5%',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
                    내가 원하는 회사의 잡스타일은?
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <img src="/type/type2.png" style={{ width: '90%' }} />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography
                    sx={{ ml: '10%', width: '80%', color: '#2084F2' }}
                    variant="h6"
                  >
                    "지상낙원" 스타일
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{ ml: '10%', width: '80%', fontSize: 12 }}
                    variant="body2"
                  >
                    몸과 마음 다 여유로운 회사 생활이 될 수 있겠어요.
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ mt: 3 }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    업무 강도 점수
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right', mt: 3 }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    182 / 200
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    color="error"
                    sx={{
                      height: 14,
                      borderRadius: 5,
                      backgroundColor: alpha('#B4B4B4', 0.2),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    업무 강도 높음
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    업무 강도 낮음
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ my: 1 }}>
                  <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    출 퇴근 자유도
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    182 / 200
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    color="error"
                    sx={{
                      height: 14,
                      borderRadius: 5,
                      backgroundColor: alpha('#B4B4B4', 0.2),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    자유롭지 않음
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    자유로움
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ my: 1 }}>
                  <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    복지 점수
                  </Typography>
                </Grid>
                <Grid item xs={7} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    182 / 200
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    color="error"
                    sx={{
                      height: 14,
                      borderRadius: 5,
                      backgroundColor: alpha('#B4B4B4', 0.2),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    복지 적음
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    복지 많음
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ my: 1 }}>
                  <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    성장 가능성
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    182 / 200
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    color="error"
                    sx={{
                      height: 14,
                      borderRadius: 5,
                      backgroundColor: alpha('#B4B4B4', 0.2),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    성장 가능성 적음
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Typography variant="body1" sx={{ fontSize: 10 }}>
                    성장 가능성 높음
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
              잡스코어 비교하기
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{ ml: '10%', width: '80%', fontSize: 12, mt: -2 }}
              variant="body2"
            >
              내가 원하는 회사와 점수차이가 크다면 이직을 고민해보는것도 방법!
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                p: 3,
                width: '90%',
                ml: '10%',
                backgroundColor: alpha('#B8DDFF', 0.2),
                boxShadow: 'none',
                borderRadius: 3,
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">업무 강도</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    우리 회사
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">72/180</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    내가 원하는 회사
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">123/180</Typography>
                </Grid>
                <Grid item xs={3}>
                  <img src="/review/num.png" />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                p: 3,
                width: '90%',

                backgroundColor: alpha('#B8DDFF', 0.2),
                boxShadow: 'none',
                borderRadius: 3,
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">업무 강도</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    우리 회사
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">72/180</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    내가 원하는 회사
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">123/180</Typography>
                </Grid>
                <Grid item xs={3}>
                  <img src="/review/num.png" />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                p: 3,
                width: '90%',
                ml: '10%',
                backgroundColor: alpha('#B8DDFF', 0.2),
                boxShadow: 'none',
                borderRadius: 3,
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">업무 강도</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    우리 회사
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">72/180</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    내가 원하는 회사
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">123/180</Typography>
                </Grid>
                <Grid item xs={3}>
                  <img src="/review/num.png" />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                p: 3,
                width: '90%',
                backgroundColor: alpha('#B8DDFF', 0.2),
                boxShadow: 'none',
                borderRadius: 3,
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h6">업무 강도</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    우리 회사
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">72/180</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    내가 원하는 회사
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6">123/180</Typography>
                </Grid>
                <Grid item xs={3}>
                  <img src="/review/num.png" />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
              결과를 공유해보세요
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{ ml: '10%', width: '80%', fontSize: 12, mt: -2 }}
              variant="body2"
            >
              재미있는건 같이 봐야죠! 친구들에게 공유해 보세요!
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ mt: -2 }}>
            <Card
              sx={{
                p: 3,
                width: '80%',
                ml: '10%',
                borderRadius: 3,
              }}
            >
              <Grid container>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                  <img src="/share/kakao.png" />
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                  <img src="/share/link.png" />
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    카카오톡 공유하기
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ fontSize: 12 }}>
                    링크 복사하기
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
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
          <Grid item xs={12} sx={{ textAlign: 'center', mb: 15 }}>
            <Typography variant="h1" sx={{ fontSize: 12 }}>
              Job Score :)
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ResultPageView
