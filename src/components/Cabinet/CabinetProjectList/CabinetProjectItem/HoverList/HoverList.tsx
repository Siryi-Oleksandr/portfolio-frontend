import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import 'framer.styles.css';
import { Link } from 'react-router-dom';
import { EditProjectModal } from 'components/Cabinet/EditProjectModal/EditProjectModal';
import { FaEdit, FaRegTrashAlt, FaLink } from 'react-icons/fa';
import { DeleteModal } from 'components/Cabinet/DeleteModal/DeleteModal';

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
  projectId: string;
};

const HoverList: FC<Props> = ({ isHover, description, projectId }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleShowModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
    document.body.style.overflow = 'hidden';
  };

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
      <motion.button className="cabinet-btn" onClick={handleShowModal}>
        <FaEdit size="30px" />
      </motion.button>
      <motion.button
        className="cabinet-btn"
        // onClick={() => handleDelete(projectId)}
        onClick={handleShowDeleteModal}
      >
        <FaRegTrashAlt size="30px" />
      </motion.button>
      {showModal && (
        <EditProjectModal onClose={handleCloseModal} projectId={projectId} />
      )}
      {showDeleteModal && (
        <DeleteModal onClose={handleCloseDeleteModal} id={projectId} />
      )}
    </motion.div>
  );
};

export default HoverList;
