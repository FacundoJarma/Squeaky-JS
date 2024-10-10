import { onEvent, sendEvent, startServer } from "soquetic";
import { writeFile, readFileSync, readFile, fstat, fdatasync, writeFileSync, ftruncateSync } from "fs";
import { join } from "path";
import { randomUUID } from "crypto";

const pathJSON = join("./src/lib/data/users.json");


function favorito() {
    //TODO:que cuando un arrchivo se marca favorito se añada en el usuario su favorito y que haga fetch de cualaes son sus lecciones favoritas para marcarlas
    writeFileSync(pathJSON)
}