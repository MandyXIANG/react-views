const devBASE_URL = "https://httpbin.org";
const proBASE_URL = "https://production.org";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBASE_URL : proBASE_URL

export const TIME_OUT = 5000