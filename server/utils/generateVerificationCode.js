export const verificationToken = () => {
  return Math.floor(1000 + Math.random() * 900000).toString(); //returns a random 6-digit number as a string.
};
