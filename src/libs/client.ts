// snippet-start:[ec2.JavaScript.createclientv3]
import { EC2Client } from "@aws-sdk/client-ec2";
export const REGION = "us-east-1";
export const client = new EC2Client({ region: REGION });
// snippet-end:[ec2.JavaScript.createclientv3]