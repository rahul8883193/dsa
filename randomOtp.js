const generateOTP = () => {
  let otp = "";

  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
};

const otp = generateOTP();
console.log(`Your 6-digit OTP is: ${otp}`);
