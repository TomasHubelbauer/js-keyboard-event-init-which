window.addEventListener('load', () => {
  document.body.addEventListener('keydown', event => {
    const originated = serialize(event);
    document.getElementById('originatedDiv').textContent = JSON.stringify(originated, null, 2);
    const initializedEvent = new KeyboardEvent('keydown', originated);
    const initialized = serialize(initializedEvent);
    document.getElementById('initializedDiv').textContent = JSON.stringify(initialized, null, 2);
    const keys = [...Object.keys(originated), ...Object.keys(initialized)].filter((key, index, array) => array.indexOf(key) === index);
    const compared = Object.fromEntries(keys.map(key => [key, originated[key] === initialized[key] ? null : [originated[key], initialized[key]]]));
    document.getElementById('comparedDiv').textContent = JSON.stringify(compared, null, 2);
  });
});

function serialize(event) {
  const payload = {};
  for (const key in event) {
    const type = typeof event[key];
    if (type === 'object' || type === 'function') {
      continue;
    }

    payload[key] = event[key];
  }

  return payload;
}
