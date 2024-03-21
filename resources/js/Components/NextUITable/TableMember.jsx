import React from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from '@nextui-org/react'
import { PlusIcon } from './PlusIcon'
import { VerticalDotsIcon } from './VerticalDotsIcon'
import { SearchIcon } from './SearchIcon'
import { ChevronDownIcon } from './ChevronDownIcon'
import { statusOptions } from './data'
import { capitalize } from './utils'
import { getParameterFromUrl, urlModifier } from '@/helper'
import { router } from '@inertiajs/react'
import DebounceInput from './DebounceInput'
import MyInput from './MyInput'

const statusColorMap = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
}

const INITIAL_VISIBLE_COLUMNS = ['name', 'npk', 'unit', 'actions']

export default function TableMember({ collection }) {
  // console.log(collection)
  const columns = [
    { name: 'ID', uid: 'id', sortable: true },
    { name: 'NAME', uid: 'name', sortable: true },
    { name: 'NPK', uid: 'npk', sortable: true },
    { name: 'UNIT', uid: 'unit', sortable: true },
    { name: 'ACTIONS', uid: 'actions' },
  ]
  const users = collection?.data

  const [filterValue, setFilterValue] = React.useState('')
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]))
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS),
  )
  const [statusFilter, setStatusFilter] = React.useState('all')
  const [rowsPerPage, setRowsPerPage] = React.useState(collection?.meta.per_page)
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: 'name',
    direction: 'ascending',
  })

  const [search, setSearch] = React.useState(getParameterFromUrl('search') ?? '')
  const [timeoutId, setTimeoutId] = React.useState(null)

  const [first, setFirst] = React.useState('')

  const [page, setPage] = React.useState(collection?.meta.current_page)

  // const hasSearchFilter = Boolean(filterValue)

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid))
  }, [visibleColumns])

  // const filteredItems = React.useMemo(() => {
  //   let filteredUsers = [...users]

  //   if (hasSearchFilter) {
  //     filteredUsers = filteredUsers.filter((user) =>
  //       user.name.toLowerCase().includes(filterValue.toLowerCase()),
  //     )
  //   }
  //   if (
  //     statusFilter !== 'all' &&
  //     Array.from(statusFilter).length !== statusOptions.length
  //   ) {
  //     filteredUsers = filteredUsers.filter((user) =>
  //       Array.from(statusFilter).includes(user.status),
  //     )
  //   }

  //   return filteredUsers
  // }, [users, filterValue, statusFilter])

  const pages = collection?.meta.last_page

  const items = React.useMemo(() => {
    return collection?.data
  }, [page, rowsPerPage])

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column]
      const second = b[sortDescriptor.column]
      const cmp = first < second ? -1 : first > second ? 1 : 0

      return sortDescriptor.direction === 'descending' ? -cmp : cmp
    })
  }, [sortDescriptor, items])

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey]

    switch (columnKey) {
      case 'name':
        return <p>{user.name}</p>
      case 'role':
        return <p>{user.unit}</p>
      case 'status':
        return <p>{user.npk}</p>
      case 'actions':
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                  <VerticalDotsIcon className="text-gray-600 dark:text-white" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        )
      default:
        return cellValue
    }
  }, [])

  const onChangePage = React.useCallback((pageNumber) => {
    const changePageUrl = urlModifier(window.location.href, 'page', pageNumber)
    return router.get(changePageUrl, {}, { preserveScroll: true })
  }, [])

  const fetchResetPage = (parameter, query) => {
    const resetPage = urlModifier(window.location.href, 'page', 1)
    const fetchUrl = urlModifier(resetPage, parameter, query)
    return router.get(fetchUrl, {}, { preserveScroll: true })
  }

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value))
    setPage(1)
    return fetchResetPage('per_page', Number(e.target.value))
  }, [])

  const onSearchChange = (value) => {
    if (value) {
      const newSearchValue = value
      setSearch(newSearchValue)
      if (timeoutId) {
        // Clear any existing timeout before setting a new one
        clearTimeout(timeoutId)
      }
      const newTimeoutId = setTimeout(() => {
        setSearch(newSearchValue) // Update state with the latest value after the delay
        return fetchResetPage('search', newSearchValue)
      }, 500) // Adjust delay (in milliseconds) as needed
      setTimeoutId(newTimeoutId)
    } else {
      setSearch('')
      return fetchResetPage('search', '')
    }
  }

  const onClear = React.useCallback(() => {
    setSearch('')
    return fetchResetPage('search', '')
  }, [])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<SearchIcon />}
            size="sm"
            value={search}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
            autoFocus
            spellCheck={false}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button color="primary" endContent={<PlusIcon />} size="sm">
              Add New
            </Button>
          </div>
        </div>
      </div>
    )
  }, [
    search,
    filterValue,
    statusFilter,
    visibleColumns,
    onRowsPerPageChange,
    users.length,
    onSearchChange,
  ])

  const bottomContent = React.useMemo(() => {
    return (
      <div className="flex-between">
        {/* PAGINATION */}
        <div className="w-full py-2 px-2 flex-start gap-2">
          <Pagination
            isCompact
            showControls
            size="sm"
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={onChangePage}
          />
        </div>

        {/* TOTAL & ROWS PER PAGE */}
        <div className="w-full flex-end gap-8">
          <label className="flex-start gap-2 text-small">
            Rows per page:
            <select
              className="cursor-pointer bg-transparent outline-none text-small text-blue-500"
              onChange={onRowsPerPageChange}
            >
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </label>
          <span className="text-small">Total {collection?.meta.total} members</span>
        </div>
      </div>
    )
  }, [items.length, page, pages])

  return (
    <Table
      aria-label="Daftar Member"
      isCompact
      isStriped
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={
        {
          // wrapper: 'max-h-[382px]',
        }
      }
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === 'actions' ? 'center' : 'start'}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={'No users found'} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
