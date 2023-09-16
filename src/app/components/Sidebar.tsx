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

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className='max-w-xl grid grid-cols-12 mx-auto'>
      <div className='text-sm space-y-1 font-bold md:col-span-4'>
        {navigation.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className={`${ item.href == pathname && 'bg-sky-100 text-sky-500'} hover:bg-sky-100 px-3 py-2 rounded-full md:flex`}>
              <div className='flex'>
                <item.icon className='w-10 h-10' />
                <div className='pl-3 flex items-center'>{item.name}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar;
