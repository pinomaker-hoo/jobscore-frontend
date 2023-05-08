// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useState } from 'react'

// ** Other Page View
import SelectWantPageView from '@/views/selectWant'

// ** Type Imports
import { SelectWantPoint } from '@/types'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { updateSelectScore } from '@/store/app/user'

const SelectWantPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [point, setPoint] = useState<SelectWantPoint>({
    type5: 0,
    type6: 0,
    type7: 0,
    type8: 0,
  })
  const [count, setCount] = useState<number>(0)

  const handleChange = (type: string, number: number) => {
    if (count === 19) {
      dispatch(updateSelectScore(point))
      router.push('/endLoading')

      return
    }
    setPoint((cur: SelectWantPoint) => ({ ...cur, [type]: cur[type] + number }))
    setCount((cur) => cur + 1)
  }

  return <SelectWantPageView count={count} handleChange={handleChange} />
}

export default SelectWantPage
