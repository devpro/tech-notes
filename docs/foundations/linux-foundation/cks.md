# CKS (Certified Kubernetes Security Specialist)

🌐 [training.linuxfoundation.org](https://training.linuxfoundation.org/certification/certified-kubernetes-security-specialist/)

Linked to Kubernetes Security Essentials (LFS260).

## Cloud Security

- [Platform AbstRaction for SECurity (PARSEC)](https://github.com/parallaxsecond/parsec) ([book](https://parallaxsecond.github.io/parsec-book/overview.html))
- [Computer Security Resource Center Publications web page](https://csrc.nist.gov/publications)
- [National Vulnerability Database (NVD)](https://nvd.nist.gov/) is a service provided by the National Institute of Standards and Technology (NIST), a US government physical sciences laboratory which also hosts the Computer Security Resource Center (CSRC),
where Federal Information Processing Standards (FIPS) and Special Publications (SP) documents can be found, among others.
- [National Checklist Program Repository page](https://nvd.nist.gov/ncp/repository)
- [Center for Internet Security (CIS)](https://www.cisecurity.org/) is a non-profit organization working to share cybersecurity best practices, information, and tools
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks)
- [CIS-CAT Pro](https://www.cisecurity.org/cybersecurity-tools/cis-cat-pro/), which can be run on a system to compare and report back conformance to best practices
- [kube-bench](https://github.com/aquasecurity/kube-bench)
- [Homeland Security, Cybersecurity Directives](https://cyber.dhs.gov/directives/) lists Binding Operational Directives (BOD) for federal agencies
  - [BOD 18-02: Securing High Value Assets](https://cyber.dhs.gov/bod/18-02/)

## Installation Preparations

- [Grafeas project](https://grafeas.io/)
- [gvisor](https://github.com/google/gvisor)
- [Kata Containers](https://katacontainers.io/)
- [PouchContainer](http://pouchcontainer.io/#/)
- [Firecracker](https://github.com/firecracker-microvm/firecracker-containerd)
- [UniK](https://github.com/solo-io/unik)
- [Runtime Class](https://kubernetes.io/docs/concepts/containers/runtime-class/)
<!-- The RuntimeClass is a feature which needs to be enabled on both the kube-apiserver and the kubelets on every node which may use that runtime.
While you can create the object in the API server, and declare the engine to start when a pod requests it, without the backend being configured, the pod will never reach the ready state.

At the moment, containerd is probably the easiest self-hosted way to use this feature. GKE has an easy-to-use feature, which is in beta release. Hopefully, clusters running docker or cri-o will work with various runtime classes soon, but they do not yet.

The RuntimeClass would first be added to the cluster, and given a particular name.

apiVersion: node.k8s.io/v1
kind: RuntimeClass
metadata:
name: gvisor
handler: runsc

Then add an entry in the pod spec to match:

....
spec:
runtimeClassName: gvisor #<<--This must match the name of the runtime above
containers:
.... -->
- [The Update Framework (TUF)](https://theupdateframework.io/)
- [Uptane](https://uptane.github.io/)
- [Notary](https://github.com/theupdateframework/notary)

<!-- Constraint Template
A constraint template is used to create a Custom Resource Definition (CRD) which extends the OPA policy library. This CRD defines the object which will then be called via the constraint.

apiVersion: templates.gatekeeper.sh/v1
kind: ConstraintTemplate
metadata:
  name: k8srequiredlabels
spec:
  crd:
    spec:
      names:
        kind: K8sRequiredLabels
      validation:
        openAPIV3Schema:
          properties:
            labels:
              type: array
              items: string

The first part of the YAML sets the name for the rule CRD as well as the schema for validating the parameter to be retrieved from the kube-apiserver.

targets:
  - target: admission.k8s.gatekeeper.sh
    rego: |
      package k8srequiredlabels 

      violation[{"msg": msg, "details": {"missing_labels": missing}}] {
        provided := {label | input.review.object.metadata.labels[label]}
        required := {label | label := input.parameters.labels[_]}
    missing := required - provided
        count(missing) > 0
        msg := sprintf("You must provide labels: %v", [missing])
      }

The second half of the constraint template declares the target which will be responsible for passing along the API information. Note that the package name must match the CRD spec name.
The violation stanza describes the message to be returned, the inbound spec to be evaluated, what is required in that code and what to do if the requirement is not met, and finally another message is provided to indicate what is missing.

Constraint
With the template creating the CRD, we can now use it; you can see the kind: is set to the name of the CRD. The parameters: declares the expected value. In this example, the parameter to be examined is labels, which will return a violation if it is not set to gk-ns.

apiVersion: constraints.gatekeeper.sh/v1
kind: K8sRequiredLabels
metadata:
  name: ns-require-label
spec:
  match:
    kinds:
 - apiGroups: [""]
        kinds: ["Namespace"]
  parameters:
    labels: ["gk-ns"] -->

## Secure the kube-apiserver
<!-- 
/etc/kubernetes/manifests/kube-apiserver.yaml

Audit Policy
apiVersion: audit.k8s.io/v1
kind: Policy
rules:
- level: Metadata
  resources:
  - group: ""
    resources: ["pods/log", "pods/status"]
- level: Metadata
  omitStages:
  - "RequestReceived" 

While there could be a single rule affecting all events, there also could be many rules in a policy file. In the example above, metadata of events concerning log and status information of pods would be sent to the backend.

The second rule would match all other events and send all information, but would not send RequestReceived to the backend. As a result, watch events would not appear in the log. -->

- [Center for Internet Security (CIS)](https://www.cisecurity.org/)
- [Docker Bench](https://github.com/docker/docker-bench-security)
- [TOMOYO](https://tomoyo.osdn.jp/download.html.en)
- [Smack (Simplified Mandatory Access Control Kernel)](https://github.com/smack-team)
- [SELinux User's and Administrator's Guide](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/selinux_users_and_administrators_guide/index)
- [Bane](https://github.com/genuinetools/bane)
- [Advanced Intrusion Detection Environment (AIDE)](https://aide.github.io/)
- [Tripwire](https://github.com/Tripwire/tripwire-open-source)
- [OSSEC](https://www.ossec.net/)

## Other resources

- [walidshaari/Certified-Kubernetes-Security-Specialist](https://github.com/walidshaari/Certified-Kubernetes-Security-Specialist)

## Preparation

- AppArmor
- Two security issues with Dockerfile (one is user) and Deployment
- look at pod images and scan with try, selecting high vulnerabities
- Falco
