import createCore from './core';

const core = createCore();

try {
  const result = core.start(1, 12, -13);
  console.log(result)
  core.stop();
} catch(error) {
  console.log('[index] Uncaught  error!');
  console.log(error);
}
