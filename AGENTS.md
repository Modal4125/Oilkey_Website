## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Git commits

Author every commit as the repository owner, not as Claude. At the start of a session, before the first commit, run:

```
git config user.name "Modal4125"
git config user.email "modal4125912@protonmail.com"
```

Do not add `Co-Authored-By` or `Claude-Session` lines to commit messages. Vercel deploys merges to `main` automatically when the commits are authored by Modal4125; a merge of Claude-authored commits was not deployed and had to be redeployed by hand.
