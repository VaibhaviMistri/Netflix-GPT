import { GPT_SEARCH_BG_IMG } from '../utils/constants'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSeachBar from './GPTSeachBar'

const GPTSearchPage = () => {
  return (
    <div className>
      <img
        src={GPT_SEARCH_BG_IMG}
        alt="Search bg"
        className='h-screen w-screen -z-10 absolute filter brightness-[20%]'
      />
      <GPTSeachBar />
      <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearchPage