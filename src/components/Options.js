import React, { useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { useContext } from 'react';
import { SocketContext } from './SocketContext';

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } = useContext(SocketContext);
    const idToCall = useState('');
    return (
        <div>
            Options
            {children}
        </div>
    );
};

export default Options;