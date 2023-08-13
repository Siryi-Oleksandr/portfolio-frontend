import React, { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { motion } from 'framer-motion';
import 'framer.styles.css';
import { IProject } from 'types/projectTypes';
import projectImg from '../../img/project-img.jpg';

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
  const location = useLocation();
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const {
    _id: projectId,
    projectTitle,
    technicalStack,
    projectImages,
  } = project;
  return (
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={`/projectDetails/${projectId}`} state={{ from: location }}>
        <Bar>
          <Title>{projectTitle}</Title>
          <IconsBlock />
        </Bar>
        <ImgWrapper>
          <Img
            src={projectImages[0] ? projectImages[0].posterURL : projectImg}
            alt={`poster of ${projectTitle}`}
          />
          <Overlay className="nested-component">
            <TagList tags={technicalStack} isHover={isHovered} />
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
