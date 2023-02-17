export function createPayloadAction() {
  const actionCreator = (payload) => ({ type, payload });
  actionCreator.TYPE = type;
  actionCreator.toString = () => type;

  return actionCreator;
}
