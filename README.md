# Description

A portfolio website project. Automatically pull GitHub repos to your portfolio site.  
Displays repo **language**, **description**, **gihub-link** and **live project status** with link in the 'project-card'.

## Live

[www.terohyttinen.com](https://www.terohyttinen.com)

## Dynamic showcase of GitHub projects

- Requires `portfolio.json` config file at project root
- Uses [Github API](https://developer.github.com/v3/)

## Live project showcase

- Showcase a html file
- Or link to live project resource

#### Portfolio.json

##### Example format to display html file:

```
{ "data":
  {
    "live": {
      "status": true,
      "files": ["FILEURL"]
    }
  }
}
```

`Example FILEURL = https://github.com/Tehy/game_of_life/blob/master/game_of_life_js.html`

##### Example format to link to external site:

```
{ "data":
  {
    "live": {
      "status": true,
      "link": "https://link-to-project"
    }
  }
}
```

## Contact form

- [Sendgrid](https://sendgrid.com/)

## Used tech

- Node.js
- Express.js
- React.js
- Github API
- Sendgrid web API

## Note

This is my introductory node project, contains silly code
