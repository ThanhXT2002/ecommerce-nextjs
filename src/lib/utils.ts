import { clsx, type ClassValue } from 'clsx'
 import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int
}
// PROMPT: [ChatGTP] tạo hàm mũi tên toSlug trong ts để chuyển văn bản thành chữ thường, loại bỏ các ký tự không phải từ,
// không phải khoảng trắng, không phải dấu gạch ngang, thay thế khoảng trắng, cắt bỏ dấu gạch ngang ở đầu và cuối

export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')