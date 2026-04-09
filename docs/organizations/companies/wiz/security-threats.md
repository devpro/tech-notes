# Security Threats

## Issues

March 2026:

- [Axios NPM Distribution Compromised in Supply Chain Attack](https://www.wiz.io/blog/axios-npm-compromised-in-supply-chain-attack)
- [Checkmarx KICS GitHub Action compromised](https://www.wiz.io/blog/teampcp-attack-kics-github-action)
- [LiteLLM trojanized](https://www.wiz.io/blog/threes-a-crowd-teampcp-trojanizes-litellm-in-continuation-of-campaign)
- [Trivy compromised](https://www.wiz.io/blog/trivy-compromised-teampcp-supply-chain-attack)

## Podcasts

March 2026

- [Research Saturday - A subtle flaw, a massive blast radius](https://thecyberwire.com/podcasts/research-saturday/417/notes)

## Guides

- [How to secure the SDLC with Wiz](https://www.wiz.io/academy/application-security/how-to-secure-the-sdlc-with-wiz)

## SITF (SDLC Infrastructure Threat Framework)

[wiz-sec-public.github.io/SITF](https://wiz-sec-public.github.io/SITF/)

We can’t always wait for MITRE ATT&CK to release new frameworks so quickly; many great research and security teams can help fill that gap with their own ATT&CK-style frameworks for everyone in the industry. The SDLC Infrastructure Threat Framework, or SITF, helps solve that gap.
Here are some gaps and features they address:

- They list five components of potential victim infrastructure: Endpoint, VC, CI/CD, Registry & Production. You can see these being attacked in every supply chain attack in the last two weeks surrounding Trivy & Axios
- Three stages, Initial Access, Discovery & Lateral Movement and Post-Compromise, connect to ATT&CK, sans post-compromise
- The techniques are specific and actionable. For example, Git Tag Manipulation was used in the Trivy attack as tags were removed and re-added with an orphaned commit on a fork in the attacker’s repo

Each technique has protective controls associated with them, so this is great reference material for those who are trying to harden their supply chain pipelines.
