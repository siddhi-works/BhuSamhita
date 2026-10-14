# LAND-GPT / BhuSamhita: API + web portal in one container.
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=8000

WORKDIR /app

COPY backend/requirements.txt backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt

COPY backend backend
COPY landstack landstack
COPY frontend frontend

RUN useradd --system --no-create-home app && chown -R app /app
USER app

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD python -c "import os,urllib.request as u; u.urlopen('http://127.0.0.1:%s/health' % os.environ.get('PORT','8000'), timeout=4)"

# One worker: officer sessions and the audit log are held in process memory (interop/workflow.py).
CMD ["sh", "-c", "exec python -m uvicorn interop.api.app:create_app --factory --app-dir backend --host 0.0.0.0 --port ${PORT} --workers 1"]
