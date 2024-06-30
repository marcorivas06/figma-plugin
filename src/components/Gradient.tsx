import React, { useState } from 'react';
import { ListItem, Typography, Grid, TextField, Button, Slider } from '@mui/material';

export function Gradient() {
  const [gradientCount, setGradientCount] = useState(5);
  const [startColor, setStartColor] = useState('#000000');
  const [endColor, setEndColor] = useState('#ffffff');
  const [smoothness, setSmoothness] = useState(50);
  console.log('Hello World')

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

  return (
    <>
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
              }}
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
              }}
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
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
              }}
              type="color"
              label="End Color"
              value={endColor}
              onChange={(e) => setEndColor(e.target.value)}
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
              }}
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
    </>
  );
}
