import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto"

const pathJSON = join("./data/users.json")

function login() {
    readFileSync(pathJSON)
}