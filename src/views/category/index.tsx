// ** Next Imports
import Link from 'next/link'

// ** Mui Imports
import { Button, Box, Typography } from '@mui/material'

// ** Type Imports
import { Department } from '@/types'

const departmentList: Department[] = [
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

interface Props {
  department: string
  handleBtnClick: (department: string) => void
  handleNext: () => void
}

const CategoryPageView = ({
  handleBtnClick,
  department,
  handleNext,
}: Props) => {
  return (
    <Box display="flex" flexDirection="column">
      <Box ml={3} mt={10} textAlign="left">
        <Typography variant="h4">
          현재 근무중인
          <br /> 부서를 선택해 주세요
        </Typography>
      </Box>
      <Box ml={3} mb={2} textAlign="left">
        <Typography variant="body2">
          부서를 선택시 잡스랭킹에 부서별 평점이 올라가요!
          <br /> 원치 않을경우 비공개를 선택해 주세요
        </Typography>
      </Box>
      <Box ml={3}>
        <Box display="flex" flexWrap="wrap" justifyContent="flex-start" mb={2}>
          {departmentList.map((item: Department) => (
            <Box key={item.id} mr={1.5} mb={1.5}>
              <Button
                variant={item.name === department ? 'contained' : 'outlined'}
                fullWidth
                onClick={() => handleBtnClick(item.name)}
                sx={{
                  textTransform: 'none',
                  whiteSpace: 'normal',
                  minWidth: 0,
                  height: 'auto',
                }}
              >
                {item.name}
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      <Box textAlign="center" mt={1.5}>
        <Button
          variant="contained"
          size="large"
          sx={{ width: '80%' }}
          disabled={department === '' ? true : false}
          onClick={handleNext}
        >
          다음
        </Button>
      </Box>
    </Box>
  )
}

export default CategoryPageView
