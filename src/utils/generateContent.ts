export default async function generateContent(): Promise<string> {
  const placeholders = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  ];
  const random = placeholders[Math.floor(Math.random() * placeholders.length)];
  return new Promise(resolve => setTimeout(() => resolve(random), 500));
}
