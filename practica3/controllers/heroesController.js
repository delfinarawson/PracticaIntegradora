let db = require('../db/index')

let heroesController = {
    index: function(req, res){
        return res.render('index', { heroes: db.lista})
    },

    show: function(req, res){
        let id = req.params.id
        for (let i = 0; i < db.length; i++) {
            if (id == db.lista.id){
                return res.render('detHeroe', {hola: db.lista[i]})
            }
            
        }
        
    },

    detail: function(req, res){
        
    },

    heroes: function (req, res) {
       
        return res.render('heroes', {heroes: db.lista})
    }

}

module.exports = heroesController;
