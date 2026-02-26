import { Request, Response } from "express";
import { iClients } from "../Model/clients";
import clientsModel from "../Model/clientsModel";

async function index(req: Request, resp: Response, next: any){
     //resp.render("index")
     const clients = await clientsModel.findAll();
     resp.json(clients)
}

async function show(req: Request, resp: Response, next: any){
     const id = Number(req.params.id);
     const clients = await clientsModel.findByPk(id);
     resp.json(clients)
}
function create(req: Request, resp: Response, next: any) {
     resp.render("create")     
}

async function store (req: Request, resp: Response, next: any){
     let clients =  req.body as iClients;
     await clientsModel.create({...clients});
     resp.redirect("/");
}

async function edit(req: Request, resp: Response, next: any) {
    const id = Number(req.params.id);

    try {
        const clients = await clientsModel.findByPk(id);

        if (!clients) {
            return resp.status(404).send("Cliente não encontrado");
        }

        resp.render("edit", { clients: clients });
        
    } catch (error) {
        console.error("Erro no edit():", error);
        resp.status(500).send("Erro ao carregar cliente");
    }
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

export default {index, create, store, show, edit}