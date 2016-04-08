var myHooks = function () {

  this.Before(function (scenario) {
    // Just like inside step definitions, "this" is set to a World instance.
    // It's actually the same instance the current scenario step definitions
    // will receive.

    // Let's say we have a bunch of "maintenance" methods available on our World
    // instance, we can fire some to prepare the application for the next
    // scenario:

    //this.bootFullTextSearchServer();
    //this.createSomeUsers();
  });


  this.After(function (scenario) {
    // Again, "this" is set to the World instance the scenario just finished
    // playing with.

    // We can then do some cleansing:

    //this.emptyDatabase();
    //this.shutdownFullTextSearchServer();
  });
};

module.exports = myHooks;
