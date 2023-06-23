// ** React Imports
import { useMemo } from 'react'

// ** Chart Imports
import { Grid, Typography } from '@mui/material'

interface Props {
  data: number
}

const DounetChart = ({ data }: Props) => {
  const state = useMemo(() => {
    if (data > 500) {
      return '높음'
    }

    if (data > 300) {
      return '평균'
    }

    return '낮음'
  }, [data])

  const angle = useMemo(() => ((data - 30) / (720 - 30)) * 180 - 90, [data])

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
          transform: 'translate(-50%, 10%) translateY(80%)',
          left: '50%',
        }}
      >
        <img
          src="/chart/pin.png"
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: 'bottom',
          }}
        />
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
