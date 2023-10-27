import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    border: '1px solid #C9C9C9',
    borderRadius: "0px 20px 20px 20px",
    padding: 10,
    background: "#FAFAFA",
    boxShadow: "0px 8px 24px 0px rgba(0, 0, 0, 0.18)",
    marginTop: 38,
  },
  text: {
    flex: 1,
  },
};

const ExpandableTextBox = ({ text, expandedText }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box style={styles.root}>
      <Typography style={styles.text} variant="body1">
        {expanded ? expandedText : text}
      </Typography>
      <IconButton onClick={() => setExpanded(!expanded)}>
        {expanded ? <RemoveIcon /> : <AddIcon />}
      </IconButton>
    </Box>
  );
};

export default ExpandableTextBox;

