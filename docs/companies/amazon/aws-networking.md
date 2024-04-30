# Networking in AWS

## Products

### Direct connect

> AWS Direct Connect links your internal network to an AWS Direct Connect location over a standard Ethernet fiber-optic cable.
> One end of the cable is connected to your router, the other to an AWS Direct Connect router.
> With this connection, you can create virtual interfaces directly to public AWS services (for example, to Amazon S3) or to Amazon VPC, bypassing internet service providers in your network path.
> An AWS Direct Connect location provides access to AWS in the Region with which it is associated.
> You can use a single connection in a public Region or AWS GovCloud (US) to access public AWS services in all other public Regions.

🌐 [docs](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html)

#### Direct Connect gateways

> Use AWS Direct Connect gateway to connect your VPCs.
>
> You associate an AWS Direct Connect gateway with either of the following gateways: a transit gateway when you have multiple VPCs in the same Region, a virtual private gateway.

🌐 [docs](https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-gateways-intro.html)

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
>
> This virtual network closely resembles a traditional network that you'd operate in your own data center, with the benefits of using the scalable infrastructure of AWS.

🌐 [docs](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)

#### Internet gateways

> An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.
>
> An internet gateway enables resources in your public subnets (such as EC2 instances) to connect to the internet if the resource has a public IPv4 address or an IPv6 address.
>
> Similarly, resources on the internet can initiate a connection to resources in your subnet using the public IPv4 address or IPv6 address.

🌐 [docs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)

#### NAT gateways

> A NAT gateway is a Network Address Translation (NAT) service.
>
> You can use a NAT gateway so that instances in a private subnet can connect to services outside your VPC but external services cannot initiate a connection with those instances.

🌐 [docs](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html)

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

🌐 [aws.amazon.com/vpc/lattice](https://aws.amazon.com/vpc/lattice/), [docs](https://docs.aws.amazon.com/vpc-lattice/latest/ug/what-is-vpc-lattice.html)

See also: [Xebia - Can VPC Lattice replace AWS Transit Gateway?](https://xebia.com/blog/can-vpc-lattice-replace-aws-transit-gateway/)

### WAF

> AWS WAF is a web application firewall that lets you monitor the HTTP(S) requests that are forwarded to your protected web application resources.

🌐 [aws.amazon.com/waf](https://aws.amazon.com/waf/)
