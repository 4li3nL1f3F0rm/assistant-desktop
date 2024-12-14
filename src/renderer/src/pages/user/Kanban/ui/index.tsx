import { KanbanNav } from './KanbanNav';
import { StyledKanban, StyledKanbanAside, StyledKanbanContent } from './styled';

export const Kanban = () => {
	return (
		<StyledKanban>
			<StyledKanbanAside>
				<KanbanNav />
			</StyledKanbanAside>
			<StyledKanbanContent>Kanban</StyledKanbanContent>
		</StyledKanban>
	);
};
