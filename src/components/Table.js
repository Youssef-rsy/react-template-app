import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGlobalFilter, usePagination, useSortBy, useTable, useAsyncDebounce } from 'react-table';

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
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'PhoneNumber',
        accessor: 'phoneNumber',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'company',
        accessor: 'company',
      },
      {
        Header: 'Operation',
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
  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    allColumns
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 200)

    return (
      <div className="d-flex flex-row justify-content-between pt-3">
        <div class="row col-md-6 pb-1">
          <label for="inputEmail3" class="col-sm-2 col-form-label pr-0">Search</label>
          <div class="col-sm-6 pl-0">
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
          <button class="btn  h-75 d-none" type="button" >
            <FontAwesomeIcon
              icon="trash-alt"
              className="text-info"
            />
          </button>
          <div class="dropdown  dropleft align-self-center">
            <a
              className=""
              href="#"
              data-toggle="dropdown"
              id="dropdownColumnHide"
              aria-haspopup="true"
              aria-expanded="false"
            ><FontAwesomeIcon
                icon="eye-slash"
                className="text-info"
              />
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownColumnHide">
              {allColumns.map(column => {
                if (column.id !== 'id') {
                  return (
                    <div className="dropdown-item" key={column.id} >
                      <label>
                        <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
                        {column.id}
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
  const tableInstance = useTable({ columns, data, initialState: { pageIndex: 0, pageSize: 5 }, },
    useGlobalFilter, useSortBy, usePagination);
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
    state: { pageIndex, pageSize, globalFilter },
    // 
    preGlobalFilteredRows,
    setGlobalFilter,
  } = tableInstance;

  return (
    <div className="table-responsive-lg w-100">
      <GlobalFilter allColumns={allColumns} preGlobalFilteredRows={preGlobalFilteredRows} globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <table className="table table-striped  table-bordered px-2 " {...getTableProps()}>
        <caption>
          <nav class="nav nav-pills nav-fill felx-column justify-content-between">
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
            <div class="input-group-prepend col-md-3 d-flex justify-content-center  ">
              <span className="  text-sm-center p-2 ">{t('component.table.pagination.page')} </span>
              <strong class="text-sm-center h-100 p-2 ">
                {pageIndex + 1} {t('component.table.pagination.of')}  {pageOptions.length}
              </strong>
            </div>
            <div className="col-md-5 d-flex flex-row  justify-content-between px-0">
              <div className="col-md-7">
                <div class="input-group flex-row">
                  <div class="input-group-prepend">
                    <span class="input-group-text text-sm-center" >{t('component.table.pagination.goToPage')} </span>
                  </div>
                  <input
                    type="number"
                    class="form-control col-md-6"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(page)
                    }}
                  />
                </div>
              </div>
              <div className=" col-md-4 d-inline-flex ">
                <button class="btn btn-outline-secondary" type="button" onClick={() => gotoPage(0)}><FontAwesomeIcon icon="angle-double-left" /></button>
                <button class="btn btn-outline-secondary" type="button" onClick={() => previousPage()} disabled={!canPreviousPage}><FontAwesomeIcon icon="angle-left" /></button>
                <button class="btn btn-outline-secondary" type="button" onClick={() => gotoPage(pageCount - 1)}><FontAwesomeIcon icon="angle-right" /></button>
                <button class="btn btn-outline-secondary" type="button" onClick={() => nextPage()} disabled={!canNextPage} ><FontAwesomeIcon icon="angle-double-right" /></button>
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
