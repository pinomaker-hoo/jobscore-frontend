// ** Mui Imports
import { Button, Card, Grid, Typography } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import mainLottie from '@/lotties/select.json'

// ** Fake DB Imports
import { questionData1 } from '@/@fake'

interface Props {
  count: number
  handleChange: (type: string, point: number) => void
}

const SelectPageView = ({ count, handleChange }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: mainLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const selectData = [...questionData1]

  return (
    <Grid container sx={{ backgroundColor: '#629DD7' }}>
      <Grid item xs={12} sx={{ textAlign: 'right', pr: 3, pt: 3 }}>
        <Typography variant="h6" sx={{ color: 'white' }}>
          {count + 1} / 40
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ textAlign: 'center', mt: -10, mb: -5 }}>
        <Lottie options={defaultOptions} width={350} />
      </Grid>
      <Grid item xs={0.5} />
      <Grid item xs={11}>
        <Card sx={{ width: '100%', p: 2, borderRadius: 2 }}>
          <Grid container>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: -2.5 }}>
              <img src="/common/topBox.png" />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', my: 2 }}>
              <Typography variant="h6">현재 재직중인 회사에서</Typography>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{
                  p: 2,
                  backgroundColor: '#EBEBEB',
                  boxShadow: 'none',
                  textAlign: 'center',
                  borderRadius: 2,
                }}
              >
                <Typography variant="body2">
                  {selectData[count].question}
                </Typography>
              </Card>
            </Grid>
            {selectData[count].answer.map((item) => (
              <Grid item xs={12} sx={{ mt: 2 }} key={item.id}>
                <Button
                  size="large"
                  variant="outlined"
                  fullWidth
                  sx={{
                    borderRadius: 2,
                    borderColor: '#123F6C',
                    color: 'black',
                  }}
                  onClick={() =>
                    handleChange(
                      `type${selectData[count].categoryId}`,
                      item.point
                    )
                  }
                >
                  {item.text}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={0.5} />
      <Grid item xs={12} sx={{ mb: 3 }} />
    </Grid>
  )
}

export default SelectPageView
