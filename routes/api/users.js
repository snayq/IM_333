const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require ("jsonwebtoken");
const keys = require("../../config/keys");

//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInpust = require("../../validation/login");

//Load User Model
const User = require("../../models/User");
module.exports = router;