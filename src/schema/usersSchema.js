import { z } from 'zod';
const userSchema = z.object({
    username: z.string().min(3,'Username is requiered'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6,'Can be least them 6 characters long'),
    avatar: z.string().url('Invalid URL').optional()
});

const userIdSchema = z.object({
    userId: z.number().int().positive('User ID must be positive and integer'),
});

export{userSchema,
    userIdSchema
}