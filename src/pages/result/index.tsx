// ** React Imports
import { useEffect, useState } from 'react'

// ** Other View Imports
import ResultPageView from '@/views/result'

// ** Redux Imports
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

// ** Other Imports
import { ResultComapnyType, Result, ScoreType } from '@/types'
import { companyTypeData } from '@/@fake'

const ResultPage = () => {
  const [companyType, setCompanyType] = useState<Result>({
    myCompany: {
      id: 0,
      code: '',
      title: '',
      text: '',
      img: "'",
    },
    wantCompany: {
      id: 0,
      code: '',
      title: '',
      text: '',
      img: "'",
    },
  })

  const { myCompany, wantCompany } = useSelector(
    (state: RootState) => state.user.score
  )

  const getResultType = (score: ScoreType) => {
    const code = Object.values(score).reduce((cur, ocr) => {
      if (ocr > 90) {
        return cur + '1'
      }
      return cur + '0'
    }, '')

    const arr = companyTypeData.filter(
      (item: ResultComapnyType) => item.code === code
    )

    return arr[0]
  }

  useEffect(() => {
    if (myCompany) {
      setCompanyType((cur) => ({ ...cur, myCompany: getResultType(myCompany) }))
    }

    if (wantCompany) {
      setCompanyType((cur) => ({
        ...cur,
        wantCompany: getResultType(wantCompany),
      }))
    }
  }, [myCompany, wantCompany])

  return (
    <ResultPageView
      wantCompany={wantCompany}
      myCompany={myCompany}
      companyType={companyType}
    />
  )
}
export default ResultPage
