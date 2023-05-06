// ** Next Imports
import { useRouter } from 'next/router'

// ** React Imports
import { useEffect, useState } from 'react'

// ** Other View Imports
import CompanyPageView from '@/views/company'

// ** Redux Imports
import { useDispatch } from 'react-redux'
import { updateCompany } from '@/store/app/user'

const CompanyPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [company, setCompany] = useState<{ name: string; id: string }>({
    name: '',
    id: '',
  })
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
    if (e.target.checked) {
      setCompany({ id: '', name: '비공개' })

      return
    }

    setCompany({ id: '', name: '' })
  }

  const handleNext = () => {
    dispatch(updateCompany({ ...company, department: '' }))

    router.push('/category')
  }

  useEffect(() => {
    if (router.query.id) {
      setCompany({
        id: String(router.query.id),
        name: String(router.query.name),
      })
    }
  }, [router.query])

  return (
    <CompanyPageView
      name={company.name}
      handleChange={handleChange}
      checked={checked}
      handleNext={handleNext}
    />
  )
}

export default CompanyPage
