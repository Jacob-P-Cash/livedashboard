import BarChart from '../components/BarChart';
import useOrderTotals from '../hooks/useOrderTotals';

export default function OrdersChart({ start, end }: { start: string; end: string; }) {
    const orderTotals = useOrderTotals(start, end);

    return (<div>
        <h2 className='text-xl'>Orders</h2>
        <BarChart
            data={orderTotals}
            xKey="date"
            yKey="orders"
            xTickFormatter={(t) => new Date(t).toLocaleDateString()}
        />
    </div>)
}
