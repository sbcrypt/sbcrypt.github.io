# Jekyll Commands for SBCrypt Website

This document contains useful commands for working with the Jekyll-based SBCrypt cryptography website.

## Starting the Jekyll Server

To start the Jekyll development server and preview your website locally, run:

```bash
bundle exec jekyll serve
```

This will start a local web server, typically at http://localhost:4000, where you can view your site.

The server will automatically watch for changes to your source files (like Markdown files) and regenerate the corresponding HTML files whenever you save changes. This allows you to see your updates in real-time without needing to restart the server or manually rebuild the site.

## Additional Useful Jekyll Commands

### Build the Site Without Serving

```bash
bundle exec jekyll build
```

This generates the site in the `_site` directory but doesn't start a server.

### Clean Build

```bash
bundle exec jekyll clean
bundle exec jekyll build
```

This removes any existing generated files in the `_site` directory before building.

### Build with Different Configuration

```bash
bundle exec jekyll serve --config _config.yml,_config_dev.yml
```

This allows you to specify different configuration files.

### Build with Draft Posts

```bash
bundle exec jekyll serve --drafts
```

This includes draft posts in your preview.

## Git Commands for Site Management

### Adding New Content

```bash
git add .
git commit -m "Add new content for Chapter X"
git push
```

### Ignoring the _site Directory

The `_site` directory should be excluded from version control. Ensure your `.gitignore` file contains:

```
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
vendor/
```

## Remember

- Always rebuild the site after making changes
- The `_site` directory contains generated files that should not be manually edited
- Use Markdown (`.md`) files for content creation