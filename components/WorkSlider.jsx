// next image
import Image from 'next/image';

// next link 
import Link from 'next/link';

// import swiper from react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper';

//icons
import { BsArrowRight } from 'react-icons/bs'

// data
const workData = {
  slides: [
    {
      images: [
        {
          title: 'Jefit',
          path: './jefit-homepage.png',
          link: 'https://www.jefit.com/',
        },
        {
          title: 'Empava',
          path: './empava-home.png',
          link: 'https://www.empava.io/',
          youtube: 'https://www.youtube.com/watch?v=u2XV3brv0uQ'
        },
        {
          title: 'Krypt - Web 3.0',
          path: './krypt.png',
          link: 'https://krypt-jestinrodriguez.vercel.app/'
        },
        {
          title: 'GeniusAI',
          path: './GeniusAi.png',
          link: 'https://www.youtube.com/watch?v=8MIGMJvDFOc'
        },
      ],
    },
    {
      images: [
        {
          title: 'Medium Blog Clone',
          path: './medium.png',
          link: 'https://medium-1j9kcv4xr-jestinrodriguez.vercel.app/'
        },
        {
          title: 'Coinbase - Web 3.0',
          path: './coinbases.png',
          link: 'https://coinbase-jest.vercel.app/'
        },
        {
          title: 'Spotify Clone',
          path: './spotify.png',
          link: 'https://www.youtube.com/watch?v=60y8ABXWUbs'
        },
        {
          title: 'Disney Plus Clone',
          path: './disney+.png',
          link: 'https://disney-clone-ef31e.web.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'Movie Database',
          path: './movie.png',
          link: 'https://jest-moviedb.netlify.app/'
        },
        {
          title: 'Tesla Clone',
          path: './tesla.png',
          link: 'https://jest-tesla-clone.netlify.app/#'
        },
        {
          title: 'Clubhouse Clone',
          path: './clubhouse.png',
          link: 'https://clubhouse-clone-jest.netlify.app/'
        },
        {
          title: 'Promptopia',
          path: './promptopia.png',
          link: 'https://promptopia-ri21oeiqe-jestinrodriguez.vercel.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'Forkify',
          path: './forkify.png',
          link: 'https://forkify-jestin.netlify.app/'
        },
        {
          title: 'Mapty',
          path: './mapty.png',
          link: 'https://jestinrodriguez.github.io/mapty/'
        },
        {
          title: 'Pig Game',
          path: './Piggame.png',
          link: 'https://jestinrodriguez.github.io/pig-game/'
        },
        {
          title: 'Rock-Paper-Scissors',
          path: './rockpaperscissors.png',
          link: 'https://jestinrodriguez.github.io/rockpaperscissorsgame/'
        },
      ],
    },
    {
      images: [
        {
          title: 'Bankist',
          path: './bankist.png',
          link: 'https://jestinrodriguez.github.io/bankist/'
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}      
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
      >
        {workData.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                {slide.images.map((image, index) => {
                  return (
                    <Link key={index} href={image.link} target="_blank">
                      <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                        <div className='flex items-center justify-center relative overflow-hidden group'>
                          {/* image */}
                          <Image src={image.path} width={500} height={300} alt={image.title + ` project preview`} className='xl:h-[210px] sm:h-[210px] xs:h-[110px] object-cover'/>
                          {/* overlay gradient */}
                          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#721f1a] to-[#221252] opacity-0 group-hover:opacity-90 transition-all duration-700'></div>
                          {/* title */}
                            <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                              <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150 uppercase'>{image.title}</div>
                                <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                  <BsArrowRight/>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })}
    </Swiper>
  );
};

export default WorkSlider;
