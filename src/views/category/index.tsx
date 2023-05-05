// ** Next Imports
import Link from 'next/link'

// ** React Imports
import { useState } from 'react'

// ** Mui Imports
import { Button, Grid, Typography } from '@mui/material'

interface Category {
  name: string
  id: number
  size: number
  type: boolean
}

const defaultCategory: Category[] = [
  { type: false, id: 1, name: '경영 & 기획', size: 4 },
  { type: false, id: 2, name: '디자인', size: 3 },
  { type: false, id: 3, name: '재무 & 회계', size: 4 },
  { type: false, id: 4, name: '마케팅', size: 3 },
  { type: false, id: 5, name: '무역', size: 2.5 },
  { type: false, id: 6, name: '유통', size: 2.5 },
  { type: false, id: 7, name: '생산', size: 2.5 },
  { type: false, id: 8, name: '서비스', size: 3 },
  { type: false, id: 9, name: '영업', size: 2.5 },
  { type: false, id: 10, name: '건설', size: 2.5 },
  { type: false, id: 11, name: '개발', size: 2.5 },
  { type: false, id: 12, name: '교육', size: 2.5 },
  { type: false, id: 13, name: 'MD', size: 2.5 },
  { type: false, id: 14, name: 'PO & PM', size: 4 },
  { type: false, id: 15, name: '기타', size: 2.5 },
  { type: false, id: 16, name: '비공개', size: 3 },
]

const CategoryPageView = () => {
  const [category, setCategory] = useState<Category[]>(defaultCategory)

  const onClick = (id: number) => {
    const newCategory = category.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          type: item.type ? false : true,
        }
      }
      return item
    })
    setCategory(newCategory)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={3} sx={{ mt: 3, ml: 3 }}>
        <Link href="/company">
          <img src="/common/back.png" height={30} />
        </Link>
      </Grid>
      <Grid item xs={12} sx={{ mt: 10, ml: 3 }}>
        <Typography variant="h4">
          현재 근무중인
          <br /> 부서를 선택해 주세요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ ml: 3, mb: 2 }}>
        <Typography variant="body2">
          부서를 선택시 잡스랭킹에 부서별 평점이 올라가요!
          <br /> 원치 않을경우 비공개를 선택해 주세요
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ ml: 3 }}>
        <Grid container spacing={1.5}>
          {category.map((item: Category) => (
            <Grid item xs={item.size} key={item.id}>
              <Button
                variant={item.type ? 'contained' : 'outlined'}
                fullWidth
                onClick={() => onClick(item.id)}
                sx={{ height: 40 }}
              >
                {item.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: 1.5 }}>
        <Link href="/endLoading">
          <Button variant="contained" size="large" sx={{ width: '80%' }}>
            다음
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default CategoryPageView
