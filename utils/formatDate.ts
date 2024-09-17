import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export default function(timestamp, format = 'YYYY-MM-DD') {
    return dayjs.unix(unixtime).format(format)
}

export function formatDateObj(DateObj, format = 'YYYY-MM-DD') {
    return dayjs(DateObj).format(format)
