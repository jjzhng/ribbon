console.log("hello");

var input = "~Assistant ~US ~Attorney ~Vikas ~Khanna ~said ~former ~Christie ~confidante and ~Port ~Authority ~executive ~David ~Wildstein ~will ~testify that he told Christie about the ~plan ~to ~close ~lanes ~on ~the ~George ~Washington ~Bridge while it was ~causing ~traffic ~problems in ~Fort ~Lee, ~New ~Jersey, where the mayor was a political rival of Christie.\"The evidence will show that ... they bragged about the fact that there were traffic problems in Fort Lee and that Mayor (Mark) Sokolich was not getting his calls returned,\" Khanna said, according to NJ.com.Christie has ~never ~been ~named as a ~conspirator in the case or charged.~Wildstein ~has ~pled ~guilty in the case and pointed to the two staffers on trial, Bill Baroni, a Port Authority appointee, and Bridget Kelly, the governor's former deputy chief of staff.Khanna also told the jury Wildstein will admit conceiving of the idea and will testify Kelly ordered it and Baroni approved it. The traffic headache was allegedly intentionally called for because ~Sokolich ~did ~not ~endorse ~Christie's ~re-election.Baroni's attorneys have sought to argue that Baroni is being unfairly singled out in the scheme. In a previous court filing, the attorneys released a text message exchange from a Christie aide saying he \"flat-out lied\" during a news conference about the bridge closures. Christie had said senior staff were not involved in that news event. He later said that staff in his office lied, but that he hadn't known it at the time of the news conference. Christie has ~long ~denied any ~involvement ~in ~the ~closures and neither the federal investigation nor the New Jersey legislative inquiry has pointed to him.After an unsuccessful run for president, the governor is now ~chairing the ~transition ~effort of ~Republican ~presidential ~nominee ~Donald ~Trump.In December 2015, when they were opponents, Trump told an audience in South Carolina Christie \"totally knew about it,\" referring to the Bridgegate closures.The Trump campaign did not respond to a request for comment."
function toarray(words) {
	words = words.split(" ");
	
	var array = [];
	
	for(var i = 0; i < words.length; i++) {
		if(words[i].includes("~")) {
			array.push(1);
		} else {
			array.push(0);
		}
	}
	
	return array;
}

console.log(toarray(input));

document.getElementById("text").innerHTML = toarray(input);