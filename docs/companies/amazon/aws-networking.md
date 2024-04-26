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

### Route 53

> Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.
>
> You can use Route 53 to perform three main functions in any combination: domain registration, DNS routing, and health checking.

🌐 [docs](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)

### VPC

> With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual network that you've defined.
> This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.

🌐 [docs](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

#### Transit gateways

> A transit gateway enables you to attach VPCs and VPN connections and route traffic between them.
>
> A transit gateway works across AWS accounts, and you can use AWS RAM to share your transit gateway with other accounts.
> After you share a transit gateway with another AWS account, the account owner can attach their VPCs to your transit gateway.

🌐 [docs](https://docs.aws.amazon.com/vpc/latest/tgw/tgw-transit-gateways.html)

#### VPC Connectivity Options

> Amazon VPC provides multiple network connectivity options for you to use, depending on your current network designs and requirements.
> These connectivity options include using either the internet or an AWS Direct Connect connection as the network backbone and terminating the connection into AWS or user-managed network endpoints.
> Additionally, with AWS, you can choose how network routing is delivered between Amazon VPC and your networks, leveraging either AWS services or user-managed network equipment and routes.

🌐 [whitepapers](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/welcome.html) (such as VPC peering, PrivateLink)

### VPC Lattice

> Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure, and monitor all of your services across multiple accounts and virtual private clouds (VPCs).

🌐 [docs](https://docs.aws.amazon.com/vpc-lattice/latest/ug/what-is-vpc-lattice.html), [aws.amazon.com/vpc/lattice](https://aws.amazon.com/vpc/lattice/)
