import React from 'react';
import { Select } from '@chakra-ui/react';
import TablePagination from 'react-data-table-component';

const CustomTablePagination = ({ ...props }) => {
  return (
    <TablePagination
      {...props}
      renderPageJump={({ onChange, onBlur, value }) => (
        <Select
          size="sm"
          w="auto"
          value={value}
          onBlur={onBlur}
          onChange={(e) => onChange(e.target.value)}
          bg="gray.800"
          colorScheme="whiteAlpha"
        >
          {props.pageJumpOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      )}
      renderTotalRows={({ rowStart, rowEnd, rowCount, totalPages }) => (
        <div style={{ color: '#FFF' }}>
          {`${rowStart}-${rowEnd} of ${rowCount}`}
        </div>
      )}
    />
  );
};

export default CustomTablePagination;