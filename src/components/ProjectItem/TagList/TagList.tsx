import React, { FC } from 'react';
import { List } from './TagList.styled';
import TagItem from '../TagItem/TagItem';
import { motion } from "framer-motion";
import "./styles.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

type Props = {
  tags: Array<string>,
  isHover: boolean
}



const TagList: FC<Props> = ({ tags, isHover }) => {
  return (
 <motion.ul
    className="list"
    variants={container}
    initial="hidden"
     animate={isHover ? "visible" : "hidden"}
  >
    {tags.map((tag,index) => (
      <motion.li key={index} variants={item}>
        <TagItem tagName={tag.toUpperCase()}/>
      </motion.li>
    ))}
  </motion.ul>

  );
};

export default TagList;
