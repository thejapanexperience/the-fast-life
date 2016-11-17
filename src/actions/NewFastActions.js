export function hungerStrategies(strategy, strategies) {
  return {
    type: 'UPDATE_STRATEGY_STRATEGIES',
    payload: { strategy, strategies },
  };
}
export function hungerStrategies2(ownStrategy) {
  return {
    type: 'OWN_STRATEGY',
    payload: { ownStrategy },
  };
}
export function hungerStrategies3(strategies) {
  return {
    type: 'UPDATE_WITH_OWN_STRATEGY',
    payload: { strategies },
  };
}
export function startDate(startDate) {
  return {
    type: 'START_DATE',
    payload: startDate,
  };
}
export function startTime(time, date) {
  return {
    type: 'START_TIME',
    payload: { time, date },
  };
}
export function finalDuration(finalDuration) {
  return {
    type: 'FINAL_DURATION',
    payload: { finalDuration },
  };
}
export function duration(lastDuration, endDate) {
  return {
    type: 'DURATION',
    payload: { lastDuration, endDate },
  };
}
export function saveFast(fast) {
  return {
    type: 'SAVE',
    payload: { fast },
  };
}
export function reset() {
  return {
    type: 'RESET',
  };
}
