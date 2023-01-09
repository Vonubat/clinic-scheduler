import React from 'react';
import Box from '@mui/material/Box';
import { TableView, TIMELINE } from 'constants/index';
import { useAppSelector } from 'hooks';
import { DateTime } from 'luxon';
import { schedulerSelector } from 'store';
import { WorkData } from 'types';
import { getUniqueKeyFromData } from 'utils';

import { RecordWork } from './RecordWork';
import { TableColumnCell } from './TableColumnCell';

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps): JSX.Element => {
  const { view } = useAppSelector(schedulerSelector);
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: TableView[`$${view}`],
      }}
    >
      {children}
    </Box>
  );
};

type TableColumnProps = {
  day: DateTime;
};

export const TableColumn = ({ day }: TableColumnProps): JSX.Element => {
  const { workData, tableHeight, type } = useAppSelector(schedulerSelector);

  return (
    <Container>
      {TIMELINE.map((time: string): JSX.Element => {
        return <TableColumnCell key={time} day={day} time={time} />;
      })}
      {type === 'work' &&
        workData.map((record: WorkData): JSX.Element | null => {
          const { year: recordYear, month: recordMonth, day: recordDay } = record;

          if (day.year === recordYear && day.month === recordMonth && day.day === recordDay) {
            const uniqueKey: string = getUniqueKeyFromData(record);
            return <RecordWork key={uniqueKey} heightOfContainer={tableHeight} data={record} />;
          }

          return null;
        })}
    </Container>
  );
};
