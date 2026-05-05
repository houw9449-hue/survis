var bib = (function () {

    var entries = {};
    var parsedEntries = {};
    var warnings = {};
    var nEntries = 0;
    var nParsedEntries = 0;
    var stopwords = [];

    return {

        entries: entries,
        parsedEntries: parsedEntries,
        warnings: warnings,
        nEntries: nEntries,
        nParsedEntries: nParsedEntries,
        stopwords: stopwords,
        filteredEntries: {},
        entrySelectorSimilarities: {},
        sortedIDs: [],

        load: function () {
            bib.entries = generatedBibEntries;
            bib.nEntries = Object.keys(bib.entries).length;
            bib.parsedEntries = {};
            $.each(bib.entries, function (id, entry) {
                bib.parsedEntries[id] = {};
                bib.parsedEntries[id]['author'] = [];
                if (entry['author']) {
                    var authors = entry['author'].split(' and ');
                    $.each(authors, function (i, author) {
                        bib.parsedEntries[id]['author'].push(author.trim());
                    });
                }
                bib.parsedEntries[id]['keywords'] = [];
                if (entry['keywords']) {
                    var keywords = entry['keywords'].split(',');
                    $.each(keywords, function (i, keyword) {
                        bib.parsedEntries[id]['keywords'].push(keyword.trim());
                    });
                }
            });
            bib.nParsedEntries = Object.keys(bib.parsedEntries).length;
        }

    };

})();
