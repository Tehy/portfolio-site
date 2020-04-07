# My portfolio site

[www.terohyttinen.com](https://www.terohyttinen.com)

## Dynamic showcase projects from github

- [Github API](https://developer.github.com/v3/)
- Requires `portfolio.json` config file at project root

## Dynamic live project showcase

Current feature:- single valid html file - configuration in `portfolio.json`

### Portfolio.json

Configuration file to pull repo info to showcase in portfolio site.  
Format

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

`example FILEURL = https://github.com/Tehy/game_of_life/blob/master/game_of_life_js.html`

## Contact form

- [Sendgrid](https://sendgrid.com/)

## Used tech

-Node.js -Express.js -React.js -Github API -Sendgrid web API
