import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function convertPostDate(ts: string) {
    const date = new Date(ts)
    const day = String(date.getDate()).padStart(2, '0'); // Lấy ngày, đảm bảo có 2 chữ số
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Lấy tháng, đảm bảo có 2 chữ số (tháng trong JS bắt đầu từ 0)

    return `${day}/${month}`;
}