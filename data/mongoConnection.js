const { MongoClient, ServerApiVersion } = require('mongodb');

const credentials = "C:\\Users\\Ryuk\\Desktop\\SPACE RACE\\X509-cert-80314545184679208.pem";

const client = new MongoClient(process.env.MONGODB_URI, {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB:', err);
  }
}

module.exports = {
  connect,
  client
};
