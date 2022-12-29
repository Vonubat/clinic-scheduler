import React from 'react';
import Box from '@mui/material/Box';
import { Border, CABINETS, Color } from 'constants/index';
import { DateTime } from 'luxon';

type CabinetsWrapperProps = {
  isBreakpoint: boolean;
  isEmpty: boolean;
  time?: string;
  day?: DateTime;
};

export const CabinetsWrapper = ({
  isBreakpoint,
  isEmpty,
  time,
  day,
}: CabinetsWrapperProps): JSX.Element => {
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
        const clickHandler = () => {
          console.log(`CabinetIs ${cabinet}, day is ${day?.day}, time is ${time}`);
        };

        return (
          <Box
            key={cabinet}
            onClick={clickHandler}
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
