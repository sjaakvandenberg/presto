# Presto

Presto is a presentation template written in Jade and Stylus that uses Gulp
to produce modern HTML5 and CSS3. Additional features include asset
minification, image compression and is served using Browsersync.

| File                             | Description                      |
|:---------------------------------|:---------------------------------|
| `./source/index.jade`            | Main template                    |
| `./source/template/_slides.jade` | Contains the actual presentation |
| `./source/template/_mixins.jade` | Mixins for slide conventions     |
| `./source/styles/main.styl`      | Stylus file for styling          |
| `./source/styles/_fonts.styl`    | Font definitions                 |
| `./source/styles/_monokai.styl`  | HightlightJS theme               |
| `./scripts/main.js`              | Slide navigation                 |
| `./scripts/vendor/`              | Vendor scripts                   |
| `./scripts/images/`              | Various backgrounds              |
| `./scripts/fonts/`               | Woff & woff2 fonts               |

## Gulp

| Command                        | Description                      |
|:-------------------------------|:---------------------------------|
| `gulp clean`                   | Nuke the `./public` directory    |
| `gulp minify`                  | Minify assets                    |
| `gulp`                         | Generate and serve               |

For more information, see the comments in `gulpfile.js`.
