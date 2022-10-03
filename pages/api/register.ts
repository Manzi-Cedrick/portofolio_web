// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { RegisterStructure } from '../../utils/data.types';
import bcrypt from 'bcrypt'
import User from '../../model/User';
import dbConnect from '../../lib/dbconnect';

const validateEmail = (email: string) => {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLowerCase());
}

const validateForm = async (FormData: RegisterStructure) => {
  let errors = { username: '', email: '', password: '' };
  if (!FormData.username.trim()) {
    errors.username = "Username is required"
  }
  if (!FormData.email) {
    errors.email = 'Email required';
  } else if (!validateEmail(FormData.email)) {
    errors.email = 'Email address is invalid';
  }
  await dbConnect();
  const emailUser = await User.findOne({ email: FormData.email});
  if(emailUser){
    errors.email = "Email address is already in use"
  }
  if (!FormData.password) {
    errors.password = 'Password is required';
  } else if (FormData.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }
  return errors;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const FormData = req.body;
  const errors = await validateForm(FormData);
  if (errors.email || errors.password || errors.username) {
    res.status(400).json({ message: 'Register Failure (Bad Inputs )', errors });
  } else {
    const hashedPassword = await bcrypt.hash(FormData.password, 10);
    const newUser = new User({
      name: FormData.username,
      email: FormData.email,
      password: hashedPassword,
    });
    newUser
      .save()
      .then(() =>
        res.status(200).json({ msg: "Successfuly created new User " , user : newUser })
      )
      .catch((err: string) =>
        res.status(400).json({ error: "Error on '/api/register': " + err })
      );
  }
}