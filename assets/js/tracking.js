document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (link.classList.contains('post-link')) {
        // Clicks on a blog post title from the homepage / post listing
        clevertap.event.push('Post Clicked', {
          'Post Title': link.textContent.trim(),
          'Post URL': link.getAttribute('href')
        });
      } else {
        // Any other link on the site (nav, footer, external links, etc.)
        clevertap.event.push('Link Clicked', {
          'Link Text': link.textContent.trim(),
          'Link URL': link.getAttribute('href')
        });
      }
    });
  });
});
