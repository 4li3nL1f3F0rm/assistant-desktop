import { StyledStatistic } from './styled';

type Props = { title: string };
export const Statistic = ({ title }: Props) => {
	return <StyledStatistic>{title}</StyledStatistic>;
};
