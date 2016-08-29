import React from 'react';
import Firebase from 'firebase';
import Button from '../../components/Button';
import { firebaseAuth } from '../../utils/firebase';

function FacebookLogin({ children }) {
  const loginWithFacebook = () => {
    const provider = new Firebase.auth.FacebookAuthProvider();
    firebaseAuth.signInWithPopup(provider);
  };

  return (
    <div>
      <Button onClick={loginWithFacebook}>{children}</Button>
    </div>
  );
}

FacebookLogin.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default FacebookLogin;
