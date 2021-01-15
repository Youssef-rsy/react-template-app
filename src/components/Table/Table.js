import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalFilter, usePagination, useSortBy, useTable, useAsyncDebounce, useExpanded, useRowSelect } from 'react-table';
import { useExportData } from "react-table-plugins";
import Papa from "papaparse";
import XLSX from "xlsx";
import JsPDF from "jspdf";
import swal from "sweetalert";
import "jspdf-autotable";

const Table = (props) => {
  const { t, users, getUser } = props;
  const data = React.useMemo(() => users, []);
  const columns = React.useMemo(
    () => [
      {
        Header: `${t('users.users.search.table.name')}`,
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: `${t('users.users.search.table.email')}`,
        accessor: 'email',
      },
      {
        Header: `${t('users.users.search.table.phoneNumber')}`,
        accessor: 'phoneNumber',
      },
      {
        Header: `${t('users.users.search.table.address')}`,
        accessor: 'address',
      },
      {
        Header: `${t('users.users.search.table.company')}`,
        accessor: 'company',
      },
      {
        Header: `${t('users.users.search.table.operation')}`,
        accessor: 'id',
        Cell: row => (
          <span className="d-inline-flex">
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#deleteUserModal"
              onClick={() => getUser(row.value)}
            >
              <FontAwesomeIcon
                icon="user-minus"
                className="text-danger nav-icon d-flex align-self-begin mx-1"
              />
            </button>
            <button
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#updateUserModal"
              onClick={() => getUser(row.value)}
            >
              <FontAwesomeIcon
                icon="user-edit"
                className="text-info nav-icon d-flex align-self-begin mx-1"
              />
            </button>
          </span>
        )
      },
    ],
    []
  );

  const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef

      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])

      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
  );
  function getExportFileBlob({ columns, data, fileType, fileName }) {
    if (fileType === "csv") {
      // CSV example
      const headerNames = columns.map((col) => col.exportValue);
      const csvString = Papa.unparse({ fields: headerNames, data });
      return new Blob([csvString], { type: "text/csv" });
    } else if (fileType === "xlsx") {
      // XLSX example

      const header = columns.map((c) => c.exportValue);
      const compatibleData = data.map((row) => {
        const obj = {};
        header.forEach((col, index) => {
          obj[col] = row[index];
        });
        return obj;
      });

      let wb = XLSX.utils.book_new();
      let ws1 = XLSX.utils.json_to_sheet(compatibleData, {
        header,
      });
      XLSX.utils.book_append_sheet(wb, ws1, "React Table Data");
      XLSX.writeFile(wb, `${fileName}.xlsx`);

      // Returning false as downloading of file is already taken care of
      return false;
    }
    //PDF example
    if (fileType === "pdf") {
      const headerNames = columns.map((column) => column.exportValue);
      const doc = new JsPDF();
      doc.autoTable({
        head: [headerNames],
        body: data,
        margin: { top: 20 },
        styles: {
          minCellHeight: 9,
          halign: "left",
          valign: "center",
          fontSize: 11,
        },
      });
      doc.save(`${fileName}.pdf`);

      return false;
    }

    // Other formats goes here
    return false;
  }
  const BulkDelete = (selectedFlatRows, parent_action) => {
    let selected_id = selectedFlatRows.map(data => {
      return data.values._id
    })
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        console.log(selected_id);
        swal("Data processed succesfuly", {
          icon: "success",
        });
      }
    });
  }
  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    allColumns,
    exportData
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)

    return (
      <div className="d-flex flex-row justify-content-between pt-3">
        <div className="row col-md-6 pb-1">
          <div className="col-sm-6 pl-0">
            <input
              className="form-control "
              value={value || ""}
              onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
              }}
              placeholder='Search in all column of the table'
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-row-reverse ">
          {(Object.keys(selectedRowIds).length != 0) ?
            <a className="btn  h-75" type="button"
              onClick={() => {
                BulkDelete(selectedFlatRows);
              }}
            > <FontAwesomeIcon
                icon="trash-alt"
                className="text-danger"
              />
              <b className="mx-1">Delete{Object.keys(selectedRowIds).length} row </b>
            </a> : ''}
          <a className="btn  h-75 " type="button"
            onClick={() => {
              exportData("csv", true);
            }}
          >
            <FontAwesomeIcon icon="file-csv" className="text-info" />
          </a>

          <a className="btn  h-75 " type="button"
            onClick={() => {
              exportData("xlsx", true);
            }}
          >
            <FontAwesomeIcon icon="file-excel" className="text-info" />
          </a>
          <a className="btn  h-75 " type="button"
            onClick={() => {
              exportData("pdf", true);
            }}
          >
            <FontAwesomeIcon icon="file-pdf" className="text-info" />
          </a>



          <div className="dropdown  dropleft align-self-center">
            <a
              className=""
              href="#"
              data-toggle="dropdown"
              id="dropdownColumnHide"
              aria-haspopup="true"
              aria-expanded="false"
              className="btn  h-75"
            ><FontAwesomeIcon
                icon="eye-slash"
                className="text-info"
              />
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownColumnHide">
              {allColumns.map(column => {
                if (column.id !== 'id' && column.id !== 'selection') {
                  return (
                    <div className="dropdown-item" key={column.id} >
                      <label>
                        <input type="checkbox" {...column.getToggleHiddenProps()} />
                        {column.Header}
                      </label>
                    </div>
                  )
                }
              })}
            </div>
          </div>

        </div >
      </div >
    )
  }
  const tableInstance = useTable({ columns, data, getExportFileBlob, initialState: { pageIndex: 0, pageSize: 5 }, },
    useGlobalFilter, useSortBy, useExpanded, usePagination, useExportData, useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  );
  const {
    // global 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    allColumns,
    // pagination
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds, globalFilter },
    // 
    preGlobalFilteredRows,
    setGlobalFilter,
    //export
    exportData,
  } = tableInstance;

  return (
    <div className="table-responsive-lg w-100 overflow-auto">

      <GlobalFilter exportData={exportData} allColumns={allColumns} preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <table className="table table-striped  table-bordered px-2 " {...getTableProps()}>
        <caption>
          <nav className="nav nav-pills nav-fill felx-column justify-content-between">
            <select className="custom-select col-md-3"
              defaultValue={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {t('component.table.pagination.show')} {pageSize}
                </option>
              ))}
            </select>
            <div className="input-group-prepend col-md-3 d-flex justify-content-center  ">
              <span className="  text-sm-center p-2 ">{t('component.table.pagination.page')} </span>
              <strong className="text-sm-center h-100 p-2 ">
                {pageIndex + 1} {t('component.table.pagination.of')}  {pageOptions.length}
              </strong>
            </div>
            <div className="col-md-5 d-flex flex-row  justify-content-between px-0">
              <div className="col-md-7">
                <div className="input-group flex-row">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-sm-center" >{t('component.table.pagination.goToPage')} </span>
                  </div>
                  <input
                    type="number"
                    className="form-control col-md-6"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(page)
                    }}
                  />
                </div>
              </div>
              <div className=" col-md-4 d-inline-flex ">
                <button className="btn btn-outline-secondary" type="button" onClick={() => gotoPage(0)}><FontAwesomeIcon icon="angle-double-left" /></button>
                <button className="btn btn-outline-secondary" type="button" onClick={() => previousPage()} disabled={!canPreviousPage}><FontAwesomeIcon icon="angle-left" /></button>
                <button className="btn btn-outline-secondary" type="button" onClick={() => gotoPage(pageCount - 1)}><FontAwesomeIcon icon="angle-right" /></button>
                <button className="btn btn-outline-secondary" type="button" onClick={() => nextPage()} disabled={!canNextPage} ><FontAwesomeIcon icon="angle-double-right" /></button>
              </div>
            </div>
          </nav >
        </caption>
        <thead>
          <tr></tr>
          {headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
                  <th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())} >
                    <div className="d-flex flex-row w-100">
                      <span className=''>{column.render('Header')}</span>
                      <span className="d-flex align-self-center ">
                        {column.isSorted ? column.isSortedDesc ? <FontAwesomeIcon
                          className=" mx-1 "
                          icon="sort-down"
                        /> : <FontAwesomeIcon
                            icon="sort-up"
                            className="mx-1"
                          /> : <FontAwesomeIcon
                            icon="sort"
                            className="mx-1"
                          />}
                      </span>
                    </div>
                  </th>
                ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {// Loop over the table rows
            page.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {// Render the cell contents
                            cell.render('Cell')}
                        </td>
                      )
                    })}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  );
};

const TablePagination = () => (<></>);

export default Table;
