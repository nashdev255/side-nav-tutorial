import {
  HomeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid'

const navigation = [
  {
    name: 'Home',
    icon: HomeIcon,
    link: '/home'
  },
  {
    name: 'Chat',
    icon: ChatBubbleLeftRightIcon,
    link: '/chat'
  }
]

const nav = navigation[0];

const Sidebar = () => {
  return (
    <div className='p-2 bg-slate-700 text-white flex'>
      <nav.icon className='h-8 w-8' />
      <h3 className='mx-6 flex items-center'>{nav.name}</h3>
    </div>
  )
}

export default Sidebar;
