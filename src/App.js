import React from 'react';
import './App.css';
import { Typography, Box } from '@material-ui/core';
import ScreenLayout from './Layout/ScreenLayout';

function App() {
  return (
    <Box
      className=".App"
      style={{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        textAlign: 'center',
      }}
    >
      <Typography
        style={{
          color: 'red',
        }}
      >
        {'Welcome to JS'}
      </Typography>
      <ScreenLayout />
    </Box>
  );
}

export default App;
