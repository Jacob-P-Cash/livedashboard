import {Line,LineChart,XAxis,YAxis} from 'recharts'

interface totalSalesProps {
    date:string;
    totals:number;
}

interface LiveChartProps {
    totalSales: totalSalesProps[];
}

export default function LiveChart({ totalSales }: LiveChartProps) {

    return (<div>
            <LineChart style={{width:'100%',aspectRatio:'1.618', height:"300px"}} responsive data={totalSales}>
                <Line dataKey="totals"/>
                <XAxis dataKey="date" tickFormatter={(t) => new Date(t).toLocaleTimeString()}/>
                <YAxis tickFormatter={(v) => v.toFixed(2)}/>
            </LineChart>


    </div>)

}
