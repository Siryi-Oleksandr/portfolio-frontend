import { ErrorMessage, Formik, FormikHelpers } from 'formik';
import React, { ChangeEvent, FC } from 'react';
import {
  Label,
  LabelTextArea,
  StyledAddProjectForm,
  StyledProdjecField,
  StyledLabel,
} from './AddProjectForm.styled';
import { SubmitBtn } from 'components/UserForm/UserForm.styled';
import Container from 'components/Container/Container';
import { ICreateUpdateProject } from 'redux/reduxTypes';
import { FormAddProjectUpdateSchema } from 'services/yupSchemas';
import { StyledErrorMessage } from 'components/RegisterForm/RegisterForm.styled';
import { useAppDispatch } from 'redux/reduxHooks';
import { createProject } from 'redux/project/operations';
import { toast } from 'react-hot-toast';

const AddProjectForm: FC = () => {
  const dispatch = useAppDispatch();

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
    console.log(values);
  };

  const handleImg1Upload = (
    event: ChangeEvent<HTMLInputElement>,
    formikProps: any
  ) => {
    const files = event.currentTarget.files;
    console.log(files);

    if (!files || files.length === 0) {
      toast.error('File not selected!');
      return;
    }

    const image1 = files[0];
    if (image1.type !== 'image/png' && image1.type !== 'image/jpeg') {
      toast.error(`Invalid file format! Please choose a PNG or JPEG image!`);
      return;
    }

    if (image1.size >= 1000000) {
      toast.error(
        `Selected file is too large! Please select a file under 1MB in size!`
      );
      return;
    }

    if (image1) {
      formikProps.setFieldValue('image1', image1);
    }
  };

  const handleImg2Upload = (
    event: ChangeEvent<HTMLInputElement>,
    formikProps: any
  ) => {
    const files = event.currentTarget.files;

    if (!files || files.length === 0) {
      toast.error('File not selected!');
      return;
    }
    const image2 = files[0];
    if (image2.type !== 'image/png' && image2.type !== 'image/jpeg') {
      toast.error(`Invalid file format! Please choose a PNG or JPEG image!`);
      return;
    }

    if (image2.size >= 1000000) {
      toast.error(
        `Selected file is too large! Please select a file under 1MB in size!`
      );
      return;
    }

    if (image2) {
      formikProps.setFieldValue('image2', image2);
    }
  };

  const handleImg3Upload = (
    event: ChangeEvent<HTMLInputElement>,
    formikProps: any
  ) => {
    const files = event.currentTarget.files;

    if (!files || files.length === 0) {
      toast.error('File not selected!');
      return;
    }
    const image3 = files[0];
    if (image3.type !== 'image/png' && image3.type !== 'image/jpeg') {
      toast.error(`Invalid file format! Please choose a PNG or JPEG image!`);
      return;
    }

    if (image3.size >= 1000000) {
      toast.error(
        `Selected file is too large! Please select a file under 1MB in size!`
      );
      return;
    }

    if (image3) {
      formikProps.setFieldValue('image3', image3);
    }
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
            <Label>
              <input
                type="file"
                multiple
                name="image3"
                onChange={event => handleImg1Upload(event, props)}
              />
              <input
                type="file"
                multiple
                name="image2"
                onChange={event => handleImg2Upload(event, props)}
              />
              <input
                type="file"
                multiple
                name="image3"
                onChange={event => handleImg3Upload(event, props)}
              />
              <StyledLabel>Project Images</StyledLabel>
            </Label>
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
