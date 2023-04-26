// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Button, Grid, TextField, Typography } from '@mui/material'

// ** Other View Imports
import CompanyModal from '@/components/modal/companyModal'

const CompanySearchView = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
        <TextField
          size="small"
          sx={{
            width: '80%',
            backgroundColor: '#F2F2F2',
            borderColor: '#F2F2F2',
          }}
        />
      </Grid>
      {trash.map((item: { id: number; name: string }) => (
        <Grid item xs={12} sx={{ textAlign: 'center' }} key={item.id}>
          <Typography>{item.name}</Typography>
        </Grid>
      ))}
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography>내 회사가 목록에 없나요?</Typography>
        <Button onClick={handleOpen}>직접 추가하기</Button>
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
