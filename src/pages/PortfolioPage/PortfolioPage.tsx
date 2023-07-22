import React, {FC} from 'react'
import { ProjectList} from 'components';
import { Container } from './PortfolioPage.styled';

const Portfolio: FC = () => {
  return (
    <Container>
      <ProjectList/>
    </Container>
  )
}

export default Portfolio;