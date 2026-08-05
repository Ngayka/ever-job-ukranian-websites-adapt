import { UkraineOdooCompanyConfig } from './ukraine-odoo-companies.types';

export const UKRAINE_ODOO_COMPANIES: UkraineOdooCompanyConfig[] = [
  {
    id: 'ebs',
    name: 'EBS',
    careersUrl: 'https://www.ebskyiv.com/vacancies/',

    jobSelector: 'a[href*="/vacancies/"]',
    titleSelector: '',
    linkSelector: '',

    titleAttribute: 'title',
    linkAttribute: 'href',

    enabled: true,
    allowEmptyResults: true,
  },

  {
  id: 'erp-ukraine',
  name: 'ERP Ukraine',
  careersUrl: 'https://erp.co.ua/jobs',

  jobSelector: 'a[href^="/jobs/"]:not([href="/jobs"])',
  titleSelector: 'h3',
  linkSelector: '',

  descriptionSelector: '.oe_empty',
  locationSelector: '[itemprop="addressLocality"]',

  linkAttribute: 'href',

  enabled: true,
},

  {
    id: 'codoo',
    name: 'Codoo',
    careersUrl: 'https://codoo-erp.com/ua/jobs',

    jobSelector: 'a[href*="/jobs/"]',
    titleSelector: '',
    linkSelector: '',

    linkAttribute: 'href',

    enabled: true,
    allowEmptyResults: true,
  },

  {
    id: 'one-service-consulting',
    name: 'One Service Consulting',
    careersUrl:
      'https://www.oneservice-consulting.com/about-one-service-consulting#career',

    jobSelector: '.o_grid_item',
    titleSelector: 'h3',
    linkSelector: 'a[href]',

    descriptionSelector: 'p',

    enabled: true,
    allowEmptyResults: true,
  },

  {
    id: 'todo',
    name: 'ToDo',
    careersUrl: 'https://todo.ltd/career/#vacancies',

    jobSelector: 'article.todo-vacancies__card',
    titleSelector: '.todo-vacancies__card-title',
    linkSelector: '.todo-vacancies__card-link',

    descriptionSelector: '.todo-vacancies__card-desc',

    enabled: true,
    allowEmptyResults: true,
  },
];

export const UKRAINE_ODOO_COMPANIES_HEADERS = {
  Accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'uk-UA,uk;q=0.9,en-US;q=0.8,en;q=0.7',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
    'AppleWebKit/537.36 (KHTML, like Gecko) ' +
    'Chrome/150.0.0.0 Safari/537.36',
};