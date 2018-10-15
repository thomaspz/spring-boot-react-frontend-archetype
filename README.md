# Spring-boot-react-frontend-stub
Stub Project for Spring Boot and Frontend with React and Webpack as Developement Server

This is my maven archtetype to create a simple spring-boot application, with integrated npm-driven webpack development Server and React Base - Setup and deploy to simple local-test registry to fast-start new projects.

# Installation

## Clone the repository

```
git clone https://github.com/thomaspz/spring-boot-react-frontend-archetype.git
```

## Install the archetype

```
mvn clean package install
```

## Generate new project from archetype

```
mvn archetype:generate \
    -DarchetypeCatalog=local \
    -DarchetypeGroupId=org.plorin.archetypes \ 
    -DarchetypeArtifactId=spring-boot-react-frontend-archetype \ 
    -DgroupId=my.group.id \
    -DartifactId=my-artifact-name \
    -DarchetypeVersion=0.0.1-SNAPSHOT

```

## Run the Project

```
mvn spring-boot:run
```
Build and run the project on port 8080

## Development with npm / webpack webpack-server

First Start Spring-boot Application (see above)!

```
cd src/main/frontend
npm run start
```

Runs webpack-webserver with hot reload on port 9090.

## Write your Application

- Define and use Rest Endpoint with Spring
- Write Database changes with Entities and liquibase
- Write the Frontend with react and webpack/npm
- Relax and feel good ;-)

## Deploy to Docker Registry

Create a docker image and deploy to docker registry.
The registry host, namespace and image-name were definied during maven-archetype creation process.

Then build the docker-image and deploy to the registry
```
mvn jib:build
```

## Run the docker-image on your docker - host

```
docker \
  run \
  --name <instance-name> \
  --restart always
  -p <externalPort>:8080 \
  <host>/<namespace>:<my-artifact-name>
```

If you are running a spring-boot-admin server, you can secify the necessary info, too.

```
    -e spring.boot.admin.url=<adminurl> \
    -e spring.boot.admin.client.url=<adminurl> \
    -e spring.boot.admin.client.instance.management-base-url=http://<docker-host-ip>:<external-port-see-above> \
      -e spring.boot.admin.client.instance.service-url=http://<docker-host-ip>:<external-port-see-above> \
      -e spring.boot.admin.client.instance.name=<name>
``

## Create Liquibase Script 

Create your Entityclasses and than let liquibase generate the "diff-script" between Database and Sourcecode. The generatet File is located under 
```
/src/main/resource. 
```
After creation you can copy it to the right place 

```
/src/main/resource/db/changelog.
```

Maven goal to create diff:

```
mvn liquibase:diff
```

## Wrapper Script

All necessary maven-calls are definied in the run.bash wrapper script at the root of the project.

```
bash run.bash <option>
```

or make it executable 

```
chmod 775 run.bash
```

## Hint

I tested the project with eclipse. If you open the root in eclipse as project, all changes were automatically build and copied to the target directory. Than under src/main/fronend use a better "web-code-editor" like "visual-studio-code"
