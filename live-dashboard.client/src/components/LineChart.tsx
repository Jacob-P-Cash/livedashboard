import { Line, LineChart as RechartsLineChart, XAxis, YAxis, Tooltip } from 'recharts'

interface LineChartProps<T> {
    data: T[];
    xKey: string;
    yKey: string;
    xTickFormatter?: (value: string) => string;
    yTickFormatter?: (value: number) => string;
}

export default function LineChart<T>({ data, xKey, yKey, xTickFormatter, yTickFormatter }: LineChartProps<T>) {
    return (<div className=''>
            <RechartsLineChart style={{width:'100%',aspectRatio:'1.618', height:"300px"}} responsive data={data}>
                <Line dataKey={yKey}/>
                <XAxis dataKey={xKey} tickFormatter={xTickFormatter}/>
                <YAxis tickFormatter={yTickFormatter}/>
                <Tooltip/>
            </RechartsLineChart>
    </div>)
}
