# Name-Generator-App
A Simple LSTM Model to generate name based on country of origin and starting letter

## How does this app work?
There are 2 part, the front-end and the back-end.

### Back-End
Hosted on HuggingFace here: [HuggingFace](https://huggingface.co/spaces/ravindrawiguna/name-generator-vanilla/tree/main)

Using FastAPI to create the endpoint. It receive 2 input, a country of origin (or language) as a string, and a start letter as a string.

This 2 input will be fed to the trained LSTM model with PyTorch, and it will predict the next possible letter in the name.

The model will be generating a letter at a time, selected from k best letter based on the predicted probability, until it outputed a "EOS" prediction.

The result of all the letters will be the response of the API call.


### Front-End
A Simple Page, where user can input country of origin and starting letter with dropdowns, and setting how the output should be based on the "Top K Best" slider.

If the Top K Best value is set to 1, then the model will always output the exact same sequence (name).

## Live-Demo
Visit: [demo](https://name-generator-lstm.vercel.app/) 

## Screenshot
