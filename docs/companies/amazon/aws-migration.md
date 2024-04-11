# Migration & transfer

## Readings

* [Migrate and Modernize on AWS](https://aws.amazon.com/products/migration-and-transfer/)
* [Mainframe Modernization](https://aws.amazon.com/mainframe-modernization/) ([docs](https://docs.aws.amazon.com/m2/latest/userguide/what-is-m2.html))
* [Migration terminology](https://docs.aws.amazon.com/wellarchitected/latest/migration-lens/definitions.html#migration-terminology)
  * 7 R's: Retire, Retain, Rehost (lift and shift), Relocate, Repurchase (drop and shop), Replatform (lift, tinker, and shift), Refactor
* [How to migrate](https://aws.amazon.com/cloud-migration/how-to-migrate/)
* [Migration Acceleration Program (MAP)](https://aws.amazon.com/migration-acceleration-program/)
  * Steps: Assess > Mobilize > Migrate and modernize
* [Migration Lens](https://docs.aws.amazon.com/wellarchitected/latest/migration-lens/migration-lens.html)
* [Level up your Cloud Transformation with Experience-Based Acceleration (EBA)](https://aws.amazon.com/blogs/mt/level-up-your-cloud-transformation-with-experience-based-acceleration-eba/)

## Products

### Application Discovery Service

> AWS Application Discovery Service helps you plan your migration to the AWS cloud by collecting usage and configuration data about your on-premises servers and databases. Application Discovery Service is integrated with AWS Migration Hub and AWS Database Migration Service Fleet Advisor. Migration Hub simplifies your migration tracking as it aggregates your migration status information into a single console. You can view the discovered servers, group them into applications, and then track the migration status of each application from the Migration Hub console in your home Region. You can use DMS Fleet Advisor to assess migrations options for database workloads.

🌐 [docs](https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html)

### Application Migration Service

> AWS Application Migration Service (MGN) is a highly automated lift-and-shift (rehost) solution that simplifies, expedites, and reduces the cost of migrating applications to AWS. It allows companies to lift-and-shift a large number of physical, virtual, or cloud servers without compatibility issues, performance disruption, or long cutover windows. MGN replicates source servers into your AWS account. When you’re ready, it automatically converts and launches your servers on AWS so you can quickly benefit from the cost savings, productivity, resilience, and agility of the Cloud. Once your applications are running on AWS, you can leverage AWS services and capabilities to quickly and easily replatform or refactor those applications – which makes lift-and-shift a fast route to modernization.

🌐 [aws.amazon.com/application-migration-service](https://aws.amazon.com/application-migration-service/), [docs](https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html)

### Database Migration Service

> AWS Database Migration Service (AWS DMS) is a cloud service that makes it possible to migrate relational databases, data warehouses, NoSQL databases, and other types of data stores. You can use AWS DMS to migrate your data into the AWS Cloud or between combinations of cloud and on-premises setups.

🌐 [docs](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html)

### DataSync

> AWS DataSync is an online data movement and discovery service that simplifies data migration and helps you quickly, easily, and securely transfer your file or object data to, from, and between AWS storage services.

🌐 [aws.amazon.com/datasync](https://aws.amazon.com/datasync/), [docs](https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html)

### Migration Hub

> AWS Migration Hub (Migration Hub) provides a single place to discover your existing servers, plan migrations, and track the status of each application migration. The Migration Hub provides visibility into your application portfolio and streamlines planning and tracking. You can visualize the connections and the status of the servers and databases that make up each of the applications you are migrating, regardless of which migration tool you are using.

🌐 [docs](https://docs.aws.amazon.com/migrationhub/latest/ug/whatishub.html)

### Schema Conversion Tool

> You can use the AWS Schema Conversion Tool (AWS SCT) to convert your existing database schema from one database engine to another. You can convert relational OLTP schema, or data warehouse schema. Your converted schema is suitable for an Amazon Relational Database Service (Amazon RDS) MySQL, MariaDB, Oracle, SQL Server, PostgreSQL DB, an Amazon Aurora DB cluster, or an Amazon Redshift cluster. The converted schema can also be used with a database on an Amazon EC2 instance or stored as data on an Amazon S3 bucket.

🌐 [docs](https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html)
