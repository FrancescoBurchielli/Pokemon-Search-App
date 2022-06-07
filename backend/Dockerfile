FROM continuumio/miniconda3:latest

COPY requirements.yml requirements.yml

RUN /opt/conda/bin/conda env create -f requirements.yml

ENV PATH /opt/conda/envs/pokemon_backend_env/bin:$PATH

RUN echo "conda activate pokemon_backend_env" >~/.bashrc

COPY /. ./
RUN chmod +x /scripts*

EXPOSE 8000