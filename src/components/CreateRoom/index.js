import React from 'react';
import Button from '../../components/Button';
import { firebaseAuth, firebaseDatabase } from '../../utils/firebase';

function CreateRoom({ children }) {
  const createRoom = () => {
    const roomName = prompt('Room name');
    if (roomName) {
      const userId = firebaseAuth.currentUser.uid;

      firebaseDatabase
        .ref(`users/${userId}/rooms`)
        .push(roomName);

      const newUser = {};
      newUser[userId] = 0;

      firebaseDatabase
        .ref(`rooms/${roomName}/users`)
        .set(newUser);
    }
  };

  return (
    <div>
      <Button onClick={createRoom}>{children}</Button>
    </div>
  );
}

CreateRoom.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default CreateRoom;
