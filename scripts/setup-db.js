
import { Client } from '@neondatabase/serverless';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env vars
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const createTable = async () => {
    const customUrl = process.env.DATABASE_URL;
    if (!customUrl) {
        console.error('DATABASE_URL is missing in .env');
        process.exit(1);
    }

    const client = new Client(customUrl);

    try {
        await client.connect();
        console.log('Connected to Neon Postgres.');

        // Create jobs table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS jobs (
                id TEXT PRIMARY KEY,
                title TEXT NOT NULL,
                type TEXT NOT NULL,
                location TEXT NOT NULL,
                department TEXT NOT NULL,
                image TEXT,
                short_description TEXT,
                description TEXT,
                responsibilities JSONB DEFAULT '[]',
                requirements JSONB DEFAULT '[]',
                benefits JSONB DEFAULT '[]',
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `;

        await client.query(createTableQuery);
        console.log('✅ Table "jobs" created or verified.');

    } catch (error) {
        console.error('Error setting up database:', error);
    } finally {
        await client.end();
    }
};

createTable();
