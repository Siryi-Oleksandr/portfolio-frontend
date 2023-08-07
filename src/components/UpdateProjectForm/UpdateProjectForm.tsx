import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import React, { FC, useState } from 'react';
import {
  Label,
  LabelTextArea,
  StyledAddProjectForm,
  StyledProdjecField,
  StyledLabel,
  ImageWrap,
  AddImgIcon,
  ImagesWrap,
} from './UpdateProjectForm.styled';
import { SubmitBtn } from 'components/UserForm/UserForm.styled';
import Container from 'components/Container/Container';
import { ICreateUpdateProject } from 'redux/reduxTypes';
import { FormAddProjectUpdateSchema } from 'services/yupSchemas';
import { StyledErrorMessage } from 'components/RegisterForm/RegisterForm.styled';
import { useAppDispatch } from 'redux/reduxHooks';
import { createProject } from 'redux/project/operations';
import placeholder from '../../images/placeholder-image.jpg';
import { useNavigate } from 'react-router-dom';
import { handleFormikImageUpload } from 'services';
type UpdateProjectFormPorps = {
  onClose: () => void;
};

const UpdateProjectForm: FC<UpdateProjectFormPorps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [projectImg1, setProjectImg1] = useState<string>(placeholder);
  const [projectImg2, setProjectImg2] = useState<string>(placeholder);
  const [projectImg3, setProjectImg3] = useState<string>(placeholder);
  const navigate = useNavigate();

  const initialValues: ICreateUpdateProject = {
    projectTitle: '',
    projectSubTitle: '',
    projectLink: '',
    codeLink: '',
    image1: undefined,
    image2: undefined,
    image3: undefined,
    aboutProject: '',
    technicalStack: '',
  };

  const handleSubmit = (
    values: ICreateUpdateProject,
    actions: FormikHelpers<ICreateUpdateProject>
  ) => {
    actions.resetForm();
    dispatch(createProject(values));
    navigate('/cabinet');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormAddProjectUpdateSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <Container>
          <StyledAddProjectForm>
            <Label>
              <StyledProdjecField
                type="text"
                name="projectTitle"
                autoComplete="off"
              />
              <StyledLabel>Project Title</StyledLabel>
              <ErrorMessage
                component={StyledErrorMessage}
                name="projectTitle"
              />
            </Label>
            <Label>
              <StyledProdjecField
                type="text"
                name="technicalStack"
                autoComplete="off"
                placeholder="TypeScript, React, Redux"
              />
              <StyledLabel>Technical Stack</StyledLabel>
              <ErrorMessage
                component={StyledErrorMessage}
                name="technicalStack"
              />
            </Label>
            <LabelTextArea>
              <StyledProdjecField
                type="text"
                name="projectSubTitle"
                className="full-width"
                component="textarea"
                autoComplete="off"
                onChange={props.handleChange}
              />
              <StyledLabel>Project SubTitle</StyledLabel>
              <ErrorMessage
                component={StyledErrorMessage}
                name="projectSubTitle"
              />
            </LabelTextArea>
            <Label>
              <StyledProdjecField
                type="text"
                name="projectLink"
                autoComplete="off"
                placeholder="Set link to project live page"
              />
              <StyledLabel>Project Link</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="projectLink" />
            </Label>
            <Label>
              <StyledProdjecField
                type="text"
                name="codeLink"
                autoComplete="off"
              />
              <StyledLabel>Code Link</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="codeLink" />
            </Label>
            <LabelTextArea>
              <StyledProdjecField
                type="text"
                name="aboutProject"
                className="full-width"
                component="textarea"
                autoComplete="off"
                onChange={props.handleChange}
                style={{ height: '120px' }}
              />
              <StyledLabel>About Project</StyledLabel>
              <ErrorMessage
                component={StyledErrorMessage}
                name="aboutProject"
              />
            </LabelTextArea>
            <ImagesWrap>
              <Label>
                <input
                  type="file"
                  multiple
                  name="image1"
                  onChange={event =>
                    handleFormikImageUpload(
                      event,
                      props,
                      'image1',
                      setProjectImg1
                    )
                  }
                  style={{ display: 'none' }}
                />
                <AddImgIcon />
                <StyledLabel>Project Images</StyledLabel>
                <ImageWrap>
                  <img src={projectImg1} alt="project image1" />
                </ImageWrap>
              </Label>
              <Label>
                <input
                  type="file"
                  multiple
                  name="image2"
                  onChange={event =>
                    handleFormikImageUpload(
                      event,
                      props,
                      'image2',
                      setProjectImg2
                    )
                  }
                  style={{ display: 'none' }}
                />
                <AddImgIcon />
                <ImageWrap>
                  <img src={projectImg2} alt="project image2" />
                </ImageWrap>
              </Label>
              <Label>
                <input
                  type="file"
                  multiple
                  name="image3"
                  onChange={event =>
                    handleFormikImageUpload(
                      event,
                      props,
                      'image3',
                      setProjectImg3
                    )
                  }
                  style={{ display: 'none' }}
                />
                <AddImgIcon />
                <ImageWrap>
                  <img src={projectImg3} alt="project image3" />
                </ImageWrap>
              </Label>
            </ImagesWrap>
            <SubmitBtn type="submit" style={{ gridColumn: '1 / 3' }}>
              Add new project
            </SubmitBtn>
          </StyledAddProjectForm>
        </Container>
      )}
    </Formik>
  );
};

export default UpdateProjectForm;
