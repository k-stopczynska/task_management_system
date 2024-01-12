import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
		<header className='flex items-center justify-between min-h-[70px]'>
			<h1 className='text-4xl font-bold leading-6'>Task management system</h1>
			<Link className='bg-primary-100 py-[0.5rem] px-[3.5rem] rounded-lg text-light-100 font-bold tracking-[0.25rem] no-underline' href='/newTask'>
				+ Add New Task
			</Link>
		</header>
  );
}

export default Header