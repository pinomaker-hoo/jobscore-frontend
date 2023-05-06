// ** React Imports
import { useState } from 'react'

// ** Other View Imports
import CompanyModalView from './companyModal'

// ** Custom Hooks Imports
import useInput from '@/hooks/useInput'

// ** Api Imports
import { saveCompany } from '@/services'

interface CompanyModalProps {
  open: boolean
  handleClose: () => void
  handleRefetch: () => void
}

const CompanyModal = ({
  open,
  handleClose,
  handleRefetch,
}: CompanyModalProps) => {
  const [company, setCompany] = useInput({ name: '', url: '' })
  const [openFalse, setOpenFalse] = useState<boolean>(false)

  const handleOpenFalse = () => setOpenFalse(true)
  const handleCloseFalse = () => setOpenFalse(false)

  const regContent = async () => {
    if (company.name === '' || company.url === '') {
      handleOpenFalse()

      return
    }
    saveCompany(company).then((res) => {
      handleClose()
      handleRefetch()
    })
  }

  return (
    <CompanyModalView
      open={open}
      handleClose={handleClose}
      company={company}
      setCompany={setCompany}
      regContent={regContent}
      openFalse={openFalse}
      handleCloseFalse={handleCloseFalse}
    />
  )
}

export default CompanyModal
