const CSVToArray = (data, delimeter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map(v => v.split(delimeter));
