# Do I need this?

This repository is intended for *software developers* who wish to modify the frontend of the FarmBot Web App or host it on their own server. **If you are not a developer**, you are highly encouraged to use the free hosted web app at [my.farmbot.io](http://my.farmbot.io/).

If you would like to report a problem with the web app, please [submit an issue](https://github.com/FarmBot/farmbot-web-frontend/issues/new).

# FarmBot Web Frontend

 This is the Javascript / HTML / CSS of the FarmBot web app. It depends on a [backend API](https://github.com/FarmBot/Farmbot-Web-API) (my.farmbot.io by default).

# Developer Setup

**[LATEST STABLE VERSION IS HERE](https://github.com/FarmBot/farmbot-web-frontend/releases)** :star: :star: :star:

0. [Install node](https://nodejs.org/en/download/) if you haven't already.
1. [Install Google Chrome](https://www.google.com/chrome/) for best app experience.
2. `git clone https://github.com/FarmBot/farmbot-web-frontend.git`
3. `cd farmbot-web-frontend`
4. `npm install`
5. `npm start`
6. Visit [http://localhost:8080/app/login](http://localhost:8080/app/login)

# Deploy to Production

**NOTE:** The [Web API](https://github.com/FarmBot/Farmbot-Web-API) deployment will automatically build the latest version of the frontend and mount it in the web server. The instructions below are intended for reference purposes, or for users who wish to host their frontend code on a different server than their API.

1. run `npm run build`
2. Copy the contents of `/app` into your webserver so that it will be accessible via `/app`.
3. Visit `/app/login` on your web server to verify installation.
4. [Submit an issue](https://github.com/FarmBot/farmbot-web-frontend/issues/new?title=Installation%20Failure) if you hit problems during the installation.

# Want to Help?

[Low Hanging Fruit](https://github.com/FarmBot/farmbot-web-frontend/search?l=typescript&q=TODO&utf8=%E2%9C%93)

# Translating the app into your language
Thanks for your interest in internationalizing the FarmBot web app! To add translations:

1. Fork this repo
2. Create a `yy.js` file in ``/public/app-resources/languages/`` where `yy` is your language's [language code](http://www.science.co.il/Language/Locale-codes.php). Eg: `ru` for Russian. If your language already has a file, then you can skip this step.
3. Search the application for calls to `t()`. Any file that imports `from "i18next"` will have strings that require translation.
4. When you have updated or added new translations, commit/push your changes and submit a pull request.
