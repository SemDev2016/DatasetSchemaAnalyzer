import request from 'superagent';

var Engine = {

    getAllClasses() {
        var query = 'SELECT DISTINCT ?x WHERE {'
            + '?y rdf:type ?x'
            + '}';
        request.get('http://dbpedia.org/sparql?query=' + encodeURIComponent(query)).accept('json').end(function (err, resp) {
            if (!err) {
                console.log(resp.body);
            }
        });
    }
};

module.exports = Engine;