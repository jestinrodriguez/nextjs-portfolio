// links
import Link from 'next/link'

// icons

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiLinkedinBoxFill,
  RiMailFill,
  RiLinkedinLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiGithubLine,
  RiGithubFill  
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/jestinrodriguez/'} className='hover:text-accent transition-all duration-300' target="_blank">
        <RiLinkedinBoxFill />
      </Link>
      <Link href={'https://github.com/jestinrodriguez'} className='hover:text-accent transition-all duration-300' target="_blank">
        <RiGithubFill/>
      </Link>
      <Link href={'mailto:rodriguez.jestinrenzo@gmail.com'} className='hover:text-accent transition-all duration-300' target="_blank">
        <RiMailLine />
      </Link>
    </div>
  );
};

export default Socials;
