import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import React, { FC, useState } from 'react';
import {
  Label,
  FileLabel,
  LabelTextArea,
  StyledAddProjectForm,
  StyledProdjecField,
  StyledLabel,
  ProjectLabel,
  StyledErrorMessage,
  StyledErrorImageMessage,
  ImageWrap,
  ResetBtn,
  IconWrapper,
  AddImgIcon,
  AddedImgIcon,
  CheckMark,
  EditIcon,
  ResetIcon,
  ImagesWrap,
  Wrapper,
} from './UpdateProjectForm.styled';
import { SubmitBtn } from 'components/UserForm/UserForm.styled';
import Container from 'components/Container/Container';
import { ICreateUpdateProject } from 'redux/reduxTypes';
import { FormProjectUpdateSchema } from 'services/yupSchemas';
import placeholder from '../../images/placeholder-image.jpg';
import { handleFormikImageUpload, setImage } from 'services';
import { useProjects } from 'hooks';
import { updateProject } from 'redux/project/operations';
import { useAppDispatch } from 'redux/reduxHooks';

type UpdateProjectFormPorps = {
  onClose: () => void;
};

const UpdateProjectForm: FC<UpdateProjectFormPorps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [projectImg1, setProjectImg1] = useState<string>(placeholder);
  const [projectImg2, setProjectImg2] = useState<string>(placeholder);
  const [projectImg3, setProjectImg3] = useState<string>(placeholder);
  const [editMode, setEditMode] = useState(false);
  const [noImages, setNoImages] = useState(false);

  const { projectById } = useProjects();

  let stringStack = '';

  if (projectById.technicalStack !== undefined) {
    stringStack = projectById.technicalStack.join(', ');
  }

  const initialValues: ICreateUpdateProject = {
    projectTitle: projectById.projectTitle || '',
    projectSubTitle: projectById.projectSubTitle || '',
    projectLink: projectById.projectLink || '',
    codeLink: projectById.codeLink || '',
    image1: undefined,
    image2: undefined,
    image3: undefined,
    aboutProject: projectById.aboutProject || '',
    technicalStack: stringStack,
  };

  const id = projectById._id;

  const noImgSelected =
    projectImg1 === placeholder &&
    projectImg2 === placeholder &&
    projectImg3 === placeholder;

  const handleSubmit = (
    values: ICreateUpdateProject,
    actions: FormikHelpers<ICreateUpdateProject>
  ) => {
    if (editMode && noImgSelected) {
      setNoImages(true);
      return;
    }
    dispatch(updateProject({ id, ...values }));
    actions.resetForm();
    onClose();
  };

  const handleEditMode = () => {
    setEditMode(true);
  };

  const handleResetImages = () => {
    setProjectImg1('');
    setTimeout(() => setProjectImg1(placeholder), 0);
    setProjectImg2(placeholder);
    setProjectImg3(placeholder);
    setNoImages(false);
  };

  const image1 = setImage(
    projectImg1,
    placeholder,
    projectById.projectImages,
    0
  );

  const image2 = setImage(
    projectImg2,
    placeholder,
    projectById.projectImages,
    1
  );

  const image3 = setImage(
    projectImg3,
    placeholder,
    projectById.projectImages,
    2
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormProjectUpdateSchema}
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
            <Wrapper>
              <ImagesWrap>
                <ProjectLabel>Project Images*</ProjectLabel>
                <ResetBtn
                  editMode={editMode}
                  type="button"
                  disabled={editMode && noImgSelected}
                  onClick={!editMode ? handleEditMode : handleResetImages}
                >
                  {!editMode ? 'Edit images' : 'Reset images'}
                  {!editMode ? <EditIcon /> : <ResetIcon />}
                </ResetBtn>
                {projectImg1 !== '' && (
                  <FileLabel
                    editMode={editMode}
                    projectImg={projectImg1}
                    placeholder={placeholder}
                  >
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
                    {!editMode ? (
                      <IconWrapper />
                    ) : projectImg1 === placeholder ? (
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
                      <img
                        src={editMode ? projectImg1 : image1}
                        alt="project image1"
                      />
                    </ImageWrap>
                  </FileLabel>
                )}
                {((!editMode && image2 !== placeholder) ||
                  projectImg1 !== placeholder) && (
                  <FileLabel
                    editMode={editMode}
                    projectImg={projectImg2}
                    placeholder={placeholder}
                  >
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
                    {!editMode ? (
                      <IconWrapper />
                    ) : projectImg2 === placeholder ? (
                      <AddImgIcon />
                    ) : (
                      <IconWrapper>
                        <AddedImgIcon />
                        <CheckMark />
                      </IconWrapper>
                    )}
                    <ImageWrap>
                      <img
                        src={editMode ? projectImg2 : image2}
                        alt="project image2"
                      />
                    </ImageWrap>
                  </FileLabel>
                )}
                {((!editMode && image3 !== placeholder) ||
                  projectImg2 !== placeholder) && (
                  <FileLabel
                    editMode={editMode}
                    projectImg={projectImg3}
                    placeholder={placeholder}
                  >
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
                    {!editMode ? (
                      <IconWrapper />
                    ) : projectImg3 === placeholder ? (
                      <AddImgIcon />
                    ) : (
                      <IconWrapper>
                        <AddedImgIcon />
                        <CheckMark />
                      </IconWrapper>
                    )}
                    <ImageWrap>
                      <img
                        src={editMode ? projectImg3 : image3}
                        alt="project image3"
                      />
                    </ImageWrap>
                  </FileLabel>
                )}
              </ImagesWrap>
            </Wrapper>
            <SubmitBtn type="submit" style={{ gridColumn: '1 / 3' }}>
              Update project
            </SubmitBtn>
          </StyledAddProjectForm>
        </Container>
      )}
    </Formik>
  );
};

export default UpdateProjectForm;
