[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/vhigor/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/vhigor/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# The Daily Globe — 23 November 2026

One dense image summing up the world news of Monday 23 November 2026,
drawn as a newspaper front page — **50 sourced stories**, a **UTC timeline**
of the day, and a visible **date check**:

- **Nvidia reinstates Huang as CEO; shares jump about 33%** — the board
  unanimously reinstated Jensen Huang 11 days after he resigned; the Nasdaq
  gained 6.5% and the S&P 500 rose 4.73% as US stocks rebounded.
- **Iran vows to use all means against the US naval blockade** — Iranian
  media reported three tankers exploded after hitting mines in the Strait
  of Hormuz; Trump said Iran's attacks had done no damage.
- **Ukraine says it sank the Russian corvette Merkury at Benghazi** —
  seven naval drones sank the corvette at the Libyan port and hit a cargo
  ship; ten people were injured.
- **Spain grants Puigdemont amnesty** — the Supreme Court ended the case
  over the 2017 independence declaration; he may return but said not
  before the elections, a week away.
- **Liverpool beat Manchester United 4-0** — Mauricio Pochettino lost his
  first game as United manager 4-0 at Liverpool.

Plus 45 more, across diplomacy, war, markets, disasters, science and
sport — every story numbered and sourced on the page.

## Run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies the finished front page to
`/output/entry.png`, deterministically, and verifies the copy by size, sha256
and PNG signature. `tools/render.mjs` draws `src/frontpage.html` at 1024×1024
with headless Chromium and refuses to save a page that runs past the frame.

## Sources

One Turn day digest for 23 Nov 2026 (https://oneturn.news/day/2026-11-23/),
naming BBC, Al Jazeera, France 24, Guardian, CNBC, UPI, SCMP and the other
outlets credited on each story — all stories dated 23 November 2026,
researched 24 November 2026.

## Verification

Every headline on the page was checked against the day's reporting before it
went in. The load-bearing figures were re-checked against the research brief:

- Nvidia (France 24 / CNBC / Guardian): board reinstated Huang unanimously,
  11 days after his resignation; shares rose more than 30%, Nasdaq +6.5%,
  S&P 500 +4.73%; Trump said he made the deal.
- Hormuz (CBS / Al Jazeera / NZZ): Iran vowed to end the blockade by all
  available means; three tankers reported exploded after hitting mines.
- Merkury (BBC / France 24 / Guardian): seven naval drones, corvette sunk
  at Benghazi, cargo ship hit, ten injured.
- Dymer (BBC / Euronews): at least 11 dead; a 7-year-old boy and a
  79-year-old woman pulled alive, the woman trapped 22 hours.
- Banten fire (Guardian / Sky News / Euronews): 24 dead, about 34 missing.
- CrowdStrike–Zscaler (CNBC): $44 billion deal agreed.
- Women's World Cup (PBS / CBS / Africanews): US, Mexico, Costa Rica and
  Jamaica host 2031; UK hosts 2035 — confirmation of both.

## Stories included (50)

Lead: Nvidia reinstates Huang. Politics: Iran blockade, Trump–Putin
'my friend', NATO Berlin, EU 22nd sanctions, US shadow-banking sanctions,
Nepal PM in India, Kenya–DR Congo ties, Puigdemont amnesty, Burnham on EU
ties, Tajikistan leaves the ICC, Poland on the rapper plot, Colombia asks X
to suspend Petro. War: Merkury sunk, Dymer toll 11, Houthi refinery claim,
Oxfam on Gaza, Eisenkot and Herzog condemn settler arson, Sparta II drone
hit, South Sudan attack, Ahmadi flogging. Markets: US stocks rebound, oil
slides nearly 4%, European gas +8.6%, CrowdStrike buys Zscaler,
ConocoPhillips exits Norway, Capita plunges 70%, Tata Steel buys into APL
Apollo, Brazil cuts growth forecast, Australia warns on unemployment.
Disasters, health & tech: Banten fire, Belgian strike, Brazil storm,
California concert shooting, Manchester evacuation, pancreatic cancer drug,
blood-pressure drug, thumb implant, Grok lawsuits, Megaspeed blacklisted.
Science, culture & sport: Mariana Trench volcanoes, Aride tortoises,
Tamagotchi at 30, Prodigy snail, Chernobyl fungus, Women's World Cup
hosts, Liverpool 4-0 United, Simeone's 345th win, Goldschmidt to the Mets,
Penge wins the RSM Classic.

## Stories dropped (from the ~85 in the research brief)

- Democrats' 12 primary debates, Albanese defends Bowen, school bomb
  threats in Germany and Denmark, ICE arrests at Seattle airport, DoJ admits
  a US citizen was deported, Trump defers on the Iowa explosives, Hong Kong
  names a hospital chief, Mexico–China trade group, Google geothermal deal,
  Pakistan gold prices, New York caps Citi Bike prices, Zipline hires an
  Uber executive — real 23 Nov stories cut for space; the page had 50 slots.
- EU–Rwanda deportation centres (confirmation only), BepiColombo Mercury
  orbit (confirmed arrival), Shuri Castle public opening, UK 2035 World Cup
  as a standalone — follow-ups of stories already covered in the 21/22 Nov
  editions; the genuinely new detail is folded into the 23 Nov story where
  it belongs (Women's World Cup confirmation).
- COP31 fallout, Democrats' House majority, Likud–Yashar talks, Korea
  minister resigns, Mongolia snap vote, Alcaraz, Márquez, Boca Juniors,
  Skubal's $450m deal, Thitikul, Princess Kate, Molly Meldrum, Milky Way
  simulation — covered in the 21/22 Nov editions; the 23 Nov digest restates
  them with no new fact.

Referral code: `p26b6feq`
