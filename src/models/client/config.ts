import env from '@/env';
import { Client, Account , Avatars , Databases , Storage } from 'appwrite';

const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)    // Your API Endpoint
    .setProject(env.appwrite.projectId)                // Your project ID;

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
const avatars = new Avatars(client);

export {client,account,databases,storage,avatars}
