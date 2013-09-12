/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TodosView = Backbone.View.extend({
        template: JST['app/scripts/templates/todos.ejs']
    });

    return TodosView;
});