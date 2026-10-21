import { useState, useEffect } from 'react';

export interface OrderTotal {
    date: string;
    orders: number;
}

export default function useOrderTotals(start: string, end: string) {
    const [orderTotals, setOrderTotals] = useState<OrderTotal[]>([]);

    useEffect(() => {
        if (!start || !end) return;

        const fetchOrderTotals = async () => {
            try {
                const startDateString = new Date(start).toISOString();
                const endDateString = new Date(end).toISOString();

                const response = await fetch(`/sales/orders/past/${startDateString}/${endDateString}`)
                const result = await response.json();
                setOrderTotals(result)
            } catch (err) {
                console.error(err)
            }
        }

        fetchOrderTotals()
    }, [start, end])

    return orderTotals;
}
