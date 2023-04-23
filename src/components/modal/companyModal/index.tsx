import CompanyModalView from './companyModal'

interface CompanyModalProps {
  open: boolean
  handleClose: () => void
}

const CompanyModal = ({ open, handleClose }: CompanyModalProps) => {
  return <CompanyModalView open={open} handleClose={handleClose} />
}

export default CompanyModal
