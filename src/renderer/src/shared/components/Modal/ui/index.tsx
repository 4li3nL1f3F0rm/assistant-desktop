import { Modal as AntModal, Button } from 'antd';
import { useState } from 'react';

type Props = {
	children?: React.ReactNode;
	title: string;
};
export const Modal = ({ children, title }: Props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{/* <Button type="primary" onClick={showModal}>
				Open Modal
			</Button> */}
			<AntModal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				{children}
			</AntModal>
		</>
	);
};
