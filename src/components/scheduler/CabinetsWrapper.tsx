import React from 'react';
import Box from '@mui/material/Box';
import { Border, CABINETS, Color } from 'constants/index';

type CabinetsWrapperProps = {
  isBreakpoint: boolean;
  isEmpty: boolean;
};

export const CabinetsWrapper = ({ isBreakpoint, isEmpty }: CabinetsWrapperProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        textAlign: 'center',
        height: 1,
        fontSize: isBreakpoint ? '70%' : '100%',
        '& :first-of-type': {
          borderTop: Border.cell,
        },
        '& :last-of-type': {
          borderTop: Border.cell,
        },
        '& :not(:first-of-type):not(:last-of-type)': {
          borderTop: Border.cell,
          borderLeft: Border.cell,
          borderRight: Border.cell,
        },
      }}
    >
      {CABINETS.map((cabinet: string): JSX.Element => {
        return (
          <Box
            key={cabinet}
            sx={{
              flexGrow: '1',
              backgroundColor: Color.white100,
              color: isEmpty ? Color.transparent : Color.black100,
            }}
          >
            {cabinet}
          </Box>
        );
      })}
    </Box>
  );
};
