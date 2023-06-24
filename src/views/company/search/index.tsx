// ** Next Imports
import Link from 'next/link'

// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import {
  Button,
  Grid,
  Typography,
  IconButton,
  Paper,
  InputBase,
} from '@mui/material'

// ** Other View Imports
import CompanyModal from '@/components/modal/companyModal'
import { CompanyType } from '@/types'

interface Props {
  word: string
  companyList: CompanyType[]
  handleRefetch: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const CompanySearchView = ({
  word,
  companyList,
  onChange,
  handleRefetch,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid container spacing={3}>
      <Grid item xs={11} sx={{ textAlign: 'center', mt: 10, ml: 2 }}>
        <Paper
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F2F2F2',
            boxShadow: 'none',
          }}
        >
          <IconButton type="button" sx={{ p: '10px' }} onClick={handleRefetch}>
            <img src="/search/icon.png" />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="회사명으로 검색"
            onChange={onChange}
            value={word}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        {companyList.map((item: CompanyType, index: number) => (
          <Grid container sx={{ mt: 1 }} key={index}>
            <Grid item xs={3} sx={{ textAlign: 'center' }}>
              <img src={'/search/company.png'} />
            </Grid>
            <Grid item xs={9}>
              <Link
                href={`/company?id=${item.id}&name=${item.name}`}
                style={{ textDecoration: 'none' }}
              >
                <Typography variant="body1" sx={{ color: 'black' }}>
                  {item.name}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="body1">내 회사가 목록에 없나요?</Typography>
        <Button onClick={handleOpen}>
          <Typography variant="body1" sx={{ color: 'black', mt: -1 }}>
            <b>직접 추가하기</b>
          </Typography>
        </Button>
      </Grid>
      {open && (
        <CompanyModal
          open={open}
          handleClose={handleClose}
          handleRefetch={handleRefetch}
        />
      )}
    </Grid>
  )
}

export default CompanySearchView

const trash = [
  { uid: '01231231', name: 'Google' },
  { uid: '01231232', name: 'Kakao' },
  { uid: '01231233', name: 'Naver' },
  { uid: '01231234', name: 'FaceBook' },
  { uid: '01231235', name: 'amazon' },
]
