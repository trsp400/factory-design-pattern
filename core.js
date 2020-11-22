import createDelta from './delta';
import createResult from './result';

const createCore = () => {
  const delta =  createDelta();
  const result = createResult();

  const start = (a, b, c) => {
    console.log('[core] Starting...');
    const deltaResult = delta.start(a, b, c);
    const resultFinish = result.start(a, b, deltaResult);
    console.log('[core] Starting done!');
    return resultFinish;
  }
  
  const stop = () => {
    console.log('[core] Stopping...');
    console.log('[core] Stopping done!');
  }
  
  return {
    start,
    stop,
  }
}

export default createCore;