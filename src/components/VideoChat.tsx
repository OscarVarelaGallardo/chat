// src/App.js
import  { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function VideoChat() {
    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerConnectionRef = useRef(null);

    useEffect(() => {
        const constraints = {
            video: true,
            audio: true,
        };

        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                localVideoRef.current.srcObject = stream;

                // Crear la conexión de pares
                peerConnectionRef.current = new RTCPeerConnection();

                // Añadir el stream local
                stream.getTracks().forEach((track) => {
                    peerConnectionRef.current.addTrack(track, stream);
                });

                peerConnectionRef.current.onicecandidate = (event) => {
                    if (event.candidate) {
                        socket.emit('candidate', event.candidate);
                    }
                };

                peerConnectionRef.current.ontrack = (event) => {
                    remoteVideoRef.current.srcObject = event.streams[0];
                };
            });

        socket.on('offer', (offer) => {
            peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer))
                .then(() => {
                    return peerConnectionRef.current.createAnswer();
                })
                .then((answer) => {
                    peerConnectionRef.current.setLocalDescription(answer);
                    socket.emit('answer', answer);
                });
        });

        socket.on('answer', (answer) => {
            peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(answer));
        });

        socket.on('candidate', (candidate) => {
            peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
        });
    }, []);

    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-2 pt-32'>
            <video ref={localVideoRef} autoPlay muted className="w-full" />
            <video ref={remoteVideoRef} autoPlay className="w-1/2" />
        </div>
    );
}

export default VideoChat;