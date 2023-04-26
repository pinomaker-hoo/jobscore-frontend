import DounetChart from '@/components/chart/dounetChart'
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

const ResultPageView = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4.5}>
        <img src="/logo.png" height={80} />
      </Grid>
      <Grid item xs={7.5} sx={{ mt: 1.5 }}>
        <WalkingDuck />
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
          우리 회사 잡스코어
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: -2 }}>
        <Card
          sx={{
            p: 3,
            width: '80%',
            ml: '10%',
            backgroundColor: '#E8F4FF',
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <DounetChart height={300} series={60} />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ borderColor: 'white', borderWidth: 1 }} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                꿈의 회사가 실존 하네요! <br />
                나는 지금 회사에 몇퍼센트 만족하시나요?
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
          내가 원하는 회사 잡스코어
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: -2 }}>
        <Card
          sx={{
            p: 3,
            width: '80%',
            ml: '10%',
            backgroundColor: alpha('#B6B9FF', 0.2),
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <DounetChart height={300} series={60} />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ borderColor: 'white', borderWidth: 1 }} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                지금 회사가 내 목표치 보다 높아요! <br />
                이대로.. Stay?
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
          잡스타일 비교하기
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={5}>
        <Card
          sx={{
            p: 3,
            backgroundColor: alpha('#6EB9FF', 0.2),
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'center',
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontSize: 14 }}>
                우리 회사
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <img src="/type1.png" />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'center',
                mt: 2,
              }}
            >
              <Typography variant="h6">"스파르타"</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card
          sx={{
            p: 3,
            backgroundColor: alpha('#6EB9FF', 0.2),
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'center',
                mb: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontSize: 14 }}>
                내가 원하는 회사
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <img src="/type2.png" />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'center',
                mt: 2,
              }}
            >
              <Typography variant="h6">"워커홀릭"</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={1} />
      <Grid item xs={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: 14, my: -1 }}>
              자지말고 일만해라 인간
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider
              sx={{
                borderWidth: 1,
                backgroundColor: '#CBE6FF',
                ml: '10%',
                width: '80%',
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: 14, mt: -1 }}>
              30%의 회사가 동일한
              <br /> 유형을 가지고 있어요
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: 14, my: -1 }}>
              워라벨이 뭐죠?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider
              sx={{
                borderWidth: 1,
                backgroundColor: '#CBE6FF',
                ml: '10%',
                width: '80%',
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: 14, mt: -1 }}>
              10%의 직장인이 <br />
              이런 회사를 원해요
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* 업무 강도 */}
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
          업무 강도 비교하기
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{ ml: '10%', width: '80%', fontSize: 12, mt: -2 }}
          variant="body2"
        >
          현 회사의 업무 강도와 내가 원하는 회사의 업무 강도를 보여줘요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: -2 }}>
        <Card
          sx={{
            p: 3,
            width: '80%',
            ml: '10%',
            backgroundColor: alpha('#FFECA9', 0.2),
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 14 }}>
                주식회사 카카오
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
                  height: 20,
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
            <Grid item xs={12} sx={{ my: 3 }}>
              <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 14 }}>
                내가 원하는 회사
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
                  height: 20,
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
          </Grid>
        </Card>
      </Grid>
      {/* 출 퇴근 유연성 */}
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
          출 퇴근 유연성 비교하기
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{ ml: '10%', width: '80%', fontSize: 12, mt: -2 }}
          variant="body2"
        >
          현 회사의 출퇴근 유연성과 내가 원하는 회사를 비교해 보여줘요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: -2 }}>
        <Card
          sx={{
            p: 3,
            width: '80%',
            ml: '10%',
            backgroundColor: alpha('#B8DDFF', 0.2),
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 14 }}>
                주식회사 카카오
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
                  height: 20,
                  borderRadius: 5,
                  backgroundColor: alpha('#B4B4B4', 0.2),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                유연하지 않음
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                유연함
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: 3 }}>
              <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 14 }}>
                내가 원하는 회사
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
                  height: 20,
                  borderRadius: 5,
                  backgroundColor: alpha('#B4B4B4', 0.2),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                유연하지 않음
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                유연함
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {/* 복지 */}
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
          복지 비교하기
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{ ml: '10%', width: '80%', fontSize: 12, mt: -2 }}
          variant="body2"
        >
          현 회사의 복지와 내가 원하는 회사를 비교해 보여줘요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: -2 }}>
        <Card
          sx={{
            p: 3,
            width: '80%',
            ml: '10%',
            backgroundColor: alpha('#FFECA9', 0.2),
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 14 }}>
                주식회사 카카오
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
                  height: 20,
                  borderRadius: 5,
                  backgroundColor: alpha('#B4B4B4', 0.2),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                유연하지 않음
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                유연함
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: 3 }}>
              <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 14 }}>
                내가 원하는 회사
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
                  height: 20,
                  borderRadius: 5,
                  backgroundColor: alpha('#B4B4B4', 0.2),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                유연하지 않음
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                유연함
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {/* 성장 가능성 */}
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
          성장 가능성 비교하기
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{ ml: '10%', width: '80%', fontSize: 12, mt: -2 }}
          variant="body2"
        >
          현 회사의 성장가능성과 내가 원하는 회사를 비교해 보여줘요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: -2 }}>
        <Card
          sx={{
            p: 3,
            width: '80%',
            ml: '10%',
            backgroundColor: alpha('#B8DDFF', 0.2),
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 14 }}>
                주식회사 카카오
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
                  height: 20,
                  borderRadius: 5,
                  backgroundColor: alpha('#B4B4B4', 0.2),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                성장 가능성 낮음
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                성장 가능성 높음
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ my: 3 }}>
              <Divider sx={{ borderWidth: 1, borderColor: 'white' }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 14 }}>
                내가 원하는 회사
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
                  height: 20,
                  borderRadius: 5,
                  backgroundColor: alpha('#B4B4B4', 0.2),
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" sx={{ fontSize: 10 }}>
                성장 가능성 낮음
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
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Typography sx={{ ml: '10%', width: '80%' }} variant="h6">
          결과가 마음에 드시나요?
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          sx={{ ml: '10%', width: '80%', fontSize: 12, mt: -2 }}
          variant="body2"
        >
          결과를 평가해주시면 잡스코어의 성장에 큰 도움이 됩니다 :)
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: -2 }}>
        <Card
          sx={{
            p: 3,
            width: '80%',
            ml: '10%',
            backgroundColor: alpha('#FFECA9', 0.2),
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <Grid container>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <img src="/1.png" />
            </Grid>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <img src="/2.png" />
            </Grid>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <img src="/3.png" />
            </Grid>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <img src="/4.png" />
            </Grid>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <img src="/5.png" />
            </Grid>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ fontSize: 10 }}>
                Nice
              </Typography>
            </Grid>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ fontSize: 10 }}>
                Good
              </Typography>
            </Grid>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ fontSize: 10 }}>
                Fine
              </Typography>
            </Grid>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ fontSize: 10 }}>
                So-So
              </Typography>
            </Grid>
            <Grid item xs={2.4} sx={{ textAlign: 'center' }}>
              <Typography variant="body2" sx={{ fontSize: 10 }}>
                Bad
              </Typography>
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
              <img src="/kakao.png" />
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'center' }}>
              <img src="/link.png" />
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
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
        <Button
          variant="contained"
          sx={{ width: '80%', backgroundColor: '#6176FF' }}
        >
          나와 잘 맞는 회사 알아보기
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', my: -1 }}>
        <Button
          variant="contained"
          sx={{ width: '80%', backgroundColor: '#6176FF' }}
        >
          다른 회사 잡스코어 점수 보기
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{ width: '80%', backgroundColor: '#6176FF' }}
        >
          다시 테스트 하러 가기
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h1" sx={{ fontSize: 12 }}>
          Job Score :)
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ResultPageView
