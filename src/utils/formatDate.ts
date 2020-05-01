const formatValue = (date: Date): string =>
  new Intl.DateTimeFormat('pt-BR').format(date);

export default formatValue;
