module.exports = {
    ALL_CLASSES: 'SELECT DISTINCT ?x WHERE {'
                    + '?y rdf:type ?x'
                + '}'
}