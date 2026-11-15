interface TreasurerDutyAppointment {
    /** Day of the month when the treasurer is available. */
    dayOfMonth: number;

    /** Start time in 24-hour `HH:mm` format. */
    startTime: string;

    /** End time in 24-hour `HH:mm` format. */
    endTime: string;
}

interface TreasurerDutySchedule {
    /** Calendar year of the schedule. */
    year: number;

    /** Calendar month of the schedule, from 1 to 12. */
    month: number;

    /** Scheduled treasurer duty appointments. */
    appointments: readonly TreasurerDutyAppointment[];
}

export const treasurerDutySchedule = {
    year: 2026,
    month: 9,
    appointments: [
        { dayOfMonth: 2, startTime: '17:00', endTime: '18:00' },
        { dayOfMonth: 11, startTime: '17:00', endTime: '18:00' },
        { dayOfMonth: 16, startTime: '17:00', endTime: '18:00' },
        { dayOfMonth: 23, startTime: '17:00', endTime: '18:00' },
    ],
} as const satisfies TreasurerDutySchedule;
