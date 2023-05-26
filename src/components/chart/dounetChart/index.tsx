// ** Chart Imports
import { Grid, Typography } from '@mui/material'

interface Props {
  data: number
  state: string
}

const DounetChart = ({ data, state }: Props) => {
  return (
    <Grid
      container
      sx={{
        position: 'relative',
      }}
    >
      <Grid item xs={12}>
        <img src="/chart/pie.png" style={{ width: '100%' }} />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          position: 'absolute',
          transform: 'translate(-50%, 10%) translateY(100%)',
          left: '50%',
        }}
      >
        <img src="/chart/pin.png" />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          position: 'absolute',
          transform: 'translate(-50%, 10%) translateY(100%)',
          left: '50%',
        }}
      >
        <Typography variant="body1" sx={{ fontSize: 50 }}>
          {data ? data : 0}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 20, color: '#3A50DE' }}>
          {state}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default DounetChart
