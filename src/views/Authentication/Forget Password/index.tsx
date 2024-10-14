import React, { useState } from 'react';
import { Form, FormikProvider, FormikValues, useFormik } from 'formik';
import { forgetPassword } from '@/types/Interfaces/forget-password';
import { forgetPassSchema } from '@/schema/forgetPassSchema';
import ForgetPassEmail from '@/components/forgetPassComponent/forgetPassEmail';
import ChangePass from '@/components/forgetPassComponent/changePassword';

const ForgetPassView = () => {
  const [step, setStep] = useState<number>(0);
  const initialValues: forgetPassword = {
    email: '',
    oldPassword: '',
    newPassword: '',
    reEnterPassword: '',
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: forgetPassSchema,
    onSubmit: (values: FormikValues) => {
      console.log(values);
    },
  });

  console.log(step);
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <FormikProvider value={formik}>
        <Form
          className='w-1/4'
          onSubmit={formik.handleSubmit}
        >
          <div className='rounded-lg shadow-2xl flex flex-col gap-4 p-4 w-full z-10 bg-white border-2'>
            {step === 0 && <ForgetPassEmail />}
            {step === 1 && <ChangePass />}
            {step === 0 ? (
              <button
                onClick={() => {
                  if (step < 1) {
                    setStep(step + 1);
                  }
                }}
                type='button'
                className='text-center rounded-lg p-2 bg-blue-800 text-white'
              >
                Reset password
              </button>
            ) : (
              <div className='flex flex-col gap-2'>
                <button
                  type='submit'
                  className='text-center rounded-lg p-2 bg-blue-800 text-white'
                >
                  Change password
                </button>
                <button className='text-center rounded-lg p-2 border border-slate-200 text-black'>Cancel</button>
              </div>
            )}
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default ForgetPassView;
