import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

export const RadarTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 14,
    marginBottom: 14,
    fontFamily: 'bebas-neue-pro, sans-serif',
    borderRadius: 5,
    padding: 4,
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
  },
  arrow: {
    display: 'none',
    '&::before': {
      backgroundColor: 'white',
    },
  },
}))(Tooltip);
