import React from "react";
import { motion, useTransform, MotionValue, useMotionValue, animate, AnimationPlaybackControls } from "framer-motion";
import { useTimer } from 'use-timer';

type ProgressBarTypes = {
  currentIndex: number,
  onChange: (index: number) => void,
  count: number,
  duration: number,
}

export const ProgressBar: React.FC<ProgressBarTypes> = ({ currentIndex, onChange, count, duration }) => {
  const arr = Array.from(Array(count).keys());

  return (
    <div className="flex z-50">
      {arr.map((el, i) => (
        <SingleBar 
          duration={duration} 
          onChange={onChange}
          currentIndex={currentIndex}
          index={el}
          key={el} />
      ))}
    </div>
  );
};

type SingleBarProps = {
  currentIndex: number,
  index: number,
  duration: number,
  onChange: (index: number) => void,
}

export const SingleBar:React.FC<SingleBarProps> = ({ duration, currentIndex, index, onChange }) => {
  const width = useMotionValue('0%');
  const controls = React.useRef<AnimationPlaybackControls | null>(null);

  React.useEffect(() => {
    if(currentIndex < index){
      if(controls.current){
        controls.current.stop();
        controls.current = null
      }
      width.set('0%')
    } else if (currentIndex === index){
      width.set('0%')
      controls.current = animate(width, '100%', {
        duration, 
        ease: "linear",
        onComplete: () => {
          console.log('onComplete: ' + index)
          onChange(index + 1)
        } 
      })
    } else if (currentIndex > index){
      if(controls.current){
        controls.current.stop();
        controls.current = null
      }
      width.set('100%')  
    }
  },[currentIndex])



  return (
    <div className="w-full h-1 mx-1 relative z-40">
      <div className="bg-transparent50 w-full h-1 absolute top-0 left-0"/>
      <motion.div 
        onAnimationEnd={() => console.log('onAnimationComplete')}
        style={{ width }} 
        className="bg-transparent80 h-1"
      />
    </div>
  );
};
