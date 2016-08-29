import React from 'react';
import Button from '../../components/Button';
import { firebaseAuth } from '../../utils/firebase';

function Logout({ children }) {
  const logout = () => {
    firebaseAuth.signOut();
  };

  return (
    <div>
      <Button onClick={logout}>{children}</Button>
    </div>
  );
}

Logout.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default Logout;
