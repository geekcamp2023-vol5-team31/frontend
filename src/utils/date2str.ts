const date2str = (date: Date) => {
  return date.toLocaleString().replace(/\//g, "-").replace(/\s/, "T");
};

export { date2str };
