import request from 'superagent';
import Query from './Query';

var Engine = {

    classes: null,
    endpoint: 'http://dbpedia.org/sparql',

    getAllClasses: function() {
        request.get(this.endpoint + '?query=' + encodeURIComponent(Query.ALL_CLASSES)).accept('json').end(function (err, resp) {
            if (!err) {
                this.classes = resp.body.results.bindings.map(function(item) {
                    return item['x']['value'];
                });
                console.log(this.classes);
                this.getSuperclasses();
            }
        }.bind(this));
    },

    getSuperclasses: function() {
        var results = true;
        for (var i = 0, len = this.classes.length; i < len; i++) {
            var q = Query.SUPERCLASSES.replace('?y', '<' + this.classes[i] + '>');
            request.get(this.endpoint + '?query' + encodeURIComponent(q)).accept('json').end(function(err, resp) {

            }.bind(this));
        }
    }
};

module.exports = Engine;