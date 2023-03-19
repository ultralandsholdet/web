# Ultralandsholdetets public web



### Links

* [Original README](README.org.md)
* Template: [gatsby-starter-netlify-cms](https://www.gatsbyjs.com/starters/netlify-templates/gatsby-starter-netlify-cms/)

### Udvikler detaljer

```bash
# Create web from template
gatsby new ultralandsholdet https://github.com/netlify-templates/gatsby-starter-netlify-cms

# You need netlify to run
npm install netlify-cli -g
ntl -v
# netlify-cli/13.1.6 win32-x64 node-v18.15.0

# run locally
cd ultralandsholdet
gatsby develop

# or start it with netlify development server
netlify dev
# or ntl dev
```

#### Issues

##### Field “image” must not have a selection since type “String” has no subfields

The issue can be resolved with a plugin

```bash
npm install --save gatsby-plugin-netlify-cms-paths
```

And add it to `gatsby-config.js`

```js
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        // Path to your Netlify CMS config file
        cmsConfig: `/static/admin/config.yml`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
    }
```

Links

* https://stackoverflow.com/a/62748706/750989
* https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify-cms-paths/
* https://www.gatsbyjs.com/docs/how-to/local-development/troubleshooting-common-errors/#field-image-must-not-have-a-selection-since-type-string-has-no-subfields

.
