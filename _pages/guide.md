---
layout: page
title: Guide
permalink: /guide/
---

<div class="card mt-3 bg-theme">
<div class="card-header text-center bg-light"><h5>Guide</h5></div>
<div class="card-body" markdown=1>

- Updating scores (easy)
```bash
vim _data/schedule.csv
# 
# can do this online super easily as well
```

- Updating the homepage (medium)
```bash
# TODO
```

- Updating the schedule (medium)
```bash
# TODO
```

- Updating rosters (hard)
```bash
cd assets/docs
cp ~/Downloads/*.csv teams.csv
python3 teams.py teams.csv
python3 teams.py teams.csv -r # rating page
# manually diff the generated files with the current roster to do final corrections
```

- Updating the rules (medium)
```bash
# TODO
```

- Updating the schedule (medium)
```bash
# TODO
```

</div>
</div>
