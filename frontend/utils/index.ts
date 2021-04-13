import dayjs from 'dayjs';
import rTime from 'dayjs/plugin/relativeTime';
dayjs.extend(rTime);

export const relativeTime = (dateTime: string) => dayjs().to(dayjs(dateTime));
