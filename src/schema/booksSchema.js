import { z } from 'zod';
export const booksSchema = z.object({
    bookname: z.string().min(3,'Username is requiered'),
    author: z.string().min(3,'Author is requiered')
});
