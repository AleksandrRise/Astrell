def transcript_prompt():
    return "Generate a transcript of the speech. No extra commentary."


def summary_prompt(transcript):
    return (
        "Summarize the following lecture transcript in no more than 200 words. "
        "The summary must be clear and useful for a college-level student. "
        "Write only plain text. Do not use markdown.\n\n"
        f"Lecture transcript:\n{transcript}"
    )


def highlight_prompt(transcript):
    return (
        "Extract the key concepts from the provided lecture transcript. "
        "Keep them clear, useful, and concise. "
        "Write only plain text. Do not use markdown.\n\n"
        f"Lecture transcript:\n{transcript}"
    )


def quiz_prompt(transcript, difficulty, questions_num):
    return f"""
Return ONLY valid JSON. No prose, no markdown fences, no comments.

Schema:
{{
  "questions": [
    {{
      "question": "string",
      "answers": [
        {{ "answer": "string", "correct": true }},
        {{ "answer": "string", "correct": false }},
        {{ "answer": "string", "correct": false }},
        {{ "answer": "string", "correct": false }}
      ]
    }}
  ]
}}

Constraints:
- Exactly {questions_num} questions.
- Difficulty: "{difficulty}".
- Each question must be different.
- Randomize the correct answer position.
- Base all content strictly on this transcript:

{transcript}
"""


def card_prompt(transcript):
    return (
        "Generate exactly ONE study card from the transcript.\n\n"
        "Return ONLY valid JSON in this format:\n"
        '{"question": "string", "answer": "string"}\n\n'
        f"Lecture transcript:\n{transcript}"
    )