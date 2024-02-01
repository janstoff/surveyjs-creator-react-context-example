# SurveyJS ReactJS context example

This project serves as an example to explain how ReactJS context can mess with SurveyJS' mobile
version. At least as viewed in developer tools in Google Chrome.

## How to observe the behaviour

Run `yarn && yarn dev` to serve the project to localhost.

In both the development modes of Google Chrome and Safari when using a mobile view a resizing seems
to be happening that breaks the mobile optimized view of the integrated SurveyJS creator.

If you remove all the TranslationContext-related parts from `src/SurveyJSCreator.tsx` this buggy
behaviour does not occur.
