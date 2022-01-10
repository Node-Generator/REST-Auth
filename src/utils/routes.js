export const routeTemplate = (func) => async (req, res) => {
  try {
    return res.send(await func({ ...req.query, ...req.body, ...req.params }));
  } catch (e) {
    return res.status(500).send({ message: e.message });
  }
};