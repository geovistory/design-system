import { version } from '../../../package.json';
export const html5Cdn = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@geovistory/design-system-web@${version}/dist/design-system-web/design-system-web.css" />
    <script type="module"
        src="https://cdn.jsdelivr.net/npm/@geovistory/design-system-web@${version}/dist/design-system-web/design-system-web.esm.js"></script>
    <script nomodule
        src="https://cdn.jsdelivr.net/npm/@geovistory/design-system-web@${version}/dist/design-system-web/design-system-web.js"></script>
</head>

<body>
    <geov-explorer sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-explorer>
</body>

</html>`;
export const html5NodeModules = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@geovistory/design-system-web@${version}/dist/design-system-web/design-system-web.css" />
    <script type="module"
        src="https://cdn.jsdelivr.net/npm/@geovistory/design-system-web@${version}/dist/design-system-web/design-system-web.esm.js"></script>
    <script nomodule
        src="https://cdn.jsdelivr.net/npm/@geovistory/design-system-web@${version}/dist/design-system-web/design-system-web.js"></script>
</head>

<body>
    <geov-explorer sparql-endpoint="https://sparql.geovistory.org/api_v1_community_data"></geov-explorer>
</body>

</html>`;

export const startScript = `
// package.json

"scripts": {
    ...,
    "start": "http-server"
}`;
