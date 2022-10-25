import React from 'react'
import Avatar from '../Avatar'
import { MenuOutlined } from '@ant-design/icons'

const Post = () => {
	return (
		<div className='shadow-lg rounded'>
			<div className='p-3'>
				<div className='flex justify-between items-center'>
					<div className='flex items-center'>
						<Avatar />
						<div className='ml-2'>
							<div className='text-gray-800 text-sm font-medium'>Tom Russo</div>
							<div className='text-xs'>5 mins</div>
						</div>
					</div>
					<MenuOutlined className='text-gray-600 text-lg' />
				</div>
				<div className='mt-4 mb-2'>Not having fun at all 🤩</div>
			</div>
			<img
				src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2VhJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
				alt=''
			/>
		</div>
	)
}

export default Post
