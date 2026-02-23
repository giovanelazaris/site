import Router = require("express")
import clientsController from "../Controller/clientsController"

const router = Router()

router.get('/',clientsController.index)

router.get('/sobre',clientsController.sobre)

router.get('/contato',clientsController.contato)

router.get('/projetos',clientsController.projetos)

/*router.get('/sobrenos',(req, res) => {
    res.send("<h1>Sobre Nós<h1>")
})
router.get('/contato',(req, res) => {
    res.send("<h1>Fale Conosto<h1>")
})
router.get('/trabalheconosco',(req, res) => {
    res.send("<h1>Envie curriculo para (49) 98812-0341)<h1>")
})*/

export default router;