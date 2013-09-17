var feedUrl = '/data/sermons.xml.php';

jQuery(document).ready(function () {
  var $target = jQuery('#sermon-list-target');

  jQuery.ajax({
    url: feedUrl,
    success: function (data) {
      var $data = jQuery(data);
      var $items = $data.find('item');
      var html = '';

      $items.each(function () {
        var $this = jQuery(this);
        var title = $this.find('title').text();
        var date = $this.find('pubDate').text();
        var desc = $this.find('description').text();
        var url = $this.find('enclosure').attr('url');

        html += '<h2>' + title + '</h2>\n<p><em>' + date + '</em></p>\n<p>' + desc + '</p>\n';
        html += '<audio src="' + url + '" controls>\n';
        html += '<p>Your browser does not support the <code>audio</code> element.</p></audio>';
      });

      $target.html(html);
    },
    error: function (err) {
      console.log('Problem:', err);
    }
  })
})
