
import { Client } from '@neondatabase/serverless';

export const handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const customUrl = process.env.DATABASE_URL;
    const client = new Client(customUrl);

    try {
        const data = JSON.parse(event.body);
        const { id, title, type, location, department, image, shortDescription, description, responsibilities, requirements, benefits } = data;

        await client.connect();

        const query = `
            INSERT INTO jobs (
                id, title, type, location, department, image, short_description, description, responsibilities, requirements, benefits, created_at, updated_at
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW(), NOW()
            )
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

        return {
            statusCode: 201,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(result.rows[0]),
        };

    } catch (error) {
        console.error('Error creating job:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
