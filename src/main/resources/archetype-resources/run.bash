#!/bin/bash


case "$1" in
	run)
		mvn spring-boot:run
		;;
	deployDockerImage)
		mvn clean package jib:build
		;;
	createDatabaseDiff)
		mvn liquibase:diff
		;;
	*)
		echo ""
		echo ""
		echo "Usage $0 [run|deployDockerImage|createDatabaseDiff]"
		echo ""
		echo ""
esac

