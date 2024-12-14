import { CaretDownOutlined, CaretUpFilled, DashOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

import {
	StyledKanbanNav,
	StyledKanbanNavCountTask,
	StyledKanbanNavCreateSpaceBtn,
	StyledKanbanNavHiddenIcon,
	StyledKanbanNavItem,
	StyledKanbanNavItemInner,
	StyledKanbanNavItemInnerIconWrapper,
	StyledKanbanNavItemInnerSpaceNameWrapper,
	StyledKanbanNavList,
	StyledKanbanNavSubItem,
	StyledKanbanNavSubList,
	StyledKanbanNavTitle,
} from '../../styled';
import { useKanbanNav } from './hooks/useKanbanNav';
import type { Space } from './model/types';

const Space = ({ space }: { space: Space }) => {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<StyledKanbanNavItem key={space.id}>
			<StyledKanbanNavItemInner onClick={() => setIsOpen(!isOpen)}>
				<StyledKanbanNavItemInnerSpaceNameWrapper>
					{isOpen ? <CaretUpFilled /> : <CaretDownOutlined />}
					{space.name}
				</StyledKanbanNavItemInnerSpaceNameWrapper>
				<StyledKanbanNavItemInnerIconWrapper>
					<DashOutlined />
					<PlusOutlined />
				</StyledKanbanNavItemInnerIconWrapper>
			</StyledKanbanNavItemInner>
			{space.lists.length > 0 && (
				<StyledKanbanNavSubList $isOpen={isOpen}>
					{space.lists.map((list) => {
						return (
							<StyledKanbanNavSubItem key={list.id}>
								<StyledKanbanNavItemInnerSpaceNameWrapper>
									{list.name}
								</StyledKanbanNavItemInnerSpaceNameWrapper>
								<StyledKanbanNavItemInnerIconWrapper>
									<StyledKanbanNavCountTask>10</StyledKanbanNavCountTask>
									<StyledKanbanNavHiddenIcon>
										<DashOutlined />
									</StyledKanbanNavHiddenIcon>
								</StyledKanbanNavItemInnerIconWrapper>
							</StyledKanbanNavSubItem>
						);
					})}
				</StyledKanbanNavSubList>
			)}
		</StyledKanbanNavItem>
	);
};

export const KanbanNav = () => {
	const { spacesData } = useKanbanNav();
	return (
		<StyledKanbanNav>
			<StyledKanbanNavTitle>Spaces</StyledKanbanNavTitle>
			<StyledKanbanNavList>
				{spacesData?.map((space) => {
					return <Space key={space.id} space={space} />;
				})}
			</StyledKanbanNavList>
			<StyledKanbanNavCreateSpaceBtn>
				<PlusOutlined />
				Create Space
			</StyledKanbanNavCreateSpaceBtn>
		</StyledKanbanNav>
	);
};
