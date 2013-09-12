/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HelloView = Backbone.View.extend({
    	initialize : function(){
    		console.log('Wahoo');
    		this.render();
    	},
        template: JST['app/scripts/templates/hello.ejs'],
        render : function(){
        	var template = this.template;
        	this.$el.html( template );
        },
        events : {
        	'click #test-btn' : 'doSearch'
        },
        doSearch : function(){
        	alert('mark');
        }



    });

    return HelloView;
});