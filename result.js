import { DeltaNegative, DeltaPositive, DeltaZero } from './classes'

const createResult = () => {
  const start = (a, b, delta) => {
    console.log('[result] Starting...');

    // let result = {}, x1, x2;

    const types = {
      zero: DeltaZero,
      positive: DeltaPositive,
      negative: DeltaNegative,
    }

    const deltaProps = new (types[delta.deltaType])(delta.data, a, b)

    console.log('[result] Starting done!');
    return deltaProps.handle();
  }

  const stop = () => {
    console.log('[result] Stopping...');
    console.log('[result] Stopping done!');
  }

  return {
    start,
    stop,
  }
}

export default createResult;