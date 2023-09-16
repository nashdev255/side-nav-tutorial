'use client'

import {
  UserCircleIcon,
  EnvelopeIcon,
  KeyIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navigation = [
  {
    name: 'プロフィール',
    icon: UserCircleIcon,
    href: '/settings/profile',
  },
  {
    name: 'メールアドレス',
    icon: EnvelopeIcon,
    href: '/settings/email',
  },
  {
    name: 'パスワード',
    icon: KeyIcon,
    href: '/settings/password',
  },
  {
    name: 'ログアウト',
    icon: ArrowLeftOnRectangleIcon,
    href: '/settings/logout',
  },
];

const Sidebar = ({children}: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className='mx-auto flex max-w-2xl'>
      <div className='mt-12 space-y-1 text-sm font-bold'>
        {navigation.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className={`
            ${item.href == pathname && 'bg-sky-100 text-sky-500'}
            flex rounded-full hover:bg-sky-100`}
            >
              <item.icon className='m-2 h-10 w-10' />
              <div className='flex w-0 items-center text-[0] md:w-32 md:text-sm'>
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
