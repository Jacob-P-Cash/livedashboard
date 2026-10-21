import { Bar, BarChart as RechartsBarChart, XAxis, YAxis, Tooltip } from 'recharts'

interface BarChartProps<T> {
    data: T[];
    xKey: string;
    yKey: string;
    xTickFormatter?: (value: string) => string;
    yTickFormatter?: (value: number) => string;
}

export default function BarChart<T>({ data, xKey, yKey, xTickFormatter, yTickFormatter }: BarChartProps<T>) {
    return (<div className=''>
            <RechartsBarChart style={{width:'100%',aspectRatio:'1.618', height:"300px"}} responsive data={data}>
                <Bar dataKey={yKey} fill='#38bdf8'/>
                <XAxis dataKey={xKey} tickFormatter={xTickFormatter}/>
                <YAxis allowDecimals={false} tickFormatter={yTickFormatter}/>
                <Tooltip/>
            </RechartsBarChart>
    </div>)
}
