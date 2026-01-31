
import { Client } from '@neondatabase/serverless';

export const handler = async (event, context) => {
    if (event.httpMethod !== 'DELETE') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { id } = event.queryStringParameters;
    if (!id) {
        return { statusCode: 400, body: JSON.stringify({ error: 'Job ID is required' }) };
    }

    const customUrl = process.env.DATABASE_URL;
    const client = new Client(customUrl);

    try {
        await client.connect();
        const result = await client.query('DELETE FROM jobs WHERE id = $1 RETURNING id', [id]);
        await client.end();

        if (result.rowCount === 0) {
            return { statusCode: 404, body: JSON.stringify({ error: 'Job not found' }) };
        }

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ message: 'Job deleted successfully', id: result.rows[0].id }),
        };

    } catch (error) {
        console.error('Error deleting job:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
