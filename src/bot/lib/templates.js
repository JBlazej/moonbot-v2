export const templates = {
	get_faculties: {
		attachment: {
			type: "template",
			payload: {
				template_type: "generic",
				elements: [
					{
						title: "Fakulta financí a účetnictví",
						subtitle: "Obory financí, účetnictví a finanční řízení podniku.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/ffu.png",
						default_action: {
							type: "web_url",
							url: "http://ffu.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Řekni mi víc",
								payload: "ffu"
							}
						]
					},
					{
						title: "Fakulta mezinárodních vztahů",
						subtitle: "Obory mezinárodní ekonomické vztahy, cestovní ruch a mezinárodní politika.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/fmv.png",
						default_action: {
							type: "web_url",
							url: "http://fmv.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Řekni mi víc",
								payload: "fmv"
							}
						]
					},
					{
						title: "Fakulta podnikohospodářská",
						subtitle: "Obory podniková ekonomika a managment a Arts managment.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/fph.png",
						default_action: {
							type: "web_url",
							url: "http://fph.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Řekni mi víc",
								payload: "fph"
							}
						]
					},
					{
						title: "Fakulta inforamtiky a statistiky",
						subtitle: "Obory zabývající se informačními systémy s použitím počítačů a statistikou.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/fis.png",
						default_action: {
							type: "web_url",
							url: "http://fis.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Řekni mi víc",
								payload: "fis"
							}
						]
					},
					{
						title: "Národohospodářská fakulta",
						subtitle: "Obor ekonomie, národní hospodářství, veřejná správa a regionální rozvoj.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/nf.png",
						default_action: {
							type: "web_url",
							url: "http://nf.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Řekni mi víc",
								payload: "nf"
							}
						]
					},
					{
						title: "Fakulta managementu",
						subtitle: "Obory ekonomika a managment.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/fm.png",
						default_action: {
							type: "web_url",
							url: "http://fm.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Řekni mi víc",
								payload: "fm"
							}
						]
					}
				]
			}
		}
	},
	get_school:{
		attachment: {
			type: "template",
			payload: {
				template_type: "generic",
				elements: [
					{
						title: "Vysoká škola ekonomická v Praze",
      					image_url: "https://moonbot-v2-front.herokuapp.com/bot/vse.png",
      					subtitle: "Základní informace o škole, kde jsem byl vytvořen.",
      					default_action: {
        					type: "web_url",
        					url: "www.vse.cz",
        					messenger_extensions: "FALSE",
        					webview_height_ratio: "TALL"
						},
						buttons: [
							{
								type: "postback",
								title: "Fakulty",
								payload: "faculties"
							},
							{
								type: "postback",
								title: "Koleje",
								payload: "colleges"
							}
						]
					}
				]
			}
		}
	},
	send_img:{
		attachment:{
      type: "image",
      payload:{
        url: "https://moonbot-v2-front.herokuapp.com/bot/moonbot.jpg",
        is_reusable: "TRUE"
      }
    }
	},
	send_gif:{
		attachment:{
      type: "image",
      payload:{
        url: "https://media.giphy.com/media/l3UcrqNnA3zZTavMA/giphy.gif",
        is_reusable: "TRUE"
      }
    }
	},
	dormitories:{
	 blanice:{
		 url: "https://raw.githubusercontent.com/JBlazej/Moonbot/master/assets/images/dormitories/blanice.png",
		 text: "Bla blaaa."
	 },
	 vltava:{
		 url: "https://raw.githubusercontent.com/JBlazej/Moonbot/master/assets/images/dormitories/vltava.jpg",
		 text: "Více bla bla."
	 },
	 jarov:{
		 url: "https://raw.githubusercontent.com/JBlazej/Moonbot/master/assets/images/dormitories/jarov1.jpg",
		 text: "Ještě bla bla."
	 },
	 roosveltova:{
		 url: "https://raw.githubusercontent.com/JBlazej/Moonbot/master/assets/images/dormitories/roosevelt.jpg",
		 text: "Tady bla bla."
	 },
	 sveco:{
		 url: "https://raw.githubusercontent.com/JBlazej/Moonbot/master/assets/images/dormitories/svecova.jpg",
		 text: "Poslední bla."
	 }
	 },
	 send_intro:{
		 text: "Vyber jednu z možností.",
		 quick_replies:[
			{
				content_type: "text",
				title: "VŠE",
				payload: "hacker"
			},

		   {
			   content_type: "text",
			   title: "Spojení",
			   payload: "spoj-intro"
		   },
		   {
				content_type: "text",
		 		title: "Translator",
				payload: "vse"
			},
			{
				content_type: "text",
				title: "Novinky",
				payload: "news-intro"
		   	}
		]
	},
	send_info:{
		text: "🌚",
		quick_replies:[
		   {
			   content_type: "text",
			   title: "Moonbot",
			   payload: "moon-bot-intro",
			   image_url: "http://moonbot-v2-front.herokuapp.com/moon"
		   }
		 ]
   },
	send_quick_help:{
		text: "Nechtěl si napsat?",
		quick_replies:[
			{
				content_type: "text",
				title: "VŠE",
				payload: "hacker"
			},

		   {
			   content_type: "text",
			   title: "Spojení",
			   payload: "spoj-intro"
		   },
		   {
				content_type: "text",
		 		title: "Translator",
				payload: "vse"
			},
			{
				content_type: "text",
				title: "Novinky",
				payload: "news-intro"
		   	},
		   	{
				content_type: "text",
				title: "HackerNews",
				payload: "vse-intro"
		   }
		]
   },
	send_idos_intro:{
		text: "Spoj Volha do Hlavní nádraží",
		quick_replies:[
		   {
			   content_type: "text",
			   title: "Vyzkoušet",
			   payload: "idos-intro-try"
		   }
		 ]
   	},
	send_quick:{
  	text: "Moje oblíbené příkazy",
    quick_replies:[
			{
        content_type: "text",
        title: "Koleje",
        payload: "koleje"

	    },
      {
        content_type: "text",
        title: "Hackernews",
        payload: "hackernews"
      },
			{
        content_type: "text",
        title: "VSE",
        payload: "quickvse"
      },
			{
        content_type: "text",
        title: "Fakulty",
        payload: "faq"
      },
			{
        content_type: "text",
        title: "Spojeni",
        payload: "spojeni"
      }
    ]
	},
	send_next_translator:{
	text: "Nebo vyber jazyk překladu.",
	  quick_replies:[
			  {
		  content_type: "text",
		  title: "Ukaž",
		  payload: "try-it"
  
		  },
		{
		  content_type: "text",
		  title: "Jazyk",
		  payload: "settings"
		}
	  ]
	  },
	send_help:{
  	text: "Nechtěl si napsat?",
    quick_replies:[
      {
        content_type: "text",
        title: "Hackernews",
        payload: "hackernews"
      },
			{
        content_type: "text",
        title: "InSIS",
        payload: "isis"
      },
			{
        content_type: "text",
        title: "Vtip",
        payload: "vtip"
      },
			{
        content_type: "text",
        title: "Spojeni",
        payload: "spojeni"
      }
    ]
	},
	send_manual:{
		attachment:{
			type: "template",
			payload: {
				template_type: "button",
				text: "Příručku pro prváky najdeš po kliknutí na odkaz.",
				buttons:[
					{
						type: "web_url",
						url: "https://www.vse.cz/studium/prvni-rocnik/prirucka/index.php",
						title: "Odkaz"
					}
				]
			}
		}
	},
	get_language:{
		attachment:{
			type: "template",
			payload: {
				template_type: "button",
				text: "Vyber si jazyk, který chceš používat pro překlad.",
				buttons:[
					{
						type: "postback",
						title: "Angličtina",
						payload: 'set-en'
					},
					{
						type: "postback",
						title: "Němčina",
						payload: 'set-de'
					},
					{
						type: "postback",
						title: "Španělština",
						payload: 'set-es'
					}
				]
			}
		}
	},
	get_isis:{
		attachment:{
      type: "template",
			payload: {
  			template_type: "button",
  			text: "Po kliknutí vstoupíš do integrovaného studijního informačního systémů 📕📘📗",
  			buttons:[
					{
						type: "web_url",
            url: "https://insis.vse.cz/auth/",
            title: "Vstoupit"
					}
  			]
			}
    }
	},
	get_idos:{
		attachment:{
      type: "template",
			payload: {
  			template_type: "button",
  			text: "Dokážu ti poradit nejrychlejší cestu 🚇 , 🚊, 🚌. po Praze. Koukni se na to jde to fakt rychle.",
  			buttons:[
					{
						type: "postback",
            title: "Jak na to?",
						payload: "howToIdos"
					}
  			]
			}
    }
	},
	get_test:{
		attachment:{
      type: "template",
			payload: {
  			template_type: "button",
  			text: "Našli jste svůj spoj?",
  			buttons:[
					{
						type: "postback",
            title: "Ano 👍",
						payload: "idos-like"
					},
					{
						type: "postback",
            title: "Další spoj",
						payload: "idos-next"
					}
  			]
			}
    }
	},
	get_dormitories: {
		attachment: {
			type: "template",
			payload: {
				template_type: "generic",
				elements: [
					{
						title: "Kolej Blanice",
						subtitle: "Kolej situována v areálu kolejí na Jižním Městě v Praze 4.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/blanice.png",
						default_action: {
							type: "web_url",
							url: "http://kolejblanice.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Úřední hodiny",
								payload: "office-hours"
							},
							{
								type: "postback",
								title: "Vedoucí a zástupce",
								payload: "head-and-representative"
							},
							{
								type: "web_url",
								url: "https://www.google.com/maps/place/Kolej+Blanice/@50.0198007,14.4956339,17z/data=!3m1!4b1!4m5!3m4!1s0x470b9229c94d6f2b:0x3427c9d8147fef0f!8m2!3d50.0197973!4d14.4978227",
								title: "View Website"
							  },
							{
								type: "postback",
								title: "Adresa",
								payload: "adress"
							}
						]
					},
					{
						title: "Kolej Vltava",
						subtitle: "Kolej je situována v areálu kolejí na Jižním Městě v Praze 4.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/vltava.jpg",
						default_action: {
							type: "web_url",
							url: "http://vltava.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Úřední hodiny",
								payload: "office-hours"
							},
							{
								type: "postback",
								title: "Vedoucí a zástupce",
								payload: "head-and-representative"
							},
							{
								type: "postback",
								title: "Adresa",
								payload: "adress"
							}
						]
					},
					{
						title: "Kolej Jarov I.",
						subtitle: "Kolej je situován v areálu kolejí na Jarově v Praze 3 přímo na ulici Koněvova.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/jarov1.jpg",
						default_action: {
							type: "web_url",
							url: "http://kolejjarov1.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Úřední hodiny",
								payload: "office-hours"
							},
							{
								type: "postback",
								title: "Vedoucí a zástupce",
								payload: "head-and-representative"
							},
							{
								type: "postback",
								title: "Adresa",
								payload: "adress"
							}
						]
					},
					{
						title: "Kolej Jarov I.E",
						subtitle: "Kolej je situován v areálu kolejí na Jarově v Praze 3 přímo na ulici Koněvova.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/jarov1E.jpg",
						default_action: {
							type: "web_url",
							url: "http://kolejjarov1e.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Úřední hodiny",
								payload: "office-hours"
							},
							{
								type: "postback",
								title: "Vedoucí a zástupce",
								payload: "head-and-representative"
							},
							{
								type: "postback",
								title: "Adresa",
								payload: "adress"
							}
						]
					},
					{
						title: "Kolej Jarov II.",
						subtitle: "Budova koleje Jarov II je situována v klidné bytové zástavbě.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/jarov2.jpg",
						default_action: {
							type: "web_url",
							url: "http://kolejjarov2.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Úřední hodiny",
								payload: "office-hours"
							},
							{
								type: "postback",
								title: "Vedoucí a zástupce",
								payload: "head-and-representative"
							},
							{
								type: "postback",
								title: "Adresa",
								payload: "adress"
							}
						]
					},
					{
						title: "Kolej Jarov III.F",
						subtitle: "Poloha koleje Jarov III F je pro studentské ubytování velmi výhodná.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/jarov3F.jpg",
						default_action: {
							type: "web_url",
							url: "http://kolejjarov3f.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Úřední hodiny",
								payload: "office-hours"
							},
							{
								type: "postback",
								title: "Vedoucí a zástupce",
								payload: "head-and-representative"
							},
							{
								type: "postback",
								title: "Adresa",
								payload: "adress"
							}
						]
					},
					{
						title: "Kolej Jarov III.G",
						subtitle: "Budova postavená v roce 1977 v areálu kolejí na Jarově v Praze 3.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/jarov3G.jpg",
						default_action: {
							type: "web_url",
							url: "http://kolejjarov3g.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Úřední hodiny",
								payload: "office-hours"
							},
							{
								type: "postback",
								title: "Vedoucí a zástupce",
								payload: "head-and-representative"
							},
							{
								type: "postback",
								title: "Adresa",
								payload: "adress"
							}
						]
					},
					{
						title: "Rooseveltova kolej",
						subtitle: "Kolej s kapacitou 373 lůžek v lokalitě v Praze 7 Holešovicích.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/roosevelt.jpg",
						default_action: {
							type: "web_url",
							url: "http://kolejrooseveltova.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Úřední hodiny",
								payload: "office-hours"
							},
							{
								type: "postback",
								title: "Vedoucí a zástupce",
								payload: "head-and-representative"
							},
							{
								type: "postback",
								title: "Adresa",
								payload: "adress"
							}
						]
					},
					{
						title: "Švecova kolej",
						subtitle: "Kolej je umístěn ve středu Jindřichova Hradce.",
						image_url: "https://moonbot-v2-front.herokuapp.com/bot/svecova.JPG",
						default_action: {
							type: "web_url",
							url: "http://kolejsvecova.fm.vse.cz",
							messenger_extensions: "FALSE",
							webview_height_ratio: "FULL"
						},
						buttons: [
							{
								type: "postback",
								title: "Úřední hodiny",
								payload: "office-hours"
							},
							{
								type: "postback",
								title: "Vedoucí a zástupce",
								payload: "head-and-representative"
							},
							{
								type: "postback",
								title: "Adresa",
								payload: "adress"
							}
						]
					}
				]
			}
		}
	},
	get_jb:{
		attachment: {
			type: "template",
			payload: {
				template_type: "generic",
				elements: [
					{
						title: "Jan Blažej",
      			image_url: "https://raw.githubusercontent.com/JBlazej/Moonbot/master/assets/images/author.jpg",
      			subtitle: "Tvůrce Moonbota,student VŠE a node js vývojář 💻",
						buttons: [
							{
								type: "web_url",
		            url: "https://github.com/JBlazej",
		            title: "Moje práce"
							},
							{
								type: "postback",
								title: "Řekni něco o sobě",
								payload: "sayAboutMe"
							}
						]
					}
				]
			}
		}
	}
}
