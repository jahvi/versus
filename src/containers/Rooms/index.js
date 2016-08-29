import React, { Component } from 'react';
import { Link } from 'react-router';
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
      // If user is part of active rooms loop through them
      if (snapshot.val() !== null) {
        let rooms = [];

        Object.keys(snapshot.val()).forEach((key, index) => {
          rooms.push({
            id: key,
            name: snapshot.val()[key].name,
            param: snapshot.val()[key].param
          });
        });

        this.setState({ rooms });
      } else {
        this.setState({ rooms: [] });
      }
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
              const roomUrl = `/rooms/${room.param}`;

              return (
                <li key={room.id}>
                  <Link to={roomUrl}>{room.name}</Link>
                </li>
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
