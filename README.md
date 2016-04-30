# export-client

This whole import/export Javascript thing is great, but makes it hard to access variables that used to be in the global scope when debugging on the client. This very simple module makes it easy to export variables to your global scope.

## Install

`npm install export-client`

## Example

This is a standard Meteor collection written in ES6:

    import { Mongo } from 'meteor/mongo';
    
    const Domains = new Mongo.Collection('domains');
    
    export default Domains;
    
Before ES6 landed, you could open your console and type `Domains.findOne();`. With ES6 I really have no idea if it's possible to access the Domains variable in the console.

This module fixes this. Just use the exportClient function and your variable will be attached to the `window` object!

    import { Mongo } from 'meteor/mongo';
    import { exportClient } from 'export-client';
    
    const Domains = new Mongo.Collection('domains');
    
    exportClient({ Domains });
    export default Domains;

Note the curly brackets around your variable name. This is destructuring magic going on.