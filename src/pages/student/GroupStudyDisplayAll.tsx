import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

type Status = 'Participant';

const statuses: Record<Status, string> = {
  Participant: 'text-green-700 bg-green-50 ring-green-600/20',
};

const clients = [
  {
    id: 1,
    name: 'SPL Group ',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'September 10, 2024', time: '10:00 AM', description: 'We want to study for CT', link: 'https://meet.example.com', status: 'Participant' as Status, participants: '5/10' },
  },
  {
    id: 2,
    name: 'Data Structures Study',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'September 11, 2024', time: '2:00 PM', description: 'Deep dive into algorithms', link: 'https://zoom.example.com', status: 'Participant' as Status, participants: '3/10' },
  },
  {
    id: 3,
    name: 'Operating Systems Group',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'September 12, 2024', time: '4:00 PM', description: 'Discuss OS concepts', link: 'https://meet.example.com', status: 'Participant' as Status, participants: '8/10' },
  },
  {
    id: 4,
    name: 'Database Systems Study',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'September 13, 2024', time: '6:00 PM', description: 'Query optimization techniques', link: 'https://zoom.example.com', status: 'Participant' as Status, participants: '6/10' },
  },
  {
    id: 5,
    name: 'Network Security Group',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'September 14, 2024', time: '1:00 PM', description: 'Security protocols discussion', link: 'https://meet.example.com', status: 'Participant' as Status, participants: '7/10' },
  },
  {
    id: 6,
    name: 'Machine Learning Study',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'September 15, 2024', time: '3:00 PM', description: 'Study ML algorithms', link: 'https://zoom.example.com', status: 'Participant' as Status, participants: '9/10' },
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function GroupStudyDisplayAll() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div>
      <button
        className="mb-8 px-4 py-2 bg-blue-200 text-white rounded-md hover:bg-blue-300"
        onClick={() => navigate('/GroupStudyCreate')} // Ensure correct path
      >
        Create
      </button>
      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        {clients.map((client) => (
          <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-white p-6">
              <img
                src={client.imageUrl}
                alt={client.name}
                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
              />
              <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
              <Menu as="div" className="relative ml-auto">
                <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Open options</span>
                  <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          View<span className="sr-only">, {client.name}</span>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Edit<span className="sr-only">, {client.name}</span>
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Date</dt>
                <dd className="text-gray-700">
                  <time dateTime={client.lastInvoice.date}>{client.lastInvoice.date}</time>
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Time</dt>
                <dd className="text-gray-700">
                  {client.lastInvoice.time}
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Description</dt>
                <dd className="text-gray-700">{client.lastInvoice.description}</dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Link</dt>
                <dd className="text-gray-700">
                  <a href={client.lastInvoice.link} className="text-blue-500 hover:underline">
                    {client.lastInvoice.link}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between items-center gap-x-4 py-3">
                <dt className="text-gray-500">Participant</dt>
                <dd className="flex items-center gap-x-2">
                  <div className={classNames(statuses[client.lastInvoice.status], 'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset')}>
                    {client.lastInvoice.participants}
                  </div>
                  <button className="ml-auto px-3 py-1 bg-green-200 text-white rounded-md hover:bg-green-300">
                    Join
                  </button>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
