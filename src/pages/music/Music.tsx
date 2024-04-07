import React from 'react';

const Music: React.FC = () => {
	return (
		<div className='' style={{ paddingTop: '20px' }}>
			<div
				className=''
				style={{
					marginLeft: '20px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '200px',
				}}
			>
				<h1 style={{ color: '#fff', textAlign: 'center' }}>
					The page is under development
				</h1>
				<p style={{ color: '#fff', textAlign: 'center' }}>
					Sorry, this page is currently under development. It will be available soon.
				</p>
			</div>
		</div>
	);
};

export default Music;
