
// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from 'openai';
import express, { json } from 'express';
import rateLimit from "express-rate-limit"; // Importing the newly installed package
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

const app = express();
app.use(cors());
app.use(json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000 // limit each IP to 100 requests per windowMs
});
// Apply the rate limiting middleware to the route
app.post('/callGPT', async (req, res) => {
  if (!req.body.prompt) {
      return res.status(400).json({ message: 'Missing prompt in request body' });
  }
  
  try {
      const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
              {
                  "role": "user",
                  "content": req.body.prompt,
              }
          ],
          temperature: 0.5,
          max_tokens: 1500,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
      });
      
      console.log(response.choices[0].message);
      res.json(response.choices[0].message);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});



app.listen(4000, () => console.log('Listening on port 4000'));
