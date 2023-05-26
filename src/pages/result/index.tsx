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

  const handleKakao = async () => {
    const kakao = window.Kakao

    if (!kakao.isInitialized()) {
      kakao.init('beb93c49d1c89f713c2266e791f6e6a3')
    }

    await kakao.Share.sendCustom({
      templateId: 94310,
      templateArgs: {
        image: 'http://phone.pinodev.shop:3000' + companyType.myCompany.img,
      },
    })
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
      handleKakao={handleKakao}
    />
  )
}
export default ResultPage
