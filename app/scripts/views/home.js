/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var HomeView = Backbone.View.extend({
        template: JST['app/scripts/templates/home.ejs'],
        initialize : function(){
        	this.render();
        },
        render : function(){
        	var template = this.template;
        	this.$el.html( template );
        },
        events : {
        	'click #sync' : 'syncFiles',
        	'change #filePicker' : 'fileUploader' 
        },
        fileUploader : function(){
        	alert('file uploading');
        	window.uploadFile;
        },
        syncFiles : function(){
        		 var retrievePageOfFiles = function(request, result) {
    request.execute(function(resp) {
      result = result.concat(resp.items);
      var nextPageToken = resp.nextPageToken;
      if (nextPageToken) {
        request = gapi.client.drive.files.list({
          'pageToken': nextPageToken
        });
        retrievePageOfFiles(request, result);
      } else {
        callback(result);
      }
    });
  }
  var initialRequest = gapi.client.drive.files.list();
  retrievePageOfFiles(initialRequest, []);
		  }
        


    });

    return HomeView;
});