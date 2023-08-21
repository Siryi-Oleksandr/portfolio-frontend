import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';
import 'framer.styles.css';
import { Link, useLocation } from 'react-router-dom';
import { EditProjectModal } from 'components/Cabinet/EditProjectModal/EditProjectModal';
import { FaEdit, FaRegTrashAlt, FaLink } from 'react-icons/fa';
import { DeleteModal } from 'components/Cabinet/DeleteModal/DeleteModal';
import { useDeleteModal } from 'hooks/useDeleteModal';

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
  title: string;
};

const HoverList: FC<Props> = ({ isHover, description, projectId, title }) => {
  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const { showDeleteModal, handleCloseDeleteModal, handleShowDeleteModal } =
    useDeleteModal();

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleShowModal = () => {
    setShowModal(true);
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
        <Link to={`/projectDetails/${projectId}`} state={{ from: location }}>
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

      <EditProjectModal
        onClose={handleCloseModal}
        projectId={projectId}
        showModal={showModal}
      />

      <DeleteModal
        onClose={handleCloseDeleteModal}
        id={projectId}
        title={title}
        content={'project'}
        showModal={showDeleteModal}
      />
    </motion.div>
  );
};

export default HoverList;
