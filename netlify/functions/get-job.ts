
import { Client } from '@neondatabase/serverless';

export const handler = async (event, context) => {
    const { id } = event.queryStringParameters;

    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Job ID is required' }),
        };
    }

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
        // Using parameterized query for safety
        const result = await client.query('SELECT * FROM jobs WHERE id = $1', [id]);
        await client.end();

        if (result.rows.length === 0) {
            return {
                statusCode: 404,
                body: JSON.stringify({ error: 'Job not found' }),
            };
        }

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(result.rows[0]),
        };
    } catch (error) {
        console.error('Database error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch job' }),
        };
    }
};
