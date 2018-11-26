export const PROJECT_ID = process.env.PROJECT_ID
export const PRIVATE_KEY_ID = process.env.PRIVATE_KEY_ID
export const PRIVATE_KEY = process.env.PRIVATE_KEY
export const CLIENT_ID = process.env.CLIENT_ID
export const CLIENT_EMAIL = process.env.CLIENT_EMAIL
export const CLIENT_X509_URL = process.env.CLIENT_X509_URL


export const gooAuth = {
    type: "service_account",
    project_id: PROJECT_ID,
    private_key_id: PRIVATE_KEY_ID,
    private_key: PRIVATE_KEY,
    client_email: CLIENT_EMAIL,
    client_id: CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: CLIENT_X509_URL
  }