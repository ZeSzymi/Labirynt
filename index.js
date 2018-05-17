var http = require("http");
var mongoose = require("mongoose")
//var Models = require("./database/Models.js")(mongoose)
mongoose.connect('mongodb://localhost/myapp');
//var Operations = require("./database/Operations.js")
//var Player = require("./database/Player.js")
var fs = require("fs");
var qs = require("querystring")
var socketio = require("socket.io")
var i = 0;
var tab_user = [];
var tab = [];
var db;
var User;
var server = http.createServer(function (req, res) {

    console.log(req.method)
    switch (req.method) {

        case "GET":
            if (req.url === "/index.html") {
                fs.readFile("static/index.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/Main.js") {
                fs.readFile("static/Main.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/Klocek.js") {
                fs.readFile("static/Klocek.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Net.js") {
                fs.readFile("static/Net.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/Ui.js") {
                fs.readFile("static/Ui.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/three.js") {
                fs.readFile("static/three.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/elementysiatki.js") {
                fs.readFile("static/elementysiatki.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/style.css") {
                fs.readFile("static/style.css", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/plansza.js") {
                fs.readFile("static/plansza.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/scianaduza.js") {
                fs.readFile("static/scianaduza.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/scianamala.js") {
                fs.readFile("static/scianamala.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/player.js") {
                fs.readFile("static/player.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/player2.js") {
                fs.readFile("static/player2.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/body.js") {
                fs.readFile("static/body.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/scianasrednia.js") {
                fs.readFile("static/scianasrednia.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/zegar.js") {
                fs.readFile("static/zegar.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            } else if (req.url === "/sposbody.png") {
                fs.readFile("static/sposbody.png", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
                    res.write(data);
                    res.end();
                })
            }
            else {
                console.log("brak strony")
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write("<h1>404 - brak takiej strony</h1>");
                res.end();
            }
            break;
        case "POST":
            // tu wykonaj funkcję "servResp", która pobierze dane przesłane
            // w formularzu i odpowie do przeglądarki
            // (uwaga - adres żądania się nie zmienia)

            servResp(req, res);
            break;

    }






})


server.listen(process.env.PORT || 3000);
console.log("serwer staruje na porcie 3000 - ten komunikat zobaczysz tylko raz")
var io = socketio.listen(server)
io.sockets.on("connection", function (client) {
    console.log("klient sie podłączył" + client.id)
    // client.id - unikalna nazwa klienta generowana przez socket.io
    client.emit("onconnect", {
        clientName: client.id
    })
    client.on("disconnect", function () {
        console.log("klient się rozłącza")
    })
    client.on("gracz", function (data) {
        client.broadcast.emit("gracz", { posx: data.posx, posy: data.posy, posz: data.posz, rotx: data.rotx, roty: data.roty, rotz: data.rotz });
    })
    client.on("zmiana", function (data) {
        client.broadcast.emit("zmiana", { zn: data.zn, zx: data.zx, zy: data.zy, zz: data.zz});
    })

})
function connectToMongo() {

    db = mongoose.connection;

    //przy wystąpieniu błędu

    db.on("error", function (err) {
        console.log(err)
    });

    var collection = db.collection('users');
    collection.remove({}, function (err) {
        console.log('collection removed')
    });
    collection = db.collection('users');
    var gracz = { name: 'gracz1', numer: 0 };
    var gracz2 = {name:'gracz2', numer: 0}

    collection.insert([gracz, gracz2], function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
        }
    });
    User = mongoose.model('users', { name: String, numer: Number });


    db.once("close", function () {
        console.log("mongodb zostało odłączone");
    });


}

function servResp(req, res) {

    //przy wystąpieniu błędu

    var allData = "";
    //kiedy przychodzą dane postem, w postaci pakietów
    //łącza się po kolei do jednej zmiennej "allData"

    req.on("data", function (data) {
        allData += data;
    })

    req.on("end", function (data) {
        var finish = qs.parse(allData)
        console.log(finish)
        if (finish.a == 0) {

        User.findOne({ name: 'gracz1' }, function (err, userObj) {
            if (err) {
                console.log(err);
            } else if (userObj) {
                console.log('Found:', userObj);

                //For demo purposes lets update the user on condition.
                if (userObj.numer != 1) {
                    //Some demo manipulation
                    userObj.numer += 1;

                    console.log(JSON.stringify(0));
                    res.end(JSON.stringify(0));
                    //Lets save it
                    userObj.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Updated', userObj);
                        }
                    });
                } else {
                    User.findOne({ name: 'gracz2' }, function (err, userObj) {
                        if (err) {
                            console.log(err);
                        } else if (userObj) {
                            console.log('Found:', userObj);

                            //For demo purposes lets update the user on condition.
                            if (userObj.numer != 1) {

                                //Some demo manipulation
                                userObj.numer += 1;
                                console.log(JSON.stringify(1));
                                res.end(JSON.stringify(1));
                                //Lets save it
                                userObj.save(function (err) {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log('Updated', userObj);
                                    }
                                });
                            }else {
                              var collection = db.collection('users');
                              collection.remove({}, function (err) {
                                  console.log('collection removed')
                              });
                              collection = db.collection('users');
                              var gracz = { name: 'gracz1', numer: 0 };
                              var gracz2 = {name:'gracz2', numer: 0}

                              collection.insert([gracz, gracz2], function (err, result) {
                                  if (err) {
                                      console.log(err);
                                  } else {
                                      console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
                                  }
                              });
                            }
                        } else {

                            res.end(JSON.stringify(2));
                        }
                    });
                }
            } else {

            }
        });

    }
    })
}

connectToMongo();
