// Views
import SignInView from '@/views/Authentication/Login';
import React, { FC } from 'react';

interface ISignInViewProps {}

const LoginPage: FC<ISignInViewProps> = () => {
  return <SignInView />;
};

export default LoginPage;
