import TableExample from '@/Components/NextUITable/TableExample'
import CardOne from './NextUI/CardOne'
import { Navbar } from './NextUI/Navbar'
import TableAsyncPaginationExample from '@/Components/NextUITable/TableAsyncPaginationExample'
import Dropdown from '@/Components/Dropdown'

export default function Dashboard() {
  return (
    <div className="h-screen">
      <Navbar />
      <Dropdown>
        <Dropdown.Trigger>
          <span className="inline-flex rounded-md">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
            >
              xxxxxx
              <svg
                className="ms-2 -me-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
          <Dropdown.Link href={route('logout')} method="post" as="button">
            Log Out
          </Dropdown.Link>
        </Dropdown.Content>
      </Dropdown>

      <main className="py-4 px-6 flex justify-between gap-2">
        <div className="w-1/5">
          <CardOne />
        </div>

        <div className="w-full space-y-3">
          <span className="text-xl text-default-600">Daftar Pelanggan</span>
          <TableExample />
          <TableAsyncPaginationExample />
        </div>
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <div className="flex items-center gap-1 text-current">
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </div>
      </footer>
    </div>
  )
}
