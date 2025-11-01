# Linux

## Networking

Check interfaces:

```bash
ip addr
```

Routing tables

```bash
ip route
```

Firewall rules:

```bash
iptables -L -n
```

Allow ports:

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

Debugging:

```bash
ping 8.8.8.8
traceroute google.com
netstat -tulpn
ss -tulpn
```
