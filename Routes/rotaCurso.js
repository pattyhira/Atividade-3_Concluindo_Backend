import { Router } from "express";
import CursoController from "../Controllers/cursoControllers.js";

const CursoRouter = Router();
const cursoCtrl = new CursoController();

CursoRouter.get("/", cursoCtrl.consultar)
.get("/:id", cursoCtrl.consultar)
.post("/", cursoCtrl.gravar)
.put("/:id", cursoCtrl.alterar)
.delete("/:id", cursoCtrl.excluir);

export default CursoRouter;