FROM python:3.9.6-slim

WORKDIR /app

COPY . .
COPY requirements.txt .

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]