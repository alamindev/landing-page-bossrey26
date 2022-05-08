import type { NextPage } from 'next' 
import FairLaunch from '../components/Home/FairLaunch'
import Fitness from '../components/Home/Fitness'
import GameFeatureMobile from '../components/Home/GameFeatureMobile'
import GameFeatures from '../components/Home/GameFeatures'
import GamePlay from '../components/Home/GamePlay'
import GamePlayMobile from '../components/Home/GamePlayMobile'
import GameToken from '../components/Home/GameToken'
import Statistics from '../components/Home/Statistics'
import TracToEarn from '../components/Home/TracToEarn'

const Home: NextPage = () => {
  return (
    <>
      <Fitness/>
      <TracToEarn/>
      <div className='hidden lg:block'>
        <GamePlay  />
      </div>
      <div className='lg:hidden'>
        <GamePlayMobile />
      </div>
      <GameToken />
      <div className='hidden lg:block'>
        <GameFeatures  />
      </div>
      <div className='lg:hidden'>
        <GameFeatureMobile />
      </div>
      <Statistics />
      <FairLaunch/>
    </>  
  )
}

export default Home
