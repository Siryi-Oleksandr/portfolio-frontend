import React, { FC } from 'react';
import { motion } from 'framer-motion';
import 'framer.styles.css';
import { Link } from 'react-router-dom';

import { FaEdit, FaRegTrashAlt, FaLink } from 'react-icons/fa';

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
  projectId: string | undefined;
};

const HoverList: FC<Props> = ({ isHover, description, projectId }) => {
  return (
    <motion.div
      className="div"
      variants={container}
      initial="hidden"
      animate={isHover ? 'visible' : 'hidden'}
    >
      <motion.div className="cabinet-btn">
        <Link to={`/projectDetails/${projectId}`}>
          <FaLink size="30px"></FaLink>
        </Link>
      </motion.div>
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
