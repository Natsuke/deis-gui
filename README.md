# Deis Graphical User Interface

This is a angular app to provide a web GUI for a deis cluster.
This app use the [deis controller API](http://docs.deis.io/en/latest/reference/api-v1.1/) 

## Installation

    npm install && bower install

## Usage

To launch a local server, launch

    grunt serve

A proxy provide a connection from your localhost to your vagrant deis cluster

At login use this address as controller url

    http://localhost:9000/api

You need be registered to your deis controller via the deis client
