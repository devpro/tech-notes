# Rancher API

## Cluster actions

### List clusters managed by Rancher

```bash
curl -s -k $rancherUrl/v3/clusters -H "Authorization: Bearer ${token}" | jq .
```

### Get cluster ID from name

```bash
curl -s $rancherUrl/v3/clusters?name=$name -H 'content-type: application/json' -H "Authorization: Bearer ${token}" | jq -r .data[0].id
```

### Get cluster registration command line from Rancher

```bash
curl -s -k $rancherUrl/v3/clusters/$clusterId/clusterRegistrationTokens -H "Authorization: Bearer ${token}" | jq -r .data[0].nodeCommand
```

### Create downstream custom cluster in Rancher

```bash
CLUSTER_CONFIG=$(cat <<EOF
{
  "type": "provisioning.cattle.io.cluster",
  "metadata": {
    "namespace": "fleet-default",
    "name": "$clusterName"
  },
  "spec": {
    "rkeConfig": {
      "chartValues": {
        "rke2-calico": {}
      },
      "upgradeStrategy": {
        "controlPlaneConcurrency": "1",
        "controlPlaneDrainOptions": {
          "deleteEmptyDirData": true,
          "disableEviction": false,
          "enabled": false,
          "force": false,
          "gracePeriod": -1,
          "ignoreDaemonSets": true,
          "skipWaitForDeleteTimeoutSeconds": 0,
          "timeout": 120
        },
        "workerConcurrency": "1",
        "workerDrainOptions": {
          "deleteEmptyDirData": true,
          "disableEviction": false,
          "enabled": false,
          "force": false,
          "gracePeriod": -1,
          "ignoreDaemonSets": true,
          "skipWaitForDeleteTimeoutSeconds": 0,
          "timeout": 120
        }
      },
      "machineGlobalConfig": {
        "cni": "calico",
        "disable-kube-proxy": false,
        "etcd-expose-metrics": false
      },
      "machineSelectorConfig": [
        {
          "config": {
            "protect-kernel-defaults": false
          }
        }
      ],
      "etcd": {
        "disableSnapshots": false,
        "s3": null,
        "snapshotRetention": 5,
        "snapshotScheduleCron": "0 */5 * * *"
      },
      "registries": {
        "configs": {},
        "mirrors": {}
      },
      "machinePools": []
    },
    "machineSelectorConfig": [
      {
        "config": {}
      }
    ],
    "kubernetesVersion": "$clusterVersion",
    "defaultPodSecurityAdmissionConfigurationTemplateName": "",
    "localClusterAuthEndpoint": {
      "enabled": false,
      "caCerts": "",
      "fqdn": ""
    }
  }
}
EOF
)

curl -s -k $rancherUrl/v1/provisioning.cattle.io.clusters -H "Authorization: Bearer ${token}" -H 'Content-Type: application/json' -X POST -d "$CLUSTER_CONFIG"
```

## Rancher settings

### Set Rancher Server URL setting

```bash
curl -s -k $rancherUrl/v3/settings/server-url -H "Authorization: Bearer ${token}" -H 'Content-Type: application/json' -X PUT -d '{ "value": "'"$rancherUrl"'" }'
```

## User actions

### Log in Rancher with username and password

```bash
curl -s -k $rancherUrl/v3-public/localProviders/local?action=login" -H 'Content-Type: application/json' \
--data-binary "{ \"username\": \"$username\", \"password\": \"$password\" }" \
| jq -r .token
```

### Update user password for Rancher

```bash
curl -s -k $rancherUrl/v3/users?action=changepassword -H "Authorization: Bearer $token" -H 'Content-Type: application/json' \
-X POST -d '{ "currentPassword": "'"$currentPassword"'", "newPassword": "'"$newPassword"'" }'
```

### Create an API key Rancher

```bash
curl -s -k $rancherUrl/v3/tokens -H 'Content-Type: application/json' -H "Authorization: Bearer $token" \
--data-binary '{ "type": "token", "description": "'"$description"'", "ttl": 0 }' \
| jq -r .token
```
