import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bar,
  IconsBlock,
  Img,
  ImgWrapper,
  Item,
  Overlay,
  Title,
} from './ProjectItem.styled';
import TagList from './TagList/TagList';
import { IProject } from 'types/projectTypes';
import { motion } from 'framer-motion';
import 'framer.styles.css';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.9,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

type Props = {
  project: IProject;
};

const ProjectItem: FC<Props> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const {
    id: projectId,
    title,
    // description,
    // linkToCode,
    // linkToWebSite,
    technologies,
    posters,
  } = project;
  return (
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={`/projectDetails/${projectId}`}>
        <Bar>
          <Title>{title}</Title>
          <IconsBlock />
        </Bar>
        <ImgWrapper>
          <Img src={posters[0].url} alt={posters[0].title} />
          <Overlay className="nested-component">
            <TagList tags={technologies} isHover={isHovered} />
            {/* animation  "btn-more"*/}
            <motion.div
              className="btn-more-container"
              variants={container}
              initial="hidden"
              animate={isHovered ? 'visible' : 'hidden'}
            >
              <motion.p className="btn-more" variants={item}>
                more...
              </motion.p>
            </motion.div>
          </Overlay>
        </ImgWrapper>
      </Link>
    </Item>
  );
};

export default ProjectItem;
