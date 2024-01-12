import React from 'react';
import NavItem from '@/components/NavItem';

const Nav = () => {
    const navItems = [
		{ title: 'Home', icon: '/home.png', alt: 'home page', url:'/' },
		{ title: 'About', icon: '/about.png', alt: 'about', url:'/about'},
		{ title: 'Authors', icon: '/author.png', alt:'authors', url:'/authors' },
	];
  return (
		<nav className='flex flex-col items-center justify-center border-primary-200 border-2 rounded-lg'>
			<ul className='flex flex-col items-center justify-center list-none gap-4'>
				{navItems.map((item) => (
					<NavItem
						title={item.title}
						icon={item.icon}
						alt={item.alt}
						url={item.url}
					/>
				))}
			</ul>
		</nav>
  );
}

export default Nav