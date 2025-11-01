# Troubleshooting

Focus on structured approaches: check basics first, then deepen.

## General troubleshooting flow

- **Initial Checks**: Resources (CPU, memory, disk), service status, logs, network connectivity.
- **Tools**: Use `top` or `htop` for real-time monitoring; `df -h` for disk space; `systemctl status <service>` for services.
- **Logs**: `tail -f /var/log/syslog` or `journalctl -u <service>` for errors. Grep: `grep error /var/log/nginx/error.log`.
- **Log Management**: Use `logrotate` to compress/rotate logs. Config in `/etc/logrotate.d/nginx`; force with `sudo logrotate -f /etc/logrotate.d/nginx`.
- **Network**: Test outbound: `ping 8.8.8.8`. Local access: `curl localhost` or `curl -I <url>`. Ports: `ss -tuln`.

## Scenario 1: Nginx Server Down (Traffic Dead)

- **First Steps**:
  - Check if service is running: `systemctl status nginx`.
  - Local test: `curl localhost` (confirms if listening on port 80/443).
- **If Running**:
  - Resources: `top` or `htop` for CPU/memory spikes.
  - Disk: `df -h` (ensure not full).
  - Logs: `tail -n 200 /var/log/nginx/error.log`.
- **Network/Firewall**:
  - Routes: `ip route`.
  - Firewall: `iptables -L` (check if port 80 blocked; fix with `sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT`).
- **If Local Works but External Fails**: Firewall, routing, or security group issue.

## Scenario 2: Latency Spiked (CPU Green in CloudWatch)

- **First Steps**:
  - SSH in: `htop` to confirm no hidden spikes (CloudWatch might lag).
  - Logs: `tail -n 200 /var/log/nginx/error.log` (look for slow backends like DB issues).
- **Deeper Dives**:
  - Process tracing: `strace -p <PID>` to see what the process is stuck on.
  - Avoid restarts initially—masks root cause.
  - Check for huge logs: Rotate if needed.
- **Other Causes**: Network congestion, external dependencies (e.g., slow API calls).

## Scenario 3: EC2 Can't Reach S3 (No Alarms)

- **AWS Console/CLI**:
  - Instance status: `aws ec2 describe-instances --instance-ids <id>` (confirm running).
  - SSH in: Test internet: `ping google.com`.
- **Network Checks**:
  - Subnet type: Public (has Internet Gateway route); private needs NAT.
  - Security Groups: `aws ec2 describe-security-groups --group-ids <sg-id>` (ensure outbound allowed).
- **IAM**: Check attached role/policies for S3 access (e.g., `s3:GetObject`).
- **If No Internet**: Fix routes or add NAT Gateway.

## Preparation Tips

- **Simulate**: Use free tier EC2 or local VM. Practice under time (20-min sessions).
- **Mindset**: Verbalize steps aloud. Avoid quick reboots—focus on root cause.
- **Common Traps**: Misconfigured security groups, private subnets without NAT, missing IAM permissions.
