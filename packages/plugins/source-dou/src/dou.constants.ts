export const DOU_RSS_URL = 'https://jobs.dou.ua/vacancies/feeds/';

export const DOU_DEFAULT_RESULTS = 25;

export const DOU_HEADERS: Record<string, string> = {
  Accept: 'application/rss+xml, application/xml, text/xml',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
    'AppleWebKit/537.36 (KHTML, like Gecko) ' +
    'Chrome/150.0.0.0 Safari/537.36',
};