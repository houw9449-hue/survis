window.surVisVersion = '0.1.0';

$(document).ready(function () {
  bib.load();
  page.init();
  page.update(true);
  selectors.readQueryFromUrl();
});

$(window).resize(function () {
  timeline.updateTimeline();
});

const electron = typeof require !== 'undefined';
