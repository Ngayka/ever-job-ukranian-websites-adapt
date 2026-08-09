# Source Catalog Review

Generated from every `packages/plugins/source-*` package by reading its `@SourcePlugin` decorator and checking package role, constants/endpoints, and scraper intent. `OTHER` is deliberately used when company-feed geography cannot be established from repository evidence; headquarters location is not substituted.

## 1. Загальна кількість знайдених джерел

- Packages found: **1809**
- Catalog records: **1809**
- Unique Site.* values: **1809**
- Enabled for bot: **1630**

## 2. Кількість джерел за `SourceType`

| SourceType | Count |
| --- | ---: |
| JOB_BOARD | 41 |
| COMPANY | 1523 |
| REMOTE_JOB_BOARD | 13 |
| GOVERNMENT | 8 |
| FREELANCE | 2 |
| NICHE | 43 |
| GENERIC_ADAPTER | 179 |
| UNKNOWN | 0 |

## 3. Кількість джерел за `Region`

| Region | Count |
| --- | ---: |
| UKRAINE | 4 |
| EUROPE | 21 |
| NORTH_AMERICA | 20 |
| ASIA | 9 |
| WORLDWIDE | 138 |
| OTHER | 1617 |

### MVP whitelist summary

- Recommended sources: **40**

| Region | Recommended |
| --- | ---: |
| UKRAINE | 4 |
| EUROPE | 6 |
| NORTH_AMERICA | 5 |
| ASIA | 6 |
| WORLDWIDE | 19 |
| OTHER | 0 |

| SourceType | Recommended |
| --- | ---: |
| JOB_BOARD | 24 |
| COMPANY | 10 |
| REMOTE_JOB_BOARD | 4 |
| GOVERNMENT | 1 |
| FREELANCE | 0 |
| NICHE | 1 |
| GENERIC_ADAPTER | 0 |
| UNKNOWN | 0 |

Priority tiers: **100** = core verified source, **75** = additional stable source, **50** = experimental source. All other records have priority **0**.

## 4. Джерела з `low` або `medium` confidence

There are **1439** medium-confidence and **0** low-confidence records. The medium-confidence set consists of company career sources whose geographic reach is not encoded reliably (classified as OTHER), plus API-oriented or region-ambiguous independent sources. The exhaustive record-level list is below.

| Site | Package | Region | SourceType | Reason |
| --- | --- | --- | --- | --- |
| ABBY_CARE | source-company-abbycare | OTHER | COMPANY | Abby Care is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ABERCROMBIE_FITCH_CO | source-company-abercrombiefitchco | OTHER | COMPANY | Abercrombie & Fitch Co. is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ABNORMALSECURITY | source-company-abnormalsecurity | OTHER | COMPANY | Abnormal Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ABOVE_LENDING | source-company-abovelending | OTHER | COMPANY | Above Lending is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ABRIDGE | source-company-abridge | OTHER | COMPANY | Abridge is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ABSCI | source-company-absci | OTHER | COMPANY | Absci is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACCELA | source-company-accela | OTHER | COMPANY | Accela is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACCUWEATHER | source-company-accuweather | OTHER | COMPANY | AccuWeather is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACHIEVE | source-company-achieve | OTHER | COMPANY | Achieve is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACILEARNING | source-company-acilearning | OTHER | COMPANY | ACI Learning is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACKERMANNGROUP | source-company-ackermanngroup | OTHER | COMPANY | Ackermann Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACLU | source-company-aclu | OTHER | COMPANY | ACLU is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACOG | source-company-acog | OTHER | COMPANY | ACOG is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACOMMERCE | source-company-acommerce | OTHER | COMPANY | aCommerce is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACP | source-company-acp | OTHER | COMPANY | ACP is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACQUIA | source-company-acquia | OTHER | COMPANY | Acquia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACRISUREINNOVATION | source-company-acrisureinnovation | OTHER | COMPANY | Acrisure Innovation is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACRYLDATA | source-company-acryldata | OTHER | COMPANY | Acryl Data is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACTIAN | source-company-actian | OTHER | COMPANY | Actian is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACUMEN | source-company-acumen | OTHER | COMPANY | Acumen is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ACURUSSOLUTIONS | source-company-acurussolutions | OTHER | COMPANY | Acurus Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADAPTIVEBIOTECHNOLOGIES | source-company-adaptivebiotechnologies | OTHER | COMPANY | Adaptive Biotechnologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADAPTIVEFINANCIALCONSULTING | source-company-adaptivefinancialconsulting | OTHER | COMPANY | Adaptive Financial Consulting is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADAPTIVE_SECURITY | source-company-adaptivesecurity | OTHER | COMPANY | Adaptive Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADCOUNCIL | source-company-adcouncil | OTHER | COMPANY | the Ad Council is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADDEPAR1 | source-company-addepar1 | OTHER | COMPANY | Addepar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADELPHIRESEARCH | source-company-adelphiresearch | OTHER | COMPANY | Adelphi Research is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADITI_STAFFING | source-company-aditistaffing | OTHER | COMPANY | Aditi Staffing is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADVANCEDSPACE | source-company-advancedspace | OTHER | COMPANY | Advanced Space is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADVANCEDTECHNOLOGYSERVICES | source-company-advancedtechnologyservices | OTHER | COMPANY | Advanced Technology Services is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ADVOCATECONSTRUCTION | source-company-advocateconstruction | OTHER | COMPANY | Advocate Construction is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AEC | source-company-aec | OTHER | COMPANY | AEC is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AECHELONTECHNOLOGY | source-company-aechelontechnology | OTHER | COMPANY | Aechelon Technology is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AEGISVENTURES | source-company-aegisventures | OTHER | COMPANY | Aegis Ventures is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AEROSPIKE | source-company-aerospike | OTHER | COMPANY | Aerospike is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AEROVECT | source-company-aerovect | OTHER | COMPANY | AeroVect is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AESTUDIO | source-company-aestudio | OTHER | COMPANY | AE Studio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AEVEX_AEROSPACE | source-company-aevexaerospace | OTHER | COMPANY | AEVEX Aerospace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AFFINIDI | source-company-affinidi | OTHER | COMPANY | Affinidi is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AFFINITY | source-company-affinity | OTHER | COMPANY | Affinity.co is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AFFIRM | source-company-affirm | OTHER | COMPANY | Affirm is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AFRESH | source-company-afresh | OTHER | COMPANY | Afresh is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AG1 | source-company-ag1 | OTHER | COMPANY | AG1 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AGEBOLD | source-company-agebold | OTHER | COMPANY | Age Bold is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AGECAREERS | source-company-agecareers | OTHER | COMPANY | AGE Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AGENCYWITHIN | source-company-agencywithin | OTHER | COMPANY | WITHIN is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AGILISYS | source-company-agilisys | OTHER | COMPANY | Agilisys is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AGILITY_ROBOTICS | source-company-agilityrobotics | OTHER | COMPANY | Agility Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AGILOFT | source-company-agiloft | OTHER | COMPANY | Agiloft is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AGILYSYS | source-company-agilysys | OTHER | COMPANY | Agilysys is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AGWESTFARMCREDIT | source-company-agwestfarmcredit | OTHER | COMPANY | AgWest Farm Credit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AHREFSJOBS | source-company-ahrefsjobs | OTHER | COMPANY | Ahrefs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIFT | source-company-aift | OTHER | COMPANY | AIFT is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIKIDO_SECURITY | source-company-aikidosecurity | OTHER | COMPANY | Aikido Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIM_INTELLIGENT_MACHINES | source-company-aimintelligentmachines | OTHER | COMPANY | AIM Intelligent Machines is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIRBYTE | source-company-airbyte | OTHER | COMPANY | Airbyte is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIRCALL | source-company-aircall | OTHER | COMPANY | Aircall is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIR_COMPANY | source-company-aircompany | OTHER | COMPANY | AIR COMPANY is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIRIA | source-company-airia | OTHER | COMPANY | Airia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIR_NEW_ZEALAND | source-company-airnewzealand | OTHER | COMPANY | Air New Zealand is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIRNORTH | source-company-airnorth | OTHER | COMPANY | Air North is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIRSCULPT | source-company-airsculpt | OTHER | COMPANY | AirSculpt is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIRSPACE | source-company-airspace | OTHER | COMPANY | Airspace  is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIRTABLE | source-company-airtable | OTHER | COMPANY | Airtable is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AIRTRUNK | source-company-airtrunk | OTHER | COMPANY | AirTrunk is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AISERAJOBS | source-company-aiserajobs | OTHER | COMPANY | Aisera is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AISQUARED | source-company-aisquared | OTHER | COMPANY | AI Squared is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AKAYSHA_ENERGY | source-company-akayshaenergy | OTHER | COMPANY | Akaysha Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AKIDOLABS | source-company-akidolabs | OTHER | COMPANY | Akido is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AKKO | source-company-akko | OTHER | COMPANY | AKKO is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AKOYA | source-company-akoya | OTHER | COMPANY | Akoya is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AKUITY | source-company-akuity | OTHER | COMPANY | Akuity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALAMARBIOSCIENCES | source-company-alamarbiosciences | OTHER | COMPANY | Alamar Biosciences is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALARMCOM | source-company-alarmcom | OTHER | COMPANY | Alarm.com is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALBEDO | source-company-albedo | OTHER | COMPANY | Albedo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALERTMEDIA | source-company-alertmedia | OTHER | COMPANY | AlertMedia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALIGN | source-company-align | OTHER | COMPANY | A-LIGN External is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALIGN46 | source-company-align46 | OTHER | COMPANY | Align Communications is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLCAREERS | source-company-allcareers | OTHER | COMPANY | Cortica - Neurodevelopmental is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLEGIS_GLOBAL_SOLUTIONS | source-company-allegisglobalsolutions | OTHER | COMPANY | Allegis Global Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLENCONTROLSYSTEMS | source-company-allencontrolsystems | OTHER | COMPANY | Allen Control Systems is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLENINTEGRATEDSOLUTIONS | source-company-allenintegratedsolutions | OTHER | COMPANY | Allen Integrated Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLIANCEDEFENDINGFREEDOM | source-company-alliancedefendingfreedom | OTHER | COMPANY | Alliance Defending Freedom is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLINC | source-company-allinc | OTHER | COMPANY | Aspire Living & Learning  is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLIUM | source-company-allium | OTHER | COMPANY | Allium is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLOY | source-company-alloy | OTHER | COMPANY | Alloy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLWEBLEADS | source-company-allwebleads | OTHER | COMPANY | AWL is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALLYBEHAVIORCENTERS | source-company-allybehaviorcenters | OTHER | COMPANY | Ally Behavior Centers is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALMA | source-company-alma | OTHER | COMPANY | Alma is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALNYLAM_PHARMACEUTICALS | source-company-alnylampharmaceuticals | OTHER | COMPANY | Alnylam Pharmaceuticals is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALO_YOGA | source-company-aloyoga | OTHER | COMPANY | Alo Yoga is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALPACA | source-company-alpaca | OTHER | COMPANY | Alpaca  is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALPADIA_LANGUAGE_SCHOOLS | source-company-alpadialanguageschools | OTHER | COMPANY | Alpadia Language Schools is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALPHACOMM | source-company-alphacomm | OTHER | COMPANY | Alphacomm is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALPHAFMC | source-company-alphafmc | OTHER | COMPANY | Alpha FMC - UK  is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALPHAFMCROLES | source-company-alphafmcroles | OTHER | COMPANY | Alpha Financial Markets Consulting is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALPHAGREPSECURITIES | source-company-alphagrepsecurities | OTHER | COMPANY | AlphaGrep Securities is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALPHASENSE | source-company-alphasense | OTHER | COMPANY | AlphaSense is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALPHASENSEINDIA | source-company-alphasenseindia | OTHER | COMPANY | AlphaSense India is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALT | source-company-alt | OTHER | COMPANY | Alt is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALTANAAI | source-company-altanaai | OTHER | COMPANY | Altana  is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALTEN | source-company-alten | OTHER | COMPANY | ALTEN is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALTENTECHNOLOGYUSA | source-company-altentechnologyusa | OTHER | COMPANY | ALTEN Technology USA is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALTIUM | source-company-altium | OTHER | COMPANY | Altium is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALTOSLABS | source-company-altoslabs | OTHER | COMPANY | Altos Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALTRUIST | source-company-altruist | OTHER | COMPANY | Altruist is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALTSCORE | source-company-altscore | OTHER | COMPANY | AltScore is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALU | source-company-alu | OTHER | COMPANY | ALU is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALUMNIVENTURES | source-company-alumniventures | OTHER | COMPANY | Alumni Ventures is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALVEOLE | source-company-alveole | OTHER | COMPANY | Alveole is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ALXAFRICA | source-company-alxafrica | OTHER | COMPANY | ALX Africa is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMAEHEALTH | source-company-amaehealth | OTHER | COMPANY | Amae Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMAROK | source-company-amarok | OTHER | COMPANY | AMAROK is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMBIENTENTERPRISES | source-company-ambiententerprises | OTHER | COMPANY | Ambient Enterprises is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMCA | source-company-amca | OTHER | COMPANY | Amca is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMENDCONSULTING | source-company-amendconsulting | OTHER | COMPANY | AMEND Consulting is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMERICANCAPITALGROUP | source-company-americancapitalgroup | OTHER | COMPANY | American Capital Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMERICANINSTITUTE | source-company-americaninstitute | OTHER | COMPANY | American Institute is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMERICANINSTITUTESFORRESEARCH | source-company-americaninstitutesforresearch | OTHER | COMPANY | American Institutes for Research is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMOUNT | source-company-amount | OTHER | COMPANY | FISÂ® Amountâ„¢ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMPERITY | source-company-amperity | OTHER | COMPANY | Amperity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMPLITUDE | source-company-amplitude | OTHER | COMPANY | Amplitude is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMTECHSOFTWARE | source-company-amtechsoftware | OTHER | COMPANY | Amtech Software is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMWELL | source-company-amwell | OTHER | COMPANY | Amwell is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AMYLYX | source-company-amylyx | OTHER | COMPANY | Amylyx Pharmaceuticals is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANAGRAM | source-company-anagram | OTHER | COMPANY | Anagram is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANALYTIC_PARTNERS | source-company-analyticpartners | OTHER | COMPANY | Analytic Partners is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANAPLAN | source-company-anaplan | OTHER | COMPANY | Anaplan is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANATAR | source-company-anatar | OTHER | COMPANY | Anatar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANCHANTO | source-company-anchanto | OTHER | COMPANY | Anchanto is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANCHORAGE_DIGITAL | source-company-anchorage | OTHER | COMPANY | Anchorage Digital is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANDURIL_INDUSTRIES | source-company-andurilindustries | OTHER | COMPANY | Anduril Industries is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANIMALMEDICALCENTER | source-company-animalmedicalcenter | OTHER | COMPANY | Schwarzman Animal Medical Center is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANINEBING | source-company-aninebing | OTHER | COMPANY | ANINE BING is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANSA | source-company-ansa | OTHER | COMPANY | Ansa is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANTARES_ANTARES_INDUSTRIES | source-company-antaresantaresindustries | OTHER | COMPANY | Antares (Antares Industries) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANTARES_INDUSTRIES | source-company-antaresindustries | OTHER | COMPANY | Antares Industries is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANTENNA | source-company-antenna | OTHER | COMPANY | Antenna is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANTERIAD | source-company-anteriad | OTHER | COMPANY | Anteriad  is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANTERISTECH | source-company-anteristech | OTHER | COMPANY | Anteris Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANTORA | source-company-antora | OTHER | COMPANY | Antora Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ANYBOTICS | source-company-anybotics | OTHER | COMPANY | ANYbotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AOTI | source-company-aoti | OTHER | COMPANY | AOTI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APALEO | source-company-apaleo | OTHER | COMPANY | Apaleo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APARTMENTLIFE | source-company-apartmentlife | OTHER | COMPANY | Apartment Life is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APERAAIINC | source-company-aperaaiinc | OTHER | COMPANY | Apera AI Inc is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APERIASOLUTIONS | source-company-aperiasolutions | OTHER | COMPANY | Aperia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APEXCOMPANIES | source-company-apexcompanies | OTHER | COMPANY | Apex Companies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APEXCOMPANIESCSW | source-company-apexcompaniescsw | OTHER | COMPANY | Apex Companies - CSW is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APIIRO | source-company-apiiro | OTHER | COMPANY | Apiiro is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APIPHANI | source-company-apiphani | OTHER | COMPANY | apiphani is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APLAYERS | source-company-aplayers | OTHER | COMPANY | MrBeast Contract Jobs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APOGEETHERAPEUTICS | source-company-apogeetherapeutics | OTHER | COMPANY | Apogee Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APOLLOBEHAVIORSERVICES | source-company-apollobehaviorservices | OTHER | COMPANY | Apollo Behavior  is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APOLLOIO | source-company-apolloio | OTHER | COMPANY | Apollo.io is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APPARATUS | source-company-apparatus | OTHER | COMPANY | APPARATUS is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APPDIRECT | source-company-appdirect | OTHER | COMPANY | AppDirect is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APPFIRE | source-company-appfire | OTHER | COMPANY | Appfire is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APPIAN | source-company-appian | OTHER | COMPANY | Appian Corporation  is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APPIER | source-company-appier | OTHER | COMPANY | Appier is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APPLETREEPREP | source-company-appletreeprep | OTHER | COMPANY | AppleTree Prep is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APPLIED_INTUITION | source-company-appliedintuition | OTHER | COMPANY | Applied Intuition is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APPLYTOAKTOS | source-company-applytoaktos | OTHER | COMPANY | Aktos is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| APPTRONIK | source-company-apptronik | OTHER | COMPANY | Apptronik is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AQEMIA | source-company-aqemiacom | OTHER | COMPANY | Aqemia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARBOR_ENERGY | source-company-arborenergy | OTHER | COMPANY | Arbor Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARC_INSTITUTE | source-company-arcinstitute | OTHER | COMPANY | Arc Institute is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARC_TERYX | source-company-arcteryxcom | OTHER | COMPANY | Arc\ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARETE_TECHNOLOGIES | source-company-aretetechnologies | OTHER | COMPANY | Arete Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARISTA_NETWORKS | source-company-aristanetworks | OTHER | COMPANY | Arista Networks is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARLO | source-company-arlo | OTHER | COMPANY | Arlo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARMIS | source-company-armissecurity | OTHER | COMPANY | Armis is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARRAY_LABS | source-company-arraylabsio | OTHER | COMPANY | Array Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARRIVE_LOGISTICS | source-company-arrivelogistics | OTHER | COMPANY | Arrive Logistics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARTECH | source-company-artech | OTHER | COMPANY | Artech is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARTELIA | source-company-artelia | OTHER | COMPANY | Artelia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ARTERA | source-company-artera | OTHER | COMPANY | Artera is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASAPP | source-company-asapp2 | OTHER | COMPANY | ASAPP is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASIMOV | source-company-asimov | OTHER | COMPANY | Asimov is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASK_IT_CONSULTING | source-company-askitconsulting | OTHER | COMPANY | Ask IT Consulting is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASPORA | source-company-aspora | OTHER | COMPANY | Aspora is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASSEMBLYAI | source-company-assemblyai | OTHER | COMPANY | AssemblyAI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASSENT | source-company-assent | OTHER | COMPANY | Assent is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASSURED | source-company-assured | OTHER | COMPANY | Assured is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASSYSTEM | source-company-assystem | OTHER | COMPANY | Assystem is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASTRANIS | source-company-astranis | OTHER | COMPANY | Astranis is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ASTRA_SECURITY | source-company-astrasecurity | OTHER | COMPANY | Astra Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AST_SPACEMOBILE | source-company-astspacemobile | OTHER | COMPANY | AST SpaceMobile is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ATACCAMA | source-company-ataccama | OTHER | COMPANY | Ataccama is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AT_BAY | source-company-atbayjobs | OTHER | COMPANY | At-Bay is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ATOMIC_MACHINES | source-company-atomicmachines | OTHER | COMPANY | Atomic Machines is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ATOMS_TECH | source-company-atoms | OTHER | COMPANY | Atoms Tech is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ATRIA_GROUP | source-company-atriagroup | OTHER | COMPANY | Atria Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ATTENTIVE | source-company-attentive | OTHER | COMPANY | Attentive is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AUBERGE_RESORTS_COLLECTION | source-company-aubergeresortscollection | OTHER | COMPANY | Auberge Resorts Collection is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AUGURY | source-company-augury | OTHER | COMPANY | Augury is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AURA | source-company-aura | OTHER | COMPANY | Aura is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AURORA_INNOVATION | source-company-aurorainnovation | OTHER | COMPANY | Aurora Innovation is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AURORA_SOLAR | source-company-aurorasolar | OTHER | COMPANY | Aurora Solar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AVALERE_HEALTH | source-company-avalerehealth | OTHER | COMPANY | Avalere Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AVALOQ | source-company-avaloq | OTHER | COMPANY | Avaloq is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AVANCE_CONSULTING_SERVICES | source-company-avanceconsultingservices | OTHER | COMPANY | Avance Consulting Services is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AVANTUS | source-company-avantus | OTHER | COMPANY | Avantus is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AVIV_GROUP | source-company-avivgroup | OTHER | COMPANY | AVIV Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AVRIDE | source-company-avride | OTHER | COMPANY | Avride is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AXIOM | source-company-axiom | OTHER | COMPANY | Axiom is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AXLE_ENERGY | source-company-axleenergy | OTHER | COMPANY | Axle Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AXON | source-company-axon | OTHER | COMPANY | Axon is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AXONIUS | source-company-axonius | OTHER | COMPANY | Axonius is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| AZUMUTA | source-company-azumuta | OTHER | COMPANY | Azumuta is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BANDWIDTH | source-company-bandwidth | OTHER | COMPANY | Bandwidth is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BANNER_BANK | source-company-bannerbank | OTHER | COMPANY | Banner Bank is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BANYAN_INFRASTRUCTURE | source-company-banyaninfrastructure | OTHER | COMPANY | Banyan Infrastructure is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BASE_POWER_COMPANY | source-company-basepowercompany | OTHER | COMPANY | Base Power Company is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BASETEN | source-company-baseten | OTHER | COMPANY | Baseten is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BCFORWARD | source-company-bcforward | OTHER | COMPANY | BCforward is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BEAM | source-company-beam | OTHER | COMPANY | BEAM is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BEAM_THERAPEUTICS | source-company-beamtherapeutics | OTHER | COMPANY | Beam Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BEDROCK_ROBOTICS | source-company-bedrockrobotics | OTHER | COMPANY | Bedrock Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BELIEVE | source-company-believe | OTHER | COMPANY | Believe is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BENEVITY | source-company-benevity | OTHER | COMPANY | Benevity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BENUTA | source-company-benuta | OTHER | COMPANY | benuta is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BETTERHELP | source-company-betterhelp | OTHER | COMPANY | BetterHelp is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BETTERMENT | source-company-betterment | OTHER | COMPANY | Betterment is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BICARA_THERAPEUTICS | source-company-bicaratherapeutics | OTHER | COMPANY | Bicara Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BICYCLE_HEALTH | source-company-bicyclehealth | OTHER | COMPANY | Bicycle Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BIGID | source-company-bigid | OTHER | COMPANY | BigID is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BILLCOM | source-company-billcom | OTHER | COMPANY | BILL is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BIOAGILYTIX | source-company-bioagilytix | OTHER | COMPANY | BioAgilytix is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BIRD | source-company-bird | OTHER | COMPANY | Bird is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BITGO | source-company-bitgo | OTHER | COMPANY | BitGo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BITPANDA | source-company-bitpanda | OTHER | COMPANY | Bitpanda is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BITSO | source-company-bitso | OTHER | COMPANY | Bitso is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BITWARDEN | source-company-bitwarden | OTHER | COMPANY | Bitwarden is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BLACKSKY_TECHNOLOGY | source-company-blacksky | OTHER | COMPANY | BlackSky Technology is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BLEND | source-company-blend | OTHER | COMPANY | Blend is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BLOCKCHAIN_COM | source-company-blockchain | OTHER | COMPANY | Blockchain.com is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BLOCKSTREAM | source-company-blockstream | OTHER | COMPANY | Blockstream is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BLOOMREACH | source-company-bloomreach | OTHER | COMPANY | Bloomreach is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BLOSSOM_HEALTH | source-company-blossomhealth | OTHER | COMPANY | Blossom Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BLUECRUX | source-company-bluecrux | OTHER | COMPANY | Bluecrux is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BLUE_ENERGY | source-company-blueenergy | OTHER | COMPANY | Blue Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BOBBIE | source-company-bobbie | OTHER | COMPANY | Bobbie is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BOMBAS | source-company-bombas | OTHER | COMPANY | Bombas is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BOSCH_HOME_COMFORT | source-company-boschhomecomfort | OTHER | COMPANY | Bosch Home Comfort is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BOT_AUTO | source-company-botauto | OTHER | COMPANY | Bot Auto is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BOXLUNCH_HOT_TOPIC | source-company-boxlunch | OTHER | COMPANY | BoxLunch & Hot Topic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BOYD_GAMING | source-company-boydgaming | OTHER | COMPANY | Boyd Gaming is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BRANCH | source-company-branch | OTHER | COMPANY | Branch is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BRAZE | source-company-braze | OTHER | COMPANY | Braze is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BRIGIT | source-company-brigit | OTHER | COMPANY | Brigit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BRINC | source-company-brinc | OTHER | COMPANY | BRINC is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BROOKLINEN | source-company-brooklinen | OTHER | COMPANY | Brooklinen is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BROOKS_RUNNING | source-company-brooksrunning | OTHER | COMPANY | Brooks Running is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BRUEGGER_S_BAGELS | source-company-brueggersbagels | OTHER | COMPANY | Bruegger\ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BUCK_MASON | source-company-buckmason | OTHER | COMPANY | Buck Mason is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BUILDER | source-company-builder | OTHER | COMPANY | Builder.io is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BUILDKITE | source-company-buildkite | OTHER | COMPANY | Buildkite is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BUILDOPS | source-company-buildops | OTHER | COMPANY | BuildOps is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BUTTERFLY_NETWORK | source-company-butterflynetwork | OTHER | COMPANY | Butterfly Network is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| BVNK | source-company-bvnk | OTHER | COMPANY | BVNK is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| C3_AI | source-company-c3iot | OTHER | COMPANY | C3 AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| C6_BANK | source-company-c6bank | OTHER | COMPANY | C6 Bank is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CALENDLY | source-company-calendly | OTHER | COMPANY | Calendly is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CAMEO | source-company-cameo | OTHER | COMPANY | Cameo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CAMUS_ENERGY | source-company-camusenergy | OTHER | COMPANY | Camus Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CANDID_HEALTH | source-company-candidhealth | OTHER | COMPANY | Candid Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CANVAS_MEDICAL | source-company-canvasmedical | OTHER | COMPANY | Canvas Medical is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CAPTIVATEIQ | source-company-captivateiq | OTHER | COMPANY | CaptivateIQ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARBON | source-company-carbon | OTHER | COMPANY | Carbon is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARBON_ROBOTICS | source-company-carbonrobotics | OTHER | COMPANY | Carbon Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARDINAL_LOGISTICS | source-company-cardinallogistics | OTHER | COMPANY | Cardinal Logistics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CAREMESSAGE | source-company-caremessage | OTHER | COMPANY | CareMessage is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARGOMATIC | source-company-cargomatic | OTHER | COMPANY | Cargomatic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARGURUS | source-company-cargurus | OTHER | COMPANY | CarGurus is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARIBOU | source-company-caribou | OTHER | COMPANY | Caribou Financial is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARILION_CLINIC | source-company-carilionclinic | OTHER | COMPANY | Carilion Clinic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARROT_FERTILITY | source-company-carrotfertility | OTHER | COMPANY | Carrot Fertility is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARTA | source-company-carta | OTHER | COMPANY | Carta is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARTESIA | source-company-cartesia | OTHER | COMPANY | Cartesia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CARVANA | source-company-carvana | OTHER | COMPANY | Carvana is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CBS_CORPORATE_BUSINESS_SOLUTIONS | source-company-cbscorporatebusinesssolutions | OTHER | COMPANY | cbs Corporate Business Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CENSYS | source-company-censys | OTHER | COMPANY | Censys is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CENTREON | source-company-centreon | OTHER | COMPANY | Centreon is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CENTRIC | source-company-centric | OTHER | COMPANY | Centric is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CEREBRAL | source-company-cerebral | OTHER | COMPANY | Cerebral is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CEREBRAS_SYSTEMS | source-company-cerebrassystems | OTHER | COMPANY | Cerebras Systems is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CERTIFID | source-company-certifid | OTHER | COMPANY | CertifID is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CERTIK | source-company-certik | OTHER | COMPANY | CertiK is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COMMONWEALTH_FUSION_SYSTEMS | source-company-cfsenergy | OTHER | COMPANY | Commonwealth Fusion Systems is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHAINGUARD | source-company-chainguard | OTHER | COMPANY | Chainguard is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHANNABLE | source-company-channable | OTHER | COMPANY | Channable is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHAOS_INDUSTRIES | source-company-chaosindustries | OTHER | COMPANY | CHAOS Industries is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHARACTER_AI | source-company-characterai | OTHER | COMPANY | Character.AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHARGEPOINT | source-company-chargepoint | OTHER | COMPANY | ChargePoint is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHARGE_ROBOTICS | source-company-chargerobotics | OTHER | COMPANY | Charge Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHARLIE_HEALTH | source-company-charliehealth | OTHER | COMPANY | Charlie Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHARTERUP | source-company-charterup | OTHER | COMPANY | CharterUP is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHECKBOOK | source-company-checkbook | OTHER | COMPANY | Checkbook is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHECKR | source-company-checkr | OTHER | COMPANY | Checkr is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHIME | source-company-chime | OTHER | COMPANY | Chime is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CHOWBUS | source-company-chowbus | OTHER | COMPANY | Chowbus is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CIELO | source-company-cielo | OTHER | COMPANY | Cielo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CIMA | source-company-cima | OTHER | COMPANY | CIMA+ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CIRCADIA_HEALTH | source-company-circadiahealth | OTHER | COMPANY | Circadia Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CIRCLECI | source-company-circleci | OTHER | COMPANY | CircleCI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CITY_AND_COUNTY_OF_SAN_FRANCISCO | source-company-cityandcountyofsanfrancisco | OTHER | COMPANY | City and County of San Francisco is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CITY_FURNITURE | source-company-cityfurniture | OTHER | COMPANY | City Furniture is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CITY_OF_PHILADELPHIA | source-company-cityofphiladelphia | OTHER | COMPANY | City of Philadelphia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CITY_OF_SAN_ANTONIO | source-company-cityofsanantonio | OTHER | COMPANY | City of San Antonio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CLARA | source-company-clara | OTHER | COMPANY | Clara is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CLASSPASS | source-company-classpass | OTHER | COMPANY | ClassPass is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CLAY | source-company-clay | OTHER | COMPANY | Clay is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CLEAR | source-company-clear | OTHER | COMPANY | CLEAR is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CLEO_AI | source-company-cleo | OTHER | COMPANY | Cleo AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CLICKUP | source-company-clickup | OTHER | COMPANY | ClickUp is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CLOUDBILLING | source-company-cloudbilling | OTHER | COMPANY | CloudBilling is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CLOVER_HEALTH | source-company-cloverhealth | OTHER | COMPANY | Clover Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CLUTCH | source-company-clutch | OTHER | COMPANY | Clutch is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COALITION | source-company-coalition | OTHER | COMPANY | Coalition is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COBALT_ROBOTICS | source-company-cobaltrobotics | OTHER | COMPANY | Cobalt Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COCKROACHLABS | source-company-cockroachlabs | OTHER | COMPANY | Cockroach Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CODEPATH | source-company-codepath | OTHER | COMPANY | CodePath is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CODERABBIT | source-company-coderabbit | OTHER | COMPANY | CodeRabbit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CODES_HEALTH | source-company-codeshealth | OTHER | COMPANY | Codes Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COGNITION | source-company-cognition | OTHER | COMPANY | Cognition is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COGNITIV | source-company-cognitiv | OTHER | COMPANY | Cognitiv is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COHERE_HEALTH | source-company-coherehealth | OTHER | COMPANY | Cohere Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COINS_PH | source-company-coins | OTHER | COMPANY | Coins.ph is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COLLATE | source-company-collate | OTHER | COMPANY | Collate is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COLLECTIVEHEALTH | source-company-collectivehealth | OTHER | COMPANY | Collective Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COLLIBRA | source-company-collibra | OTHER | COMPANY | Collibra is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COLOSSAL_BIOSCIENCES | source-company-colossalbiosciences | OTHER | COMPANY | Colossal Biosciences is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COLUMBIA_UNIVERSITY | source-company-columbiauniversity | OTHER | COMPANY | Columbia University is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COLUMN | source-company-column | OTHER | COMPANY | Column is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COMET | source-company-comet | OTHER | COMPANY | Comet is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COMMON_ROOM | source-company-commonroom | OTHER | COMPANY | Common Room is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COMPA | source-company-compa | OTHER | COMPANY | Compa is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COMPLYADVANTAGE | source-company-complyadvantage | OTHER | COMPANY | ComplyAdvantage is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONSTANCE_HOTELS_RESORTS | source-company-constancehotelsresorts | OTHER | COMPANY | Constance Hotels & Resorts is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONSTANTCONTACT | source-company-constantcontact | OTHER | COMPANY | Constant Contact is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONSTELLR | source-company-constellr | OTHER | COMPANY | constellr is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONTACT_ENERGY | source-company-contactenergy | OTHER | COMPANY | Contact Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONTENTSQUARE | source-company-contentsquare | OTHER | COMPANY | Contentsquare is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONTINENTAL | source-company-continental | OTHER | COMPANY | Continental is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONTORO_ROBOTICS | source-company-contororobotics | OTHER | COMPANY | Contoro Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONVELIO | source-company-convelio | OTHER | COMPANY | Convelio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONVERSICA | source-company-conversica | OTHER | COMPANY | Conversica is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CONVIVA | source-company-conviva | OTHER | COMPANY | Conviva is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COOKUNITY | source-company-cookunity | OTHER | COMPANY | CookUnity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COREWEAVE | source-company-coreweave | OTHER | COMPANY | CoreWeave is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CORNERSTONE_BUILDING_BRANDS | source-company-cornerstonebuildingbrands | OTHER | COMPANY | Cornerstone Building Brands is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CORTICA | source-company-cortica | OTHER | COMPANY | Cortica is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COUNTERPART | source-company-counterpart | OTHER | COMPANY | Counterpart is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COUNTY_OF_GRANDE_PRAIRIE_NO_1 | source-company-countyofgrandeprairieno1 | OTHER | COMPANY | County of Grande Prairie No. 1 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COVISTA | source-company-covista | OTHER | COMPANY | Covista is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| COWBOY_SPACE_CORP | source-company-cowboyspacecorp | OTHER | COMPANY | Cowboy Space Corp. is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CRAFTZING | source-company-craftzing | OTHER | COMPANY | Craftzing is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CRB | source-company-crb | OTHER | COMPANY | CRB is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CREATIVE_CLICKS | source-company-creativeclicks | OTHER | COMPANY | Creative Clicks is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CRESTA | source-company-cresta | OTHER | COMPANY | Cresta is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CRIBL | source-company-cribl | OTHER | COMPANY | Cribl is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CROSSMARK | source-company-crossmark | OTHER | COMPANY | CROSSMARK is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CRUISE_PLANNERS | source-company-cruiseplanners | OTHER | COMPANY | Cruise Planners is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CRUSOE | source-company-crusoe | OTHER | COMPANY | Crusoe is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CRYPTO_COM | source-company-crypto | OTHER | COMPANY | Crypto.com is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CSC_GENERATION | source-company-cscgeneration2 | OTHER | COMPANY | CSC Generation is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CENTRE_FOR_STRATEGIC_INFOCOMM_TECHNOLOGIES_CSIT | source-company-csit | OTHER | COMPANY | Centre for Strategic Infocomm Technologies (CSIT) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CULTURE_AMP | source-company-cultureamp | OTHER | COMPANY | Culture Amp is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CURRENT | source-company-current | OTHER | COMPANY | Current is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CURSOR | source-company-cursor | OTHER | COMPANY | Cursor is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CURSOR_ANYSPHERE | source-company-cursoranysphere | OTHER | COMPANY | Cursor (Anysphere) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CUSTOMER_IO | source-company-customerio | OTHER | COMPANY | Customer.io is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CUSTOMIZED_ENERGY_SOLUTIONS | source-company-customizedenergysolutions | OTHER | COMPANY | Customized Energy Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CUYANA | source-company-cuyana | OTHER | COMPANY | Cuyana is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CVUK | source-company-cvuk | OTHER | COMPANY | CVUK is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CYBEREASON | source-company-cybereason | OTHER | COMPANY | Cybereason is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CYBER_MASON_PINDIRECT | source-company-cybermasonpindirect | OTHER | COMPANY | Cyber & Mason (PinDirect) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CYDERES | source-company-cyderes | OTHER | COMPANY | Cyderes is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CYNGN | source-company-cyngn | OTHER | COMPANY | Cyngn is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| CYPRESS_CREEK_RENEWABLES | source-company-cypresscreekrenewables | OTHER | COMPANY | Cypress Creek Renewables is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DASH0 | source-company-dash0 | OTHER | COMPANY | Dash0 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DASHLANE | source-company-dashlane | OTHER | COMPANY | Dashlane is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DATACAMP | source-company-datacamp | OTHER | COMPANY | DataCamp is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DATAFOLD | source-company-datafold | OTHER | COMPANY | Datafold is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DATASTEALTH | source-company-datastealth | OTHER | COMPANY | DataStealth is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DAVE | source-company-dave | OTHER | COMPANY | Dave is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DAYBREAK_GAME_COMPANY | source-company-daybreakgames | OTHER | COMPANY | Daybreak Game Company is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DBT_LABS | source-company-dbtlabsinc | OTHER | COMPANY | dbt Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEALPATH | source-company-dealpath | OTHER | COMPANY | Dealpath is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEALROOM_CO | source-company-dealroomco | OTHER | COMPANY | Dealroom.co is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DE_BEERS_GROUP | source-company-debeersgroup | OTHER | COMPANY | De Beers Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DECAGON | source-company-decagon | OTHER | COMPANY | Decagon is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEEP_GENOMICS | source-company-deepgenomics | OTHER | COMPANY | Deep Genomics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEEPGRAM | source-company-deepgram | OTHER | COMPANY | Deepgram is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEFENSE_UNICORNS | source-company-defenseunicorns | OTHER | COMPANY | Defense Unicorns is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEGREED | source-company-degreed | OTHER | COMPANY | Degreed is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DELETEME | source-company-deleteme | OTHER | COMPANY | DeleteMe is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DELINEA | source-company-delinea | OTHER | COMPANY | Delinea is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DELOITTE_NEW_ZEALAND | source-company-deloittenewzealand | OTHER | COMPANY | Deloitte New Zealand is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DELOITTE_NORDIC | source-company-deloittenordic | OTHER | COMPANY | Deloitte (Nordic) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DELTA_ELECTRONICS | source-company-deltaelectronics | OTHER | COMPANY | Delta Electronics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEMV_SYSTEMS | source-company-demvsystems | OTHER | COMPANY | DEMV Systems is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEREX_TECHNOLOGIES | source-company-derextechnologies | OTHER | COMPANY | Derex Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DESCOPE | source-company-descope | OTHER | COMPANY | Descope is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DESCRIPT | source-company-descript | OTHER | COMPANY | Descript is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEUTSCHE_TELEKOM_IT_SOLUTIONS | source-company-deutschetelekomitsolutions | OTHER | COMPANY | Deutsche Telekom IT Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEUTSCHE_TELEKOM_IT_SOLUTIONS_SLOVAKIA | source-company-deutschetelekomitsolutionsslovakia | OTHER | COMPANY | Deutsche Telekom IT Solutions Slovakia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DEXTERRA_GROUP | source-company-dexterragroup | OTHER | COMPANY | Dexterra Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DIALPAD | source-company-dialpad | OTHER | COMPANY | Dialpad is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DIGITAL_EXTREMES | source-company-digitalextremes | OTHER | COMPANY | Digital Extremes is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DIGITAL_MEDIA_MANAGEMENT | source-company-digitalmediamanagement | OTHER | COMPANY | Digital Media Management is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DILIGENT_ROBOTICS | source-company-diligentrobotics | OTHER | COMPANY | Diligent Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DISCO | source-company-disco | OTHER | COMPANY | DISCO is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DISCORD | source-company-discord | OTHER | COMPANY | Discord is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DISTRIBUSION_TECHNOLOGIES | source-company-distribusiontechnologies | OTHER | COMPANY | Distribusion Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DIVERGENT | source-company-divergent | OTHER | COMPANY | Divergent is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DLOCAL | source-company-dlocal | OTHER | COMPANY | dLocal is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DOLLARSHAVECLUB | source-company-dollarshaveclub | OTHER | COMPANY | Dollar Shave Club is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DOPPLER | source-company-doppler | OTHER | COMPANY | Doppler is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DORSIA | source-company-dorsia | OTHER | COMPANY | Dorsia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DOXIMITY | source-company-doximity | OTHER | COMPANY | Doximity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DREAM_GAMES | source-company-dreamgames | OTHER | COMPANY | Dream Games is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DREMIO | source-company-dremio | OTHER | COMPANY | Dremio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DRIVETRAIN | source-company-drivetrain | OTHER | COMPANY | Drivetrain is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DRIVEWEALTH | source-company-drivewealth | OTHER | COMPANY | DriveWealth is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DRONEDEPLOY | source-company-dronedeploy | OTHER | COMPANY | DroneDeploy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DROYD | source-company-droyd | OTHER | COMPANY | Droyd is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DUST | source-company-dust | OTHER | COMPANY | Dust is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DYNO_THERAPEUTICS | source-company-dynotherapeutics | OTHER | COMPANY | Dyno Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EARNEST | source-company-earnest | OTHER | COMPANY | Earnest is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EARNIN | source-company-earnin | OTHER | COMPANY | EarnIn is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EASYSHIP | source-company-easyship | OTHER | COMPANY | Easyship is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EATALY | source-company-eataly | OTHER | COMPANY | Eataly is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EBANX | source-company-ebanx | OTHER | COMPANY | EBANX is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ECILIA | source-company-ecilia | OTHER | COMPANY | Ecilia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ECL | source-company-ecldc | OTHER | COMPANY | ECL is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ECOVADIS | source-company-ecovadis | OTHER | COMPANY | EcoVadis is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EDF_UK | source-company-edfuk | OTHER | COMPANY | EDF UK is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EDUCATIONAL_CONNECTIONS | source-company-educationalconnections | OTHER | COMPANY | Educational Connections is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EDUCATIVE | source-company-educative | OTHER | COMPANY | Educative is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EGIS_GROUP | source-company-egisgroup | OTHER | COMPANY | Egis Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ELECTRIC_HYDROGEN | source-company-eh2 | OTHER | COMPANY | Electric Hydrogen is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EHRENKIND | source-company-ehrenkind | OTHER | COMPANY | Ehrenkind is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EIKON_THERAPEUTICS | source-company-eikontherapeutics | OTHER | COMPANY | Eikon Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ELATION_HEALTH | source-company-elationhealth | OTHER | COMPANY | Elation Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ELECTRIC_AIR | source-company-electricair | OTHER | COMPANY | Electric Air is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ELEPHANT_TECHNOLOGIES | source-company-elephanttechnologies | OTHER | COMPANY | Elephant Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ELEVENTH_HOUR_GAMES | source-company-eleventhhourgames | OTHER | COMPANY | Eleventh Hour Games is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| E_L_F_BEAUTY | source-company-elfbeauty | OTHER | COMPANY | e.l.f. Beauty is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EMARKETER | source-company-emarketer | OTHER | COMPANY | EMARKETER is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EMCO_CORPORATION | source-company-emcocorporation | OTHER | COMPANY | EMCO Corporation is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EMNIFY | source-company-emnify | OTHER | COMPANY | emnify is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENCORD | source-company-encord | OTHER | COMPANY | Encord is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENDOR_LABS | source-company-endorlabs | OTHER | COMPANY | Endor Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENERGAGE | source-company-energage | OTHER | COMPANY | Energage is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENERGYHUB | source-company-energyhub | OTHER | COMPANY | EnergyHub is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENERGY_RECOVERY | source-company-energyrecovery | OTHER | COMPANY | Energy Recovery is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENERGY_SOLUTIONS | source-company-energysolutions | OTHER | COMPANY | Energy Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENPAL | source-company-enpal | OTHER | COMPANY | Enpal is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENTAIN | source-company-entain | OTHER | COMPANY | Entain is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENTERTAINMENT_BENEFITS_GROUP | source-company-entertainmentbenefitsgroup | OTHER | COMPANY | Entertainment Benefits Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ENTIRE_HIRE | source-company-entirehire | OTHER | COMPANY | Entire Hire is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EPILOT | source-company-epilot | OTHER | COMPANY | epilot is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EPIRUS | source-company-epirus | OTHER | COMPANY | Epirus is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EQUIP_HEALTH | source-company-equiphealth | OTHER | COMPANY | Equip Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ESCAPE | source-company-escape | OTHER | COMPANY | Escape is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ESUSU | source-company-esusu | OTHER | COMPANY | Esusu is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ETALENT | source-company-etalent | OTHER | COMPANY | eTalent is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ETCHED | source-company-etchedai | OTHER | COMPANY | Etched is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ETHENA_LABS | source-company-ethenalabs | OTHER | COMPANY | Ethena Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ETHOS | source-company-ethos | OTHER | COMPANY | Ethos is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ETHOS_LIFE | source-company-ethoslife | OTHER | COMPANY | Ethos Life is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ETIHAD_AIRWAYS | source-company-etihadairways | OTHER | COMPANY | Etihad Airways is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EUROFINS_SCIENTIFIC | source-company-eurofinsscientific | OTHER | COMPANY | Eurofins Scientific is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EVERLANE | source-company-everlane | OTHER | COMPANY | Everlane is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EVERLAW | source-company-everlaw | OTHER | COMPANY | Everlaw is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EVERLYWELL | source-company-everlywell | OTHER | COMPANY | Everlywell is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EVERSANA | source-company-eversana | OTHER | COMPANY | EVERSANA is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EVIDENT | source-company-evidentid | OTHER | COMPANY | Evident is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EVOLUTION | source-company-evolution | OTHER | COMPANY | Evolution is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EXIGER | source-company-exiger | OTHER | COMPANY | Exiger is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EXPEDITORS | source-company-expeditors | OTHER | COMPANY | Expeditors is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EXPEL | source-company-expel | OTHER | COMPANY | Expel is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EXPLODING_KITTENS | source-company-explodingkittens | OTHER | COMPANY | Exploding Kittens is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EXPRESSVPN | source-company-expressvpn | OTHER | COMPANY | ExpressVPN is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EXTEND | source-company-extend | OTHER | COMPANY | Extend is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EXTRAHOP | source-company-extrahopnetworks | OTHER | COMPANY | ExtraHop is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| EZRA | source-company-ezra | OTHER | COMPANY | Ezra is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FACTORIAL_ENERGY | source-company-factorialenergy | OTHER | COMPANY | Factorial Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FAIRE | source-company-faire | OTHER | COMPANY | Faire is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FAIRMARKIT | source-company-fairmarkit | OTHER | COMPANY | Fairmarkit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FAKTION | source-company-faktion | OTHER | COMPANY | Faktion is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FAL | source-company-fal | OTHER | COMPANY | fal is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FALCONX | source-company-falconx | OTHER | COMPANY | FalconX is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FANDUEL | source-company-fanduel | OTHER | COMPANY | FanDuel is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FARADAY_FUTURE | source-company-faradayfuture | OTHER | COMPANY | Faraday Future is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FASTLY | source-company-fastly | OTHER | COMPANY | Fastly is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FASTSPRING | source-company-fastspring | OTHER | COMPANY | FastSpring is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FAY | source-company-fay | OTHER | COMPANY | Fay is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FEDERATO | source-company-federato | OTHER | COMPANY | Federato is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FEEDZAI | source-company-feedzai | OTHER | COMPANY | Feedzai is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FETCH | source-company-fetch | OTHER | COMPANY | Fetch is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIDDLER_AI | source-company-fiddlerai | OTHER | COMPANY | Fiddler AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIDUCIAL | source-company-fiducial | OTHER | COMPANY | Fiducial is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIELD_AI | source-company-fieldai | OTHER | COMPANY | Field AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIELDBUDDY | source-company-fieldbuddy | OTHER | COMPANY | FieldBuddy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIELD_NATION | source-company-fieldnation | OTHER | COMPANY | Field Nation is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIELDWIRE | source-company-fieldwire | OTHER | COMPANY | Fieldwire is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIETSENWINKEL_NL | source-company-fietsenwinkelnl | OTHER | COMPANY | Fietsenwinkel.nl is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIGURE_LENDING | source-company-figure | OTHER | COMPANY | Figure Lending is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIGURE | source-company-figureai | OTHER | COMPANY | Figure is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIN | source-company-fin | OTHER | COMPANY | Fin is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FINARY | source-company-finary | OTHER | COMPANY | Finary is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FINDEM | source-company-findem | OTHER | COMPANY | Findem is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FINGERPRINT | source-company-fingerprint | OTHER | COMPANY | Fingerprint is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FINIX | source-company-finix | OTHER | COMPANY | Finix is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FINN | source-company-finn | OTHER | COMPANY | FINN is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FINNI_HEALTH | source-company-finnihealth | OTHER | COMPANY | Finni Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FINQUERY | source-company-finquery | OTHER | COMPANY | FinQuery is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIREWORKSAI | source-company-fireworksai | OTHER | COMPANY | Fireworks AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIRSTHAND_HEALTH | source-company-firsthand | OTHER | COMPANY | firsthand Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FIXICO | source-company-fixico | OTHER | COMPANY | Fixico is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FLASHFOOD | source-company-flashfood | OTHER | COMPANY | Flashfood is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FLATIRON_HEALTH | source-company-flatironhealth | OTHER | COMPANY | Flatiron Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FLEETIO | source-company-fleetio | OTHER | COMPANY | Fleetio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FLO_HEALTH | source-company-flohealth | OTHER | COMPANY | Flo Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FLORYN | source-company-floryn | OTHER | COMPANY | Floryn is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORBES | source-company-forbes | OTHER | COMPANY | Forbes is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORM3 | source-company-form3 | OTHER | COMPANY | Form3 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORMATION_BIO | source-company-formationbio | OTHER | COMPANY | Formation Bio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORM_BIO | source-company-formbio | OTHER | COMPANY | Form Bio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORM_HEALTH | source-company-formhealth | OTHER | COMPANY | Form Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORMIC | source-company-formic | OTHER | COMPANY | Formic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORMLABS | source-company-formlabs | OTHER | COMPANY | Formlabs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORTER | source-company-forter | OTHER | COMPANY | Forter is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORTUNE_BRANDS_INNOVATIONS | source-company-fortunebrandsinnovations | OTHER | COMPANY | Fortune Brands Innovations is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FORWARD_HEALTH | source-company-forward | OTHER | COMPANY | Forward is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FOUND | source-company-found | OTHER | COMPANY | Found is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FOUNDATION_EGI | source-company-foundationllmtechnologies | OTHER | COMPANY | Foundation EGI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FOUNDERS | source-company-founders | OTHER | COMPANY | Founders Green Animal Hospital is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FOUNDRY_ROBOTICS | source-company-foundryrobotics | OTHER | COMPANY | Foundry Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FOURKITES | source-company-fourkites | OTHER | COMPANY | FourKites is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FOX | source-company-fox | OTHER | COMPANY | Fox Creek Veterinary Hospital - Wildwood is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FOXIT | source-company-foxitsoftware | OTHER | COMPANY | Foxit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FREEDOM_SOLAR_POWER | source-company-freedomsolarpower | OTHER | COMPANY | Freedom Solar Power is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FREEFORM | source-company-freeformfuturecorp | OTHER | COMPANY | Freeform is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FREENOME | source-company-freenome | OTHER | COMPANY | Freenome is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FRESHWORKS | source-company-freshworks | OTHER | COMPANY | Freshworks is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FRONTIER_TECHNOLOGIES | source-company-frontiertechnologies | OTHER | COMPANY | Frontier Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FUBOTV | source-company-fubotv | OTHER | COMPANY | fuboTV is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FUN_XYZ | source-company-funxyz | OTHER | COMPANY | Fun.xyz is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FUSE_ENERGY | source-company-fuseenergy | OTHER | COMPANY | Fuse Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| FUTURE_FITNESS | source-company-future | OTHER | COMPANY | Future is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GALILEO | source-company-galileo | OTHER | COMPANY | Galileo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GALVANIZE_CLIMATE_SOLUTIONS | source-company-galvanizeclimatesolutions | OTHER | COMPANY | Galvanize Climate Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GAMELOFT | source-company-gameloft | OTHER | COMPANY | Gameloft is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GAMMA | source-company-gamma | OTHER | COMPANY | Gamma is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GARNER_HEALTH | source-company-garnerhealth | OTHER | COMPANY | Garner Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GATIK_AI | source-company-gatikaiinc | OTHER | COMPANY | Gatik AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GECKO_ROBOTICS | source-company-geckorobotics | OTHER | COMPANY | Gecko Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GE_HEALTHCARE | source-company-gehealthcare | OTHER | COMPANY | GE HealthCare is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GEMINI | source-company-gemini | OTHER | COMPANY | Gemini is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GENBIO_AI | source-company-genbio | OTHER | COMPANY | GenBio AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GENERATE_BIOMEDICINES | source-company-generatebiomedicines | OTHER | COMPANY | Generate Biomedicines is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GENOMICS_PLC | source-company-genomicsplc | OTHER | COMPANY | Genomics plc is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GHOST | source-company-ghost | OTHER | COMPANY | Ghost is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GINKGO_BIOWORKS | source-company-ginkgobioworks | OTHER | COMPANY | Ginkgo Bioworks is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GLASS_HEALTH | source-company-glasshealthinc | OTHER | COMPANY | Glass Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GLEAN | source-company-gleanwork | OTHER | COMPANY | Glean is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GLOSSGENIUS | source-company-glossgenius | OTHER | COMPANY | GlossGenius is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GLOSSIER | source-company-glossier | OTHER | COMPANY | Glossier is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GLOBAL_LENDING_SERVICES | source-company-glsllc | OTHER | COMPANY | Global Lending Services is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOCARDLESS | source-company-gocardless | OTHER | COMPANY | GoCardless is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOFUNDME | source-company-gofundme | OTHER | COMPANY | GoFundMe is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOGUARDIAN | source-company-goguardian | OTHER | COMPANY | GoGuardian is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIGHLEVEL | source-company-gohighlevel | OTHER | COMPANY | HighLevel is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOOD_AMERICAN | source-company-goodamerican | OTHER | COMPANY | Good American is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOODLEAP | source-company-goodleap | OTHER | COMPANY | GoodLeap is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOODR | source-company-goodr | OTHER | COMPANY | goodr is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOODWAY_GROUP | source-company-goodwaygroup | OTHER | COMPANY | Goodway Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOPUFF | source-company-gopuff | OTHER | COMPANY | Gopuff is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GORGIAS | source-company-gorgias | OTHER | COMPANY | Gorgias is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOTION | source-company-gotion | OTHER | COMPANY | Gotion is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOUSTO | source-company-gousto | OTHER | COMPANY | Gousto is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GOVTECH_SINGAPORE_GOVERNMENT_TECHNOLOGY_AGENCY | source-company-govtech | OTHER | COMPANY | GovTech Singapore (Government Technology Agency) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRAFANALABS | source-company-grafanalabs | OTHER | COMPANY | Grafana Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRAIL | source-company-grailbio | OTHER | COMPANY | GRAIL is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRAND_GAMES | source-company-grand | OTHER | COMPANY | Grand Games is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRAVIS_ROBOTICS | source-company-gravisrobotics | OTHER | COMPANY | Gravis Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRAVITY_R_D | source-company-gravity | OTHER | COMPANY | Gravity R&D is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRAVITY_CLIMATE | source-company-gravityclimate | OTHER | COMPANY | Gravity Climate is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GREENFLUX | source-company-greenflux | OTHER | COMPANY | GreenFlux is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GREENLIGHT_FINANCIAL_TECHNOLOGY | source-company-greenlight | OTHER | COMPANY | Greenlight Financial Technology is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRIDCARE | source-company-gridcare | OTHER | COMPANY | GridCARE is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRIDSCALE | source-company-gridscale | OTHER | COMPANY | gridscale is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRIDWARE | source-company-gridware | OTHER | COMPANY | Gridware is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GROUP14 | source-company-group14 | OTHER | COMPANY | Group14 Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GROVE_COLLABORATIVE | source-company-grovecollaborative | OTHER | COMPANY | Grove Collaborative is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GROWW | source-company-groww | OTHER | COMPANY | Groww is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRUPO_MARIPOSA | source-company-grupomariposa | OTHER | COMPANY | Grupo Mariposa is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GRUPO_MARIPOSA_REGIONAL | source-company-grupomariposaregional | OTHER | COMPANY | Grupo Mariposa (Regional) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GHOST_STORY_GAMES | source-company-gsgcareers | OTHER | COMPANY | Ghost Story Games is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GUILD | source-company-guild | OTHER | COMPANY | Guild is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GUSTI_LEDER | source-company-gustileder | OTHER | COMPANY | Gusti Leder is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GUSTO | source-company-gusto | OTHER | COMPANY | Gusto is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GYMSHARK | source-company-gymshark | OTHER | COMPANY | Gymshark is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| H1 | source-company-h1 | OTHER | COMPANY | H1 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HACKERONE | source-company-hackerone | OTHER | COMPANY | HackerOne is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HADRIAN | source-company-hadrian | OTHER | COMPANY | Hadrian is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HALTON_HEALTHCARE | source-company-haltonhealthcare | OTHER | COMPANY | Halton Healthcare is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HANWHA_RENEWABLES | source-company-hanwharenewables | OTHER | COMPANY | Hanwha Renewables is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HAPPYCO | source-company-happyco | OTHER | COMPANY | HappyCo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HAPPY_MONEY | source-company-happymoney | OTHER | COMPANY | Happy Money is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HARMATTAN_AI | source-company-harmattanai | OTHER | COMPANY | Harmattan AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HARRY_S | source-company-harrys | OTHER | COMPANY | Harry\ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HARVEY | source-company-harvey | OTHER | COMPANY | Harvey is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HAVOC_AI | source-company-havocai | OTHER | COMPANY | Havoc AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HAWKEYE_360 | source-company-hawkeye360 | OTHER | COMPANY | HawkEye 360 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEADWAY | source-company-headway | OTHER | COMPANY | Headway is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEALTHCARE_SUPPORT_STAFFING | source-company-healthcaresupportstaffing | OTHER | COMPANY | Healthcare Support Staffing is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEALTHEAST | source-company-healtheast | OTHER | COMPANY | HealthEast is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEALTHJOY | source-company-healthjoy | OTHER | COMPANY | HealthJoy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEALTHPARTNERS | source-company-healthpartners | OTHER | COMPANY | HealthPartners is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEALTHTECH_1 | source-company-healthtech1 | OTHER | COMPANY | Healthtech-1 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEARTBEAT_HEALTH | source-company-heartbeathealth | OTHER | COMPANY | Heartbeat Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HELLOFRESH | source-company-hellofresh | OTHER | COMPANY | HelloFresh is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HELLOPRINT | source-company-helloprint | OTHER | COMPANY | Helloprint is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HELSING | source-company-helsing | OTHER | COMPANY | Helsing is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEMERIA | source-company-hemeria | OTHER | COMPANY | HEMERIA is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HERALD | source-company-heraldapi | OTHER | COMPANY | Herald is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEVO_DATA | source-company-hevodata | OTHER | COMPANY | Hevo Data is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HEYGEN | source-company-heygen | OTHER | COMPANY | HeyGen is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROWAN | source-company-heyrowan | OTHER | COMPANY | Rowan is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIGHBEAM | source-company-highbeam | OTHER | COMPANY | Highbeam is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIGHNOTE | source-company-highnote | OTHER | COMPANY | Highnote is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIGHRADIUS | source-company-highradius | OTHER | COMPANY | HighRadius is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIGHSPOT | source-company-highspot | OTHER | COMPANY | Highspot is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIGH_TECH_HIGH | source-company-hightechhigh | OTHER | COMPANY | High Tech High is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIGHTOUCH | source-company-hightouch | OTHER | COMPANY | Hightouch is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HILLSTONE_RESTAURANT_GROUP | source-company-hillstonerestaurantgroup | OTHER | COMPANY | Hillstone Restaurant Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIMS_HERS_YOU_HEALTH | source-company-himshersyouhealth | OTHER | COMPANY | Hims & Hers (You Health) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HINGE_HEALTH | source-company-hingehealth | OTHER | COMPANY | Hinge Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIVE | source-company-hive | OTHER | COMPANY | Hive is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HIVE_HEALTH | source-company-hivehealth | OTHER | COMPANY | Hive Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HOIST_GROUP | source-company-hoistgroup | OTHER | COMPANY | Hoist Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HOMECHEF | source-company-homechef | OTHER | COMPANY | Home Chef is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HOMELIGHT | source-company-homelight | OTHER | COMPANY | HomeLight is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HOMETAP | source-company-hometap | OTHER | COMPANY | Hometap is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HOMEWARD | source-company-homeward | OTHER | COMPANY | Homeward is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HONEYCOMB | source-company-honeycomb | OTHER | COMPANY | Honeycomb is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HONK | source-company-honkforhelp | OTHER | COMPANY | HONK is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HONOR | source-company-honor | OTHER | COMPANY | Honor is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HOPPER | source-company-hopper | OTHER | COMPANY | Hopper is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HUBBLE_NETWORK | source-company-hubblenetwork | OTHER | COMPANY | Hubble Network is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HUMBLE | source-company-humblerobotics | OTHER | COMPANY | Humble is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HUME_CITY_COUNCIL | source-company-humecitycouncil | OTHER | COMPANY | Hume City Council is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HUNGRYROOT | source-company-hungryroot | OTHER | COMPANY | Hungryroot is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HUNTRESS | source-company-huntress | OTHER | COMPANY | Huntress is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HYLIION | source-company-hyliion | OTHER | COMPANY | Hyliion is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| HYPERPROOF | source-company-hyperproof | OTHER | COMPANY | Hyperproof is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| IB_VOGT | source-company-ibvogt | OTHER | COMPANY | ib vogt is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ICTS_UK_LTD | source-company-ictsukltd | OTHER | COMPANY | ICTS (UK) Ltd is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ID_ME | source-company-idme | OTHER | COMPANY | ID.me is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INSTITUTE_OF_FOUNDATION_MODELS | source-company-ifmus | OTHER | COMPANY | Institute of Foundation Models is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| IHEARTMEDIA | source-company-iheartmedia | OTHER | COMPANY | iHeartMedia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ILIA_DIGITAL | source-company-ilia | OTHER | COMPANY | Ilia Digital is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ILIAD_FREE | source-company-iliadfree | OTHER | COMPANY | Iliad / Free is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| IMBUE | source-company-imbue | OTHER | COMPANY | Imbue is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| IMPLEMENT_CONSULTING_GROUP | source-company-implementconsultinggroup | OTHER | COMPANY | Implement Consulting Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| IMPLY | source-company-imply | OTHER | COMPANY | Imply is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INCEPTIVE | source-company-inceptive | OTHER | COMPANY | Inceptive is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INCHARGE_ENERGY | source-company-inchargeenergy | OTHER | COMPANY | InCharge Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INCIDENT_IO | source-company-incidentio | OTHER | COMPANY | incident.io is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INCLUDED_HEALTH | source-company-includedhealth | OTHER | COMPANY | Included Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INCODE_TECHNOLOGIES | source-company-incode | OTHER | COMPANY | Incode Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INDIGO | source-company-indigo | OTHER | COMPANY | Indigo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INFISICAL | source-company-infisical | OTHER | COMPANY | Infisical is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INFLECTIONAI | source-company-inflectionai | OTHER | COMPANY | Inflection AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INFOJINI | source-company-infojini | OTHER | COMPANY | Infojini is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INFSTONES | source-company-infstones | OTHER | COMPANY | InfStones is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INNOVID | source-company-innovid | OTHER | COMPANY | Innovid is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INSIDER | source-company-insiderone | OTHER | COMPANY | Insider is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INSITRO | source-company-insitro | OTHER | COMPANY | insitro is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INSPIRATION_COMMERCE_GROUP | source-company-inspirationcommercegroup | OTHER | COMPANY | Inspiration Commerce Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INSTABASE | source-company-instabase | OTHER | COMPANY | Instabase is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INSTACART | source-company-instacart | OTHER | COMPANY | Instacart is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INSTANT_SYSTEM | source-company-instantsystem | OTHER | COMPANY | Instant System is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INSTAWORK | source-company-instawork | OTHER | COMPANY | Instawork is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INSURIFY | source-company-insurify | OTHER | COMPANY | Insurify is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INTERCOM | source-company-intercom | OTHER | COMPANY | Intercom is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INTER_IKEA_GROUP | source-company-interikeagroup | OTHER | COMPANY | Inter IKEA Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INTERSECT_POWER | source-company-intersect | OTHER | COMPANY | Intersect Power is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INTESCIA | source-company-intescia | OTHER | COMPANY | Intescia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INTRINSIC | source-company-intrinsicrobotics | OTHER | COMPANY | Intrinsic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INTUITIVE_SURGICAL | source-company-intuitivesurgical | OTHER | COMPANY | Intuitive Surgical is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| INTEGRATED_SPECIALTY_COVERAGES | source-company-isccareers | OTHER | COMPANY | Integrated Specialty Coverages is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ISEE | source-company-isee | OTHER | COMPANY | ISEE is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ISOMETRIC | source-company-isometric | OTHER | COMPANY | Isometric is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ISOMORPHIC_LABS | source-company-isomorphiclabs | OTHER | COMPANY | Isomorphic Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ITERABLE | source-company-iterable | OTHER | COMPANY | Iterable is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ITS_LOGISTICS | source-company-itslogisticsllc | OTHER | COMPANY | ITS Logistics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| JG_WENTWORTH_HOME_LENDING | source-company-jgwentworthhomelending | OTHER | COMPANY | JG Wentworth Home Lending is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| JOBS_FOR_HUMANITY | source-company-jobsforhumanity | OTHER | COMPANY | Jobs for Humanity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| JUMIO | source-company-jumio | OTHER | COMPANY | Jumio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| JUMPCLOUD | source-company-jumpcloud | OTHER | COMPANY | JumpCloud is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| JUSTWORKS | source-company-justworks | OTHER | COMPANY | Justworks is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| K2_SPACE | source-company-k2spacecorporation | OTHER | COMPANY | K2 Space is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KAIROS_POWER | source-company-kairospower | OTHER | COMPANY | Kairos Power is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KARAT_INTERVIEWS | source-company-karat | OTHER | COMPANY | Karat is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KASA | source-company-kasa | OTHER | COMPANY | Kasa is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KEEPER_SECURITY | source-company-keepersecurity | OTHER | COMPANY | Keeper Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KEPLER_COMMUNICATIONS | source-company-kepler | OTHER | COMPANY | Kepler Communications is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KEYROCK | source-company-keyrock | OTHER | COMPANY | Keyrock is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KEYWORDS_STUDIOS | source-company-keywordsstudios | OTHER | COMPANY | Keywords Studios is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KH_AEROSPACE | source-company-khaerospace | OTHER | COMPANY | KH Aerospace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KHAN_ACADEMY | source-company-khanacademy | OTHER | COMPANY | Khan Academy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KIKOFF | source-company-kikoff | OTHER | COMPANY | Kikoff is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KIOXIA | source-company-kioxia | OTHER | COMPANY | Kioxia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KIPP | source-company-kipp | OTHER | COMPANY | KIPP is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KIPP_SOCAL_PUBLIC_SCHOOLS | source-company-kippsocal | OTHER | COMPANY | KIPP SoCal Public Schools is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KITTITAS_VALLEY_HEALTHCARE | source-company-kittitasvalleyhealthcare | OTHER | COMPANY | Kittitas Valley Healthcare is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KLAVIYO | source-company-klaviyo | OTHER | COMPANY | Klaviyo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KNIX | source-company-knix | OTHER | COMPANY | Knix is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KNOCK | source-company-knock | OTHER | COMPANY | Knock is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KNOWBE4 | source-company-knowbe4 | OTHER | COMPANY | KnowBe4 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KODIAK_ROBOTICS | source-company-kodiak | OTHER | COMPANY | Kodiak Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KOMODO_HEALTH | source-company-komodohealth | OTHER | COMPANY | Komodo Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KONG_INC | source-company-konginc | OTHER | COMPANY | Kong Inc. is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KORSAIL_ENERGY | source-company-korsailenergy | OTHER | COMPANY | Korsail Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| KRAKEN | source-company-kraken123 | OTHER | COMPANY | Kraken is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LABELBOX | source-company-labelbox | OTHER | COMPANY | Labelbox is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LAKESHORE_LEARNING_MATERIALS | source-company-lakeshorelearningmaterials | OTHER | COMPANY | Lakeshore Learning Materials is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LAMBDA | source-company-lambda | OTHER | COMPANY | Lambda is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LANGCHAIN | source-company-langchain | OTHER | COMPANY | LangChain is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LARIAN_STUDIOS | source-company-larian | OTHER | COMPANY | Larian Studios is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LASAN_GROUP | source-company-lasangroup | OTHER | COMPANY | Lasan Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LATTICE | source-company-lattice | OTHER | COMPANY | Lattice is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LAUNCHDARKLY | source-company-launchdarkly | OTHER | COMPANY | LaunchDarkly is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LAUREL | source-company-laurel | OTHER | COMPANY | Laurel is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LEAD_BANK | source-company-leadbank | OTHER | COMPANY | Lead Bank is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LEARNED | source-company-learned | OTHER | COMPANY | Learned is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LEDGY | source-company-ledgy | OTHER | COMPANY | Ledgy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LEGALFLY | source-company-legalfly | OTHER | COMPANY | LegalFly is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LEGION_TECHNOLOGIES | source-company-legion | OTHER | COMPANY | Legion Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LENDABLE | source-company-lendable | OTHER | COMPANY | Lendable is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LENDBUZZ | source-company-lendbuzz | OTHER | COMPANY | Lendbuzz is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LETSGETCHECKED | source-company-letsgetchecked | OTHER | COMPANY | LetsGetChecked is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LGC_GROUP | source-company-lgcgroup | OTHER | COMPANY | LGC Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LIGHTMATTER | source-company-lightmatter | OTHER | COMPANY | Lightmatter is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LIGHTSPARK | source-company-lightspark | OTHER | COMPANY | Lightspark is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LIGHTSPEED_COMMERCE | source-company-lightspeedcommerce | OTHER | COMPANY | Lightspeed Commerce is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LIMIT_BREAK | source-company-limitbreak | OTHER | COMPANY | Limit Break is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LINDUS_HEALTH | source-company-lindushealth | OTHER | COMPANY | Lindus Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LINEAR | source-company-linear | OTHER | COMPANY | Linear is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LITHIC | source-company-lithic | OTHER | COMPANY | Lithic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LIVE_NATION_ENTERTAINMENT | source-company-livenationentertainment | OTHER | COMPANY | Live Nation Entertainment is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LOAVIES | source-company-loavies | OTHER | COMPANY | LOAVIES is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LOCUS_ROBOTICS | source-company-locusrobotics | OTHER | COMPANY | Locus Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LOFT_ORBITAL_SOLUTIONS | source-company-loftorbital | OTHER | COMPANY | Loft Orbital Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LOGICGATE | source-company-logicgate | OTHER | COMPANY | LogicGate is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LONGBRIDGE_FINANCIAL | source-company-longbridgefinancial | OTHER | COMPANY | Longbridge Financial is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LOOKOUT | source-company-lookout | OTHER | COMPANY | Lookout is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LOOK_UP_SPACE | source-company-lookupspace | OTHER | COMPANY | Look Up Space is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LOOP | source-company-loop | OTHER | COMPANY | Loop is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LOTUS_HEALTH | source-company-lotushealth | OTHER | COMPANY | Lotus Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LUCIDMOTORS | source-company-lucidmotors | OTHER | COMPANY | Lucid Motors is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LUCKY_CART | source-company-luckycart | OTHER | COMPANY | Lucky Cart is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LUNAR_ENERGY | source-company-lunarenergy | OTHER | COMPANY | Lunar Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LVMH | source-company-lvmh | OTHER | COMPANY | LVMH is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LVMH_PERFUMES_COSMETICS | source-company-lvmhperfumescosmetics | OTHER | COMPANY | LVMH Perfumes & Cosmetics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LYFT | source-company-lyft | OTHER | COMPANY | Lyft is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| LYRA_HEALTH | source-company-lyrahealth | OTHER | COMPANY | Lyra Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MABL | source-company-mabl | OTHER | COMPANY | mabl is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MACH_INDUSTRIES | source-company-machindustries | OTHER | COMPANY | Mach Industries is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MADHAPPY | source-company-madhappy | OTHER | COMPANY | Madhappy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MAGNOPUS | source-company-magnopus | OTHER | COMPANY | Magnopus is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MAINSPRING_ENERGY | source-company-mainspringenergy | OTHER | COMPANY | Mainspring Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MAKERSITE | source-company-makersite | OTHER | COMPANY | Makersite is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MANNARINO_SYSTEMS_SOFTWARE | source-company-mannarinosystemssoftware | OTHER | COMPANY | Mannarino Systems & Software is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MARK43 | source-company-mark43 | OTHER | COMPANY | Mark43 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MARKFORGED | source-company-markforged | OTHER | COMPANY | Markforged is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MARQETA | source-company-marqeta | OTHER | COMPANY | Marqeta is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MARVEL_FUSION | source-company-marvelfusion | OTHER | COMPANY | Marvel Fusion is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MASDAR | source-company-masdar | OTHER | COMPANY | Masdar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MASTERCLASS | source-company-masterclass | OTHER | COMPANY | MasterClass is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MATERA | source-company-matera | OTHER | COMPANY | Matera is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MATERIALIZE | source-company-materialize | OTHER | COMPANY | Materialize is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MATERIAL_SECURITY | source-company-materialsecurity | OTHER | COMPANY | Material Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MAT_HOLDINGS | source-company-matholdings | OTHER | COMPANY | MAT Holdings is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MATIA | source-company-matia | OTHER | COMPANY | Matia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MATIC_INSURANCE | source-company-matic | OTHER | COMPANY | Matic Insurance is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MATILLION | source-company-matillion | OTHER | COMPANY | Matillion is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MAVEN | source-company-maven | OTHER | COMPANY | Maven is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MAVENCLINIC | source-company-mavenclinic | OTHER | COMPANY | Maven Clinic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MAXIM_INTEGRATED | source-company-maximintegrated | OTHER | COMPANY | Maxim Integrated is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MAY_MOBILITY | source-company-maymobility | OTHER | COMPANY | May Mobility is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MEDHEALTH | source-company-medhealth | OTHER | COMPANY | MedHealth is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MEDIASMART | source-company-mediasmart | OTHER | COMPANY | mediasmart is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MEDICIRCLE | source-company-medicircle | OTHER | COMPANY | MediCircle is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MEJURI | source-company-mejuri | OTHER | COMPANY | Mejuri is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MELIO | source-company-melio | OTHER | COMPANY | Melio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MERCARI | source-company-mercari | OTHER | COMPANY | Mercari is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MERCURY | source-company-mercury | OTHER | COMPANY | Mercury is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MERGE | source-company-merge | OTHER | COMPANY | Merge is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MESH_PAYMENTS | source-company-mesh | OTHER | COMPANY | Mesh Payments is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MESHY | source-company-meshy | OTHER | COMPANY | Meshy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| METABASE | source-company-metabase | OTHER | COMPANY | Metabase is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| METHOD_FINANCIAL | source-company-methodfinancial | OTHER | COMPANY | Method Financial is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| METROPOLIS_TECHNOLOGIES | source-company-metropolis | OTHER | COMPANY | Metropolis Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MILL | source-company-mill | OTHER | COMPANY | Mill is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MINDBODY | source-company-mindbody | OTHER | COMPANY | Mindbody is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MINDPEAK | source-company-mindpeak | OTHER | COMPANY | Mindpeak is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MIND_ROBOTICS | source-company-mindrobotics | OTHER | COMPANY | Mind Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MINOR_INTERNATIONAL | source-company-minorinternational | OTHER | COMPANY | Minor International is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MINTED | source-company-minted | OTHER | COMPANY | Minted is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MINTLIFY | source-company-mintlify | OTHER | COMPANY | Mintlify is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MISFITSMARKET | source-company-misfitsmarket | OTHER | COMPANY | Misfits Market is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MISSION_LANE | source-company-missionlane | OTHER | COMPANY | Mission Lane is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MISTERTEMP_GROUP | source-company-mistertempgroup | OTHER | COMPANY | Mistertemp\ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MISTRAL_AI | source-company-mistral | OTHER | COMPANY | Mistral AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MITSUBISHI_TANABE_PHARMA_AMERICA | source-company-mitsubishitanabepharmaamerica | OTHER | COMPANY | Mitsubishi Tanabe Pharma America is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MIXPANEL | source-company-mixpanel | OTHER | COMPANY | Mixpanel is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MOBIAPPS | source-company-mobiapps | OTHER | COMPANY | Mobiapps is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MOBILITYPLUS | source-company-mobilityplus | OTHER | COMPANY | MobilityPlus is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MOBILITYWARE | source-company-mobilityware | OTHER | COMPANY | MobilityWare is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MOCHI_HEALTH | source-company-mochihealth | OTHER | COMPANY | Mochi Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MODAL | source-company-modal | OTHER | COMPANY | Modal is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MODERN_ANIMAL | source-company-modernanimal | OTHER | COMPANY | Modern Animal is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MODERNHEALTH | source-company-modernhealth | OTHER | COMPANY | Modern Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MODERNIZE_HOME_SERVICES | source-company-modernize | OTHER | COMPANY | Modernize Home Services is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MOMENTOUS | source-company-momentous | OTHER | COMPANY | Momentous is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MONIEPOINT | source-company-moniepoint | OTHER | COMPANY | Moniepoint is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MONIZZE | source-company-monizze | OTHER | COMPANY | Monizze is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MON_MARCH_FR | source-company-monmarchfr | OTHER | COMPANY | Mon-marchÃ©.fr is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MONTE_CARLO | source-company-montecarlo | OTHER | COMPANY | Monte Carlo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MONZO | source-company-monzo | OTHER | COMPANY | Monzo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MOONPAY | source-company-moonpay | OTHER | COMPANY | MoonPay is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MOTHERDUCK | source-company-motherduck | OTHER | COMPANY | MotherDuck is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MOTIONAL | source-company-motional | OTHER | COMPANY | Motional is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MOTIVE | source-company-motive | OTHER | COMPANY | Motive is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MRBEAST_BEAST_INDUSTRIES | source-company-mrbeastyoutube | OTHER | COMPANY | MrBeast (Beast Industries) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MUJIN | source-company-mujininc | OTHER | COMPANY | Mujin is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MULTIPLY_LABS | source-company-multiplylabs | OTHER | COMPANY | Multiply Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MUNICH_ELECTRIFICATION | source-company-munichelectrification | OTHER | COMPANY | Munich Electrification is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| MUON_SPACE | source-company-muonspace | OTHER | COMPANY | Muon Space is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| N26 | source-company-n26 | OTHER | COMPANY | N26 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NABIS | source-company-nabis | OTHER | COMPANY | Nabis is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NAGARRO | source-company-nagarro | OTHER | COMPANY | Nagarro is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NAMESPACE | source-company-namespace | OTHER | COMPANY | Namespace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NANIT | source-company-nanit | OTHER | COMPANY | Nanit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NARVAR | source-company-narvar | OTHER | COMPANY | Narvar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NATERA | source-company-natera | OTHER | COMPANY | Natera is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NPR_NATIONAL_PUBLIC_RADIO | source-company-nationalpublicradioinc | OTHER | COMPANY | NPR (National Public Radio) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NATIXIS_IN_PORTUGAL | source-company-natixisinportugal | OTHER | COMPANY | Natixis in Portugal is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NATUVION | source-company-natuvion | OTHER | COMPANY | Natuvion is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NAUTO | source-company-nauto | OTHER | COMPANY | Nauto is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NAYYA | source-company-nayya | OTHER | COMPANY | Nayya is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NBCUNIVERSAL | source-company-nbcuniversal | OTHER | COMPANY | NBCUniversal is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEBIUS | source-company-nebius | OTHER | COMPANY | Nebius is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEMERA | source-company-nemera | OTHER | COMPANY | Nemera is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEO_FINANCIAL | source-company-neofinancial | OTHER | COMPANY | Neo Financial is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEON | source-company-neon | OTHER | COMPANY | Neon is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEON_AEROSPACE | source-company-neonaerospace | OTHER | COMPANY | Neon Aerospace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEROS_TECHNOLOGIES | source-company-nerostechnologies | OTHER | COMPANY | Neros Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NETLIFY | source-company-netlify | OTHER | COMPANY | Netlify is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NETRADYNE | source-company-netradyne | OTHER | COMPANY | Netradyne is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NETSKOPE | source-company-netskope | OTHER | COMPANY | Netskope is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NETSPEND | source-company-netspend | OTHER | COMPANY | Netspend is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEURALINK | source-company-neuralink | OTHER | COMPANY | Neuralink is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEW_LEAF_ENERGY | source-company-newleafenergy | OTHER | COMPANY | New Leaf Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEWLIMIT | source-company-newlimit | OTHER | COMPANY | NewLimit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEWORBIT_SPACE | source-company-neworbitspace | OTHER | COMPANY | NewOrbit Space is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEWRELIC | source-company-newrelic | OTHER | COMPANY | New Relic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEWSELA | source-company-newsela | OTHER | COMPANY | Newsela is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEX | source-company-nex | OTHER | COMPANY | Nex is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEXAMP | source-company-nexamp | OTHER | COMPANY | Nexamp is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEXTDOOR | source-company-nextdoor | OTHER | COMPANY | Nextdoor is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEXTHINK | source-company-nexthink | OTHER | COMPANY | Nexthink is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NEXT_INSURANCE | source-company-nextinsurance66 | OTHER | COMPANY | Next Insurance is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NIELSENIQ | source-company-nielseniq | OTHER | COMPANY | NielsenIQ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NIMBLE_ROBOTICS | source-company-nimblerobotics | OTHER | COMPANY | Nimble Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NIUM | source-company-nium | OTHER | COMPANY | Nium is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NMBRS | source-company-nmbrs | OTHER | COMPANY | Nmbrs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NMC_HEALTHCARE | source-company-nmchealthcare | OTHER | COMPANY | NMC Healthcare is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NMI | source-company-nmi | OTHER | COMPANY | NMI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NORTH_40_OUTFITTERS | source-company-north40outfitters | OTHER | COMPANY | North 40 Outfitters is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NORTHSPYRE | source-company-northspyre | OTHER | COMPANY | Northspyre is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NORTH_STAR_STAFFING_SOLUTIONS | source-company-northstarstaffingsolutions | OTHER | COMPANY | North Star Staffing Solutions is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NORTHWESTERN_MEDICINE | source-company-northwesternmedicine | OTHER | COMPANY | Northwestern Medicine is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NORTHWOOD_SPACE | source-company-northwoodspace | OTHER | COMPANY | Northwood Space is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NOTABLE | source-company-notable | OTHER | COMPANY | Notable is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NOTHING | source-company-nothing | OTHER | COMPANY | Nothing is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NOVUTECH | source-company-novutech | OTHER | COMPANY | Novutech is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| N_POWER_MEDICINE | source-company-npowermedicine | OTHER | COMPANY | N-Power Medicine is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NUBANK | source-company-nubank | OTHER | COMPANY | Nubank is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NURO | source-company-nuro | OTHER | COMPANY | Nuro is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| NUTRAFOL | source-company-nutrafol | OTHER | COMPANY | Nutrafol is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OBSERVABLE_SPACE | source-company-observablespace | OTHER | COMPANY | Observable Space is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OBSERVEAI | source-company-observeai | OTHER | COMPANY | Observe.AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OCKTO | source-company-ockto | OTHER | COMPANY | Ockto is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OCTAVE_HEALTH | source-company-octave | OTHER | COMPANY | Octave is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OCTOPUS_ENERGY_GROUP | source-company-octoenergy | OTHER | COMPANY | Octopus Energy Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OFFCHAIN_LABS | source-company-offchainlabs | OTHER | COMPANY | Offchain Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OFFERUP | source-company-offerup | OTHER | COMPANY | OfferUp is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OFFICE_DEPOT | source-company-officedepot | OTHER | COMPANY | Office Depot is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| O_I_GLASS | source-company-oiglass | OTHER | COMPANY | O-I Glass is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OKLO | source-company-oklo | OTHER | COMPANY | Oklo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OLIPOP | source-company-olipop | OTHER | COMPANY | OLIPOP is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OLO | source-company-olo | OTHER | COMPANY | Olo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OMADAHEALTH | source-company-omadahealth | OTHER | COMPANY | Omada Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OMNI | source-company-omni | OTHER | COMPANY | Omni is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ON2IT | source-company-on2it | OTHER | COMPANY | ON2IT is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ONE_MEDICAL | source-company-onemedical | OTHER | COMPANY | One Medical is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ON_ENERGY | source-company-onenergy | OTHER | COMPANY | ON.energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ONEPAY | source-company-onepay | OTHER | COMPANY | OnePay is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ONETRUST | source-company-onetrust | OTHER | COMPANY | OneTrust is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ONLINE_PAYMENT_PLATFORM_OPP | source-company-onlinepaymentplatformopp | OTHER | COMPANY | Online Payment Platform (OPP) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ON_RUNNING | source-company-onrunning | OTHER | COMPANY | On Running is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ONTARIO_TRANSIT_GROUP | source-company-ontariotransitgroup | OTHER | COMPANY | Ontario Transit Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPENCLAIMS | source-company-openclaims | OTHER | COMPANY | Openclaims is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPENDOOR | source-company-opendoor | OTHER | COMPANY | Opendoor is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPENEVIDENCE | source-company-openevidence | OTHER | COMPANY | OpenEvidence is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPENLY | source-company-openly | OTHER | COMPANY | Openly is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPEN_NL_SOFTWARE_GROUP | source-company-opennlsoftwaregroup | OTHER | COMPANY | OPEN.nl Software Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPENSPACE | source-company-openspace | OTHER | COMPANY | OpenSpace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPENTABLE | source-company-opentable | OTHER | COMPANY | OpenTable is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VEO | source-company-operationscareers | OTHER | COMPANY | Veo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPHELIA_HEALTH | source-company-ophelia | OTHER | COMPANY | Ophelia Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPHELOS | source-company-ophelos | OTHER | COMPANY | Ophelos is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OP_LABS | source-company-oplabs | OTHER | COMPANY | OP Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OPORTUN | source-company-oportun | OTHER | COMPANY | Oportun is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ORB | source-company-orb | OTHER | COMPANY | Orb is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ORB_AEROSPACE | source-company-orbaerospace | OTHER | COMPANY | Orb Aerospace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ORCA_SECURITY | source-company-orcasecurity | OTHER | COMPANY | Orca Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ORCHARD | source-company-orchard | OTHER | COMPANY | Orchard is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ORIC_PHARMACEUTICALS | source-company-oricpharmaceuticals | OTHER | COMPANY | ORIC Pharmaceuticals is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ORIGIS_ENERGY | source-company-origisenergy | OTHER | COMPANY | Origis Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OSANO | source-company-osano | OTHER | COMPANY | Osano is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OSARO | source-company-osaro | OTHER | COMPANY | OSARO is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OSCAR | source-company-oscar | OTHER | COMPANY | Oscar Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OSCILAR | source-company-oscilar | OTHER | COMPANY | Oscilar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OSO | source-company-oso | OTHER | COMPANY | Oso is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OTTER | source-company-otter | OTHER | COMPANY | Otter is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OTTERAI | source-company-otterai | OTHER | COMPANY | Otter.ai is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OURA | source-company-oura | OTHER | COMPANY | Oura is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OUTREACH | source-company-outreach | OTHER | COMPANY | Outreach is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OUTSCHOOL | source-company-outschool | OTHER | COMPANY | Outschool is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OUTSURANCE | source-company-outsurance | OTHER | COMPANY | OUTsurance is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OVERSTORY | source-company-overstory | OTHER | COMPANY | Overstory is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OVERVIEW_ENERGY | source-company-overviewenergy | OTHER | COMPANY | Overview Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OWNWELL | source-company-ownwell | OTHER | COMPANY | Ownwell is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OXFAM_AMERICA | source-company-oxfamamerica | OTHER | COMPANY | Oxfam America is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| OZOW | source-company-ozow | OTHER | COMPANY | Ozow is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PACASO | source-company-pacaso | OTHER | COMPANY | Pacaso is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PACIFICFUSION | source-company-pacificfusion | OTHER | COMPANY | Pacific Fusion is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PACVUE | source-company-pacvue | OTHER | COMPANY | Pacvue is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAGAYA | source-company-pagaya | OTHER | COMPANY | Pagaya is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAGERDUTY | source-company-pagerduty | OTHER | COMPANY | PagerDuty is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PALMETTO_CLEAN_TECHNOLOGY | source-company-palmettocleantech | OTHER | COMPANY | Palmetto Clean Technology is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAPA | source-company-papa | OTHER | COMPANY | Papa is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PARACHUTE_HOME | source-company-parachutehome | OTHER | COMPANY | Parachute Home is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PARAMOUNT | source-company-paramount | OTHER | COMPANY | Paramount is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PARK_AVENUE_COFFEE | source-company-parkavenuecoffee | OTHER | COMPANY | Park Avenue Coffee is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PARLOA | source-company-parloa | OTHER | COMPANY | Parloa is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PARSLEY_HEALTH | source-company-parsleyhealth | OTHER | COMPANY | Parsley Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PATCH_CAREGIVING | source-company-patch | OTHER | COMPANY | Patch Caregiving is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PATHAI | source-company-pathai | OTHER | COMPANY | PathAI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PATH_ROBOTICS | source-company-pathrobotics | OTHER | COMPANY | Path Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PATHWARD | source-company-pathward | OTHER | COMPANY | Pathward is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PATTERN | source-company-pattern | OTHER | COMPANY | Pattern is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAXOS_LABS | source-company-paxoslabs | OTHER | COMPANY | Paxos Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAYFLOWS | source-company-payflows | OTHER | COMPANY | Payflows is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAYJOY | source-company-payjoy | OTHER | COMPANY | PayJoy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAYNEARME | source-company-paynearmeinc | OTHER | COMPANY | PayNearMe is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAYSTACK | source-company-paystack | OTHER | COMPANY | Paystack is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAYTER | source-company-payter | OTHER | COMPANY | Payter is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PAYTM | source-company-paytm | OTHER | COMPANY | Paytm is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PEAK_ENERGY | source-company-peakenergy | OTHER | COMPANY | Peak Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PEAK | source-company-peakgames | OTHER | COMPANY | Peak is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PEDDLER | source-company-peddler | OTHER | COMPANY | Peddler is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PELOTON | source-company-peloton | OTHER | COMPANY | Peloton is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PENDO | source-company-pendo | OTHER | COMPANY | Pendo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PENFINANCIAL_CREDIT_UNION | source-company-penfinancialcreditunion | OTHER | COMPANY | PenFinancial Credit Union is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PERICOM_SEMICONDUCTOR | source-company-pericomsemiconductor | OTHER | COMPANY | Pericom Semiconductor is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PERIODIC_LABS | source-company-periodiclabs | OTHER | COMPANY | Periodic Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PERIPASS | source-company-peripass | OTHER | COMPANY | Peripass is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PERPAY | source-company-perpay | OTHER | COMPANY | Perpay is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PERPLEXITY | source-company-perplexity | OTHER | COMPANY | Perplexity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PHONEPE | source-company-phonepe | OTHER | COMPANY | PhonePe is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PICKLE_ROBOT_COMPANY | source-company-picklerobot | OTHER | COMPANY | Pickle Robot Company is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PIE_INSURANCE | source-company-pieinsurance | OTHER | COMPANY | Pie Insurance is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PIKA | source-company-pika | OTHER | COMPANY | Pika is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PILOT_COMPANY | source-company-pilotcompany | OTHER | COMPANY | Pilot Company is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PINTEREST | source-company-pinterest | OTHER | COMPANY | Pinterest is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PIVOT_BIO | source-company-pivotbio | OTHER | COMPANY | Pivot Bio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PIVOT_ENERGY | source-company-pivotenergy | OTHER | COMPANY | Pivot Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PIXABILITY | source-company-pixability | OTHER | COMPANY | Pixability is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PLAID | source-company-plaid | OTHER | COMPANY | Plaid is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PLANETSCALE | source-company-planetscale | OTHER | COMPANY | PlanetScale is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PLATINUM_HEALTHCARE_STAFFING | source-company-platinumhealthcarestaffing | OTHER | COMPANY | Platinum Healthcare Staffing is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PLUS_POWER | source-company-pluspower | OTHER | COMPANY | Plus Power is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THE_POK_MON_COMPANY_INTERNATIONAL | source-company-pokemoncareers | OTHER | COMPANY | The PokÃ©mon Company International is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| POLYMARKET | source-company-polymarket | OTHER | COMPANY | Polymarket is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| POPPY | source-company-poppy | OTHER | COMPANY | Poppy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| POSTSCRIPT | source-company-postscript | OTHER | COMPANY | Postscript is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| POWERGEN_RENEWABLE_ENERGY | source-company-powergenrenewableenergy | OTHER | COMPANY | PowerGen Renewable Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PREFECT | source-company-prefect | OTHER | COMPANY | Prefect is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PRENUVO | source-company-prenuvo | OTHER | COMPANY | Prenuvo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PRIJSVRIJ_VAKANTIES | source-company-prijsvrijvakanties | OTHER | COMPANY | Prijsvrij Vakanties is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PRIMELENDING | source-company-primelending | OTHER | COMPANY | PrimeLending is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PRIME_MEDICINE | source-company-primemedicine | OTHER | COMPANY | Prime Medicine is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PRINCESS_POLLY | source-company-princesspolly | OTHER | COMPANY | Princess Polly is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PROFLUENT | source-company-profluent | OTHER | COMPANY | Profluent is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PROFORTO | source-company-proforto | OTHER | COMPANY | Proforto is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PROJECT44 | source-company-project44 | OTHER | COMPANY | project44 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PROOF | source-company-proof | OTHER | COMPANY | Proof is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PROPHET_SECURITY | source-company-prophetsecurity | OTHER | COMPANY | Prophet Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PROSIDIAN_CONSULTING | source-company-prosidianconsulting | OTHER | COMPANY | ProSidian Consulting is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PROTON | source-company-proton | OTHER | COMPANY | Proton is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PROVE | source-company-prove | OTHER | COMPANY | Prove is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PROXIMA_FUSION | source-company-proximafusion | OTHER | COMPANY | Proxima Fusion is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PSIQUANTUM | source-company-psiquantum | OTHER | COMPANY | PsiQuantum is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PS_LOGISTICS | source-company-pslogistics | OTHER | COMPANY | PS Logistics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PUBLIC_INVEST | source-company-public | OTHER | COMPANY | Public is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PUBMATIC | source-company-pubmatic | OTHER | COMPANY | PubMatic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PYLON | source-company-pylon | OTHER | COMPANY | Pylon is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PYRAMID_CONSULTING | source-company-pyramidconsulting | OTHER | COMPANY | Pyramid Consulting is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QANTAS_GROUP | source-company-qantasgroup | OTHER | COMPANY | Qantas Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QLF_BRANDS_LAMPENLICHT_NL | source-company-qlfbrandslampenlichtnl | OTHER | COMPANY | QLF Brands (lampenlicht.nl) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QPHOX | source-company-qphox | OTHER | COMPANY | QphoX is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUAISE | source-company-quaise | OTHER | COMPANY | Quaise Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUALIA | source-company-qualia | OTHER | COMPANY | Qualia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUALIFIED_HEALTH | source-company-qualifiedhealth | OTHER | COMPANY | Qualified Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUALIFYZE | source-company-qualifyze | OTHER | COMPANY | Qualifyze is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUANATA | source-company-quanata | OTHER | COMPANY | Quanata is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUANTUM_METRIC | source-company-quantummetric | OTHER | COMPANY | Quantum Metric is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUEST_DIAGNOSTICS | source-company-questdiagnostics | OTHER | COMPANY | Quest Diagnostics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUILT | source-company-quilt | OTHER | COMPANY | Quilt is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUINCE | source-company-quince | OTHER | COMPANY | Quince is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUINTOANDAR | source-company-quintoandar | OTHER | COMPANY | QuintoAndar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QUIP | source-company-quip | OTHER | COMPANY | quip is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| QVENTUS | source-company-qventus | OTHER | COMPANY | Qventus is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RADIANT_INDUSTRIES | source-company-radiantindustries | OTHER | COMPANY | Radiant Industries is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RAILWAY | source-company-railway | OTHER | COMPANY | Railway is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RAISING_CANE_S | source-company-raisingcanes | OTHER | COMPANY | Raising Cane\ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RAMBOLL | source-company-ramboll | OTHER | COMPANY | Ramboll is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RAMP | source-company-ramp | OTHER | COMPANY | Ramp is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RAMPNETWORK | source-company-rampnetwork | OTHER | COMPANY | Ramp Network is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RANGE_TRAVEL | source-company-range | OTHER | COMPANY | Range is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RANGE_ENERGY | source-company-rangeenergy | OTHER | COMPANY | Range Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RAPID_MICRO_BIOSYSTEMS | source-company-rapidmicrobio | OTHER | COMPANY | Rapid Micro Biosystems is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RAZORPAY | source-company-razorpaysoftwareprivatelimited | OTHER | COMPANY | Razorpay is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| README | source-company-readme | OTHER | COMPANY | ReadMe is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REALITY_DEFENDER | source-company-realitydefender | OTHER | COMPANY | Reality Defender is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REBUY | source-company-rebuy | OTHER | COMPANY | Rebuy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RECHARGE | source-company-recharge | OTHER | COMPANY | Recharge is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RECORDED_FUTURE | source-company-recordedfuture | OTHER | COMPANY | Recorded Future is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RECURSION | source-company-recursionpharmaceuticals | OTHER | COMPANY | Recursion is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RED_BULL | source-company-redbull | OTHER | COMPANY | Red Bull is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RED_CANYON_ENGINEERING_SOFTWARE | source-company-redcanyonsoftware | OTHER | COMPANY | Red Canyon Engineering & Software is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REDOX | source-company-redoxengine | OTHER | COMPANY | Redox is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REDWOOD_MATERIALS | source-company-redwoodmaterials | OTHER | COMPANY | Redwood Materials is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REFLECT_ORBITAL | source-company-reflectorbital | OTHER | COMPANY | Reflect Orbital is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REFORMATION | source-company-reformation | OTHER | COMPANY | Reformation is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REGAL | source-company-regalai | OTHER | COMPANY | Regal is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REKA | source-company-reka | OTHER | COMPANY | Reka is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RELAIS_CH_TEAUX | source-company-relaischteaux | OTHER | COMPANY | Relais & ChÃ¢teaux is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RELATIVITY | source-company-relativity | OTHER | COMPANY | Relativity Space is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RELAY_ROBOTICS | source-company-relayroboticscom | OTHER | COMPANY | Relay Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RELAY_THERAPEUTICS | source-company-relaytherapeutics | OTHER | COMPANY | Relay Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RELIABLE_ROBOTICS | source-company-reliablerobotics | OTHER | COMPANY | Reliable Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RELIEF_INTERNATIONAL | source-company-reliefinternational | OTHER | COMPANY | Relief International is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RENAISSANCE_LEARNING | source-company-renaissancelearning-nam | OTHER | COMPANY | Renaissance Learning is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RENDER | source-company-render | OTHER | COMPANY | Render is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RENESAS_ELECTRONICS | source-company-renesaselectronics | OTHER | COMPANY | Renesas Electronics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RENUITY | source-company-renuity | OTHER | COMPANY | Renuity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REONIC | source-company-reonic | OTHER | COMPANY | Reonic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REPRALLY | source-company-reprally | OTHER | COMPANY | RepRally is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RESEND | source-company-resend | OTHER | COMPANY | Resend is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REVEFI | source-company-revefi | OTHER | COMPANY | Revefi is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REVINATE | source-company-revinate | OTHER | COMPANY | Revinate is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| REXEL | source-company-rexel | OTHER | COMPANY | Rexel is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RISKIFIED | source-company-riskified | OTHER | COMPANY | Riskified is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RITHUM | source-company-rithum | OTHER | COMPANY | Rithum is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RITUAL | source-company-ritual | OTHER | COMPANY | Ritual is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RIVERLANE | source-company-riverlane | OTHER | COMPANY | Riverlane is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROBCO | source-company-robco | OTHER | COMPANY | RobCo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROBINHOOD | source-company-robinhood | OTHER | COMPANY | Robinhood is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROBLOX | source-company-roblox | OTHER | COMPANY | Roblox is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROCKET_LAB | source-company-rocketlab | OTHER | COMPANY | Rocket Lab is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROCKET_LAWYER | source-company-rocketlawyer | OTHER | COMPANY | Rocket Lawyer is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROCKSTAR_GAMES | source-company-rockstargames | OTHER | COMPANY | Rockstar Games is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROKU | source-company-roku | OTHER | COMPANY | Roku is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RONDO_ENERGY | source-company-rondoenergy | OTHER | COMPANY | Rondo Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROOFSTOCK | source-company-roofstock | OTHER | COMPANY | Roofstock is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROTHY_S | source-company-rothys | OTHER | COMPANY | Rothy\ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RUGGABLE | source-company-ruggable | OTHER | COMPANY | Ruggable is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RULA | source-company-rula | OTHER | COMPANY | Rula is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RUNPOD | source-company-runpod | OTHER | COMPANY | Runpod is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RUNWISE | source-company-runwise | OTHER | COMPANY | Runwise is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SAATVA | source-company-saatva | OTHER | COMPANY | Saatva is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SAFE_SECURITY | source-company-safe | OTHER | COMPANY | Safe Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SAILOR_HEALTH | source-company-sailorhealth | OTHER | COMPANY | Sailor Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SALESLOFT | source-company-salesloft | OTHER | COMPANY | Salesloft is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SALOMON | source-company-salomon | OTHER | COMPANY | Salomon is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SALVO_HEALTH | source-company-salvohealth | OTHER | COMPANY | Salvo Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SAMBANOVA_SYSTEMS | source-company-sambanovasystems | OTHER | COMPANY | SambaNova Systems is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SAMBA_TV | source-company-sambatv | OTHER | COMPANY | Samba TV is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SAMSARA | source-company-samsara | OTHER | COMPANY | Samsara is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SANA_BIOTECHNOLOGY | source-company-sanabiotech | OTHER | COMPANY | Sana Biotechnology is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SANDISK | source-company-sandisk | OTHER | COMPANY | SanDisk is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SANITY | source-company-sanity | OTHER | COMPANY | Sanity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SARDINE | source-company-sardine | OTHER | COMPANY | Sardine is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SARONIC_TECHNOLOGIES | source-company-saronictechnologies | OTHER | COMPANY | Saronic Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SAYARI | source-company-sayari | OTHER | COMPANY | Sayari is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SCALABLE_CAPITAL | source-company-scalablecapital | OTHER | COMPANY | Scalable Capital is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SCALEAI | source-company-scaleai | OTHER | COMPANY | Scale AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SCALIAN | source-company-scalian | OTHER | COMPANY | Scalian is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SCOPELY | source-company-scopely | OTHER | COMPANY | Scopely is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SCOUT_AI | source-company-scoutai | OTHER | COMPANY | Scout AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SE3_LABS | source-company-se3labs | OTHER | COMPANY | SE3 Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SEAKR_ENGINEERING | source-company-seakrengineering | OTHER | COMPANY | SEAKR Engineering is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SECFIX | source-company-secfix | OTHER | COMPANY | Secfix is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SECURITAS | source-company-securitas | OTHER | COMPANY | Securitas is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SECURITIZE | source-company-securitize | OTHER | COMPANY | Securitize is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SECURITYSCORECARD | source-company-securityscorecard | OTHER | COMPANY | SecurityScorecard is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SEED_HEALTH | source-company-seed | OTHER | COMPANY | Seed Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SEEKOUT | source-company-seekout | OTHER | COMPANY | SeekOut is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SELF_FINANCIAL | source-company-selffinancial | OTHER | COMPANY | Self Financial is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SEMGREP | source-company-semgrep | OTHER | COMPANY | Semgrep is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SEMPERIS | source-company-semperis | OTHER | COMPANY | Semperis is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SENDBIRD | source-company-sendbird | OTHER | COMPANY | Sendbird is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SENIOR_PLC | source-company-seniorplc | OTHER | COMPANY | Senior plc is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SENTILINK | source-company-sentilink | OTHER | COMPANY | SentiLink is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SENTRY | source-company-sentry | OTHER | COMPANY | Sentry is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SEOUL_ROBOTICS | source-company-seoulrobotics | OTHER | COMPANY | Seoul Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SEROTONIN | source-company-serotonin | OTHER | COMPANY | Serotonin is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SERVE_ROBOTICS | source-company-serverobotics | OTHER | COMPANY | Serve Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SES_AI | source-company-sesai | OTHER | COMPANY | SES AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SEURAT_TECHNOLOGIES | source-company-seurat | OTHER | COMPANY | Seurat Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SEZZLE | source-company-sezzle | OTHER | COMPANY | Sezzle is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SHAW_S | source-company-shaws | OTHER | COMPANY | Shaw\ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SHIELD_AI | source-company-shieldai | OTHER | COMPANY | Shield AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SHIFT_TECHNOLOGY | source-company-shifttechnology | OTHER | COMPANY | Shift Technology is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SHIPBOB | source-company-shipbobinc | OTHER | COMPANY | ShipBob is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SHIPMONK | source-company-shipmonk | OTHER | COMPANY | ShipMonk is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SHOP_MANUFAKTUR | source-company-shopmanufaktur | OTHER | COMPANY | Shop Manufaktur is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SHOPMONKEY | source-company-shopmonkey | OTHER | COMPANY | Shopmonkey is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SIDECAR_HEALTH | source-company-sidecarhealth | OTHER | COMPANY | Sidecar Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SIERRA | source-company-sierra | OTHER | COMPANY | Sierra is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SIGNOZ | source-company-signoz | OTHER | COMPANY | SigNoz is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SIKA | source-company-sika | OTHER | COMPANY | Sika is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SILA_NANOTECHNOLOGIES | source-company-silananotechnologies | OTHER | COMPANY | Sila Nanotechnologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SILFAB_SOLAR | source-company-silfabsolar | OTHER | COMPANY | Silfab Solar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SILICON_RANCH | source-company-siliconranch | OTHER | COMPANY | Silicon Ranch is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SIMPLISAFE | source-company-simplisafe | OTHER | COMPANY | SimpliSafe is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SIMPLISOLAR | source-company-simplisolar | OTHER | COMPANY | Simplisolar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SIMVIA | source-company-simvia | OTHER | COMPANY | Simvia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SINGLESTORE | source-company-singlestore | OTHER | COMPANY | SingleStore is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SIXT | source-company-sixt | OTHER | COMPANY | SIXT is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SKILLSOFT | source-company-skillsoft | OTHER | COMPANY | Skillsoft is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SKYDIO | source-company-skydio | OTHER | COMPANY | Skydio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SLICE | source-company-slice | OTHER | COMPANY | Slice is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SLINGSHOT_AEROSPACE | source-company-slingshotaerospace | OTHER | COMPANY | Slingshot Aerospace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SMARTRENT | source-company-smartrent | OTHER | COMPANY | SmartRent is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SMILE_DIGITAL_HEALTH | source-company-smiledigitalhealth | OTHER | COMPANY | Smile Digital Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SMITHS_GROUP | source-company-smithsgroup | OTHER | COMPANY | Smiths Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SNORKEL_AI | source-company-snorkelai | OTHER | COMPANY | Snorkel AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SOCURE | source-company-socure | OTHER | COMPANY | Socure is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SODEXO | source-company-sodexo | OTHER | COMPANY | Sodexo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SODEXO_CANADA | source-company-sodexocanada | OTHER | COMPANY | Sodexo Canada is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SOFI | source-company-sofi | OTHER | COMPANY | SoFi is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SOLARIS | source-company-solarisbank | OTHER | COMPANY | Solaris is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SOLAR_LANDSCAPE | source-company-solarlandscape | OTHER | COMPANY | Solar Landscape is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SOL_DE_JANEIRO | source-company-soldejaneiro | OTHER | COMPANY | Sol de Janeiro is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SOLESTIAL | source-company-solestial | OTHER | COMPANY | Solestial is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SOLID_POWER | source-company-solidpower | OTHER | COMPANY | Solid Power is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SOLUTIONS_4_DELIVERY | source-company-solutions4delivery | OTHER | COMPANY | Solutions 4 Delivery is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SONDERMIND | source-company-sondermind | OTHER | COMPANY | SonderMind is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PLAYSTATION_SONY_INTERACTIVE_ENTERTAINMENT | source-company-sonyinteractiveentertainmentglobal | OTHER | COMPANY | PlayStation (Sony Interactive Entertainment) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SOUND_AGRICULTURE | source-company-soundagriculture | OTHER | COMPANY | Sound Agriculture is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPACEKNOW | source-company-spaceknow | OTHER | COMPANY | SpaceKnow is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPACEX | source-company-spacex | OTHER | COMPANY | SpaceX is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPAN | source-company-span | OTHER | COMPANY | SPAN is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPARKFUND | source-company-sparkfund | OTHER | COMPANY | Sparkfund is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPEAKEASY | source-company-speakeasy | OTHER | COMPANY | Speakeasy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPEAR_AI | source-company-spearai | OTHER | COMPANY | Spear AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPECTRUM_HEALTH_CARE | source-company-spectrumhealthcare | OTHER | COMPANY | Spectrum Health Care is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPEECHIFY | source-company-speechify | OTHER | COMPANY | Speechify is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPEECHMATICS | source-company-speechmatics | OTHER | COMPANY | Speechmatics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPIN | source-company-spin | OTHER | COMPANY | Spin is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPIRE_GLOBAL | source-company-spire | OTHER | COMPANY | Spire Global is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPLICE | source-company-splice | OTHER | COMPANY | Splice is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPORTRADAR | source-company-sportradar | OTHER | COMPANY | Sportradar is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPOTHOPPER | source-company-spothopper | OTHER | COMPANY | SpotHopper is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPREAD_GROUP | source-company-spreadgroup | OTHER | COMPANY | Spread Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPREETAIL | source-company-spreetail | OTHER | COMPANY | Spreetail is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPRINTER_HEALTH | source-company-sprinterhealth | OTHER | COMPANY | Sprinter Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SPYKE_GAMES | source-company-spykegames | OTHER | COMPANY | Spyke Games is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SQUARESPACE | source-company-squarespace | OTHER | COMPANY | Squarespace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STABILITYAI | source-company-stabilityai | OTHER | COMPANY | Stability AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STACKADAPT | source-company-stackadapt | OTHER | COMPANY | StackAdapt is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STACK_AV | source-company-stackav | OTHER | COMPANY | Stack AV is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STACKBLITZ | source-company-stackblitz | OTHER | COMPANY | StackBlitz is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STACKLINE | source-company-stackline | OTHER | COMPANY | Stackline is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STAFFING_MEDICAL_USA | source-company-staffingmedicalusa | OTHER | COMPANY | Staffing Medical USA is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STANDARD_BANK_GROUP | source-company-standardbankgroup | OTHER | COMPANY | Standard Bank Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STANDARD_BOTS | source-company-standardbots | OTHER | COMPANY | Standard Bots is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STANDARD_SUBSEA | source-company-standardsubsea | OTHER | COMPANY | Standard Subsea is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STANFORD_MEDICINE_CHILDREN_S_HEALTH | source-company-stanfordmedicinechildrenshealth | OTHER | COMPANY | Stanford Medicine Children\ is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STARBURST | source-company-starburst | OTHER | COMPANY | Starburst is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STARFACE_WORLD | source-company-starfaceworld | OTHER | COMPANY | Starface World is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STARGATE_FOUNDATION | source-company-stargatefoundation | OTHER | COMPANY | Stargate Foundation is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STATKRAFT | source-company-statkraft | OTHER | COMPANY | Statkraft is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STAXXER | source-company-staxxer | OTHER | COMPANY | Staxxer is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STEM_XPERT | source-company-stemxpert | OTHER | COMPANY | Stem Xpert is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STITCHFIX | source-company-stitchfix | OTHER | COMPANY | Stitch Fix is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STOCKX | source-company-stockx | OTHER | COMPANY | StockX is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STOKE_SPACE | source-company-stokespacetechnologies | OTHER | COMPANY | Stoke Space is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STORYBLOK | source-company-storyblok | OTHER | COMPANY | Storyblok is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STRAND_THERAPEUTICS | source-company-strandtherapeutics | OTHER | COMPANY | Strand Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STRATAS_FOODS | source-company-stratasfoods | OTHER | COMPANY | Stratas Foods is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STRATEGIC_STAFFING_SOLUTIONS_S3 | source-company-strategicstaffingsolutionss3 | OTHER | COMPANY | Strategic Staffing Solutions (S3) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STRIVEHEALTH | source-company-strivehealth | OTHER | COMPANY | Strive Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STRUCTUBE | source-company-structube | OTHER | COMPANY | Structube is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STUDYPOINT | source-company-studypoint | OTHER | COMPANY | StudyPoint is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| STYTCH | source-company-stytch | OTHER | COMPANY | Stytch is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SUITSUPPLY | source-company-suitsupply | OTHER | COMPANY | Suitsupply is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SUKI_AI | source-company-suki | OTHER | COMPANY | Suki AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SUMO_LOGIC | source-company-sumologic | OTHER | COMPANY | Sumo Logic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SUMUP | source-company-sumup | OTHER | COMPANY | SumUp is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SUNO | source-company-suno | OTHER | COMPANY | Suno is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SUN_STUDIO | source-company-sunstudio | OTHER | COMPANY | Sun Studio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SUNTIVA | source-company-suntiva | OTHER | COMPANY | Suntiva is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SUPERELLIPSE | source-company-superellipse | OTHER | COMPANY | Superellipse is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SUPERLINEAR | source-company-superlinear | OTHER | COMPANY | Superlinear is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SURVEYMONKEY | source-company-surveymonkey | OTHER | COMPANY | SurveyMonkey is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SVIX | source-company-svix | OTHER | COMPANY | Svix is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SWAP | source-company-swap | OTHER | COMPANY | Swap is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SWEETGREEN | source-company-sweetgreen | OTHER | COMPANY | sweetgreen is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SWISS_HOSPITALITY | source-company-swisshospitality | OTHER | COMPANY | Swiss Hospitality is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SWORD_HEALTH | source-company-swordhealth | OTHER | COMPANY | Sword Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SYMMETRY_FINANCIAL_GROUP | source-company-symmetryfinancialgroup | OTHER | COMPANY | Symmetry Financial Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SYMPHONY | source-company-symphony | OTHER | COMPANY | Symphony Communication Services is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SYNAPTICURE | source-company-synapticure | OTHER | COMPANY | Synapticure is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SYNDICA | source-company-syndica | OTHER | COMPANY | Syndica is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SYNGENTA_GROUP | source-company-syngentagroup | OTHER | COMPANY | Syngenta Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SYNTHESIA | source-company-synthesia | OTHER | COMPANY | Synthesia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| SYSDIG | source-company-sysdig | OTHER | COMPANY | Sysdig is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TABAPAY | source-company-tabapay | OTHER | COMPANY | TabaPay is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TAHOE_THERAPEUTICS | source-company-tahoebioai | OTHER | COMPANY | Tahoe Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TAILSCALE | source-company-tailscale | OTHER | COMPANY | Tailscale is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TAKE_TWO_INTERACTIVE | source-company-taketwo | OTHER | COMPANY | Take-Two Interactive is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TALAN | source-company-talan | OTHER | COMPANY | Talan is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TALKIATRY | source-company-talkiatry | OTHER | COMPANY | Talkiatry is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TALKSPACE | source-company-talkspace | OTHER | COMPANY | Talkspace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TAMARA | source-company-tamara | OTHER | COMPANY | Tamara is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TANIUM | source-company-tanium | OTHER | COMPANY | Tanium is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TAPCART | source-company-tapcart | OTHER | COMPANY | Tapcart is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TAPTAP_SEND | source-company-taptapsend | OTHER | COMPANY | Taptap Send is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TAR | source-company-tar | OTHER | COMPANY | TAR is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TASTYTRADE | source-company-tastytrade | OTHER | COMPANY | tastytrade is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TATARI | source-company-tatari | OTHER | COMPANY | Tatari is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TAXBIT | source-company-taxbit | OTHER | COMPANY | TaxBit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TEBRA | source-company-tebra | OTHER | COMPANY | Tebra is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TECHNICA_ENGINEERING | source-company-technicaengineering | OTHER | COMPANY | Technica Engineering is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TEGNA | source-company-tegnainc | OTHER | COMPANY | TEGNA is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TELEF_NICA_TECH | source-company-telefnicatech | OTHER | COMPANY | TelefÃ³nica Tech is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TELEO | source-company-teleo | OTHER | COMPANY | Teleo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TEMPO | source-company-tempo | OTHER | COMPANY | Tempo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TEMPORAL_TECHNOLOGIES | source-company-temporaltechnologies | OTHER | COMPANY | Temporal Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TENABLE | source-company-tenableinc | OTHER | COMPANY | Tenable is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TENEX_AI | source-company-tenexai | OTHER | COMPANY | TENEX.AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TENSTORRENT | source-company-tenstorrent | OTHER | COMPANY | Tenstorrent is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TERRAN_ORBITAL | source-company-terranorbitalcorporation | OTHER | COMPANY | Terran Orbital is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TESSENDERLO_GROUP | source-company-tessenderlogroup | OTHER | COMPANY | Tessenderlo Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TESSERA_THERAPEUTICS | source-company-tesseratherapeutics | OTHER | COMPANY | Tessera Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TEXAS_HEALTH_RESOURCES | source-company-texashealthresources | OTHER | COMPANY | Texas Health Resources is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TEXTIO | source-company-textio | OTHER | COMPANY | Textio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THE_ATHLETIC | source-company-theathletic | OTHER | COMPANY | The Athletic is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THE_BOT_COMPANY | source-company-thebotcompany | OTHER | COMPANY | The Bot Company is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| DUTCHIE | source-company-thedutchie | OTHER | COMPANY | Dutchie is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THE_EXPLORATION_COMPANY | source-company-theexplorationcompany | OTHER | COMPANY | The Exploration Company is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THE_NEW_YORK_TIMES | source-company-thenewyorktimes | OTHER | COMPANY | The New York Times is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THE_NIELSEN_COMPANY | source-company-thenielsencompany | OTHER | COMPANY | The Nielsen Company is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THE_TRADE_DESK | source-company-thetradedesk | OTHER | COMPANY | The Trade Desk is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THE_WONDERFUL_COMPANY | source-company-thewonderfulcompany | OTHER | COMPANY | The Wonderful Company is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THIRDLOVE | source-company-thirdlove | OTHER | COMPANY | ThirdLove is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THIRD_WAVE_AUTOMATION | source-company-thirdwaveautomation | OTHER | COMPANY | Third Wave Automation is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THOROPASS | source-company-thoropass | OTHER | COMPANY | Thoropass is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THRIVE_MARKET | source-company-thrivemarket | OTHER | COMPANY | Thrive Market is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| THUNES | source-company-thunes | OTHER | COMPANY | Thunes is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TIA_HEALTH | source-company-tia | OTHER | COMPANY | Tia is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TIDE | source-company-tide | OTHER | COMPANY | Tide is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TIGERDATA_TIMESCALE | source-company-tigerdatatimescale | OTHER | COMPANY | TigerData (Timescale) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TOAST | source-company-toast | OTHER | COMPANY | Toast is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TOGETHERAI | source-company-togetherai | OTHER | COMPANY | Together AI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TOMS | source-company-toms | OTHER | COMPANY | TOMS is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TOO_GOOD_TO_GO | source-company-toogoodtogo | OTHER | COMPANY | Too Good To Go is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TOPIC | source-company-topic | OTHER | COMPANY | TOPIC is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TORADEX | source-company-toradex | OTHER | COMPANY | Toradex is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TORC_ROBOTICS | source-company-torcrobotics | OTHER | COMPANY | Torc Robotics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRAACKR | source-company-traackr | OTHER | COMPANY | Traackr is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRANSAT_AT | source-company-transatat | OTHER | COMPANY | Transat AT is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRANSCARENT | source-company-transcarent | OTHER | COMPANY | Transcarent is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRANSMIT_SECURITY | source-company-transmitsecurity | OTHER | COMPANY | Transmit Security is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRENDYOL | source-company-trendyol | OTHER | COMPANY | Trendyol is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRIAL_LIBRARY | source-company-triallibrary | OTHER | COMPANY | Trial Library is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRIPACTIONS | source-company-tripactions | OTHER | COMPANY | Navan is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRM_LABS | source-company-trmlabs | OTHER | COMPANY | TRM Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRUE_ANOMALY | source-company-trueanomalyinc | OTHER | COMPANY | True Anomaly is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ROCKET_MONEY | source-company-truebill | OTHER | COMPANY | Rocket Money is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRUELAYER | source-company-truelayer | OTHER | COMPANY | TrueLayer is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRUEWERK | source-company-truewerk | OTHER | COMPANY | Truewerk is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRUE_ZERO_TECHNOLOGIES | source-company-truezerotech | OTHER | COMPANY | True Zero Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRUSTED_SHOPS | source-company-trustedshops | OTHER | COMPANY | Trusted Shops is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRUSTLY | source-company-trustly | OTHER | COMPANY | Trustly is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TRUST_WALLET | source-company-trustwallet | OTHER | COMPANY | Trust Wallet is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| JEEVES | source-company-tryjeeves | OTHER | COMPANY | Jeeves is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| PICNIC_DELIVERY | source-company-try-picnic | OTHER | COMPANY | Picnic Delivery is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| RIOT | source-company-tryriot | OTHER | COMPANY | RIOT is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TURING | source-company-turing | OTHER | COMPANY | Turing is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TURNER_TOWNSEND | source-company-turnertownsend | OTHER | COMPANY | Turner & Townsend is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TWELVE | source-company-twelve | OTHER | COMPANY | Twelve is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TWIST_BIOSCIENCE | source-company-twistbioscience | OTHER | COMPANY | Twist Bioscience is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TWITCH | source-company-twitch | OTHER | COMPANY | Twitch is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TWO_CHAIRS | source-company-twochairs | OTHER | COMPANY | Two Chairs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TYPEFACE | source-company-typeface | OTHER | COMPANY | Typeface is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| TYPEFORM | source-company-typeform | OTHER | COMPANY | Typeform is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UBER_FREIGHT | source-company-uberfreight | OTHER | COMPANY | Uber Freight is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UDACITY | source-company-udacity | OTHER | COMPANY | Udacity is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UDEMY | source-company-udemy | OTHER | COMPANY | Udemy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UDIO | source-company-udio | OTHER | COMPANY | Udio is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UJET | source-company-ujet | OTHER | COMPANY | UJET is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ULBRICH_STAINLESS_STEELS_SPECIAL_METALS | source-company-ulbrichstainlesssteelsspecialmetals | OTHER | COMPANY | Ulbrich Stainless Steels & Special Metals is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UNCOMMON_SCHOOLS | source-company-uncommonschools | OTHER | COMPANY | Uncommon Schools is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UNDERDOG | source-company-underdogfantasy | OTHER | COMPANY | Underdog is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UNIT | source-company-unit | OTHER | COMPANY | Unit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UNIT4 | source-company-unit4 | OTHER | COMPANY | Unit4 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UNITEK_LEARNING | source-company-uniteklearning | OTHER | COMPANY | Unitek Learning is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UNITE_US | source-company-uniteus | OTHER | COMPANY | Unite Us is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UNIVERSITY_OF_THE_WEST_OF_ENGLAND | source-company-universityofthewestofengland | OTHER | COMPANY | University of the West of England is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UNQORK | source-company-unqork | OTHER | COMPANY | Unqork is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UNYBRANDS | source-company-unybrands | OTHER | COMPANY | unybrands is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UP42 | source-company-up42 | OTHER | COMPANY | UP42 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UPGRADE | source-company-upgrade | OTHER | COMPANY | Upgrade is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UPSIDE | source-company-upside | OTHER | COMPANY | Upside is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UPSLIDE | source-company-upslide | OTHER | COMPANY | UpSlide is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| UPSTART | source-company-upstart | OTHER | COMPANY | Upstart is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| URSA_MAJOR | source-company-ursamajor | OTHER | COMPANY | Ursa Major is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ULTRAVIOLET_CYBER | source-company-uvcyber | OTHER | COMPANY | UltraViolet Cyber is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VALENCE_LABS | source-company-valencelabs | OTHER | COMPANY | Valence Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VALEO_FOODS | source-company-valeofoods | OTHER | COMPANY | Valeo Foods is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VALO_HEALTH | source-company-valohealth | OTHER | COMPANY | Valo Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VALUEZON | source-company-valuezon | OTHER | COMPANY | VALUEZON is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VANNEVAR_LABS | source-company-vannevarlabs | OTHER | COMPANY | Vannevar Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VANTA | source-company-vanta | OTHER | COMPANY | Vanta is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VARDA_SPACE_INDUSTRIES | source-company-vardaspace | OTHER | COMPANY | Varda Space Industries is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VAST | source-company-vast | OTHER | COMPANY | Vast is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VATTENFALL | source-company-vattenfall | OTHER | COMPANY | Vattenfall is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VENTI_TECHNOLOGIES | source-company-ventitechnologies | OTHER | COMPANY | Venti Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VENUS_AEROSPACE | source-company-venusaero | OTHER | COMPANY | Venus Aerospace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERIFF | source-company-veriff | OTHER | COMPANY | Veriff is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERIFIABLE | source-company-verifiable | OTHER | COMPANY | Verifiable is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERKADA | source-company-verkada | OTHER | COMPANY | Verkada is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERRA_MOBILITY | source-company-verramobility | OTHER | COMPANY | Verra Mobility is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERSAPAY | source-company-versapay | OTHER | COMPANY | Versapay is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERSION_1 | source-company-version1 | OTHER | COMPANY | Version 1 is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERTICAL_AEROSPACE | source-company-verticalaerospace | OTHER | COMPANY | Vertical Aerospace is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERTIGIS | source-company-vertigis | OTHER | COMPANY | VertiGIS is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERTUOZA | source-company-vertuoza | OTHER | COMPANY | Vertuoza is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VERVE_GROUP | source-company-verve | OTHER | COMPANY | Verve Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VEVO | source-company-vevo | OTHER | COMPANY | Vevo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VIA | source-company-via | OTHER | COMPANY | Via is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VIANT_TECHNOLOGY | source-company-vianttechnology | OTHER | COMPANY | Viant Technology is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VIKTOR | source-company-viktor | OTHER | COMPANY | VIKTOR is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VILLA_GROUP | source-company-villagroup | OTHER | COMPANY | Villa Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VIRAL_NATION | source-company-viralnation | OTHER | COMPANY | Viral Nation is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VOLTUS | source-company-voltus | OTHER | COMPANY | Voltus is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VONAGE | source-company-vonage | OTHER | COMPANY | Vonage is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VOX_MEDIA | source-company-voxmedia | OTHER | COMPANY | Vox Media is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VTECH_SOLUTION | source-company-vtechsolution | OTHER | COMPANY | vTech Solution is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VTS | source-company-vts | OTHER | COMPANY | VTS is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| VUORI | source-company-vuori | OTHER | COMPANY | Vuori is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WAABI | source-company-waabi | OTHER | COMPANY | Waabi is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WARP | source-company-warp | OTHER | COMPANY | Warp is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WATCHGUARD_TECHNOLOGIES | source-company-watchguard | OTHER | COMPANY | WatchGuard Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WATCHVICE_LEINGANG_E_COMMERCE | source-company-watchviceleingangecommerce | OTHER | COMPANY | WATCHVICE (Leingang E-Commerce) is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WATERSHED | source-company-watershed | OTHER | COMPANY | Watershed Informatics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WAYMARK_HEALTH | source-company-waymark | OTHER | COMPANY | Waymark Health is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WAYMO | source-company-waymo | OTHER | COMPANY | Waymo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WAYVE | source-company-wayve | OTHER | COMPANY | Wayve is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WEALTHFRONT | source-company-wealthfront | OTHER | COMPANY | Wealthfront is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WEAVE | source-company-weave | OTHER | COMPANY | Weave is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WEAVIATE | source-company-weaviate | OTHER | COMPANY | Weaviate is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WEBB_TRADERS | source-company-webbtraders | OTHER | COMPANY | WEBB Traders is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WEBFLOW | source-company-webflow | OTHER | COMPANY | Webflow is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WEEE | source-company-weee | OTHER | COMPANY | Weee! is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WEEZTIX | source-company-weeztix | OTHER | COMPANY | Weeztix is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WESTERN_DIGITAL | source-company-westerndigital | OTHER | COMPANY | Western Digital is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WHOOP | source-company-whoop | OTHER | COMPANY | WHOOP is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WILDLIFE_STUDIOS | source-company-wildlifestudios | OTHER | COMPANY | Wildlife Studios is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WILLIAM_OSLER_HEALTH_SYSTEM | source-company-williamoslerhealthsystem | OTHER | COMPANY | William Osler Health System is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WINDFALL | source-company-windfalldata | OTHER | COMPANY | Windfall is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WINDRANGER_LABS | source-company-windrangerlabs | OTHER | COMPANY | WindRanger Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WING | source-company-wing | OTHER | COMPANY | Wing is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WINTERMUTE | source-company-wintermutetrading | OTHER | COMPANY | Wintermute is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WIZ | source-company-wizinc | OTHER | COMPANY | Wiz is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WORKOS | source-company-workos | OTHER | COMPANY | WorkOS is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WORLD_LABS | source-company-worldlabs | OTHER | COMPANY | World Labs is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WORLD_WILDLIFE_FUND | source-company-worldwildlifefund | OTHER | COMPANY | World Wildlife Fund is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WRIKE | source-company-wrike | OTHER | COMPANY | Wrike is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WRITER | source-company-writer | OTHER | COMPANY | Writer is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WSH_GROUP | source-company-wshgroup | OTHER | COMPANY | WSH Group is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WURL | source-company-wurljobs | OTHER | COMPANY | Wurl is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| WYNN_RESORTS | source-company-wynnresorts | OTHER | COMPANY | Wynn Resorts is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| XAI | source-company-xai | OTHER | COMPANY | xAI is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| XAIRA_THERAPEUTICS | source-company-xairatherapeutics | OTHER | COMPANY | Xaira Therapeutics is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| XCIMER_ENERGY | source-company-xcimer | OTHER | COMPANY | Xcimer Energy is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| XENDIT | source-company-xendit | OTHER | COMPANY | Xendit is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| XPLOR_TECHNOLOGIES | source-company-xplortechnologies | OTHER | COMPANY | Xplor Technologies is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| XSARUS | source-company-xsarus | OTHER | COMPANY | XSARUS is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| XSOLLA | source-company-xsolla | OTHER | COMPANY | Xsolla is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| YOTPO | source-company-yotpo | OTHER | COMPANY | Yotpo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| YUGABYTE | source-company-yugabyte | OTHER | COMPANY | YugabyteDB is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZENCODER | source-company-zencoder | OTHER | COMPANY | Zencoder is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZENITH_TALENT | source-company-zenithtalent | OTHER | COMPANY | Zenith Talent is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZENNI_OPTICAL | source-company-zennioptical | OTHER | COMPANY | Zenni Optical is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZEROMARK | source-company-zeromark | OTHER | COMPANY | ZeroMark is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZOCDOC | source-company-zocdoc | OTHER | COMPANY | Zocdoc is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZOLA | source-company-zola | OTHER | COMPANY | Zola is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZOOMINFO | source-company-zoominfo | OTHER | COMPANY | ZoomInfo is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZOOX | source-company-zoox | OTHER | COMPANY | Zoox is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZUORA | source-company-zuora | OTHER | COMPANY | Zuora is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZWIFT | source-company-zwift | OTHER | COMPANY | Zwift is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| ZYNGA | source-company-zyngacareers | OTHER | COMPANY | Zynga is a specific employer career source; repository metadata does not reliably establish its primary geographic coverage. |
| GETONBOARD | source-getonboard | OTHER | JOB_BOARD | GetOnBoard is a general or regional job board whose primary region is not reliably encoded in the repository. |
| JOBDATAAPI | source-jobdataapi | OTHER | GENERIC_ADAPTER | JobDataAPI is an API-oriented job-data aggregator rather than a direct user-facing job destination. |

## 5. Потенційні generic adapters

All entries below are disabled for direct bot display. ATS packages accept a tenant/company identifier; JSON-LD accepts arbitrary job pages; Exa and JobDataAPI are API-oriented intermediary sources.

| Site | Package | Original category |
| --- | --- | --- |
| ADP | source-ats-adp | ats |
| AKKENCLOUD | source-ats-akkencloud | ats |
| ALTAMIRA | source-ats-altamira | ats |
| APPLICANTPRO | source-ats-applicantpro | ats |
| APPLICANTSTACK | source-ats-applicantstack | ats |
| APPLIED | source-ats-applied | ats |
| APPLOI | source-ats-apploi | ats |
| ARCORO | source-ats-arcoro | ats |
| ASHBY | source-ats-ashby | ats |
| AVATURE | source-ats-avature | ats |
| AVIONTE | source-ats-avionte | ats |
| BAMBOOHR | source-ats-bamboohr | ats |
| BEAMERY | source-ats-beamery | ats |
| BEESITE | source-ats-beesite | ats |
| BEETWEEN | source-ats-beetween | ats |
| BEISEN | source-ats-beisen | ats |
| BIZNEO | source-ats-bizneo | ats |
| BRASSRING | source-ats-brassring | ats |
| BREATHEHR | source-ats-breathehr | ats |
| BREEZYHR | source-ats-breezyhr | ats |
| BULLHORN | source-ats-bullhorn | ats |
| CAREERPLUG | source-ats-careerplug | ats |
| CARERIX | source-ats-carerix | ats |
| CATSONE | source-ats-catsone | ats |
| CEIPAL | source-ats-ceipal | ats |
| CEZANNE | source-ats-cezanne | ats |
| CLEARCOMPANY | source-ats-clearcompany | ats |
| CLEVERCONNECT | source-ats-cleverconnect | ats |
| COMEET | source-ats-comeet | ats |
| CONCLUDIS | source-ats-concludis | ats |
| CONNEXYS | source-ats-connexys | ats |
| CORNERSTONE | source-ats-cornerstone | ats |
| CRELATE | source-ats-crelate | ats |
| CVWAREHOUSE | source-ats-cvwarehouse | ats |
| DARWINBOX | source-ats-darwinbox | ats |
| DAYFORCE | source-ats-dayforce | ats |
| DEEL | source-ats-deel | ats |
| DIGITALRECRUITERS | source-ats-digitalrecruiters | ats |
| DOVER | source-ats-dover | ats |
| DVINCI | source-ats-dvinci | ats |
| EASYCRUIT | source-ats-easycruit | ats |
| EDDY | source-ats-eddy | ats |
| EIGHTFOLD | source-ats-eightfold | ats |
| ELMO | source-ats-elmo | ats |
| EMPLOYMENTHERO | source-ats-employmenthero | ats |
| EMPLY | source-ats-emply | ats |
| EPLOY | source-ats-eploy | ats |
| EXACTHIRE | source-ats-exacthire | ats |
| EXPR3SS | source-ats-expr3ss | ats |
| FACTORIAL | source-ats-factorial | ats |
| FLATCHR | source-ats-flatchr | ats |
| FOUNTAIN | source-ats-fountain | ats |
| FRESHTEAM | source-ats-freshteam | ats |
| GEM | source-ats-gem | ats |
| GOHIRE | source-ats-gohire | ats |
| GREENHOUSE | source-ats-greenhouse | ats |
| GREETING | source-ats-greeting | ats |
| GREYTHR | source-ats-greythr | ats |
| GUPY | source-ats-gupy | ats |
| HARRI | source-ats-harri | ats |
| HEYRECRUIT | source-ats-heyrecruit | ats |
| HIBOB | source-ats-hibob | ats |
| HIREFUL | source-ats-hireful | ats |
| HIREHIVE | source-ats-hirehive | ats |
| HIREOLOGY | source-ats-hireology | ats |
| HIRESERVE | source-ats-hireserve | ats |
| HIRINGTHING | source-ats-hiringthing | ats |
| HOMERUN | source-ats-homerun | ats |
| HREASILY | source-ats-hreasily | ats |
| HRON | source-ats-hron | ats |
| HRONE | source-ats-hrone | ats |
| HRPARTNER | source-ats-hrpartner | ats |
| ICIMS | source-ats-icims | ats |
| INRECRUITING | source-ats-inrecruiting | ats |
| ISMARTRECRUIT | source-ats-ismartrecruit | ats |
| ISOLVED | source-ats-isolved | ats |
| JAZZHR | source-ats-jazzhr | ats |
| JOBADDER | source-ats-jobadder | ats |
| JOBDIVA | source-ats-jobdiva | ats |
| JOBSCORE | source-ats-jobscore | ats |
| JOBSOID | source-ats-jobsoid | ats |
| JOBTOOLZ | source-ats-jobtoolz | ats |
| JOBTRAIN | source-ats-jobtrain | ats |
| JOBVITE | source-ats-jobvite | ats |
| JOBYLON | source-ats-jobylon | ats |
| JOIN_COM | source-ats-joincom | ats |
| KEKA | source-ats-keka | ats |
| KENJO | source-ats-kenjo | ats |
| LEVER | source-ats-lever | ats |
| LIVEHIRE | source-ats-livehire | ats |
| LOXO | source-ats-loxo | ats |
| MANATAL | source-ats-manatal | ats |
| MERCOR | source-ats-mercor | ats |
| MINDSCOPE | source-ats-mindscope | ats |
| MOKAHR | source-ats-mokahr | ats |
| NAMELY | source-ats-namely | ats |
| NICEBOARD | source-ats-niceboard | ats |
| OCCUPOP | source-ats-occupop | ats |
| OLEEO | source-ats-oleeo | ats |
| OORWIN | source-ats-oorwin | ats |
| ORACLE | source-ats-oracle | ats |
| OTYS | source-ats-otys | ats |
| PAGEUP | source-ats-pageup | ats |
| PAYCHEX | source-ats-paychex | ats |
| PAYCOM | source-ats-paycom | ats |
| PAYCOR | source-ats-paycor | ats |
| PAYLOCITY | source-ats-paylocity | ats |
| PCRECRUITER | source-ats-pcrecruiter | ats |
| PEOPLEFLUENT | source-ats-peoplefluent | ats |
| PEOPLEHR | source-ats-peoplehr | ats |
| PEOPLESTRONG | source-ats-peoplestrong | ats |
| PERSONIO | source-ats-personio | ats |
| PHENOM | source-ats-phenom | ats |
| PINPOINT | source-ats-pinpoint | ats |
| POLYMER | source-ats-polymer | ats |
| PRESCREEN | source-ats-prescreen | ats |
| PYJAMAHR | source-ats-pyjamahr | ats |
| RADANCY | source-ats-radancy | ats |
| REACHMEE | source-ats-reachmee | ats |
| RECOOTY | source-ats-recooty | ats |
| RECRUITCRM | source-ats-recruitcrm | ats |
| RECRUITEE | source-ats-recruitee | ats |
| RECRUITERFLOW | source-ats-recruiterflow | ats |
| RECRUITEZE | source-ats-recruiteze | ats |
| RECRUITIS | source-ats-recruitis | ats |
| RECRUITLY | source-ats-recruitly | ats |
| REXX | source-ats-rexx | ats |
| RIPPLING | source-ats-rippling | ats |
| ROUBLER | source-ats-roubler | ats |
| SAGEHR | source-ats-sagehr | ats |
| SAGEPEOPLE | source-ats-sagepeople | ats |
| SCOUTTALENT | source-ats-scouttalent | ats |
| SENSE | source-ats-sense | ats |
| SESAMEHR | source-ats-sesamehr | ats |
| SKEELED | source-ats-skeeled | ats |
| SMARTRECRUITERS | source-ats-smartrecruiters | ats |
| SNAPHUNT | source-ats-snaphunt | ats |
| SOFTGARDEN | source-ats-softgarden | ats |
| SOFTY | source-ats-softy | ats |
| SOLIDES | source-ats-solides | ats |
| SUBSCRIBEHR | source-ats-subscribehr | ats |
| SUCCESSFACTORS | source-ats-successfactors | ats |
| SYMPA | source-ats-sympa | ats |
| SYMPHONYTALENT | source-ats-symphonytalent | ats |
| TALEEZ | source-ats-taleez | ats |
| TALENTADORE | source-ats-talentadore | ats |
| TALENTERA | source-ats-talentera | ats |
| TALENTLYFT | source-ats-talentlyft | ats |
| TALENTREEF | source-ats-talentreef | ats |
| TALENTSOFT | source-ats-talentsoft | ats |
| TALEO | source-ats-taleo | ats |
| TEAMDASH | source-ats-teamdash | ats |
| TEAMTAILOR | source-ats-teamtailor | ats |
| TEMPWORKS | source-ats-tempworks | ats |
| TRACKERRMS | source-ats-trackerrms | ats |
| TRAFFIT | source-ats-traffit | ats |
| TRAKSTAR | source-ats-trakstar | ats |
| TRIBEPAD | source-ats-tribepad | ats |
| TURBOHIRE | source-ats-turbohire | ats |
| UKG | source-ats-ukg | ats |
| UMANTIS | source-ats-umantis | ats |
| VARBI | source-ats-varbi | ats |
| VIDCRUITER | source-ats-vidcruiter | ats |
| VINCERE | source-ats-vincere | ats |
| VIVAHR | source-ats-vivahr | ats |
| WEBCRUITER | source-ats-webcruiter | ats |
| WORKABLE | source-ats-workable | ats |
| WORKATASTARTUP | source-ats-workatastartup | ats |
| WORKDAY | source-ats-workday | ats |
| WORKFORCE | source-ats-workforce | ats |
| WORKSTREAM | source-ats-workstream | ats |
| WORKWISE | source-ats-workwise | ats |
| WTTJ | source-ats-wttj | ats |
| ZIMYO | source-ats-zimyo | ats |
| ZOHORECRUIT | source-ats-zohorecruit | ats |
| ZWAYAM | source-ats-zwayam | ats |
| EXA | source-exa | job-board |
| JOBDATAAPI | source-jobdataapi | job-board |
| JSONLD | source-jsonld | job-board |

## 6. Потенційні дублікати або джерела, що агрегують ті самі вакансії

- `TESLA` and `TESLA_PLAYWRIGHT` scrape the same employer through different implementations; enable one in a production bot.
- Company feeds commonly overlap their underlying ATS adapter (`GREENHOUSE`, `LEVER`, `ASHBY`, `SMARTRECRUITERS`, `WORKABLE`, or `WORKDAY`). ATS adapters are disabled to prevent presenting these as parallel user destinations.
- Aggregators such as `GOOGLE`, `INDEED`, `JOOBLE`, `LINKEDIN`, `CAREERJET`, `ADZUNA`, `SIMPLYHIRED`, and `ZIP_RECRUITER` can repeat vacancies from company sites and from one another.
- Remote boards (`REMOTEOK`, `REMOTIVE`, `WEWORKREMOTELY`, `WORKINGNOMADS`, `JOBICY`, and peers) frequently syndicate overlapping remote roles.
- Variant company packages (for example AlphaSense/AlphaSense India, Bosch variants, Deloitte regional variants, and Deutsche Telekom variants) may overlap; keep distinct until URL/job-ID evidence supports deterministic deduplication.

## 7. Джерела, які можуть вимагати API-ключ, авторизацію, cookies або платний доступ

- API credentials/keys are expected or supported by `ADZUNA`, `CAREERONESTOP`, `EXA`, `JOOBLE`, `JOBDATAAPI`, `USAJOBS`, and authenticated ATS modes such as Greenhouse Harvest.
- `LINKEDIN`, `GLASSDOOR`, `INDEED`, `GOOGLE`, `UPWORK`, `FREELANCERCOM`, and some company sites may require cookies, browser execution, anti-bot handling, login, or paid access depending on endpoint and traffic pattern.
- ATS adapters can require tenant slugs, account-specific identifiers, OAuth/client credentials, or vendor subscriptions even when a public jobs endpoint also exists.
- Treat this as an operational watchlist, not a guarantee: access policy and anti-bot behavior can change independently of repository code.

## 8. Рекомендований початковий набір для Telegram-бота

Start with a small, recognizable set and deduplicate by canonical URL plus normalized employer/title/location. Generic adapters remain disabled.

- **Ukraine:** `DOU`, `DJINNI`, `WORKUA`, `HAPPYMONDAY`
- **Europe:** `ARBEITNOW`, `EUROJOBS`, `NOFLUFFJOBS`, `REED`, `STEPSTONE`, `SWISSDEVJOBS`
- **North America:** `CAREERBUILDER`, `DICE`, `THEMUSE`, `USAJOBS`, `ZIP_RECRUITER`
- **Asia:** `BAYT`, `INTERNSHALA`, `JOBSINJAPAN`, `JOBSTREET`, `MYCAREERSFUTURE`, `NAUKRI`
- **Worldwide:** `ADZUNA`, `CAREERJET`, `GOOGLE`, `INDEED`, `JOOBLE`, `LINKEDIN`, `REMOTEOK`, `REMOTIVE`, `WEWORKREMOTELY`
- **Companies:** `AMAZON`, `APPLE`, `CLOUDFLARE`, `GITLAB`, `META`, `MICROSOFT`, `NETFLIX`, `NVIDIA`, `OPENAI`, `TESLA`

### Manual review priorities

1. Resolve the `OTHER` region for medium-confidence company feeds from observed job-location distributions before enabling region filters for them.
2. Choose one Tesla implementation after reliability/maintenance comparison.
3. Confirm credentials and terms of service for the access watchlist before production polling.
4. Validate whether `GETONBOARD` should be modeled as Latin America under `OTHER` or promoted to a future dedicated region.
5. Reassess `JOBDATAAPI` if the bot intentionally exposes API aggregators as user-selectable sources; it is currently disabled as a generic adapter.
