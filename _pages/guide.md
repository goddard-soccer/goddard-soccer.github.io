---
layout: page
title: Guide
permalink: /guide/
---

<style>
h3 {
    color: white;
    padding-top: 30px;
}
</style>

<div class="card mt-3 bg-theme">
<div class="card-header text-center bg-light"><h5>Guide</h5></div>
<div class="card-body" markdown=1>

### Updating scores (easy)
- Simply update the schedule csv
- Uses a day/month/year format
- Scores are added as comma separated values after the date and teams
- Can do this online easily as well

```bash
vim _data/schedule.csv
```

<div class="row px-3 text-center">
<div class="col-md-12 mt-3">
    <a type="button" class="btn bg-button col-6" href="https://github.com/goddard-soccer/goddard-soccer.github.io/blob/gh-pages/_data/schedule.csv">Link to schedule.csv on Github</a>
</div>
</div>

### Updating pages (medium)
- its easiest to update the website by cloning it and running jekyll locally for serious developers
- it can also be updated quickly via editing the site pages directly on github
- the website version control is done via git but the workflow is relatively simple and streamlined

```bash
bundle exec jekyll serve

# past this url into a web browser to view changes live before pushing
localhost:4000

git diff # check the changes you made
git add . # this adds all, you can add individual files instead
git status # check that the files are correctly added
git commit -m "update message"
git push # website will update after a few minutes once this step is performed
```

### Updating rosters (hard)
- the rosters update by downloading the sign up sheet csv from the google sheets
- then running it through the roster page generator
- I generally then use vscode's diff tool to compare the output files in `assets/docs/roster*.md` to the acutally pages in `_pages/roster*.md` (normal page and rated page)
- you can use the team generator tool to make the ratings page as well which is a hidden page that can be viewed on the localhost web server at `localhost:4000/rosters2.md`
- the rated page is git ignored on purpose, please do not upload the skill levels publically

```bash
cd assets/docs
cp ~/Downloads/*Form\ Responses*.csv teams.csv
python3 teams.py teams.csv
python3 teams.py teams.csv -r # rating page (rosters2)
# manually diff the generated files with the current roster to do final corrections
```

### Updating the schedule (medium)
- copy the output of this script into the `_data/schedule.csv` file and adjust as appropriate
- again, the shown schedule stops after a blank line or line beginning with `#`

```bash
python3 assets/docs/scheduler.py
```

### Updating the stylesheet (medium)
- the style sheet is what gives the html skeleton its color/size/etc
- sass is a preprocessor that runs once when a change is made to the sass file(s)
- sass then generates the css for you
- you can run this alongside jekyll to see the changes live

```bash
sass -w assets/css/styles.sass:assets/css/styles.css
```

### Updating the rules (medium)
- will update soon, going to change from mdbook (rust) to something in-built

```bash
# TODO
```

</div>
</div>
