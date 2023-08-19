import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import React, { FC, useState } from 'react';
import {
  Label,
  FileLabel,
  LabelTextArea,
  StyledAddProjectForm,
  StyledProdjecField,
  StyledErrorMessage,
  StyledErrorImageMessage,
  StyledLabel,
  ImageWrap,
  ResetBtn,
  AddImgIcon,
  IconWrapper,
  AddedImgIcon,
  CheckMark,
  ImagesWrap,
} from './AddProjectForm.styled';
import { SubmitBtn } from 'components/UserForm/UserForm.styled';
import Container from 'components/Container/Container';
import { ICreateUpdateProject } from 'redux/reduxTypes';
import { FormAddProjectUpdateSchema } from 'services/yupSchemas';
// import { StyledErrorMessage } from 'components/RegisterForm/RegisterForm.styled';
import { useAppDispatch } from 'redux/reduxHooks';
import { createProject } from 'redux/project/operations';
import placeholder from '../../images/placeholder-image.jpg';
import { useNavigate } from 'react-router-dom';
import { handleFormikImageUpload } from 'services';

const AddProjectForm: FC = () => {
  const dispatch = useAppDispatch();
  const [projectImg1, setProjectImg1] = useState<string>(placeholder);
  const [projectImg2, setProjectImg2] = useState<string>(placeholder);
  const [projectImg3, setProjectImg3] = useState<string>(placeholder);
  const [noImages, setNoImages] = useState(false);
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

  const noImgSelected =
    projectImg1 === placeholder &&
    projectImg2 === placeholder &&
    projectImg3 === placeholder;

  const handleSubmit = (
    values: ICreateUpdateProject,
    actions: FormikHelpers<ICreateUpdateProject>
  ) => {
    if (noImgSelected) {
      setNoImages(true);
      return;
    }
    dispatch(createProject(values));
    actions.resetForm();
    navigate('/cabinet');
  };

  const handleResetImages = () => {
    setProjectImg1('');
    setTimeout(() => setProjectImg1(placeholder), 0);
    setProjectImg2(placeholder);
    setProjectImg3(placeholder);
    setNoImages(false);
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
              <StyledLabel>Project Images</StyledLabel>
              <ResetBtn
                type="button"
                disabled={noImgSelected}
                onClick={handleResetImages}
              >
                Reset images
              </ResetBtn>
              {projectImg1 !== '' && (
                <FileLabel projectImg={projectImg1} placeholder={placeholder}>
                  <input
                    type="file"
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
                  {projectImg1 === placeholder ? (
                    <AddImgIcon />
                  ) : (
                    <IconWrapper>
                      <AddedImgIcon />
                      <CheckMark />
                    </IconWrapper>
                  )}
                  <ErrorMessage
                    component={StyledErrorImageMessage}
                    name="image1"
                  />
                  {noImages && projectImg1 === placeholder && (
                    <StyledErrorImageMessage>
                      Image is required
                    </StyledErrorImageMessage>
                  )}

                  <ImageWrap>
                    <img src={projectImg1} alt="project image1" />
                  </ImageWrap>
                </FileLabel>
              )}
              {projectImg1 !== placeholder && (
                <FileLabel projectImg={projectImg2} placeholder={placeholder}>
                  <input
                    type="file"
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
                  {projectImg2 === placeholder ? (
                    <AddImgIcon />
                  ) : (
                    <IconWrapper>
                      <AddedImgIcon />
                      <CheckMark />
                    </IconWrapper>
                  )}
                  <ImageWrap>
                    <img src={projectImg2} alt="project image2" />
                  </ImageWrap>
                </FileLabel>
              )}
              {projectImg2 !== placeholder && (
                <FileLabel projectImg={projectImg3} placeholder={placeholder}>
                  <input
                    type="file"
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
                  {projectImg3 === placeholder ? (
                    <AddImgIcon />
                  ) : (
                    <IconWrapper>
                      <AddedImgIcon />
                      <CheckMark />
                    </IconWrapper>
                  )}
                  <ImageWrap>
                    <img src={projectImg3} alt="project image3" />
                  </ImageWrap>
                </FileLabel>
              )}
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

export default AddProjectForm;
