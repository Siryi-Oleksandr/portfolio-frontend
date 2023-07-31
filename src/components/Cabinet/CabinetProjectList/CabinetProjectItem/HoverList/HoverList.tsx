import React, { FC } from 'react';
import { motion } from 'framer-motion';
import 'framer.styles.css';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

type Props = {
  description: string;
  isHover: boolean;
};

const HoverList: FC<Props> = ({ isHover, description }) => {
  return (
    <motion.div
      className="div"
      variants={container}
      initial="hidden"
      animate={isHover ? 'visible' : 'hidden'}
    >
      <motion.p className="description">{description}</motion.p>
      <motion.button className="cabinet-btn">
        <FaEdit size="30px" />
      </motion.button>
      <motion.button className="cabinet-btn">
        <FaRegTrashAlt size="30px" />
      </motion.button>
    </motion.div>
  );
};

export default HoverList;
