export function success(action) {
  if (typeof action === 'string') {
    return `${action}/SUCCESS`;
  } else if (typeof (action) === 'function') {
    return success(action.toString());
  }

  return {
    ...action,
    type: `${action.type}/SUCCESS`,
  };
}

export function fail(action) {
  if (typeof action === 'string') {
    return `${action}/FAIL`;
  } else if (typeof (action) === 'function') {
    return fail(action.toString());
  }

  return {
    ...action,
    type: `${action.type}/FAIL`,
  };
}

export function base(action) {
  if (typeof action === 'string') {
    return action;
  } else if (typeof action === 'function') {
    return action.toString();
  }
  return action.type;
}
