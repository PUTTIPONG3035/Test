import dotenv from 'dotenv';
dotenv.config();
import AWS from 'aws-sdk'

const AWS_ACCESS_KEY_ID = "ASIAZI2LIWC3SINZ4EGY"

const AWS_SECRET_ACCESS_KEY = "4AQfhRpLGdXg1/shQfcJyb/xk9tXiPNj/aPv94x6"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzEJ///////////wEaDI9A2HPIFcrR57yDACLFAQ0oFjWXoLhTEL4oSyg54p4kxmVOvoF367GC8xl8afRoSqVJtowjzid3dPJFYvxSC617YBJZ70YufN1wRKECLxlzkZPRkIlsRsqF0nhgFLWNQr1frH3N/1ATlxYUjEaLLA1PjBfj1WrCt67FlQqTdhrLPDd3fkkt8g98+11Bup241hAN9alhdeCUMO2kCYkQwfZ21nWS8/AAKiLbozNJCcxwubTH/EnzcFH8Dgtt10JsObh8/lEI/E6T5PWiTVw3Q0YPMa9dKOTTmq8GMi1qVJAJQoFlo8ZSbc4K4KBVPzTWf0khYccaaPsy0sXBFI5zibwSl3Z5c7UXsL0=`

const accessKeyId  = AWS_ACCESS_KEY_ID
const secretAccessKey = AWS_SECRET_ACCESS_KEY
const sessionToken =  AWS_SESSION_TOKEN





const credentials = new AWS.Credentials({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
    sessionToken:sessionToken,
  });

AWS.config.update({
    credentials: credentials,
    region : "us-east-1"
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'users'



export {
    db,
    Table
}


