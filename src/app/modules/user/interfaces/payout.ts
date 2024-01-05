export interface PAYOUT {
    id: number;
    userId: number;
    amount: number;
    createdAt: Date;
    startData: Date;
    endDate: Date;
    totalMatches: number;
    nextPayoutDate: Date;
}