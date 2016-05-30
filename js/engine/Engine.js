import request from 'superagent';
import Query from './Query';

var Engine = {

    getAllClasses() {
        request.get('http://dbpedia.org/sparql?query=' + encodeURIComponent(Query.ALL_CLASSES)).accept('json').end(function (err, resp) {
            if (!err) {
                console.log(resp.body);
            }
        });
    }
};

module.exports = Engine;