import React from 'react'
import { MenuOutlined } from '@ant-design/icons'

const menu = [
	{
		img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		title: 'Dennis Han',
	},
	{
		img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		title: 'Eric Jones',
	},
	{
		img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		title: 'Cynthia Lopez',
	},
	{
		img: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		title: 'Anna Becklund',
	},
	{
		img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		title: 'Aiden Brown',
	},
	{
		img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		title: 'Betty Chen',
	},
	{
		img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		title: 'Dan Brown',
	},
	{
		img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
		title: 'Henri Cook',
	},
]

const Contacts = () => {
	return (
		<div className='shadow-lg p-4 w-1/4'>
			<div className='flex items-center justify-between mb-2'>
				<h2 className='text-2xl font-bold'>Contacts</h2>
				<MenuOutlined className='text-gray-600 text-lg' />
			</div>
			<ul className='list-none'>
				{menu.map((item, idx) => (
					<li key={'menu ' + idx}>
						<a href='/' className='flex items-center py-2'>
							<div className='h-9 w-9 mr-2 rounded-full overflow-hidden'>
								<img src={item.img} alt='' />
							</div>
							<span>{item.title}</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Contacts
