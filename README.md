# Bruno Calmon's portfolio

Static personal website published at <https://brunocalmon.github.io/>.

## Run locally

Requirements: Node.js 22.15 or newer, npm, GNU Make, `setsid`, and `curl`.

Install dependencies once:

```sh
npm ci
```

Start and stop the local development server:

```sh
make start
make stop
```

The site is available at <http://127.0.0.1:8080>. The server log is `.dev-server.log`; the PID file is `.dev-server.pid`. To use a different port, start it with `make start PORT=3000`.

## Build

```sh
make build
```

Edit page content in `index.html`, styles in `scss/styles.scss`, and behavior in `src/main.ts`. The pull request workflow runs the build. Pushes to `master` build and publish the static site to GitHub Pages.
