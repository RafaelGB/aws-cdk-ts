import { DescribeSecurityGroupsCommand } from "@aws-sdk/client-ec2";
import { client } from "./libs/client";

export const main = async () => {
    try {
      const { SecurityGroups } = await client.send(
        new DescribeSecurityGroupsCommand({})
      );
  
      const securityGroupList = SecurityGroups.slice(0, 9)
        .map((sg) => ` • ${sg.GroupId}: ${sg.GroupName}`)
        .join("\n");
  
      console.log(
        "Hello, Amazon EC2! Let's list up to 10 of your security groups:"
      );
      console.log(securityGroupList);
    } catch (err) {
      console.error(err);
    }
  };
  await main();
  