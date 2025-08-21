# [Astrell](https://www.astrell.net)

Astrell is an AI-powered learning companion designed to help students stay productive when dealing with online lectures and exam preparation.

## Features

🎥 Lecture Assistant – Upload lecture videos, and let Astrell generate transcripts, summaries, and key highlights.

📝 Smart Summaries – Get concise explanations of long lectures.

❓ Quiz Builder – Automatically generate quizzes to reinforce learning.

📚 Study Companion – Personalized support for exam preparation.

## Tech Stack

*Frontend*
- React (Vite + TypeScript)
- Tailwind CSS

*Backend*
- Flask (Python)
- Gemini API
- Docker

*Other Tools*
- Vitest (for testing)
- Vercel (deployed on)

## Installation
1. Clone the repo
```sh
git clone https://github.com/AleksandrRise/Astrell.git
cd Astrell
```

2. Create .env file in python-service folder and assign a key:
```js
GEMINI_API_KEY="your key"
```

-- If you use docker, proceed with 3. Otherwise, follow 4.

3.
```sh
docker-compose up --build
```

4. Install NPM packages
```sh
cd client
npm install
npm run dev
```

4.1. Install pip libraries
```sh
cd python-service
pip install -r requirements.txt
flask run
```

## Contributing
The project is not open-source yet, but soon it will be.

## License
GPL-3.0 License. Check out `LICENSE.txt` for more information.
