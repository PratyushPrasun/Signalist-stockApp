import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';

function loadEnvFile() {
  const envPath = path.resolve(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) return;
  const raw = fs.readFileSync(envPath, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m) continue;
    let [, key, val] = m;
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

loadEnvFile();

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI not found in environment or .env');
  process.exit(2);
}

function extractHostFromUri(u) {
  try {
    const at = u.indexOf('@');
    const after = at >= 0 ? u.slice(at + 1) : u;
    return after.split(/[\/?]/)[0];
  } catch {
    return 'unknown-host';
  }
}

const host = extractHostFromUri(uri);
console.log(`Attempting to connect to MongoDB host: ${host} (credentials hidden)`);

(async () => {
  try {
    // 10s connect timeout
    await mongoose.connect(uri, { bufferCommands: false, connectTimeoutMS: 10000 });
    console.log(`✅ Connected to MongoDB host: ${host}`);
    console.log('Mongoose readyState:', mongoose.connection.readyState);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Connection failed:', (err && err.message) || err);
    process.exit(1);
  }
})();
