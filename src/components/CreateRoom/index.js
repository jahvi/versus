import React from 'react';
import { paramCase } from 'change-case';
import Button from '../../components/Button';
import { firebaseAuth, firebaseDatabase } from '../../utils/firebase';

function CreateRoom({ children }) {
  const createRoom = () => {
    const roomName = prompt('Room name');

    if (roomName) {
      const userId = firebaseAuth.currentUser.uid;

      const roomId = firebaseDatabase
        .ref(`users/${userId}/rooms`)
        .push({
          name: roomName,
          param: paramCase(roomName)
        })
        .key;

      const newUser = {};
      newUser[userId] = 0;

      firebaseDatabase
        .ref(`rooms/${roomId}/users`)
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
