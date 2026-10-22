SHELL := /bin/sh

HOST ?= 127.0.0.1
PORT ?= 8080
PID_FILE := .dev-server.pid
LOG_FILE := .dev-server.log

.PHONY: start stop build

start:
	@if [ -f "$(PID_FILE)" ]; then \
		pid=$$(cat "$(PID_FILE)"); \
		args=$$(ps -p "$$pid" -o args= 2>/dev/null || true); \
		case "$$args" in *"npm run dev"*) echo "Portfolio already running at http://$(HOST):$(PORT)"; exit 0;; esac; \
	fi; \
	if [ ! -d node_modules ]; then npm ci || exit 1; fi; \
	setsid npm run dev -- --host "$(HOST)" --port "$(PORT)" > "$(LOG_FILE)" 2>&1 < /dev/null & \
	pid=$$!; echo "$$pid" > "$(PID_FILE)"; ready=0; \
	for attempt in 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20; do \
		if curl -fsS "http://$(HOST):$(PORT)/" 2>/dev/null | grep -q '<title>Bruno Xavier Calmon'; then ready=1; break; fi; \
		if ! kill -0 "$$pid" 2>/dev/null; then break; fi; \
		sleep 0.5; \
	done; \
	if [ "$$ready" -eq 1 ]; then \
		echo "Portfolio running at http://$(HOST):$(PORT) (PID $$pid)"; \
	else \
		cat "$(LOG_FILE)"; \
		pgid=$$(ps -p "$$pid" -o pgid= 2>/dev/null | tr -d ' '); \
		if [ "$$pgid" = "$$pid" ]; then /bin/kill -TERM -- "-$$pid" 2>/dev/null || true; fi; \
		rm -f "$(PID_FILE)"; \
		exit 1; \
	fi

stop:
	@if [ ! -f "$(PID_FILE)" ]; then echo "Portfolio server is not running."; exit 0; fi; \
	pid=$$(cat "$(PID_FILE)"); \
	args=$$(ps -p "$$pid" -o args= 2>/dev/null || true); \
	case "$$args" in \
		*"npm run dev"*) \
			pgid=$$(ps -p "$$pid" -o pgid= 2>/dev/null | tr -d ' '); \
			if [ "$$pgid" = "$$pid" ]; then /bin/kill -TERM -- "-$$pid"; else echo "Refusing to stop an unexpected process group (PID $$pid)."; exit 1; fi; \
			for attempt in 1 2 3 4 5 6 7 8 9 10; do kill -0 "$$pid" 2>/dev/null || break; sleep 0.2; done; \
			rm -f "$(PID_FILE)"; \
			echo "Portfolio server stopped." ;; \
		*) rm -f "$(PID_FILE)"; echo "Removed stale server PID file." ;; \
	esac

build:
	npm run build
