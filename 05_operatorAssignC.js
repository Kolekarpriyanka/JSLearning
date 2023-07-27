console.log(`-------------------------- step 1 ----------------------------`);
var interview = function (gradScore, hscScore, sscScore, candidateName) {
  var eligibility =
    gradScore >= 70 || hscScore >= 80 || sscScore >= 90
      ? "congrates you are eligible for TCS interview"
      : "Unfortunately you are not eligible for TCS interview";
  console.log(`Hello ${candidateName}, ${eligibility}`);
};
interview(80, 86, 90, "Priyanka");
interview(70, 65, 55, "sonal ");
interview(60, 79, 88, "vidya");
