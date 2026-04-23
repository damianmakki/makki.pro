module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'blog-src/blog.css': 'blog/blog.css' });

  eleventyConfig.addCollection('posts', api =>
    api.getFilteredByGlob('posts/*.md').sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter('shortDate', date => {
    const d = new Date(date);
    const mon = d.toLocaleString('en-US', { month: 'short' });
    const day = String(d.getDate()).padStart(2, '0');
    const yr = String(d.getFullYear()).slice(2);
    return `${mon} ${day} · ${yr}`;
  });

  eleventyConfig.addFilter('dateToRfc3339', date =>
    new Date(date).toISOString()
  );

  eleventyConfig.addFilter('absoluteUrl', (url, base) =>
    new URL(url, base).href
  );

  eleventyConfig.addFilter('getNewestCollectionItemDate', collection => {
    if (!collection || !collection.length) return new Date();
    return collection.reduce((newest, item) =>
      item.date > newest ? item.date : newest, collection[0].date
    );
  });

  eleventyConfig.addGlobalData('currentYear', () => new Date().getFullYear());

  return {
    dir: {
      input: 'posts',
      includes: '../blog-src/_includes',
      output: 'build/blog',
    },
    markdownTemplateEngine: 'njk',
  };
};
