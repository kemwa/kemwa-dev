// Edit this file to update the site. Each project becomes a card on the home page.

export type Status = 'wip' | 'prod' | 'research' | 'prototype' | 'done';

export interface Project {
  name: string;
  status: Status;
  summary: string;
  /** Short pipeline/architecture sketch shown in the card's code block. */
  sketch: string;
  /** First entry gets the colored dot. */
  stack: string[];
  /** Dot color for the primary language/platform. */
  dot: string;
}

export const contact = {
  email: 'keith@keithwarner.com',
  github: 'https://github.com/kemwa',
  linkedin: 'https://www.linkedin.com/in/keithmwarner/',
  resume: '', // e.g. '/resume.pdf' after adding the file to /public
  execProfile: 'https://keithwarner.com',
};

export const projects: Project[] = [
  {
    name: 'cos-agent',
    status: 'wip',
    summary:
      'A chief-of-staff multi-agent system. An orchestrator dispatches to independent subagents over Slack, with confirm-before-act enforced in code, not in the prompt.',
    sketch: `slack ⇄ orchestrator ⇄ [ops, admin, jobs]
guard: confirm_before_act()
first: toast/square → export → pilot.csv`,
    stack: ['Claude Agent SDK', 'Slack Socket Mode', 'mac mini'],
    dot: '#D2A8FF',
  },
  {
    name: 'bmx-tools',
    status: 'prod',
    summary:
      'Auth-gated tool portal for a bar-inventory audit business: POS file converters, an audit and billing tracker, and Dropbox automation that is create-only by design.',
    sketch: `"All levels.csv" → split()
  ├─ SALES.csv  + menu_group
  └─ MODS.csv
flow: branch → PR → preview → merge`,
    stack: ['JavaScript', 'Dropbox API', 'Netlify'],
    dot: '#F1E05A',
  },
  {
    name: 'pilot-r2-web',
    status: 'research',
    summary:
      'Reverse-engineering the SQL Server schema behind a Windows-only stocktake app to put a browser front end on it for Mac and iPad, on site.',
    sketch: `mssql → schema map → query patterns
      → web ui (ipad)
fallback: desktop app + remote login`,
    stack: ['T-SQL', 'SQL Server'],
    dot: '#E38C00',
  },
  {
    name: 'dropbox-sftp',
    status: 'prod',
    summary:
      "Serverless delivery job that picks up CSVs landing in Dropbox and pushes them to a partner's SFTP endpoint. Replaced a manual upload.",
    sketch: `dropbox/*.csv → cloud function → sftp://partner`,
    stack: ['Google Cloud Functions', 'SFTP'],
    dot: '#4285F4',
  },
  {
    name: 'crm-dedupe',
    status: 'done',
    summary:
      'Address consolidation across ~4,800 HubSpot company records, run as a resumable batch so a failure picks up exactly where it stopped.',
    sketch: `for batch in companies(offset=0):
    normalize(batch.addresses)
    merge()  # via MCP connector`,
    stack: ['HubSpot API', 'MCP'],
    dot: '#FF7A59',
  },
  {
    name: 'keg-scale',
    status: 'prototype',
    summary:
      'Portable rig for weighing full kegs during audits: aluminum mast and jack, fold-out arm, webbing straps and an inline load cell.',
    sketch: `target: ~10 lb, folds to 18 in
sense:  inline load cell
tried:  thermal, ultrasonic level`,
    stack: ['hardware', 'mechanical design'],
    dot: '#8B93A1',
  },
];

export const now: { tag: 'wip' | 'r&d' | 'ship'; text: string }[] = [
  { tag: 'wip', text: 'cos-agent: POS export subagent for Toast and Square' },
  { tag: 'wip', text: 'bmx-tools: audit tracker moving off Google Sheets' },
  { tag: 'r&d', text: 'pilot-r2-web: mapping stocktake tables' },
  { tag: 'r&d', text: 'keg-scale: arm geometry and load-cell mount' },
  { tag: 'ship', text: 'kemwa.dev: astro → github → cloudflare' },
];

export const stack: Record<string, string[]> = {
  data: ['Informatica', 'SQL Server', 'GCP'],
  ai: ['Claude Agent SDK', 'MCP'],
  automation: ['Zapier', 'Make', 'Power Automate'],
  pos: ['Toast', 'Square', 'Aloha', 'Crunchtime'],
  ship: ['GitHub', 'Netlify', 'Cloudflare'],
};
