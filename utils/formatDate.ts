import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export default function(timestamp: number, format = 'YYYY-MM-DD') {
    return dayjs.unix(timestamp).format(format)
}

export function formatDateObj(DateObj: Date, format = 'YYYY-MM-DD') {
    return dayjs(DateObj).format(format)
}

export function formatBuildTime() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss')
}