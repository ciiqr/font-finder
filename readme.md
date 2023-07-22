# font-finder

## Local dev

-   `./bin/dev initial setup`
-   `dev start`

## fonts included (all variable fonts that include the latin-extended character set)

```bash
git clone https://github.com/fontsource/font-files
cd font-files
jq '. | select(.variable and (.subsets[] | contains ("latin-ext")))' fonts/google/*/metadata.json | jq -r '.family'
```
