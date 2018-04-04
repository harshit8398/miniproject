const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const map = mongoose.model('maps');

router.get('/',(req,res)=>{
    res.render('index/index');
});

router.post('/info',(req,res)=> {

    const index1 = req.body.source;
    const index2 = req.body.destination;
    var source,destination,lat1, lon1, lat2, lon2, distance;

    map.find({index: index1})
        .then((s) => {
            console.log('source', s);
            source = s[0].name;
            lat1 = s[0].latitude;
            lon1 = s[0].longitude;
        })
            .then(() => {
                map.find({index: index2})
                    .then((d) => {
                        console.log('destination', d);
                        destination = d[0].name;
                        lat2 = d[0].latitude;
                        lon2 = d[0].longitude;
                    })
                        .then(() => {
                            console.log(lat1, lon1, lat2, lon2);
                            d = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
                            distance = d.toPrecision(4);
                            res.render('index/result', {source,destination,distance});
                        })
                    })
            });

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI/180)
}

module.exports = router;
