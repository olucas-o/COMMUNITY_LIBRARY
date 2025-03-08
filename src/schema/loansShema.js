import { z } from 'zod';
export const loansSchema = z.object({
    bookId: z.number().positive(),
    dueDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'The date need to be in this format: YYYY-MM-DD'
    })
    })