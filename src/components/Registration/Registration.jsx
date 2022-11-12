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

export const Registration = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    const { login, password, checked, commit } = values;
    console.log(login);
    setLogin({ login: values.login });

    resetForm();
  };
  // console.log(login);
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

// import React from 'react';
// import { useFormik } from 'formik';

// export const Registration = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     onSubmit: values => {
//       console.log(values, null, 2);
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />

//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />

//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };
