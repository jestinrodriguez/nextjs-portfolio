//next link
import Link from 'next/link'

// components
import Circles from '/components/Circles';
import WorkSlider from '../../components/WorkSlider';
// icons
import { BsArrowRight } from 'react-icons/bs';

import { RiMailLine } from 'react-icons/ri'

// framer
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
            <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px] text-center'>
        {/* text */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className='h2 text-center mb-12'
          >
          Let&apos;s <span className='text-accent'>connect.</span>
        </motion.h2>
        {/* form */}
        {/* <motion.form
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input'/>
              <input type='text' placeholder='name' className='input'/>
            </div>
            <input type='text' placeholder='subject' className='input'/>
            <textarea placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's Talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
        </motion.form> */}
        <motion.p
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mx-auto xl:mx-0 mb-10 xl:mb-5'>
          Send me a message: &nbsp;
          <Link href={'mailto:rodriguez.jestinrenzo@gmail.com'} target="_blank">
             <span className='text-accent underline'>rodriguez.jestinrenzo@gmail.com</span>
          </Link>
        </motion.p>
        <motion.p
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mx-auto xl:mx-0 mb-2 xl:mb-5'>
              OR
        </motion.p>
        <motion.p
          variants={fadeIn('down', 0.8)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mx-auto xl:mx-0 mb-2 xl:mb-5'>
            Connect with me on: &nbsp;
          <Link href={'https://github.com/jestinrodriguez'} target="_blank">
             <span className='text-accent underline'>Linkedin!</span>
          </Link>
        </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
