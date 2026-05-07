# FlashCard

An interactive flashcard web app to study JavaScript concepts. Questions are served randomly, and you can navigate back and forth through your session history.

## Live Demo
[View Live](https://punxxet.github.io/Flash-Cards/)



## Features
- Random question generator (no repeats in a session)
- Show / Hide answer toggle
- Previous and Next navigation
- Progress bar tracking current question out of 10
- Session history — going back shows the same questions you already saw

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome 7 (icons)

## Project Structure
FlashCard/
├── index.html       # App structure and layout
├── style.css        # Styling and animations
├── script.js        # App logic and DOM manipulation
└── questions.js     # Question bank array

## How It Works
1. On clicking **Next**, a random question is picked from `questions.js`
2. Questions already seen are tracked using a `Set` to avoid repeats
3. Click **Show Answer** to reveal the answer
4. Use **Previous** to go back through questions you already visited
5. Progress bar updates to show how far along you are out of 10
