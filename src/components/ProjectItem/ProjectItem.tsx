import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  projectId: string;
};

const ProjectItem: FC<Props> = ({projectId = '1'}) => {

  return (
    <div>
      <Link to={`/projectDetails/${projectId}`}>
        
      </Link>
    </div>
  )
}

export default ProjectItem