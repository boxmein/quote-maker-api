const quotes: string[] = [
  'Be yourself; everyone else is already taken',
  'We are all in the gutter, but some of us are looking at the stars.',
  'I can resist everything except temptation.',
  'What is a cynic? A man who knows the price of everything and the value of nothing.',
];

function sample<T>(items: T[]): T {
  const len = items.length;
  const index = Math.floor((Math.random() - 1e-10) * items.length);
  return items[index];
}

export const quote = (event, context, cb) => {
  const response = {
    statusCode: 200,
    body: sample(quotes),
  };

  cb(null, response);
};
