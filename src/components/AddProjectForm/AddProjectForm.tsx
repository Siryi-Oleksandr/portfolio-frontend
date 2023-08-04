import { Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import {
  Label,
  LabelTextArea,
  StyledAddProjectForm,
  StyledProdjecField,
  StyledLabel,
} from './AddProjectForm.styled';
import { SubmitBtn } from 'components/UserForm/UserForm.styled';
import Container from 'components/Container/Container';

const AddProjectForm: FC = () => {
  const initialValues: any = {
    projectTitle: '',
    projectSubTitle: '',
    projectLink: '',
    codeLink: '',
    projectImages: '',
    aboutProject: '',
    technicalStack: '',
  };

  // const handleSubmit = () =>
  //   // values: IUpdateUser,
  //   // actions: FormikHelpers<IUpdateUser>
  //   {
  //     // actions.resetForm();
  //   };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={}
      onSubmit={(
        values: typeof initialValues,
        { setSubmitting }: FormikHelpers<typeof initialValues>
      ) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => (
        <Container>
          <StyledAddProjectForm>
            <Label>
              <StyledProdjecField type="text" name="projectTitle" />
              <StyledLabel>Project title</StyledLabel>
            </Label>
            <Label>
              <StyledProdjecField
                type="text"
                name="technicalStack"
                autoComplete="off"
                placeholder="HTML, CSS, JavaScript, React."
              />
              <StyledLabel>Technical Stack</StyledLabel>
            </Label>
            <LabelTextArea>
              <StyledProdjecField
                type="text"
                name="projectSubTitle"
                className="full-width"
                component="textarea"
                onChange={props.handleChange}
              />
              <StyledLabel>Project SubTitle</StyledLabel>
            </LabelTextArea>
            <Label>
              <StyledProdjecField type="text" name="projectLink" />
              <StyledLabel>Project Link</StyledLabel>
            </Label>
            <Label>
              <StyledProdjecField type="text" name="codeLink" />
              <StyledLabel>Code Link</StyledLabel>
            </Label>
            <LabelTextArea>
              <StyledProdjecField
                type="text"
                name="aboutProject"
                className="full-width"
                component="textarea"
                onChange={props.handleChange}
                style={{ height: '120px' }}
              />
              <StyledLabel>About Project</StyledLabel>
            </LabelTextArea>
            <Label>
              <input type="file" multiple name="projectImages" />
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
