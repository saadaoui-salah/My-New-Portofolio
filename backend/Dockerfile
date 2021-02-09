FROM python:3

ENV PYTHONNUNBUFFERED 1

WORKDIR /portofolio

ADD . /portofolio

COPY ./requirements.txt /portofolio/requirements.txt

RUN pip install -r requirements.txt

COPY . /portofolio
