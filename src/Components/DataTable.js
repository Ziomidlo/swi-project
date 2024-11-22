import React from 'react';
import { useTable } from 'react-table';

const DataTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Mecz" , accessor: "Mecze" },
      { Header: "Bramki Stracone", accessor: "Bramki stracone" },
      { Header: "Bramki Zdobyte", accessor: "Bramki zdobyte" },
      { Header: "Żółte Kartki", accessor: "Ilość żółtych kartek" },
      { Header: "Zmiany", accessor: "Ilość przeprowadzonych zmian" },
      { Header: "Miejsce", accessor: "Miejsce w tabeli " },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} style={{ border: "1px solid black" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{ border: "1px solid black", padding: "5px" }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  style={{ border: "1px solid black", padding: "5px" }}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
