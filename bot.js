var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
    var request = JSON.parse(this.req.chunks[0]),
        botRegex = /^\/cool guy/;
    botRegexDL = /^\/DEPTH/i;
    botRegexRules = /^\/rules/;
    botRegexSC = /^\/SCHED/i;
    botODB = /(.*\s+)(.*odb)(\s+.*)/i;
    botRegexP = /^\/PLAYER/i;
    botRegexTw = /^\/twitch/i;
    botRegexWk = /^\/users/;
    botRegexHp = /^\/help/;
    botRegexFD = /^\/4th/;
    botRegexDC = /^\/dc/;
    botRegexSCORE = /^\/scoring/;
    botRegexFM = /^\/forum/;
    botRegexAP = /^\/ap/;
    botRegexFA = /^\/fa/;
    botRegexGD = /^\/guide/;
//    botRegexOL = /^\/RFA/i;
    botRegexST = /^\/standings/;
    botRegexTN = /^\/teams/;
//    botRegexWV = /^\/waivers/;
    botRegexBL = /^\/block/;

    var teamAb = ["NE", "NO", "ARI", "PHI", "CLE", "TEN", "OAK", "DAL", "IND", "SEA", "CIN", "PIT", "JAC", "BAL", "SD", "DEN", "MIN", "ATL", "KC", "NYG", "GB", "DET", "HOU", "STL", "CHI", "CAR",
        "MIA", "BUF", "SF", "WAS", "NYJ", "TB"];

    var RFAS = ["Chester", "Childs", "Austin", "Perry", "Warford", "Eubanks", "Hudson", "Hennings", "Scott", "Vernon", "Murray", "Mason", "Woodson", "Osemele", "Benson", "Williams", "Smith", "Wilson", "Roland", "Guy", "Cross", "Davis", "Brown", "Hill", "Carter", "Woods", "Mcdonald", "Milton", "Hayward", "Toliver", "Mason", "Crawford", "Zuerlein", "Green", "Locke", "Summers", "Hocker", "Howell", "Avery", "Farrell", "Fuller", "Peterson", "James", "Walden", "Foreman", "Thomas", "Gaitor", "Kline", "Williams", "Austin", "Dawkins", "Smith", "Clark", "Hunter", "Jordan", "Compton", "Oliver", "Nicholas", "Fragel", "Bishop", "Perriman", "Bryan", "Mager", "Verrett", "Austin", "Collins", "Dent", "Spence", "Freeman", "Cockrell", "Colvin", "Breeland", "Brown", "Vereen", "Massie", "Allen", "Mayowa", "Niklas", "Adams"];

    if (request.text && botRegex.test(request.text)) {
        this.res.writeHead(200);
        postMessage(cool());
        this.res.end();
    } else if (request.text && botRegexDL.test(request.text)) {
        this.res.writeHead(200);
        postMessage("http://daddyleagues.com/xm/team/" + request.text.substring(7, 10) + "/depthchart");
        this.res.end();
    } else if (request.text && botRegexRules.test(request.text)) {
        this.res.writeHead(200);
        postMessage("http://daddyleagues.com/xm/rules/");
        this.res.end();
    } else if (request.text && botRegexSC.test(request.text)) {
        this.res.writeHead(200);
        postMessage("http://daddyleagues.com/xm/team/" + request.text.substring(7, 10) + "/schedule");
        this.res.end();
    } else if (request.text && botRegexP.test(request.text)) {
        this.res.writeHead(200);
        var req = request.text.substring(8, request.text.length);
        var rep = req.replace(/ /, "+");
        postMessage("http://daddyleagues.com/xm/players?name=" + rep + "&position=all&team=all");
        this.res.end();
    } else if (request.text && botRegexTw.test(request.text)) {
        this.res.writeHead(200);
        postMessage("http://www.twitch.tv/" + request.text.substring(8, request.text.length));
        this.res.end();
    } else if (request.text && botRegexWk.test(request.text)) {
        this.res.writeHead(200);
        postMessage("https://docs.google.com/spreadsheets/d/1BXQQfjdVwqR51ZjahQzGvVNtZgc4UgbZ1nVVnFLEAsk/edit#gid=0");
        this.res.end();
    } else if (request.text && botRegexHp.test(request.text)) {
        this.res.writeHead(200);
        postMessage("bzzt BB-8 v5.0\nCommands:\ndepth *team* for depth chart\nsched *team* for schedule\nplayer *name* for player\ntwitch *twitch_ID* for twitch link\nforum\n4th for 4th down rules\ndc for disconnect rules\nscoring for scoring rules\nap for scheduling rules\nfa for free agents\nusers for user list\nteams for team abbreviatons\nstandings for conference standings\nblock for trade block listings");
        this.res.end();
    } else if (request.text && botRegexFD.test(request.text)) {
        this.res.writeHead(200);
        postMessage("4th down protocol\n• 4th DOWN BETWEEN THE 20s\n• Losing/tied teams must be on the 50+ yard line with 4th and 2 or less\n• Losing/tied teams may go for it freely under 2 minute warning\n• Losing teams may go for it if down by 21+ points\n• Winning teams may go for it to end the half as time expires\n• Winning teams may go for it on 4th and 10 or less to end the game in the very next kneel-down series\n4th DOWN INSIDE THE 20 (redzone)\n• Losing/tied teams may go for it on 4th and 1 or less\n• Losing/tied teams may go for it on 4th and goal from the 5 yard line\n• Losing/tied teams may go for it freely under 2 minute warning\n• Losing teams may go for it if down by 21+ points\n• Winning teams may go for it on 4th and goal from the 5 yard line if up by 3 points or less\n 4th DOWN IN OVERTIME\n• Anytime, anywhere");
        this.res.end();
    } else if (request.text && botRegexDC.test(request.text)) {
        this.res.writeHead(200);
        postMessage("Disconnects\nIf your game disconnects, communicate with your opponent the best course of action to finish the game. The team with the lead will decide whether to restart the game from the beginning, or to the same score and time. If the game was a blow out and decided, close to being completed, the team with the lead may receive a force win. The commissioners will have final decision; not debatable.");
        this.res.end();
    } else if (request.text && botRegexSCORE.test(request.text)) {
        this.res.writeHead(200);
        postMessage("Scoring caps\nIf losing team has less than 21 points, winning team score cap is 49.\nIf losing team has 21-35 points, winning team score cap is 56.\nIf the game is a 35+ shootout, play to win\nPlayer weekly stat caps\nDo not exceed:\n250 yards rushing\n250 yards receiving\n500 yards passing\n4 rushing TDs\n4 receiving TDs\n5 passing TDs\n8 sacks\nExceeding these stats will result in a 1-game suspension for the player, unless the final score is within 9 points margin of victory, the competitive nature of the game will be considered and recognized during review. Players will be suspended without saved Twitch Archive for review. Review of the archived stream will allow commissioners to view the competitive flow of the game in relation to any stats exceeded. Repeat offenders will receive a suspension of key players and/or owner, or draft pick");
        this.res.end();
    } else if (request.text && botRegexAP.test(request.text)) {
        this.res.writeHead(200);
        postMessage("Scheduling with your opponents is required for each week. Each opponent is required to present their available play times with whom they're playing against. If Opponent A offers a play time and Opponent B doesn't accept, counter, or share their windows of available play time within 24 hours, Team A gets FW. Once you’ve agreed on a play time, it’s a commitment that each opponent must honor. If an opponent misses their scheduled play time for any reason by 15 minutes, the present opponent may choose to take FW, or reschedule at their own discretion. If an opponent has no play time availability during the advance, they will be FL. If opponents have opposite play time availability, the match will sim. Determine this by sharing all available play times.");
        this.res.end();
    } else if (request.text && botRegexGD.test(request.text)) {
        this.res.writeHead(200);
        postMessage("https://owncloud.kensycloud.com/owncloud/s/0LikzLl2pJhvK8f");
        this.res.end();
    } else if (request.text && botRegexFM.test(request.text)) {
        this.res.writeHead(200);
        postMessage("http://daddyleagues.com/xm/forum/");
        this.res.end();
    } else if (request.text && botRegexFA.test(request.text)) {
        this.res.writeHead(200);
        postMessage("http://daddyleagues.com/xm/players?name=&position=all&team=fa");
        this.res.end();
    } else if (request.text && botODB.test(request.text)) {
        this.res.writeHead(200);
        postMessage("OBJ*");
        this.res.end();
    } 
//    else if (request.text && botRegexOL.test(request.text)) {
//        this.res.writeHead(200);
//        var hit;
//        var num_hits = 0;
//        var count = 0;
//        var req = request.text.substring(5, request.text.length);
//        //postMessage("RFAs: " + RFAS.length);
//        for (count = 0; count < RFAS.length; count++) {
//            hit = req.match(RFAS[count]);
//            if (hit != null) {
//                num_hits++;
//                postMessage("Player is taken");
//                postMessage("http://daddyleagues.com/xm/forum/post/130469");
//            }
//        }
//        if (num_hits == 0) {
//            postMessage("Player is not on the list");
//        }
//        //postMessage("Count: " + count);
//        //postMessage(hit);
//
//        this.res.end();
//    } 
    else if (request.text && botRegexST.test(request.text)) {
        this.res.writeHead(200);
        postMessage("http://daddyleagues.com/xm/standings/conference");
        this.res.end();
    } else if (request.text && botRegexTN.test(request.text)) {
        this.res.writeHead(200);
        postMessage("buf Buffalo Bills\nmia Miami Dolphins\nne New England Patriots\nnyj New York Jets\nbal Baltimore Ravens \ncin Cincinnati Bengals\ncle Cleveland Browns\npit Pittsburgh Steelers\nhou Houston Texans\nind Indianapolis Colts\njac Jacksonville Jaguars\nten Tennessee Titans\nden Denver Broncos\nkc Kansas City Chiefs\noak Oakland Raiders\nsd San Diego Chargers\ndal Dallas Cowboys\nnyg New York Giants\nphi Philadelphia Eagles\nwas Washington Redskins\nchi Chicago Bears\ndet Detroit Lions\ngb Green Bay Packers\nmin Minnesota Vikings\natl Atlanta Falcons\ncar Carolina Panthers\nno New Orleans Saints\ntb Tampa Bay Buccaneers\nari Arizona Cardinals\nla Los Angelos Rams\nsf San Francisco 49ers\nsea Seattle Seahawks");
        this.res.end();
    } //else if (request.text && botRegexWV.test(request.text)) {
//        this.res.writeHead(200);
//        postMessage("Waiver List:\nhttps://docs.google.com/spreadsheets/d/1BXQQfjdVwqR51ZjahQzGvVNtZgc4UgbZ1nVVnFLEAsk/edit#gid=1504025007");
//        postMessage("Free agents:\nhttp://daddyleagues.com/xm/players?name=&position=all&team=fa");
//        this.res.end();} 
        else if (request.text && botRegexBL.test(request.text)) {
        this.res.writeHead(200);
        postMessage("http://daddyleagues.com/xm/forum/forum/6532");
        this.res.end();
    } else {
        console.log("don't care");
        this.res.writeHead(200);
        this.res.end();
    }
}

function postMessage(response) {
    var botResponse, options, body, botReq;

    botResponse = response

    options = {
        hostname: 'api.groupme.com',
        path: '/v3/bots/post',
        method: 'POST'
    };

    body = {
        "bot_id": botID,
        "text": botResponse
    };

    console.log('sending ' + botResponse + ' to ' + botID);

    botReq = HTTPS.request(options, function(res) {
        if (res.statusCode == 202) {
            //neat
        } else {
            console.log('rejecting bad status code ' + res.statusCode);
        }
    });

    botReq.on('error', function(err) {
        console.log('error posting message ' + JSON.stringify(err));
    });
    botReq.on('timeout', function(err) {
        console.log('timeout posting message ' + JSON.stringify(err));
    });
    botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
