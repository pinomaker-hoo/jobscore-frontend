// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useCallback, useEffect } from 'react'

// ** Mui Imports
import { Card, Grid, Typography } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import loadingEnd from '../../lotties/loading-end.json'

// ** Other View Imports
import WalkingDuck from '@/components/duck/walkingDuck'

// ** Redux Imports
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { saveResult } from '@/services'

// ** Other Imports
import { ResultComapnyType, ScoreType } from '@/types'
import { companyTypeData } from '@/@fake'

const EndLoadingPage = () => {
  const router = useRouter()

  const {
    score: { myCompany, wantCompany },
    company: { id, department, name },
  } = useSelector((state: RootState) => state.user)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingEnd,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const getResultType = useCallback(
    (score: ScoreType) => {
      const code = Object.values(score).reduce((cur, ocr) => {
        if (ocr > 90) {
          return cur + '1'
        }
        return cur + '0'
      }, '')

      const arr = companyTypeData.filter(
        (item: ResultComapnyType) => item.code === code
      )

      return arr.length > 0 ? arr[0].code : '0000'
    },
    [companyTypeData]
  )

  const saveApi = () => {
    const saveMyCompany = {
      companyId: id,
      department: department,
      type1: myCompany.type1,
      type2: myCompany.type2,
      type3: myCompany.type3,
      type4: myCompany.type4,
      code: getResultType(myCompany),
      totalCount:
        myCompany.type1 + myCompany.type2 + myCompany.type3 + myCompany.type4,
    }

    const saveWantCompany = {
      department: department,
      type1: wantCompany.type1,
      type2: wantCompany.type2,
      type3: wantCompany.type3,
      type4: wantCompany.type4,
      code: getResultType(wantCompany),
      totalCount:
        wantCompany.type1 +
        wantCompany.type2 +
        wantCompany.type3 +
        wantCompany.type4,
    }
    saveResult(saveMyCompany, saveWantCompany, name).then((res) => {
      router.push('/result')
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      saveApi()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={4.5}>
        <img src="/common/logo.png" height={80} />
      </Grid>
      <Grid item xs={7.5} sx={{ mt: 1.5 }}>
        <WalkingDuck />
      </Grid>
      <Grid item xs={12} sx={{ mt: 8 }}>
        <Lottie options={defaultOptions} height={250} width={300} />
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{
            p: 3,
            width: '80%',
            ml: '10%',
            backgroundColor: '#E8F4FF',
            boxShadow: 'none',
          }}
        >
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography variant="h6">설문 결과를 계산하고 있어요</Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body1">잠시만 기다려주세요</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  )
}

export default EndLoadingPage
