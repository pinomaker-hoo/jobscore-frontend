// ** React Imports
import { useEffect, useState } from 'react'

// ** Other View Imports
import ResultPageView from '@/views/result'

// ** Redux Imports
import { RootState } from '@/store'
import { useSelector } from 'react-redux'

// ** Other Imports
import { ResultComapnyType, Result, ScoreType, TotalScore } from '@/types'
import { companyTypeData } from '@/@fake'

const ResultPage = () => {
  const [score, setScore] = useState<TotalScore>({
    myCompany: 0,
    wantCompany: 0,
  })
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

  const PATH =
    process.env.NEXT_PUBLIC_HOST_URL || 'https://jobscore.swygbro.com'

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
        image: PATH + companyType.myCompany.img,
        style: companyType.myCompany.title,
        score:
          myCompany.type1 + myCompany.type2 + myCompany.type3 + myCompany.type4,
        subTitle: companyType.myCompany.text,
      },
    })
  }

  const getTotalScore = (score: ScoreType) => {
    return Object.values(score).reduce((cur, ocr) => {
      return cur + ocr
    }, 0)
  }

  useEffect(() => {
    if (myCompany) {
      setCompanyType((cur) => ({ ...cur, myCompany: getResultType(myCompany) }))
      setScore((cur) => ({
        ...cur,
        myCompany: getTotalScore({ ...myCompany }),
      }))
    }

    if (wantCompany) {
      setCompanyType((cur) => ({
        ...cur,
        wantCompany: getResultType(wantCompany),
      }))
      setScore((cur) => ({
        ...cur,
        wantCompany: getTotalScore({ ...wantCompany }),
      }))
    }
  }, [myCompany, wantCompany])

  return (
    <ResultPageView
      wantCompany={wantCompany}
      myCompany={myCompany}
      companyType={companyType}
      handleKakao={handleKakao}
      score={score}
      PATH={PATH}
    />
  )
}
export default ResultPage
