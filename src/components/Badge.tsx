import { statusValues, type Status } from '../types';

const getStatusColor = (status: Status) => {
  let statusColors: {
    statusTextColor: string;
    statusBgColor: string;
    statusDotBgColor: string;
    statusTextColorDark?: string;
    statusBgColorDark?: string;
    statusDotBgColorDark?: string;
  } | null = null;
  switch (status.toLowerCase()) {
    case statusValues.PENDING.toLowerCase():
      statusColors = {
        statusTextColor: 'text-pending-status',
        statusBgColor: 'bg-pending-status/5',
        statusDotBgColor: 'bg-pending-status',
      };
      break;

    case statusValues.PAID.toLowerCase():
      statusColors = {
        statusTextColor: 'text-paid-status',
        statusBgColor: 'bg-paid-status/5',
        statusDotBgColor: 'bg-paid-status',
      };
      break;

    case statusValues.DRAFT.toLowerCase():
    default:
      statusColors = {
        statusTextColor: 'text-draft-status',
        statusBgColor: 'bg-draft-status/5',
        statusDotBgColor: 'bg-draft-status',
        statusTextColorDark: 'dark:text-secondary-text-dark',
        statusBgColorDark: 'dark:bg-accent-light/5',
        statusDotBgColorDark: 'dark:bg-accent-light',
      };
      break;
  }

  return statusColors;
};

type Props = {
  status: Status;
};

const Badge = ({ status }: Props) => {
  const {
    statusTextColor,
    statusBgColor,
    statusDotBgColor,
    statusBgColorDark = '',
    statusDotBgColorDark = '',
    statusTextColorDark = '',
  } = getStatusColor(status);
  return (
    <div
      className={`flex gap-2 justify-center items-center min-w-28 ${statusBgColor} ${statusBgColorDark} px-4.5 py-3 rounded-lg`}
    >
      <div
        className={`rounded-full w-2 h-2 ${statusDotBgColor} mb-0.5 ${statusDotBgColorDark}`}
      />
      <span
        className={`${statusTextColor} ${statusTextColorDark} text-base font-bold capitalize`}
      >
        {status}
      </span>
    </div>
  );
};

export default Badge;
