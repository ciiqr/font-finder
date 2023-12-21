# font-finder

## Local dev

-   `./bin/dev initial setup`
-   run the following commands AND append to your shell configs (ie. `~/.zshrc`
    or `~/.bashrc`/`~/.bash_profile`)

```bash
eval "$(rtx activate zsh)"
# or for bash
# eval "$(rtx activate bash)"
```

-   (optionally) configure rtx: `~/.config/rtx/config.toml`

```toml
[settings]
trusted_config_paths = ["~/Projects"] # where ~/Projects is wherever you clone your repos
```

-   `dev start`

## fonts included (all variable fonts that include the latin-extended character set)

```bash
git clone https://github.com/fontsource/font-files
cd font-files
jq '. | select(.variable and (.subsets[] | contains ("latin-ext")))' fonts/google/*/metadata.json | jq -r '.family'
```
