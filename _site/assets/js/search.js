// var idx = lunr(function () {
//   this.ref('id');
//   this.field('title', { boost: 10 });
//   this.field('tags');
//   this.field('content');
// });

//   var downcaser = function (token) {
//     return token.update(function (str) {
//       return str.toLowerCase()
//     });
//   }

var idx = lunr(function () {
// the, the normal lunr index initialization
  this.field('title')
  this.field('tags')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)

// add documents to index
  for (var item in store) {
    this.add({
      title: store[item].title,
      tags: store[item].tags,
      id: item
    })
  }
});



$(document).ready(function () {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if (query.lastIndexOf(" ") != query.length - 1) {
            q.term(term, { usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != "") {
            q.term(term, { usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">' + result.length + ' {{ site.data.text[site.locale].results_found | default: "Result(s) found" }}</p>');
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem =
        '<article class="entry">' +
        '<h3 class="entry-title">' +
        '<a href="' + window.store[ref].url + '">' + window.store[ref].title + '</a>' +
        '</h3>' +
        '<div class="entry-excerpt">' +
        '<p>' + window.store[ref].excerpt.split(" ").splice(0, 20).join(" ") + '...</p>' +
        '</div>' +
        '</article>';
      resultdiv.append(searchitem);
    }
  });
});
