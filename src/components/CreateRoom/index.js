import React from 'react';
import { paramCase } from 'change-case';
import Button from '../../components/Button';
import { firebaseAuth, firebaseDatabase } from '../../utils/firebase';

function CreateRoom({ children }) {
  /**
   * Setup new room data
   *
   * @param  {string} roomName Room name
   * @param  {string} userId   First user ID
   */
  const setupRoom = (roomName, userId) => {
    const newUser = {};
    newUser[userId] = 0;

    const roomData = {
      name: roomName,
      param: paramCase(roomName)
    };

    // Create new room
    const roomId = firebaseDatabase.ref('rooms')
      .push({...roomData, users: [newUser]})
      .key;

    // Assign user to new room
    firebaseDatabase.ref(`users/${userId}/rooms/${roomId}`)
      .set(roomData);
  };

  /**
   * Create room
   *
   * @return {void}
   */
  const createRoom = () => {
    const roomName = prompt('Room name');

    if (roomName) {
      const userId = firebaseAuth.currentUser.uid;
      setupRoom(roomName, userId);
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
