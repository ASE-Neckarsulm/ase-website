
import { Client } from '@neondatabase/serverless';

export const handler = async (event, context) => {
    const customUrl = process.env.DATABASE_URL;
    if (!customUrl) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Database configuration missing' }),
        };
    }

    const client = new Client(customUrl);

    try {
        await client.connect();
        const result = await client.query('SELECT * FROM jobs ORDER BY created_at DESC');
        await client.end();

        // Map snake_case to camelCase
        const jobs = result.rows.map(row => ({
            ...row,
            shortDescription: row.short_description,
            // Remove snake_case version to avoid redundancy if desired, or keep both. 
            // We'll keep clean for frontend.
            short_description: undefined
        }));

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(jobs),
        };
    } catch (error) {
        console.error('Database error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch jobs' }),
        };
    }
};
