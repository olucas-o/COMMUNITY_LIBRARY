import { z } from 'zod';
export const loansSchema = z.object({
    bookId: z.number().positive(),
    dateLoan: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'Data deve estar no formato YYYY-MM-DD'
    })
    })