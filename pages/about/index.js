import React, { useState } from 'react';
{/* eslint-disable react/jsx-key */}
// icons

import WorkSlider from '../../components/WorkSlider';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaPhp,
  FaJava,
  FaPython,
  FaNode,
  FaLinux 
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiCsharp,
  SiRedux,
  SiExpress,
  SiTailwindcss,
  SiApache,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiGraphql,
  SiAmazonaws
} from "react-icons/si";

import { TbApi } from "react-icons/tb";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <TbApi />,
          <FaWordpress />,
          <FaNode/>,
          <SiTailwindcss/>
        ],
      },
      {
        title: 'Programming Languages',
        icons: [<FaPhp/>,
                <FaJava/>,
                <FaPython/>,
                <SiCsharp/>

                ],
      },
      {
        title: 'Databases',
        icons: [<SiMysql/>,
                <SiMongodb/>,
                <SiFirebase/>,
                ],
      },
      {
        title: 'Other Skills',
        icons: [<FaLinux/>,
                <SiApache/>,
                <SiAmazonaws/>,
                <SiExpress/>,
                <SiGraphql/>,
                <SiRedux/>
                ],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Software Engineer - Jefit Inc. Santa Clara, CA',
        stage: '2022 - 2023',
      },
      {
        title: 'Front-end Engineer Intern - Empava - Los Angeles, CA',
        stage: '2021'
      },
      {
        title: 'Software Engineer Intern - Manila, Philippines',
        stage: '2019',
      },
    ],
  },
  // {
  //   title: 'credentials',
  //   info: [
  //     {
  //       title: 'Web Development - ABC University, LA, CA',
  //       stage: '2011',
  //     },
  //     {
  //       title: 'Computer Science Diploma - AV Technical Institute',
  //       stage: '2009',
  //     },
  //     {
  //       title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
  //       stage: '2006',
  //     },
  //   ],
  // },
  {
    title: 'Education',
    info: [
      {
        title: 'Zero to Mastery Academy',
        stage: '2020',
      },
      {
        title: 'De La Salle University - Dasmariñas',
        stage: '2019',
      }
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar img */}
      {/* <motion.div 
        variants={fadeIn('right',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
      </motion.div> */}
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2
            variants={fadeIn('right',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
              echo (<span className='text-accent'>&quot;Hello World&quot;</span>);
          </motion.h2>
          <motion.p
            variants={fadeIn('right',0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-6 px-2 xl:px-0'
          >
            My journey started with a single line of code. I was intrigued on how it worked and its endless possibilities.
            Fast-forward to today, having <span className='text-accent'>contributed</span> to multiple startups,
            I find joy in building projects, learning new technologies, and <span className='text-accent'>manifesting ideas.</span>
          </motion.p>
          <motion.p
            variants={fadeIn('right',0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
            Learn more about my <span className='text-accent'>journey!</span>
            {/* <WorkSlider/> */}
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right',0.8)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={2} duration={10}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={300} duration={5}/>k + 
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Users reached (monthly)
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={40} duration={5}/> + 
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Projects Finished
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-3xl font-extrabold text-accent mb-2'>
                &#8734;
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  infinite possibilities
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('left',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
          >
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div 
                    key={itemIndex}
                    //color bug
                    className={`${
                      index === itemIndex && 
                      'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                      cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                      onClick={() => setIndex(itemIndex)}
                    >
                      {item.title}
                  </div>
                  )
                })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex)=>{
                return(
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                    {/* title */}
                    <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                    <div className='hidden md:flex'>-</div>
                    <div>{item.stage}</div>
                    <div className='flex gap-x-4'>
                      {/* icons */}
                      {item.icons?.map((icon, itemIndex) => {
                        return <div key={itemIndex} className='text-2xl text-white'>{icon}</div>
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
