import { createAuthClient } from '@neondatabase/neon-js/auth';

// Initialize the Neon Auth client
export const authClient = createAuthClient(import.meta.env.VITE_NEON_AUTH_URL);
