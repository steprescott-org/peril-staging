import { danger, fail, markdown, message, peril, schedule, warn } from 'danger';

message('Hello world');

if (peril && peril.data) {
  message(`# peril.data
  ${JSON.stringify(peril.data, null, 2)}
  `);
}

if (peril && peril.env) {
  message(`# peril.env
  ${JSON.stringify(peril.env, null, 2)}
  `);
}

if (danger && danger.github) {
  message(`# danger.github
  ${JSON.stringify(danger.github, null, 2)}
  `);
}
