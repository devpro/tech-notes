# AWS

## Core Resources

### EC2 Instances

Start with a t2.micro (free tier eligible).
Practice starting/stopping via CLI:

```bash
aws ec2 start-instances --instance-ids i-xxxx
```

### Auto-Scaling Groups

Set up and test with traffic spikes using tools like Apache Bench (`ab -n 100 -c 10 <url>`).
Monitor scaling behavior.

### CloudWatch

Create alarms for metrics like CPU utilization:

```bash
aws cloudwatch put-metric-alarm --alarm-name HighCPU --metric-name CPUUtilization --namespace AWS/EC2 --statistic Average \
  --period 300 --threshold 80 --comparison-operator GreaterThanThreshold
```

## IAM and Security

Fix misconfigured IAM roles.
Use `aws ec2 describe-instances` to check status and roles.

## Free Tier Tips

- Always-free limits include 750 hours/month of t2.micro EC2.
- Set billing alarms in CloudWatch to avoid charges (e.g., alert at $5 threshold).

## CLI Best Practices

- Install AWS CLI, configure with `aws configure` (access key, secret, region).
- Alias commands like `alias ec2ls='aws ec2 describe-instances'` for speed.
- Prefer CLI over console for automation and troubleshooting in production.

## Networking

### VPC

The private network space.
Create with public/private subnets.

### Public vs. Private Subnets

Public route to Internet Gateway (0.0.0.0/0).
Private use NAT for outbound.

### Security Groups

Act as firewalls.

Create with:

```bash
aws ec2 create-security-group
```

Check rules:

```bash
aws ec2 describe-security-groups --group-ids sg-xxxx
```
