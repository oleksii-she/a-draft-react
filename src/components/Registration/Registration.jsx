import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { Label, Forma } from './registration.styled';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
  checked: yup.boolean().default(true).required(),
  commit: yup.string().min(6).max(125),
});

const initialValues = {
  login: '',
  password: '',
  checked: false,
  commit: '',
};

export const Registration = ({ contacts }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { login, password, checked, commit } = values;

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Forma autoComplete="off">
        <Label htmlFor="login">
          <span>login</span> <Field type="text" name="login" />
          <ErrorMessage name="login" />
        </Label>
        <Label htmlFor="password">
          <span>password</span> <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </Label>
        <Field name="commit" as="textarea" placeholder="commit" />
        <Field type="checkbox" name="checked" required />

        <button type="submit">Submit</button>
      </Forma>
    </Formik>
  );
};
