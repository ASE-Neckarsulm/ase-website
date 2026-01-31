
import { Client } from '@neondatabase/serverless';

export const handler = async (event, context) => {
    if (event.httpMethod !== 'PUT') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const customUrl = process.env.DATABASE_URL;
    const client = new Client(customUrl);

    try {
        const data = JSON.parse(event.body);
        const { id, title, type, location, department, image, shortDescription, description, responsibilities, requirements, benefits } = data;

        if (!id) {
            return { statusCode: 400, body: JSON.stringify({ error: 'Job ID is required' }) };
        }

        await client.connect();

        const query = `
            UPDATE jobs SET
                title = $2,
                type = $3,
                location = $4,
                department = $5,
                image = $6,
                short_description = $7,
                description = $8,
                responsibilities = $9,
                requirements = $10,
                benefits = $11,
                updated_at = NOW()
            WHERE id = $1
            RETURNING *
        `;

        const values = [
            id, title, type, location, department, image, shortDescription, description,
            JSON.stringify(responsibilities || []),
            JSON.stringify(requirements || []),
            JSON.stringify(benefits || [])
        ];

        const result = await client.query(query, values);
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
            body: JSON.stringify(result.rows[0]),
        };

    } catch (error) {
        console.error('Error updating job:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
