module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let hours = 800;
      if (!knowsProgramming) {
        hours += 500;
      }
      return Math.ceil(hours/config[focus]);
  };
  