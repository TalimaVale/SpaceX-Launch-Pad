interface IDateStringOptions {
  weekday: 'long' | 'short' | 'narrow' | undefined;
  year: 'numeric' | '2-digit' | undefined;
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
  day: 'numeric' | '2-digit' | undefined;
}

export const formatDate = (date: string) => {
  const options: IDateStringOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(date).toLocaleDateString(undefined, options);
};
