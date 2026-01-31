
import { Client } from '@neondatabase/serverless';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env vars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const verifyDb = async () => {
    const customUrl = process.env.DATABASE_URL;
    if (!customUrl) {
        console.error('❌ DATABASE_URL is missing in .env');
        process.exit(1);
    }

    const client = new Client(customUrl);

    try {
        console.log('Connecting to Neon Postgres...');
        await client.connect();

        const result = await client.query('SELECT count(*) FROM jobs');
        console.log(`✅ Connected successfully. Found ${result.rows[0].count} jobs in the database.`);

        if (parseInt(result.rows[0].count) > 0) {
            const firstJob = await client.query('SELECT * FROM jobs LIMIT 1');
            console.log('Sample Job:', firstJob.rows[0].title);
        }

    } catch (error) {
        console.error('❌ Error connecting to database:', error);
    } finally {
        await client.end();
    }
};

verifyDb();
