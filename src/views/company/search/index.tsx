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

const CompanySearchView = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid container spacing={3}>
      <Grid item xs={1} sx={{ mt: 3, ml: 3 }}>
        <Link href="/company">
          <img src="/common/back.png" height={30} />
        </Link>
      </Grid>
      <Grid item xs={9} sx={{ textAlign: 'center', mt: 2, ml: 2 }}>
        <Paper
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F2F2F2',
            boxShadow: 'none',
          }}
        >
          <IconButton
            type="button"
            sx={{ p: '10px' }}
            onClick={() => console.log('CLICK')}
          >
            <img src="/search/icon.png" />
          </IconButton>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="회사명으로 검색" />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        {trash.map((item: any) => (
          <Grid container sx={{ mt: 1 }}>
            <Grid item xs={3} sx={{ textAlign: 'center' }}>
              <img src={item.img ? item.img : '/search/company.png'} />
            </Grid>
            <Grid item xs={9}>
              <Typography variant="body1" sx={{ color: 'black' }}>
                {item.name}
              </Typography>
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
      {open && <CompanyModal open={open} handleClose={handleClose} />}
    </Grid>
  )
}

export default CompanySearchView

const trash = [
  { id: 0, name: 'Google' },
  { id: 1, name: 'Kakao' },
  { id: 2, name: 'Naver' },
  { id: 3, name: 'FaceBook' },
  { id: 4, name: 'amazon' },
]
