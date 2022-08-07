import React from 'react'
import { motion } from 'framer-motion'
export default function Main() {
  return (
    <motion.main
    initial={{opacity: 0}}
    animate={{opacity: 1, transition: {duration: 2}}}
    exit={{opacity: 0}}
    className='container pt-24 min-h-[95vh]'>
      Main page
    </motion.main>
  )
}
