import React, { FC, useState } from 'react';
import CabinetProjectItem from './CabinetProjectItem/CabinetProjectItem';
import {
  List,
  AddProjectBtnWrap,
  AddProjectBtn,
  AddText,
  OpenSubscriptionBtn,
} from './CabinetProjectList.styled';
// import projectsDb from 'bd/projects.json';
import Container from 'components/Container/Container';
import { MdOutlineAddCircle } from 'react-icons/md';
import { IProject } from 'types/projectTypes';
import { IUser } from 'types/userTypes';
import { SubscriptionModal } from '../SubscriptionModal/SubscriptionModal';

export interface MyIProject {
  id: string;
  title: string;
  description: string;
  linkToCode: string;
  linkToWebSite: string;
  technologies: Array<string>;
  posters: Array<Poster>;
}

type Props = {
  user: Partial<IUser>;
  projects: IProject[];
};

type Poster = {
  id: string;
  title: string;
  url: string;
};

const CabinetProjectList: FC<Props> = ({ user, projects }) => {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const handleShowSubscriptionModal = () => {
    setShowSubscriptionModal(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseModal = () => {
    setShowSubscriptionModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <Container>
      <List>
        <AddProjectBtnWrap key="addBtnId">
          {user.subscription === 'start' && projects.length > 4 ? (
            <OpenSubscriptionBtn onClick={handleShowSubscriptionModal}>
              <MdOutlineAddCircle size="50px" />
              <AddText>
                to add more than 5 projects, it is necessary to buy Pro
                subscription
              </AddText>
            </OpenSubscriptionBtn>
          ) : (
            <AddProjectBtn to="/addProject">
              <MdOutlineAddCircle size="50px" />
              Add project
            </AddProjectBtn>
          )}
          {/* <AddProjectBtn to="/addProject">
            <MdOutlineAddCircle size="50px" />
            Add project
          </AddProjectBtn> */}
        </AddProjectBtnWrap>
        {projects
          .map(project => (
            <CabinetProjectItem key={project._id} project={project} />
          ))
          .reverse()}
      </List>
      {showSubscriptionModal && (
        <SubscriptionModal onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default CabinetProjectList;
