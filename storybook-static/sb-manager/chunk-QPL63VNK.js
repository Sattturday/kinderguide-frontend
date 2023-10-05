function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (target) {
          for (let i = 1; i < arguments.length; i++) {
            const source = arguments[i];
            for (const key in source)
              Object.prototype.hasOwnProperty.call(source, key) &&
                (target[key] = source[key]);
          }
          return target;
        }),
    _extends.apply(this, arguments)
  );
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  const target = {};
  const sourceKeys = Object.keys(source);
  let key;
  let i;
  for (i = 0; i < sourceKeys.length; i++)
    (key = sourceKeys[i]),
      !(excluded.indexOf(key) >= 0) && (target[key] = source[key]);
  return target;
}
export { _extends, _objectWithoutPropertiesLoose };
