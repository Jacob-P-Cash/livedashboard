import LineChart from '../components/LineChart';
import useSalesTotals from '../hooks/useSalesTotals';

export default function SalesChart({ start, end }: { start: string; end: string; }) {
    const totalSales = useSalesTotals(start, end);

    return (<div>
        <h2 className='text-xl'>Sales</h2>
        <LineChart
            data={totalSales}
            xKey="date"
            yKey="totals"
            xTickFormatter={(t) => new Date(t).toLocaleDateString()}
            yTickFormatter={(v) => v.toFixed(2)}
        />
    </div>)
}
