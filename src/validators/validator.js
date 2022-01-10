import { Validator } from 'jsonschema';

const v = new Validator();

export default (data, schema) => {
  v.validate(data, schema, { throwError: true, throwAll: true });
  return Object.keys(schema.properties)
    .reduce((result, key) => {
      if (data[key]) {
        return { ...result, [key]: data[key] };
      }
      return result;
    }, {});
};
