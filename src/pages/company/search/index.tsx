// ** React Imports
import { useEffect, useState } from 'react'

// ** Other View Imports
import CompanySearchView from '@/views/company/search'

// ** Api Imports
import { findAllCompany } from '@/services'

// ** Type Imports
import { CompanyType } from '@/types'

const CompanySearch = () => {
  const [word, setWord] = useState<string>('')
  const [reRenderSwitch, setReRenderSwitch] = useState<boolean>(false)
  const [companyList, setCompanyList] = useState<CompanyType[]>([])

  const handleRefetch = () => setReRenderSwitch(true)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value)
  }

  useEffect(() => {
    if (reRenderSwitch) {
      setReRenderSwitch(false)
    }

    findAllCompany(word).then((res) => {
      setCompanyList(res)
    })
  }, [reRenderSwitch])

  return (
    <CompanySearchView
      word={word}
      onChange={onChange}
      handleRefetch={handleRefetch}
      companyList={companyList}
    />
  )
}

export default CompanySearch
