import React, { Component } from 'react';
import List from '../../components/List';
import Logout from '../../components/Logout';
import CreateRoom from '../../components/CreateRoom';
import { firebaseAuth, firebaseDatabase } from '../../utils/firebase';

class Rooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
    };

    this.userId = firebaseAuth.currentUser.uid;
    this.activeRooms = firebaseDatabase.ref(`users/${this.userId}/rooms`);
  }

  componentWillMount() {
    this.activeRooms.on('value', (snapshot) => {
      let rooms = [];

      Object.keys(snapshot.val()).forEach((key, index) => {
        rooms.push({
          id: key,
          name: snapshot.val()[key]
        });
      });

      this.setState({ rooms });
    })
  }

  componentWillUnmount() {
    this.activeRooms.off('value');
  }

  render() {
    let { rooms } = this.state;

    return (
      <div>
        {rooms.length > 0 ? (
          <List>
            {rooms.map((room) => {
              return (
                <li key={room.id}>{room.name}</li>
              );
            })}
          </List>
        ) : (
          <div>
            No rooms available
          </div>
        )}
        <div>
          <CreateRoom>Create Room</CreateRoom>
        </div>
        <div>
          <Logout>Logout</Logout>
        </div>
      </div>
    );
  }
}

export default Rooms;
