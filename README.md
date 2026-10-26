# [Alexander O. Smith](https://www.alexanderosmith.com/)

## Linux install

From a fresh Debian or Ubuntu install to the site running at <http://127.0.0.1:4000>:

```sh
# 1. Build tools (four gems compile small C extensions)
sudo apt update
sudo apt install -y git curl build-essential libssl-dev libyaml-dev zlib1g-dev libffi-dev libreadline-dev

# 2. Ruby 3.3 via rbenv. Skip this step if `ruby -v` already prints 3.3.x
#    (apt's Ruby is 3.3.x on Debian 13 and Ubuntu 25.04, older elsewhere).
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'eval "$(~/.rbenv/bin/rbenv init - bash)"' >> ~/.bashrc
source ~/.bashrc
rbenv install 3.3.6

# 3. The site
git clone https://github.com/adamdjbrett/alexanderosmith.com.git
cd alexanderosmith.com
bundle install
bundle exec jekyll serve
```

## Local development (macOS, Windows)

Requires Ruby 3.3.x (Gemfile; `.ruby-version` defaults to 3.3.6) and Jekyll 4.4 (`~> 4.4.1`). No Jekyll plugins.

| OS | One-time setup |
|---|---|
| macOS | `xcode-select --install`, then `rbenv install 3.3.6` |
| Windows | [RubyInstaller](https://rubyinstaller.org/downloads/archives/) **Ruby+Devkit 3.3.x (x64)**, then `ridk install` (option 3) |

Then run `bundle install` and `bundle exec jekyll serve` in the repo.

## Deployment

Netlify builds with `bundle exec jekyll build` (see `netlify.toml`, which pins Ruby 3.3.6). To take a Jekyll 4.4.x patch release: `bundle update jekyll`.

## Where things live

- SEO, Zotero and Dublin Core metadata: `_data/seo.yml` → `_includes/seo.html`
- Colors, fonts and spacing (CSS variables): `_data/style.yml`
- Sidebar social links: `_data/social.yml`
- CV: `assets/pdfs/AOS_CurriculumVitae.pdf`, linked from `/cv/`

## Changes

- Removed the contact form (Formspree, then Netlify Forms); `/contact/` shows the email address
- Code blocks follow the visitor's light/dark setting
- Posts get `layout: post` from `_config.yml` defaults
- Removed G+
- Dark colour scheme (background `#111111`, text `#AAAAAA`), now in `_data/style.yml`
- Removed all Jekyll plugins and Sass; SEO, feed and sitemap are plain Liquid
- Replaced jQuery, FitVids and Evil Icons with plain JavaScript and Font Awesome

## Flexton is an ultra-minimalist and responsive theme for Jekyll

Flexton created especially for those who appreciate minimalism and functionality.

Amazing flexibility with pleasant colors and custom design makes Flexton a simple theme, suitable for almost any blog.

### Demo

Check the theme in action [Demo](https://flexton.netlify.com/) ![Page preview](https://github.com/artemsheludko/flexton/blob/master/images/preview.png?raw=true)

### Features

*   100% responsive and clean theme
*   Optimized for mobile devices
*   Included site search
*   Contact page (email link)
*   Post sharing
*   Disqus comments
*   Social media profiles
*   Font Awesome icons
*   Google Fonts

## Credits

*   [Google Fonts](https://fonts.google.com/) (Volkhov, Open Sans)
*   [Font Awesome](https://fontawesome.com/)
*   [Simple-Jekyll-Search](https://github.com/christian-fei/Simple-Jekyll-Search)
*   Preview images from [unsplash.com](https://unsplash.com/), [pexels.com](https://www.pexels.com/)

## Buy @artemsheludko a coffee

If you want to show your appreciation for this theme, buy [@artemsheludko](https://github.com/artemsheludko) one [![Buy artemsheludko A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/artemsheludko) ! Every five cups of coffee and a new theme for Jekyll is ready 😋
