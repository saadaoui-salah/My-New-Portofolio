FROM python:3

ENV PYTHONUNBUFFERED=1

WORKDIR /portofolio

ADD . /portofolio

COPY ./requirements.txt /portofolio/requirements.txt

RUN pip install -r requirements.txt

COPY . /portofolio

CMD gunicorn project.wsgi:application --bind 0.0.0.0:$PORT

