// ** Mui Imports
import { Grid } from '@mui/material'

// ** Other View Imports
import WalkingDuck from '@/components/duck/walkingDuck'

const RankPageView = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4.5}>
        <img src="/common/rankLogo.png" height={80} />
      </Grid>
      <Grid item xs={7.5} sx={{ mt: 1.5 }}>
        <WalkingDuck />
      </Grid>
      <Grid item xs={12} sx={{ overflow: 'scroll', maxHeight: '730px' }}>
        <Grid container spacing={3}></Grid>
      </Grid>
    </Grid>
  )
}
export default RankPageView
