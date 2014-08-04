template Angular Module
=======================

Template for angular modules.
- Simply clone this repo and update everywhere you see ngModuleTemplate or ng-module-template.
- Start developing your module
- Update the demo app
- Update this readme file

Install
-------

Copy the ngModuleTemplate.js and ngModuleTemplate.css file into your project and add the following line with the correct path:

		<script src="/path/to/scripts/ngModuleTemplate.js"></script>
		<script src="/path/to/scripts/ngModuleTemplate.css"></script>

Alternatively, if you're using bower, you can add this to your component.json (or bower.json):

		"angular-ng-module-template": "~0.0.1"

And add this to your HTML:

		<script src="components/angular-ngModuleTemplate-basic/ngModuleTemplate.js"></script>
		<script src="components/angular-ngModuleTemplate-basic/ngModuleTemplate.css"></script>

Note that the style is very minimal, it's up to you to make it fit your need.

Usage
-----
		<ng-module-template>
		...
		</ng-module-template>


Options
-------

- `option1`
	Is doing something awesome

			<ng-module-template option1="something">

- `option2`
	Is doing something awesome

			<ng-module-template option2="something">


Event
-----

Document here if the module emits events

Demo
----

Try the (very simple) demo. How to run the demo? Simple...

		git clone git@github.com:standup75/ngModuleTemplate.git
		cd ngModuleTemplate
		npm install && bower install
		grunt
		cd demo
		npm install && bower install
		grunt server

This should open your browser at http://localhost:9000 where the demo now sits.
