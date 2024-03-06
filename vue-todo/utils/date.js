import { format } from 'date-fns';

export const customDateFormatter = (date, formatString) => {
	if (!date) return null;

	const dateFormat = formatString || 'yyyy-M-d';
	return format(new Date(date), dateFormat);
};
