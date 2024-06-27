import React, { useEffect, useState } from 'react';
import test from '../assets/test.svg';
import { ListItem, Typography, Box, Grid, TextField, Button, Slider } from '@mui/material';

export function App() {
  const [gradientCount, setGradientCount] = useState(5); // Default value set to 5
  const [startColor, setStartColor] = useState('#000000'); // Default black
  const [endColor, setEndColor] = useState('#ffffff'); // Default white
  const [smoothness, setSmoothness] = useState(50); // Example property for gradient smoothness

  const onCreate = () => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'create-gradient',
          gradientCount: gradientCount,
          startColor: startColor,
          endColor: endColor,
          smoothness: smoothness,
        },
      },
      '*'
    );
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  useEffect(() => {
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-gradient') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <Box sx={{ padding: 2, bgcolor: '#e3f2fd' }} textAlign="center" my={0}>
      <Grid container>
        <Grid item xs={6}>
          <ListItem>
            <Typography variant="h4" gutterBottom>
              Figma Plugin
            </Typography>
          </ListItem>
        </Grid>
        <Grid item xs={6}>
          <ListItem>
            <img src={test} alt="Logo" />
          </ListItem>
        </Grid>
      </Grid>

      {/* Input */}
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <ListItem>
            <TextField
              type="number"
              label="Gradient Count"
              value={gradientCount}
              onChange={(e) => setGradientCount(parseInt(e.target.value, 10))}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </ListItem>
        </Grid>
        <Grid item xs={6}>
          <ListItem>
            <TextField
              type="color"
              label="Start Color"
              value={startColor}
              onChange={(e) => setStartColor(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </ListItem>
        </Grid>
        <Grid item xs={6}>
            <Typography gutterBottom>Smoothness</Typography>
          <ListItem>
            <Slider
              value={smoothness}
              onChange={(_, newValue) => setSmoothness(newValue)}
              aria-labelledby="smoothness-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={0}
              max={100}
            />
          </ListItem>
        </Grid>
        <Grid item xs={6}>
          <ListItem>
            <TextField
              type="color"
              label="End Color"
              value={endColor}
              onChange={(e) => setEndColor(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </ListItem>
        </Grid>
        
      </Grid>

      <Button variant="contained" color="primary" onClick={onCreate} style={{ marginRight: 10 }}>
        Create
      </Button>
      <Button variant="outlined" onClick={onCancel}>
        Cancel
      </Button>
    </Box>
  );
}
