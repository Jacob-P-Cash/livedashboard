import { useState, useEffect } from 'react';

export interface SalesTotal {
    date: string;
    totals: number;
}

export default function useSalesTotals(start: string, end: string) {
    const [totalSales, setTotalSales] = useState<SalesTotal[]>([]);

    useEffect(() => {
        if (!start || !end) return;

        const fetchTotalSales = async () => {
            try {
                const startDateString = new Date(start).toISOString();
                const endDateString = new Date(end).toISOString();

                const response = await fetch(`/sales/totals/past/${startDateString}/${endDateString}`)
                const result = await response.json();
                setTotalSales(result)
            } catch (err) {
                console.error(err)
            }
        }

        fetchTotalSales()
    }, [start, end])

    return totalSales;
}
