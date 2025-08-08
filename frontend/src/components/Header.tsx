import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const leftNavigation = [
  { name: 'Home', to: '/' },
  { name: 'Categories', to: '/categories' },
  { name: 'Products', to: '/products' },
];
const rightNavigation = [
  { name: 'Login', to: '/login' },
  { name: 'Register', to: '/register' },
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleSignOut = () => {
    logout();
    navigate('/login');
  };
  return (
    <Disclosure as="nav" className="bg-white border-b border-blue-600 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset md:hidden">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon aria-hidden="true" className="block w-6 h-6" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="block w-6 h-6" />
                  )}
                </DisclosureButton>
              </div>
              {/* Left: Logo + left nav */}
              <div className="flex flex-1 flex-row items-center justify-start">
                <div className="flex items-center justify-center md:justify-start">
                  <img
                    alt="E-Shop"
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 w-auto logo"
                  />
                  <span className="ml-2 text-2xl font-bold text-blue-700">E-Shop</span>
                </div>
                <div className="ml-8 flex flex-row space-x-4 items-center">
                  {leftNavigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      aria-current={location.pathname === item.to ? 'page' : undefined}
                      className={classNames(
                        location.pathname === item.to
                          ? 'bg-blue-600 !text-white border border-white'
                          : 'bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 hover:text-blue-800',
                        'rounded-md px-3 py-2 text-sm font-medium transition',
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Right: login/register nav + notification/profile */}
              <div className="flex flex-row items-center space-x-4">
                {!user && (
                  <div className="flex flex-row space-x-4 items-center">
                    {rightNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        aria-current={location.pathname === item.to ? 'page' : undefined}
                        className={classNames(
                          location.pathname === item.to
                            ? 'bg-blue-600 !text-white border border-white'
                            : 'bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 hover:text-blue-800',
                          'rounded-md px-3 py-2 text-sm font-medium transition',
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
                {user && (
                  <>
                    <button
                      type="button"
                      className="relative rounded-full !bg-white !border !border-blue-600 p-1 !text-blue-700 hover:!bg-blue-600 hover:!text-white hover:!border-white focus:!bg-blue-600 focus:!text-white focus:!border-white focus:outline-none transition"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon aria-hidden="true" className="size-6" />
                    </button>
                    <Menu as="div" className="relative ml-3">
                      <MenuButton className="relative flex rounded-full !bg-white !border !border-blue-600 !text-blue-700 text-sm focus:outline-none focus:!bg-blue-600 focus:!border-white focus:!text-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          alt=""
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          className="size-8 rounded-full"
                        />
                      </MenuButton>
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-transparent py-1 shadow-lg ring-1 ring-black/5 focus:outline-none p-0">
                        <MenuItem>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? 'bg-blue-600 !text-white border border-white'
                                  : 'text-blue-700 border border-blue-600 hover:bg-blue-50 hover:text-blue-800',
                                'block rounded-md px-3 py-2 text-sm font-medium transition',
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? 'bg-blue-600 !text-white border border-white'
                                  : 'text-blue-700 border border-blue-600 hover:bg-blue-50 hover:text-blue-800',
                                'block rounded-md px-3 py-2 text-sm font-medium transition',
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <a
                              href="#"
                              onClick={e => { e.preventDefault(); handleSignOut(); }}
                              className={classNames(
                                active
                                  ? 'bg-blue-600 !text-white border border-white'
                                  : 'text-blue-700 border border-blue-600 hover:bg-blue-50 hover:text-blue-800',
                                'block rounded-md px-3 py-2 text-sm font-medium transition',
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </>
                )}
              </div>
            </div>
          </div>
          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-white border-t border-blue-100">
              {[...leftNavigation, ...rightNavigation].map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.to}
                  aria-current={location.pathname === item.to ? 'page' : undefined}
                  className={classNames(
                    location.pathname === item.to
                      ? 'bg-blue-600 !text-white border border-white'
                      : 'bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 hover:text-blue-800',
                    'block rounded-md px-3 py-2 text-base font-medium transition',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;