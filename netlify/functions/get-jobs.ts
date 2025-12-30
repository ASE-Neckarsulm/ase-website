
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

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*', // Allow all for now, restrict in prod if needed
            },
            body: JSON.stringify(result.rows),
        };
    } catch (error) {
        console.error('Database error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch jobs' }),
        };
    }
};
