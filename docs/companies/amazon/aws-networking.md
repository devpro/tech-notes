# Networking in AWS

## Products

### Direct connect

> AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable.
> One end of the cable is connected to your router, the other to an AWS Direct Connect router.
> With this connection, you can create virtual interfaces directly to public AWS services (for example, to Amazon S3) or to Amazon VPC, bypassing internet service providers in your network path.
> An AWS Direct Connect location provides access to AWS in the Region with which it is associated.
> You can use a single connection in a public Region or AWS GovCloud (US) to access public AWS services in all other public Regions.

🌐 [docs](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

### PrivateLink

> WS PrivateLink is a highly available, scalable technology that you can use to privately connect your VPC to services as if they were in your VPC.
> You do not need to use an internet gateway, NAT device, public IP address, AWS Direct Connect connection, or AWS Site-to-Site VPN connection to allow communication with the service from your private subnets.
> Therefore, you control the specific API endpoints, sites, and services that are reachable from your VPC.

🌐 [aws.amazon.com/privatelink](https://aws.amazon.com/privatelink/), [docs](https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html)

### VPC

> With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined.
> This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.

🌐 [docs](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

See also [VPC Connectivity Options](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/welcome.html) (such as VPC peering, PrivateLink)
