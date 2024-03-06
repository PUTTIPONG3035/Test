import dotenv from 'dotenv';
dotenv.config();
import AWS from 'aws-sdk'

const AWS_ACCESS_KEY_ID = "ASIAZI2LIWC3SJP27OM5"

const AWS_SECRET_ACCESS_KEY = "3NHqJcln5YXFsgnqcx/7PXKOMOiLS/HTG9zvpKRB"
const AWS_SESSION_TOKEN=`FwoGZXIvYXdzELL//////////wEaDEZUfPUHmTp8ZvU/WyLFATyd3byh3d6VDRBhp7nsY6rKEyxKA1uVNXgy+YYCBg1Vc7AFIaoZPaIM2aUaT5RBeczOghhpzEji+r9G+dKLFmMQHXxDVoI6xznK00bQAskmLX4rXCOZTnLfqq7A5zrEuuBOV7/9TM9gtjR0M2YhP68MRCgvAqZtd5FK0miuC0PG6ZJNUpzdvsFRkvWyWs6rOJ/puVt+orUFwZy+PirFUORPd5Eqm+UcgdjpJ3/pjgW8ByS4jF+U0UjhVLVpoLf0bkwdhCi2KN/1nq8GMi25uBydS7zpPAXTxIEAHDSusuU2gpRYQO79DiZmZim2al0pJHtY9+phYaR91LI=`

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


