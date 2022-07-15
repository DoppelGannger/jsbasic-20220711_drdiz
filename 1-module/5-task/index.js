function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1).concat('\u2026')
}
return str;
}
