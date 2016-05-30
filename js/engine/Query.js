module.exports = {
    ALL_CLASSES: 'SELECT DISTINCT ?x WHERE {'
                    + '?y rdf:type ?x'
                + '}',

    SUPERCLASSES: 'SELECT DISTINCT ?x WHERE {'
                    + '?y rdfs:subClassOf ?x'
                + '}',

    PROPERTY_COUNT: 'Select Distinct ?property (Count(?x) as ?CountX)'
                    + 'Where'
                        + '{?LowestLevelClass ?property ?x .}'
                    + 'Group by ?property'
}