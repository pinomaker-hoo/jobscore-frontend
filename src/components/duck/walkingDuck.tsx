// ** Mui Imports
import { Grid, Divider } from '@mui/material'

// ** Lottie Imports
import Lottie from 'react-lottie'
import animationData from '../../lotties/walking-duck.json'

const WalkingDuck = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Grid container>
      <Grid item xs={3}>
        <Lottie options={defaultOptions} />
      </Grid>
      <Grid item xs={10} sx={{ mt: -1, ml: 2 }}>
        <Divider sx={{ border: 0.5, color: '#1E4A75' }} />
      </Grid>
    </Grid>
  )
}

export default WalkingDuck
