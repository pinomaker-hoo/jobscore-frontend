// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useState } from 'react'

// ** Other View Imports
import CategoryPageView from '@/views/category'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { updateDepartment } from '@/store/app/user'

const CategoryPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [department, setDepartment] = useState<string>('')

  const handleBtnClick = (department: string) => {
    setDepartment(department)
  }

  const handleNext = () => {
    dispatch(updateDepartment({ department }))
    router.push('/select/intro')
  }

  return (
    <CategoryPageView
      handleBtnClick={handleBtnClick}
      department={department}
      handleNext={handleNext}
    />
  )
}

export default CategoryPage
