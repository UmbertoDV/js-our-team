//    _____ _       _           _  __      __        _       _     _
//   / ____| |     | |         | | \ \    / /       (_)     | |   | |
//  | |  __| | ___ | |__   __ _| |  \ \  / /_ _ _ __ _  __ _| |__ | | ___  ___
//  | | |_ | |/ _ \| '_ \ / _` | |   \ \/ / _` | '__| |/ _` | '_ \| |/ _ \/ __|
//  | |__| | | (_) | |_) | (_| | |    \  / (_| | |  | | (_| | |_) | |  __/\__ \
//   \_____|_|\___/|_.__/ \__,_|_|     \/ \__,_|_|  |_|\__,_|_.__/|_|\___||___/

"use strict";
const membri = [
	{
		nome: "Wayne",
		cognome: "Barnett",
		grado: "Founder & CEO",
		immagine: "../img/wayne-barnett-founder-ceo.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Angela",
		cognome: "Caroll",
		grado: "Chief Editor",
		immagine: "../img/angela-caroll-chief-editor.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Walter",
		cognome: "Gordon",
		grado: "Office Manager",
		immagine: "../img/walter-gordon-office-manager.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Angela",
		cognome: "Lopez",
		grado: "Social Media Manager",
		immagine: "../img/angela-lopez-social-media-manager.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Scott",
		cognome: "Estrada",
		grado: "Developer",
		immagine: "../img/scott-estrada-developer.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Barbara",
		cognome: "Ramos",
		grado: "Graphic Designer",
		immagine: "../img/barbara-ramos-graphic-designer.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
];

//    _____          _         ____          _                     _
//   / ____|        | |       / __ \        | |                   | |
//  | |     ___   __| | ___  | |  | |_ __   | |     ___   __ _  __| |
//  | |    / _ \ / _` |/ _ \ | |  | | '_ \  | |    / _ \ / _` |/ _` |
//  | |___| (_) | (_| |  __/ | |__| | | | | | |___| (_) | (_| | (_| |
//   \_____\___/ \__,_|\___|  \____/|_| |_| |______\___/ \__,_|\__,_|

console.log(membri);
for (const membro of membri) {
	console.log(membro.fullName());
}

//   ______                _   _
//  |  ____|              | | (_)
//  | |__ _   _ _ __   ___| |_ _  ___  _ __  ___
//  |  __| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
//  | |  | |_| | | | | (__| |_| | (_) | | | \__ \
//  |_|   \__,_|_| |_|\___|\__|_|\___/|_| |_|___/
