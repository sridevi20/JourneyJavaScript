const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
   const result = this.journeys.map((journey) => {
         return  journey.startLocation;
   })
        return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
        return journey.endLocation;
  })
         return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
    const result = this.journeys.filter((journey)=> {
        return  journey.transport == transport;
    })
             return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
       const result = this.journeys.filter((journey) => {
            return journey.distance > minDistance;
       })
              return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

     const total = this.journeys.reduce((running_total, journey) => {
            return running_total + journey.distance;
     },0)
               return total;
};

Traveller.prototype.getUniqueModesOfTransport = function (transport) {
        const  uniqueTransport= [];
         const result = this.journeys.filter((journey) => {
           if (uniqueTransport.indexOf(journey.transport) == -1){
               uniqueTransport.push(journey.transport);
                return true;
            }
             return false;
        })

              return result;

};


module.exports = Traveller;
