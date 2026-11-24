# Terraform

Infrastructure-as-code for the Reach Digital Media environments (development, production).

Suggested layout once the cloud provider is chosen:

```
terraformfiles/
  modules/          reusable modules (network, container service, CDN, …)
  environments/
    development/
    production/
```

State files, `.terraform/` and `*.tfvars` are git-ignored; commit `*.tfvars.example` templates instead.
