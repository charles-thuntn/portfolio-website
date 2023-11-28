import React, { useEffect, useRef } from 'react'
import {useMotionValue, useSpring, useInView} from 'framer-motion'

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, {once: true}); 

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (lasted) => {
      if (ref.current && lasted.toFixed(0) <= value) {
        ref.current.textContent = lasted.toFixed(0);
      }
    })
  }, [springValue, value])

  return (
    <span ref={ref}>{value}</span>
  )
}

export default AnimatedNumber