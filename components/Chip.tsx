import React from 'react';
import { motion } from 'framer-motion';
interface ChipProps {
  label: string; className?: string;
}

const Chip: React.FC<ChipProps> = (props) => {
  const { label, 
    className } = props;
const chipVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0 
  },
};

  return (
    <motion.div variants={chipVariants} initial="hidden"
      animate="visible"
      className={`sketch-card text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${className?className:''}`}
    >
      {label}</motion.div>
  );
};
export default Chip;