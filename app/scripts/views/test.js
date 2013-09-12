/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TestView = Backbone.View.extend({
        template: JST['app/scripts/templates/test.ejs']
    });

    return TestView;
});