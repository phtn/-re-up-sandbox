/* fn accepts 2 nullable elements. useful for conditional rendering.  */
const condish = (
  ...args: (Element | null | string | number | boolean | undefined)[]
) =>
  new Map([
    [true, args[0]],
    [false, args[1]],
  ]);

export { condish };
