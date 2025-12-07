#!/usr/bin/env python3
import os
import sys
import re
from pathlib import Path

path = str(Path(__file__).parent.resolve())
base_cmd = f"docker compose -f {path}/docker-compose.yml"

services = ["frontend", "backend"]

help_message = f"""Usage: manage.py <command>
Commands:
  up               Start all services
  down             Stop all services
  up-<service>     Start a specific service
  down-<service>   Stop a specific service
Services: {', '.join(services)}"""


def display_help() -> None:
    print(help_message)

def execute_command(name: str) -> None:
    command: str | None = None
    if name == "up":
        command = f"{base_cmd} up -d"
    elif name == "down":
        command = f"{base_cmd} down"
    elif (match := re.match(r"^up-(.+)$", name)):
        service = match.group(1)
        if service in services:
            command = f"{base_cmd} up -d {service}"
        else:
            print(f"Unknown service: {service}")
    elif (match := re.match(r"^down-(.+)$", name)):
        service = match.group(1)
        if service in services:
            command = f"{base_cmd} down {service}"
        else:
            print(f"Unknown service: {service}")
    elif (match := re.match(r"^new-(.+)$", name)):
        service = match.group(1)
        if service in services:
            command = f"{base_cmd} up --build --force-recreate {service}" 
        else:
            print(f"Unknown service: {service}")
    elif name == "dev":
        command = f"docker compose -f {path}/docker-compose.dev.yml up --build --force-recreate"
    if command is None:
        display_help()
    else:
        sys.exit(os.WEXITSTATUS(os.system(command)))

def main() -> None:
    args: list[str] = sys.argv
    argc: int = len(args)
    if argc < 2:
        display_help()
        return
    execute_command(args[1])

if __name__ == "__main__":
    main()