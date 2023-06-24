// ** Next Imports
import Link from 'next/link'

// ** React Imports
import { useMemo } from 'react'

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

// ** Type Imports
import { Result, ScoreType, TotalScore } from '@/types'

// ** Other Imports
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface Props {
  companyType: Result
  myCompany: ScoreType
  wantCompany: ScoreType
  score: TotalScore
  handleKakao: () => void
}

const ResultPageView = ({
  companyType,
  myCompany,
  wantCompany,
  handleKakao,
  score,
}: Props) => {
  const getTextColor = (a: number, b: number) => {
    if (a > b) return 'blue'
    if (a < b) return 'red'
    return 'black'
  }

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
                  {myCompany && <DounetChart data={score.myCompany} />}
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
                  <img
                    src={companyType.myCompany.img}
                    style={{ width: '90%' }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography
                    sx={{ ml: '10%', width: '80%', color: '#2084F2' }}
                    variant="h6"
                  >
                    "{companyType.myCompany.title}" 스타일
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{ ml: '10%', width: '80%', fontSize: 12 }}
                    variant="body2"
                  >
                    {companyType.myCompany.text}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ mt: 3 }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    업무 강도 점수
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right', mt: 3 }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    {myCompany.type1} / 180
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={myCompany.type1 * (10 / 18)}
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
                    {myCompany.type2} / 180
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={myCompany.type2 * (10 / 18)}
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
                    {myCompany.type3} / 180
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={myCompany.type3 * (10 / 18)}
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
                    {myCompany.type4} / 180
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={myCompany.type4 * (10 / 18)}
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
                  {wantCompany && <DounetChart data={score.wantCompany} />}
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
                  <img
                    src={companyType.wantCompany.img}
                    style={{ width: '90%' }}
                  />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography
                    sx={{ ml: '10%', width: '80%', color: '#2084F2' }}
                    variant="h6"
                  >
                    "{companyType.wantCompany.title}" 스타일
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{ ml: '10%', width: '80%', fontSize: 12 }}
                    variant="body2"
                  >
                    {companyType.wantCompany.text}
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ mt: 3 }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    업무 강도 점수
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right', mt: 3 }}>
                  <Typography variant="body1" sx={{ fontSize: 14 }}>
                    {wantCompany.type1} / 180
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={wantCompany.type1 * (10 / 18)}
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
                    {wantCompany.type2} / 180
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={wantCompany.type2 * (10 / 18)}
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
                    {wantCompany.type3} / 180
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={wantCompany.type3 * (10 / 18)}
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
                    {wantCompany.type4} / 180
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'center', my: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={wantCompany.type4 * (10 / 18)}
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
                <Grid item xs={8}>
                  <Typography variant="h6">
                    <span
                      style={{
                        color: getTextColor(myCompany.type1, wantCompany.type1),
                      }}
                    >
                      {myCompany.type1}
                    </span>{' '}
                    / 180
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {myCompany.type1 > wantCompany.type1 && (
                    <Typography>
                      <span
                        style={{
                          color: 'blue',
                        }}
                      >
                        ▲{myCompany.type1 - wantCompany.type1}
                      </span>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    내가 원하는 회사
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">
                    <span
                      style={{
                        color: getTextColor(wantCompany.type1, myCompany.type1),
                      }}
                    >
                      {wantCompany.type1}
                    </span>{' '}
                    / 180
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {wantCompany.type1 > myCompany.type1 && (
                    <Typography>
                      <span
                        style={{
                          color: 'blue',
                        }}
                      >
                        ▲{wantCompany.type1 - myCompany.type1}
                      </span>
                    </Typography>
                  )}
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
                  <Typography variant="h6">출/퇴근 자유도</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    우리 회사
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">
                    <span
                      style={{
                        color: getTextColor(myCompany.type2, wantCompany.type2),
                      }}
                    >
                      {myCompany.type2}
                    </span>{' '}
                    / 180
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {myCompany.type2 > wantCompany.type2 && (
                    <Typography>
                      <span
                        style={{
                          color: 'blue',
                        }}
                      >
                        ▲{myCompany.type2 - wantCompany.type2}
                      </span>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    내가 원하는 회사
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">
                    <span
                      style={{
                        color: getTextColor(wantCompany.type2, myCompany.type2),
                      }}
                    >
                      {wantCompany.type2}
                    </span>{' '}
                    / 180
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {wantCompany.type2 > myCompany.type2 && (
                    <Typography>
                      <span
                        style={{
                          color: 'blue',
                        }}
                      >
                        ▲{wantCompany.type2 - myCompany.type2}
                      </span>
                    </Typography>
                  )}
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
                  <Typography variant="h6">복지 점수</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    우리 회사
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">
                    <span
                      style={{
                        color: getTextColor(myCompany.type3, wantCompany.type3),
                      }}
                    >
                      {myCompany.type3}
                    </span>{' '}
                    / 180
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {myCompany.type3 > wantCompany.type3 && (
                    <Typography>
                      <span
                        style={{
                          color: 'blue',
                        }}
                      >
                        ▲{myCompany.type3 - wantCompany.type3}
                      </span>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    내가 원하는 회사
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">
                    <span
                      style={{
                        color: getTextColor(wantCompany.type3, myCompany.type3),
                      }}
                    >
                      {wantCompany.type3}
                    </span>{' '}
                    / 180
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {wantCompany.type3 > myCompany.type3 && (
                    <Typography>
                      <span
                        style={{
                          color: 'blue',
                        }}
                      >
                        ▲{wantCompany.type3 - myCompany.type3}
                      </span>
                    </Typography>
                  )}
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
                  <Typography variant="h6">성장 가능성</Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    우리 회사
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">
                    <span
                      style={{
                        color: getTextColor(myCompany.type4, wantCompany.type4),
                      }}
                    >
                      {myCompany.type4}
                    </span>{' '}
                    / 180
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {myCompany.type4 > wantCompany.type4 && (
                    <Typography>
                      <span
                        style={{
                          color: 'blue',
                        }}
                      >
                        ▲{myCompany.type4 - wantCompany.type4}
                      </span>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: 10 }}>
                    내가 원하는 회사
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h6">
                    <span
                      style={{
                        color: getTextColor(wantCompany.type4, myCompany.type4),
                      }}
                    >
                      {wantCompany.type4}
                    </span>{' '}
                    / 180
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  {wantCompany.type4 > myCompany.type4 && (
                    <Typography>
                      <span
                        style={{
                          color: 'blue',
                        }}
                      >
                        ▲{wantCompany.type4 - myCompany.type4}
                      </span>
                    </Typography>
                  )}
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
                  <Button onClick={handleKakao} sx={{ mt: -1 }}>
                    <img src="/share/kakao.png" />
                  </Button>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                  <CopyToClipboard
                    text="http://phone.pinodev.shop:3000"
                    onCopy={() => alert('클립보드에 복사되었습니다.')}
                  >
                    <img src="/share/link.png" />
                  </CopyToClipboard>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                  <Button
                    onClick={handleKakao}
                    sx={{ color: 'black', fontSize: 12, mt: -2 }}
                  >
                    카카오톡 공유하기
                  </Button>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                  <CopyToClipboard
                    text="http://phone.pinodev.shop:3000"
                    onCopy={() => alert('클립보드에 복사되었습니다.')}
                  >
                    <Button sx={{ color: 'black', fontSize: 12, mt: -2 }}>
                      링크 복사하기
                    </Button>
                  </CopyToClipboard>
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
            {/* <Link href="/rank"> */}
            <Button
              disabled
              variant="contained"
              sx={{ width: '80%', backgroundColor: '#6176FF' }}
            >
              다른 회사 잡스코어 (준비중)
            </Button>
            {/* </Link> */}
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
