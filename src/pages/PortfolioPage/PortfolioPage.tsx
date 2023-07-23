import React, {FC} from 'react'
import { ProjectList } from 'components';
import { Example } from 'components/ProjectItem/TestMoution';

const Portfolio: FC = () => {
  return (
    <>
      <Example/>
      <ProjectList />
    </>
  )
}

export default Portfolio;