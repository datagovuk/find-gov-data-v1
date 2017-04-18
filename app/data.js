module.exports = {
  // Lists of organisations
  organisations: [
    {
        title: "Cabinet Office",
        name: "cabinet-office",
        type: "national"
    },
    {
        title: "Cheshire West and Chester",
        name: "cheshire-west-and-chester",
        type: "local"
    },
    {
        title: "Wirral Council",
        name: "wirral-council",
        type: "local"
    }
  ],
  local_organisations: function() {
    return this.organisations.filter(function(o){
        return o.type == 'local';
    })
  },
  national_organisations: function() {
    return this.organisations.filter(function(o){
        return o.type == 'national';
    })
  }
}
