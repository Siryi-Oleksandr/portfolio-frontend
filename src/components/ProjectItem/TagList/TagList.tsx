import React, { FC } from 'react';
import TagItem from '../TagItem/TagItem';
import { motion } from 'framer-motion';
import 'framer.styles.css';
import { sliceTags } from 'services';

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

const item = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

type Props = {
  tags: Array<string>;
  isHover: boolean;
};

const TagList: FC<Props> = ({ tags, isHover }) => {
  const handledTags = sliceTags(tags, 6);
  return (
    <motion.ul
      className="list"
      variants={container}
      initial="hidden"
      animate={isHover ? 'visible' : 'hidden'}
    >
      {handledTags.map((tag, index) => (
        <motion.li key={index} variants={item}>
          <TagItem tagName={tag.toUpperCase()} />
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default TagList;
