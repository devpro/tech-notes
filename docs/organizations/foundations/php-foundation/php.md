# PHP

→ [php.net](https://php.net)

## Dev setup

### PHP binaries

Download the version that you want from the [download page](https://php.net/downloads.php). You may consider reading a little about thread safe (for Apache) and not thread safe versions (for IIS, nginx or command line).

On Windows, you'll download a zip file, you just have to extract it somewhere (more in a program folder). You can add the direetory in the environment PATH but it's not mandatory. For example, you can add the following line in a command window:

```bash
# Windows
SET PATH="%PATH%;D:\Programs\php-7.2.2-nts-Win32-VC15-x64"
```

Once you're clear on your PHP installation setup, you should be able to get something like this:

```bash
php -v
# PHP 7.2.2 (cli) (built: Jan 31 2018 19:31:15) ( NTS MSVC15 (Visual C++ 2017) x64 )
# Copyright (c) 1997-2018 The PHP Group
# Zend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies
```

By default, there is no `php.ini` file in the installation folder, you can copy the development one to create your own file.

#### Nginx

#### CGI

- Create a bat file, for example start-php-fcgi.bat:

```bat
@ECHO OFF
ECHO Starting PHP FastCGI...
set PATH=D:\Programs\php-7.2.4-nts-Win32-VC15-x64;%PATH%
c:\bin\RunHiddenConsole.exe D:\Programs\php-7.2.4-nts-Win32-VC15-x64\php-cgi.exe -b 127.0.0.1:9123
```

### Composer

[Composer](https://getcomposer.org/) is the dependency (package) manager for PHP.

Once it is installed, you should be able to get the following:

```bash
composer -V
# Composer version 1.6.3 2018-01-31 16:28:17
```

You can install packages system or project wide. Here are some tools that are good to have system wide:

```bash
# this will install phpcs
composer global require squizlabs/php_codesniffer
# (optional) add standard rules by default
phpcs --config-set default_standard Squiz
```

Composer configuration file is called `composer.json`.

### XDebug

**XDebug** is required to debug your code in your IDE (Eclipse PDT, VS Code, etc.).

- Go on [Installation page](https://xdebug.org/docs/install) and select the version related to your PHP one, for example `php_xdebug-2.6.0-7.2-vc15-nts-x86_64.dll`.

- Copy the file in the ext directory of your PHP installation directory.

- Edit your `php.ini` file to add the following lines to activate the debugging (if you don't know which php.ini file you're using make a phpinfo() file)

```ini
# after all the ;extension lines in [PHP] section at the beginning of the file
# For Windows
zend_extension=D:/Programs/php-7.2.2-nts-Win32-VC15-x64/ext/php_xdebug-2.6.0-7.2-vc15-nts-x86_64.dll

# at the end of the file
[XDebug]
xdebug.remote_enable = 1
xdebug.remote_autostart = 1
```

### IDE

#### VS Code

Visual Studio Code is an indredible tool provided by Microsoft. You can review [PHP Programming in VS Code](https://code.visualstudio.com/docs/languages/php) for more information.

If you want to see a preview or get up to speed quickly, you can watch [laracasts.com series](https://laracasts.com/series/visual-studio-code-for-php-developers).

You just have to set `php.validate.executablePath` in your user settings in VS Code if it's not in the PATH (which could be a good practice if several PHP versions must be present on the machine).

## Language

### Conventions

**phpcs** is a good tool to validate the code that is written.

It can be easily configured, see the [Configuration Options](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Configuration-Options).

You can also change the behaviour directly in the file.

```php
// phpcs:disable
// phpcs:enable
// phpcs:ignoreFile
```

You can define your own ruleset, see [Annotated ruleset.xml](https://github.com/squizlabs/PHP_CodeSniffer/wiki/Annotated-ruleset.xml).

For example, custom_ruleset.xml file content:

```xml
<?xml version="1.0"?>
<ruleset name="Custom Standard">
    <rule ref="Squiz">
        <exclude name="Squiz.Commenting.FileComment.Missing"/>
        <exclude name="Squiz.Strings.DoubleQuoteUsage.ContainsVar" />
    </rule>
</ruleset>
```

You can configure it in VS Code or from the command line:

```bash
phpcs my/path/to/file.php --standard=my/path/to/custom_ruleset.xml
```

### MongoDB Driver

There is a PHP extension and a PHP library to access MongoDB, see [docs.mongodb.com](https://docs.mongodb.com/ecosystem/drivers/php/).

#### Installation

- (Windows) Download the zip file for the good version from [pecl.php.net](http://pecl.php.net/package/mongodb) and copy the dll inside the zip file to your extension folder.

- Add in your `php.ini` file:

```ini
# For Windows
extension=php_mongodb.dll
```

- From your project directory:

```bash
composer require mongodb/mongodb
```

Reference: [php.net](http://php.net/manual/fr/set.mongodb.php).

#### First steps

```php
<?php

require 'vendor/autoload.php';

$client     = new MongoDB\Client('mongodb://localhost:27017');
$collection = $client->demo->beers;

$result = $collection->insertOne([ 'name' => 'Hinterland', 'brewery' => 'BrewDog' ]);

echo "Inserted with Object ID '{$result->getInsertedId()}'\n";

$result = $collection->find([ 'name' => 'Hinterland', 'brewery' => 'BrewDog' ]);

foreach ($result as $entry) {
    echo $entry['_id'], ': ', $entry['name'], "\n";
}
```

Reference: [Using the PHP Library for MongoDB (PHPLIB)](http://php.net/manual/en/mongodb.tutorial.library.php).

### Libraries

- [Pimple](https://pimple.symfony.com/): A simple PHP Dependency Injection Container

## Tools

### phpdbg

- [PHP RFC: phpdbg](https://wiki.php.net/rfc/phpdbg)
- [krakjoe/phpdbg](https://github.com/krakjoe/phpdbg)

## Unit tests

### PHPUnit

[PHPUnit](https://phpunit.de/) is a testing framework for PHP. It is open source: [sebastianbergmann/phpunit](https://github.com/sebastianbergmann/phpunit). It is available on [packagist](https://packagist.org/packages/phpunit/phpunit).

#### Getting started with PHPUnit

- Read [Getting Started with PHPUnit 8](https://phpunit.de/getting-started/phpunit-8.html)

- Install locally: `composer require phpunit/phpunit --dev`
  - Check the tool is running file: `php vendor/phpunit/phpunit/phpunit --version` (or `php vendor/bin/phpunit` on a non-Windows environment)

- Edit `composer.json` file and execute `composer install` to regenerate autoload file

  ```json
  "autoload": {
      "psr-4": {
          "App\\": "src/"
      }
  },
  "autoload-dev": {
      "psr-4": {
          "App\\Tests\\": "tests/"
      }
  }
  ```

- Create `phpunit.xml.dist` file:

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!-- https://phpunit.de/manual/current/en/appendixes.configuration.html -->
  <phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:noNamespaceSchemaLocation="http://schema.phpunit.de/6.5/phpunit.xsd"
           backupGlobals="false"
           colors="true"
           bootstrap="config/bootstrap.php">
      <php>
          <ini name="error_reporting" value="-1" />
          <env name="APP_ENV" value="test" />
          <env name="SHELL_VERBOSITY" value="-1" />
      </php>
      <testsuites>
          <testsuite name="Project Test Suite">
              <directory>tests</directory>
          </testsuite>
      </testsuites>
      <filter>
          <whitelist>
              <directory>src</directory>
          </whitelist>
      </filter>
  </phpunit>
  ```

- Launch the tests: `php vendor/phpunit/phpunit/phpunit -c phpunit.xml.dist --log-junit junit.xml`
  - With coverage ([Code Coverage Analysis](https://phpunit.readthedocs.io/en/8.0/code-coverage-analysis.html)): `php vendor/phpunit/phpunit/phpunit -c phpunit.xml.dist --coverage-html .build/coverage-report --coverage-clover .build/coverage.xml`
  - Integration in SonarCloud: [PHP Unit Tests and Coverage Results Import](https://docs.sonarqube.org/display/PLUG/PHP+Unit+Tests+and+Coverage+Results+Import)

- We can also use **phpdbg** (that is now shipped with PHP): `phpdbg -qrr vendor/phpunit/phpunit/phpunit -c phpunit.xml.dist` (comparison with xdebug here: [Generating Code Coverage with PHPUnit and phpdbg](https://hackernoon.com/generating-code-coverage-with-phpunite-and-phpdbg-4d20347ffb45))

- You can also use Symfony PHPUnit bridge: `composer install symfony/phpunit-bridge --dev` (and create a bin/console and update your gitignore)

- For Mocks : [Test Doubles](https://phpunit.readthedocs.io/en/8.0/test-doubles.html)
