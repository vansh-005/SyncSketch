import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './Room.scss';
import roomIcon from '../../assets/icons/room-icon.png';
import Canvas from '../../components/canvas/Canvas';
import { deleteRoom } from '../../reducers/roomSlice';
import socket from '../../utils/socket';

const Room = () => {
    const dispatch = useDispatch();
    const roomName = useParams().roomName;
    const currentUser = useSelector(state => state.auth.currentUser);
    const activeRooms = useSelector((state) => state.rooms.activeRooms);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const currentRoom = activeRooms.filter(room => room === roomName);

    useEffect(() => {
        if (currentRoom.length === 0) {
            navigate('/home');
        }
    }, [currentRoom, navigate])

    useEffect(() => {
        socket.emit('joinRoom', { roomName })
        socket.on('roomUsers', (members) => {
            setUsers(members)
        })
        socket.on('userJoined', ({ userId }) => {
            setUsers(prev => [...prev, userId])
        })
        socket.on('userLeft', ({ userId }) => {
            setUsers(prev => prev.filter(id => id !== userId))
        })
        return () => {
            socket.off('roomUsers')
            socket.off('userJoined')
            socket.off('userLeft')
        }
    }, [roomName])

    const handleRoomDelete = (roomName) => {
        dispatch(deleteRoom(roomName))
        navigate('/home');
    }

    return (
        <div className="room-container">
            <div className="room-left">
                <div className="room-heading">
                    <img className='room-icon' src={roomIcon} alt=''></img>
                    <div className='room-title'>{roomName}</div>
                </div>
                <div className="room-middle">
                    <div className="users-heading">Users</div>
                    <ul className="users-list">
                        {users.map(id => (
                            <li key={id}>{id}</li>
                        ))}
                    </ul>
                </div>
                <div className="room-bottom">
                    <button onClick={handleRoomDelete}>Close Room</button>
                </div>
            </div>
            <div className="room-body">
                <Canvas />
            </div>
        </div>
    )
}

export default Room;