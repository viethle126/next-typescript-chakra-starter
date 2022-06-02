export const hookOnChange =
  (field, onChange) =>
  (...args: any) => {
    const changeResult = field.onChange(...args)
    onChange(...args)
    return changeResult
  }
