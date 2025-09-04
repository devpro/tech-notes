# Puppet API

Look at Puppet server available API.

`curl` is available on Windows with **Git Bash** for example.

```bash
# get information on one node
curl -X GET --cacert "C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/ca.pem" --cert "C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/thomasb10_2.arkadin.lan.pem" --key "C:/ProgramData/PuppetLabs/puppet/etc/ssl/private_keys/thomasb10_2.arkadin.lan.pem" -H 'Accept: pson' 'https://puppetmaster-dev:8140/puppet/v3/node/thomasb10_2.arkadin.lan?environment=production'

# get general status on one node
curl --cacert "C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/ca.pem" --cert "C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/thomasb10_2.arkadin.lan.pem" --key "C:/ProgramData/PuppetLabs/puppet/etc/ssl/private_keys/thomasb10_2.arkadin.lan.pem" -H 'Accept: pson' https://puppetmaster-dev:8140/production/status/test?environment=production
# {"is_alive":true,"version":"5.3.3"}

curl -v --trace - --cacert "C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/ca.pem" --cert "C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/thomasb10_2.arkadin.lan.pem" --key "C:/ProgramData/PuppetLabs/puppet/etc/ssl/private_keys/thomasb10_2.arkadin.lan.pem" -H 'Accept: pson' 'https://puppetmaster-dev:8140/puppet/v3/node/thomasb10_2.arkadin.lan?environment=production'
# == Info:   Trying 10.115.137.34...
# == Info: TCP_NODELAY set
# == Info: Connected to puppetmaster-dev (10.115.137.34) port 8140 (#0)
# == Info: ALPN, offering h2
# == Info: ALPN, offering http/1.1
# == Info: Cipher selection: ALL:!EXPORT:!EXPORT40:!EXPORT56:!aNULL:!LOW:!RC4:@STRENGTH
# == Info: successfully set certificate verify locations:
# == Info:   CAfile: C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/ca.pem
#   CApath: none
# == Info: TLSv1.2 (OUT), TLS header, Certificate Status (22):
# => Send SSL data, 5 bytes (0x5)
# == Info: TLSv1.2 (OUT), TLS handshake, Client hello (1):
# => Send SSL data, 512 bytes (0x200)
# <= Recv SSL data, 5 bytes (0x5)
# == Info: TLSv1.2 (IN), TLS handshake, Server hello (2):
# <= Recv SSL data, 85 bytes (0x55)
# == Info: TLSv1.2 (IN), TLS handshake, Certificate (11):
# <= Recv SSL data, 1456 bytes (0x5b0)
# == Info: TLSv1.2 (IN), TLS handshake, Server key exchange (12):
# <= Recv SSL data, 589 bytes (0x24d)
# == Info: TLSv1.2 (IN), TLS handshake, Request CERT (13):
# <= Recv SSL data, 80 bytes (0x50)
# == Info: TLSv1.2 (IN), TLS handshake, Server finished (14):
# <= Recv SSL data, 4 bytes (0x4)
# => Send SSL data, 5 bytes (0x5)
# == Info: TLSv1.2 (OUT), TLS handshake, Certificate (11):
# => Send SSL data, 2829 bytes (0xb0d)
# => Send SSL data, 5 bytes (0x5)
# == Info: TLSv1.2 (OUT), TLS handshake, Client key exchange (16):
# => Send SSL data, 70 bytes (0x46)
# => Send SSL data, 5 bytes (0x5)
# == Info: TLSv1.2 (OUT), TLS handshake, CERT verify (15):
# => Send SSL data, 520 bytes (0x208)
# => Send SSL data, 5 bytes (0x5)
# == Info: TLSv1.2 (OUT), TLS change cipher, Client hello (1):
# => Send SSL data, 1 bytes (0x1)
# => Send SSL data, 5 bytes (0x5)
# == Info: TLSv1.2 (OUT), TLS handshake, Finished (20):
# => Send SSL data, 16 bytes (0x10)
# <= Recv SSL data, 5 bytes (0x5)
# == Info: TLSv1.2 (IN), TLS change cipher, Client hello (1):
# <= Recv SSL data, 1 bytes (0x1)
# <= Recv SSL data, 5 bytes (0x5)
# == Info: TLSv1.2 (IN), TLS handshake, Finished (20):
# <= Recv SSL data, 16 bytes (0x10)
# == Info: SSL connection using TLSv1.2 / ECDHE-RSA-AES256-SHA
# == Info: ALPN, server did not agree to a protocol
# == Info: Server certificate:
# == Info:  subject: CN=puppetmaster-dev
# == Info:  start date: Sep 25 19:58:24 2017 GMT
# == Info:  expire date: Sep 25 19:58:24 2022 GMT
# == Info:  subjectAltName: host "puppetmaster-dev" matched cert's "puppetmaster-dev"
# == Info:  issuer: CN=Puppet CA: puppetmaster-dev
# == Info:  SSL certificate verify ok.
# => Send SSL data, 5 bytes (0x5)
# => Send header, 147 bytes (0x93)
# <= Recv SSL data, 5 bytes (0x5)
# <= Recv header, 17 bytes (0x11)
# <= Recv header, 37 bytes (0x25)
# <= Recv header, 44 bytes (0x2c)
# <= Recv header, 25 bytes (0x19)
# <= Recv header, 35 bytes (0x23)
# <= Recv header, 22 bytes (0x16)
# <= Recv header, 31 bytes (0x1f)
# <= Recv header, 2 bytes (0x2)
# <= Recv data, 7600 bytes (0x1db0)
```

```csharp
using System;
using System.Net.Http;
using System.Security.Authentication;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        public static void Main(string[] args)
        {
            MainAsync(args).GetAwaiter().GetResult();

            Console.ReadKey();
        }

        /// <summary>
        /// Objective: do the same as
        /// curl -v --trace -
        /// --cacert "C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/ca.pem"
        /// --cert "C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/thomasb10_2.arkadin.lan.pem"
        /// --key "C:/ProgramData/PuppetLabs/puppet/etc/ssl/private_keys/thomasb10_2.arkadin.lan.pem"
        /// -H 'Accept: pson' 'https://puppetmaster-dev:8140/puppet/v3/node/thomasb10_2.arkadin.lan?environment=production'
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public static async Task MainAsync(string[] args)
        {
            using (var handler = new HttpClientHandler
            {
                ClientCertificateOptions = ClientCertificateOption.Manual,
                SslProtocols = SslProtocols.Tls12
            })
            {
                const string certPath = "C:/ProgramData/PuppetLabs/puppet/etc/ssl/certs/ca.pem";

                handler.ClientCertificates.Add(new X509Certificate2(certPath));

                handler.ServerCertificateCustomValidationCallback = (req, cert, chain, err) =>
                {
                    return true;
                };

                using (var client = new HttpClient(handler))
                {
                    //var requestUri = "http://www.google.fr";
                    var requestUri = "https://puppetmaster-dev:8140/puppet/v3/node/thomasb10_2.arkadin.lan?environment=production";
                    var response = await client.GetAsync(requestUri);
                    var output = response.Content.ReadAsStringAsync().Result;
                    response.EnsureSuccessStatusCode(); // error
                }
            }

            Console.WriteLine("Hello World!");
        }
    }
}
```

```bash
function puppetcurl() {
  if [ -z $1 ]; then
    echo "must supply a thing"
    return 1
  fi

  curl --cert $(puppet agent --configprint hostcert) \
    --key $(puppet agent --configprint hostprivkey) \
    --cacert $(puppet agent --configprint cacert) \
    -H 'Accept: yaml' \
    "https://$(puppet agent --configprint server):$(puppet agent --configprint masterport)/${1}"
}
```
