export function prepareInputErrorCodesFromApiResponse (errCodes, apiResponseErrors) {
  return apiResponseErrors
      .filter(e => errCodes.indexOf(e.error_code) > -1)
      .map((e, i) => errCodes.includes(e.error_code) && e.error_code);
  }