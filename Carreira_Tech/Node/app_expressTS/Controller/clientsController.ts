import { Request, Response } from "express";

function index(req: Request, resp: Response, next: any){
     resp.render("index")
}

function sobre(req: Request, resp: Response, next: any){
     resp.render("sobreNos")
}
function contato(req: Request, resp: Response, next: any){
     resp.render("contato")
}
function projetos(req: Request, resp: Response, next: any){
     resp.render("projetos")
}

export default {index, sobre, contato, projetos}