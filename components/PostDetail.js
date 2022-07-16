import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }) => {
	const getContentFragment = (index, text, obj, type) => {
		let modifiedText = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <b key={index}>{text}</b>;
			}

			if (obj.italic) {
				modifiedText = <em key={index}>{text}</em>;
			}

			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch (type) {
			case 'heading-three':
				return (
					<h3 key={index} className='text-xl font-semibold mb-4'>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h3>
				);
			case 'paragraph':
				return (
					<p key={index} className='mb-8'>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</p>
				);
			case 'heading-four':
				return (
					<h4 key={index} className='text-md font-semibold mb-4'>
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h4>
				);
			case 'image':
				return (
					<img
						key={index}
						alt={obj.title}
						height={obj.height}
						width={obj.width}
						src={obj.src}
					/>
				);
			default:
				return modifiedText;
		}
	};
	return (
		<div className='bg-white shadow-lg rounded-lg lg:p-8  mb-8'>
			<div className='relative overflow-hidden pb-4 mb-4'>
				<img
					className='object-top  w-full  shadow-lg rounded-t-lg'
					src={`${post.featuredImage.url}`}
					alt={post.title}
				/>
			</div>
			<div className='px-4 lg:px-0'>
				<div className='flex  justify-between  text-center items-center  gap-4'>
					<div className='flex items-center justify-center mb-4 lg:mb-8'>
						<img
							className='h-10 w-10 object-cover shadow-lg rounded-full'
							src={`${post.author.photo.url}`}
							alt={post.author.name}
						/>
						<h3 className='text-gray-700 ml-4 text-lg'>{post.author.name}</h3>
					</div>
					<div className='font-medium text-gray-700  mb-4 lg:mb-8 '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 inline mr-2 text-pink-500'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
							/>
						</svg>
						<span className='align-middle'>
							{moment(post.createdAt).format('MMM DD, YYYY')}
						</span>
					</div>
				</div>
			</div>
			<div className='px-4 lg:px-0 pb-4'>
				<h1 className='text-3xl font-semibold mb-8'>{post.title}</h1>
				{post.content.raw.children.map((typeObj, index) => {
					const children = typeObj.children.map((item, itemindex) =>
						getContentFragment(itemindex, item.text, item)
					);

					return getContentFragment(index, children, typeObj, typeObj.type);
				})}
			</div>
		</div>
	);
};

export default PostDetail;
