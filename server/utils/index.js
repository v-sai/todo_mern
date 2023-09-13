const createTokenUser = require("./createTokenUser");
const { createJWT, isTokenValid, attachCookiesToResponse } = require("./jwt");
const sendVerificationEmail = require("./sendVerificationEmail");
const sendResetPasswordEmail = require("./sendResetPasswordEmail");
const createHash = require("./createHash");

module.exports = {
  sendVerificationEmail,
  createTokenUser,
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  sendResetPasswordEmail,
  createHash,
};
