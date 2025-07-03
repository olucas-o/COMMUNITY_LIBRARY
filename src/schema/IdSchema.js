import { z } from 'zod';

export const IdSchema = z.object({
    Id: z.string(),
});
