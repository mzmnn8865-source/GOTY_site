// @ts-nocheck

/* GOTY Archive — main.js
   Author: Aria Azizi (آریا عزیزی)
   v3.1
*/

/* ---------- داده‌ها ---------- */
const games = [
    { year:2025, title:"Clair Obscur: Expedition 33", awards:332, dev:"Sandfall Interactive", genre:"RPG نوبتی",
      metacritic:93, opencritic:92,
      desc:"یک RPG فرانسوی با سبک هنری نقاشی‌وار و داستان احساسی درباره گروهی که برای متوقف کردن یک نقاش‌زن تلاش می‌کنند.",
      why:"ترکیب نبوغ‌آمیز سیستم مبارزه نوبتی با اکشن زمان‌واقعی، داستان عمیق و طراحی هنری بی‌نظیر.",
      rivals:[
        { title:"Death Stranding 2: On the Beach", awards:45, metacritic:89 },
        { title:"Split Fiction", awards:38, metacritic:91 },
        { title:"Silent Hill f", awards:32, metacritic:86 },
        { title:"Hades II", awards:28, metacritic:93 }
      ],
      awards_list:[
        { src:"The Game Awards", n:9, note:"بهترین بازی سال، بهترین روایت، بهترین کارگردانی هنری" },
        { src:"BAFTA Games", n:6, note:"بهترین بازی، بهترین موسیقی، بهترین طراحی" },
        { src:"D.I.C.E Awards", n:7, note:"بهترین بازی سال، بهترین RPG" },
        { src:"Golden Joystick", n:5, note:"بهترین بازی سال، بهترین استودیو" },
        { src:"سایر رسانه‌ها", n:305, note:"بیش از ۳۰۰ رسانه مستقل" }
      ]
    },
    { year:2024, title:"Astro Bot", awards:196, dev:"Team Asobi", genre:"پلتفرمر",
      metacritic:94, opencritic:95,
      desc:"یک پلتفرمر سه‌بعدی جذاب که تمام قدرت DualSense را به کار می‌گیرد و ادای دینی به تاریخ پلی‌استیشن است.",
      why:"خلاقیت بی‌نظیر در طراحی مراحل، استفاده هوشمندانه از قابلیت‌های دسته PS5 و شادی خالصی که به بازیکن منتقل می‌کند.",
      rivals:[
        { title:"Final Fantasy VII Rebirth", awards:68, metacritic:92 },
        { title:"Metaphor: ReFantazio", awards:55, metacritic:94 },
        { title:"Balatro", awards:42, metacritic:90 },
        { title:"Black Myth: Wukong", awards:38, metacritic:81 }
      ],
      awards_list:[
        { src:"The Game Awards", n:4, note:"بهترین بازی سال، بهترین کارگردانی" },
        { src:"BAFTA Games", n:3, note:"بهترین بازی خانوادگی، بهترین طراحی" },
        { src:"D.I.C.E Awards", n:4, note:"بهترین بازی سال، بهترین دستاورد فنی" },
        { src:"سایر رسانه‌ها", n:185, note:"رسانه‌های بین‌المللی" }
      ]
    },
    { year:2023, title:"Baldur's Gate III", awards:288, dev:"Larian Studios", genre:"RPG",
      metacritic:96, opencritic:96,
      desc:"یک RPG حماسی بر اساس Dungeons & Dragons با آزادی عمل بی‌نظیر و روایت شاخه‌ای پیچیده.",
      why:"عمق بی‌سابقه در انتخاب‌های بازیکن، صداپیشگی خیره‌کننده و احترامی که به هوش بازیکن می‌گذارد.",
      rivals:[
        { title:"Alan Wake 2", awards:95, metacritic:89 },
        { title:"Spider-Man 2", awards:45, metacritic:90 },
        { title:"Zelda: Tears of the Kingdom", awards:38, metacritic:96 },
        { title:"Resident Evil 4 Remake", awards:25, metacritic:93 }
      ],
      awards_list:[
        { src:"The Game Awards", n:6, note:"بهترین بازی سال، بهترین روایت" },
        { src:"BAFTA Games", n:5, note:"بهترین بازی، بهترین موسیقی" },
        { src:"D.I.C.E Awards", n:4, note:"بهترین بازی سال، بهترین RPG" },
        { src:"Golden Joystick", n:7, note:"بهترین بازی سال، بهترین داستان" },
        { src:"سایر رسانه‌ها", n:266, note:"رسانه‌های جهانی" }
      ]
    },
    { year:2022, title:"Elden Ring", awards:435, dev:"FromSoftware", genre:"Action RPG",
      metacritic:96, opencritic:95,
      desc:"دنیای باز وسیع Lands Between با همکاری جورج آر. آر. مارتین، پر از راز، چالش و اکتشاف.",
      why:"ترکیب بی‌نقص اکتشاف آزاد، مبارزات چالش‌برانگیز و روایت محیطی، استاندارد جدیدی برای اوپن‌ورلد تعریف کرد.",
      rivals:[
        { title:"God of War Ragnarok", awards:118, metacritic:94 },
        { title:"Horizon Forbidden West", awards:42, metacritic:88 },
        { title:"Stray", awards:25, metacritic:83 },
        { title:"Xenoblade Chronicles 3", awards:18, metacritic:89 }
      ],
      awards_list:[
        { src:"The Game Awards", n:4, note:"بهترین بازی سال، بهترین کارگردانی" },
        { src:"BAFTA Games", n:3, note:"بهترین بازی، بهترین طراحی" },
        { src:"D.I.C.E Awards", n:5, note:"بهترین بازی سال، بهترین RPG" },
        { src:"Golden Joystick", n:4, note:"بهترین بازی سال" },
        { src:"سایر رسانه‌ها", n:419, note:"رکورد تاریخی جوایز" }
      ]
    },
    { year:2021, title:"It Takes Two", awards:80, dev:"Hazelight Studios", genre:"Co-op",
      metacritic:89, opencritic:88,
      desc:"یک بازی دو نفره اجباری درباره یک زوج در حال طلاق که به عروسک تبدیل شده‌اند.",
      why:"طراحی خلاقانه مراحل که هرگز تکراری نمی‌شود و تجربه‌ای که فقط با همکاری واقعی دو بازیکن قابل درک است.",
      rivals:[
        { title:"Deathloop", awards:32, metacritic:88 },
        { title:"Resident Evil Village", awards:25, metacritic:84 },
        { title:"Psychonauts 2", awards:18, metacritic:87 },
        { title:"Metroid Dread", awards:15, metacritic:88 }
      ],
      awards_list:[
        { src:"The Game Awards", n:3, note:"بهترین بازی سال، بهترین بازی چندنفره" },
        { src:"BAFTA Games", n:2, note:"بهترین بازی خانوادگی" },
        { src:"D.I.C.E Awards", n:2, note:"بهترین بازی خانوادگی" },
        { src:"سایر رسانه‌ها", n:73, note:"رسانه‌های بین‌المللی" }
      ]
    },
    { year:2020, title:"The Last of Us Part II", awards:326, dev:"Naughty Dog", genre:"اکشن-ماجراجویی",
      metacritic:93, opencritic:90,
      desc:"ادامه‌ای جسورانه و بحث‌برانگیز که به بررسی چرخه خشونت و انتقام می‌پردازد.",
      why:"روایت شجاعانه، صداپیشگی و موشن‌کپچر بی‌نظیر و طراحی صوتی که استانداردهای صنعت را جابجا کرد.",
      rivals:[
        { title:"Hades", awards:75, metacritic:93 },
        { title:"Ghost of Tsushima", awards:55, metacritic:83 },
        { title:"Doom Eternal", awards:30, metacritic:88 },
        { title:"Final Fantasy VII Remake", awards:28, metacritic:87 }
      ],
      awards_list:[
        { src:"The Game Awards", n:7, note:"بهترین بازی سال، بهترین روایت" },
        { src:"BAFTA Games", n:5, note:"بهترین بازی، بهترین اجرا" },
        { src:"D.I.C.E Awards", n:3, note:"بهترین دستاورد فنی" },
        { src:"سایر رسانه‌ها", n:311, note:"رسانه‌های جهانی" }
      ]
    },
    { year:2019, title:"Death Stranding", awards:118, dev:"Kojima Productions", genre:"اکشن-ماجراجویی",
      metacritic:82, opencritic:83,
      desc:"اولین بازی مستقل هیدئو کوجیما درباره یک پیک در آمریکای پس از فاجعه.",
      why:"خلاقیت جسورانه در طراحی حلقه‌بازی، مفهوم اتصال و روایتی که بازی را به یک اثر هنری تبدیل کرد.",
      rivals:[
        { title:"Control", awards:42, metacritic:85 },
        { title:"Sekiro: Shadows Die Twice", awards:35, metacritic:90 },
        { title:"Resident Evil 2 Remake", awards:28, metacritic:91 },
        { title:"Disco Elysium", awards:22, metacritic:91 }
      ],
      awards_list:[
        { src:"The Game Awards", n:3, note:"بهترین کارگردانی، بهترین موسیقی" },
        { src:"BAFTA Games", n:1, note:"بهترین دستاورد فنی" },
        { src:"سایر رسانه‌ها", n:114, note:"رسانه‌های مختلف" }
      ]
    },
    { year:2018, title:"God of War", awards:263, dev:"Santa Monica Studio", genre:"اکشن-ماجراجویی",
      metacritic:94, opencritic:94,
      desc:"بازآفرینی افسانه کریتوس در اساطیر نورس با پسرش آترئوس.",
      why:"بازتعریف یک فرنچایز کلاسیک با روایتی پدرانه، دوربین تک‌برداشت و مبارزاتی که حس قدرت می‌دهد.",
      rivals:[
        { title:"Red Dead Redemption 2", awards:178, metacritic:97 },
        { title:"Marvel's Spider-Man", awards:25, metacritic:87 },
        { title:"Assassin's Creed Odyssey", awards:15, metacritic:83 },
        { title:"Monster Hunter: World", awards:12, metacritic:90 }
      ],
      awards_list:[
        { src:"The Game Awards", n:5, note:"بهترین بازی سال، بهترین کارگردانی" },
        { src:"BAFTA Games", n:4, note:"بهترین بازی، بهترین روایت" },
        { src:"D.I.C.E Awards", n:6, note:"بهترین بازی سال" },
        { src:"سایر رسانه‌ها", n:248, note:"رسانه‌های جهانی" }
      ]
    },
    { year:2017, title:"The Legend of Zelda: Breath of the Wild", awards:264, dev:"Nintendo", genre:"اکشن-ماجراجویی",
      metacritic:97, opencritic:97,
      desc:"بازتعریف افسانه زلدا در دنیایی باز که بازیکن آزادی کامل در اکتشاف دارد.",
      why:"شیمی بازی و آزادی بی‌نظیری که هر بازیکن داستان خودش را می‌سازد.",
      rivals:[
        { title:"Super Mario Odyssey", awards:55, metacritic:97 },
        { title:"Horizon Zero Dawn", awards:42, metacritic:89 },
        { title:"Persona 5", awards:32, metacritic:93 },
        { title:"Nier: Automata", awards:22, metacritic:88 }
      ],
      awards_list:[
        { src:"The Game Awards", n:3, note:"بهترین بازی سال" },
        { src:"BAFTA Games", n:4, note:"بهترین بازی، بهترین طراحی" },
        { src:"D.I.C.E Awards", n:4, note:"بهترین بازی سال" },
        { src:"سایر رسانه‌ها", n:253, note:"رسانه‌های جهانی" }
      ]
    },
    { year:2016, title:"Uncharted 4: A Thief's End", awards:190, dev:"Naughty Dog", genre:"اکشن-ماجراجویی",
      metacritic:93, opencritic:93,
      desc:"پایان باشکوه ماجراهای نیت دریک و برادرش سم.",
      why:"پایان‌بندی احساسی، گرافیک خیره‌کننده و سکانس‌های اکشن مثل یک فیلم هالیوودی.",
      rivals:[
        { title:"Overwatch", awards:102, metacritic:91 },
        { title:"Doom", awards:42, metacritic:85 },
        { title:"Titanfall 2", awards:25, metacritic:89 },
        { title:"Battlefield 1", awards:18, metacritic:88 }
      ],
      awards_list:[
        { src:"The Game Awards", n:2, note:"بهترین روایت" },
        { src:"BAFTA Games", n:3, note:"بهترین بازی، بهترین اجرا" },
        { src:"D.I.C.E Awards", n:4, note:"بهترین دستاورد فنی" },
        { src:"سایر رسانه‌ها", n:181, note:"رسانه‌های بین‌المللی" }
      ]
    },
    { year:2015, title:"The Witcher 3: Wild Hunt", awards:281, dev:"CD Projekt Red", genre:"Action RPG",
      metacritic:93, opencritic:92,
      desc:"ماجراجویی گرالت ریویا در دنیایی باز و پرجزئیات بر اساس رمان‌های آندره ساپکوفسکی.",
      why:"داستان‌های فرعی بی‌نظیر، شخصیت‌پردازی عمیق و دنیای زنده‌ای که هر گوشه‌اش داستانی دارد.",
      rivals:[
        { title:"Fallout 4", awards:58, metacritic:84 },
        { title:"Metal Gear Solid V", awards:48, metacritic:93 },
        { title:"Bloodborne", awards:42, metacritic:92 },
        { title:"Super Mario Maker", awards:25, metacritic:88 }
      ],
      awards_list:[
        { src:"The Game Awards", n:3, note:"بهترین بازی سال، بهترین RPG" },
        { src:"BAFTA Games", n:2, note:"بهترین داستان" },
        { src:"D.I.C.E Awards", n:5, note:"بهترین بازی سال" },
        { src:"Golden Joystick", n:5, note:"بهترین بازی سال" },
        { src:"سایر رسانه‌ها", n:266, note:"رکورد آن زمان" }
      ]
    },
    { year:2014, title:"Dragon Age: Inquisition", awards:139, dev:"BioWare", genre:"RPG",
      metacritic:85, opencritic:84,
      desc:"بازگشت افسانه Dragon Age با دنیایی وسیع و سیستم انتخاب‌های عمیق.",
      why:"ترکیب سیستم مبارزه تاکتیکی، شخصیت‌پردازی قوی و دنیای وسیعی که هر انتخاب بازیکن را جدی می‌گیرد.",
      rivals:[
        { title:"Middle-earth: Shadow of Mordor", awards:55, metacritic:84 },
        { title:"Destiny", awards:38, metacritic:76 },
        { title:"Titanfall", awards:25, metacritic:86 },
        { title:"Dark Souls II", awards:22, metacritic:91 }
      ],
      awards_list:[
        { src:"The Game Awards", n:2, note:"بهترین بازی سال" },
        { src:"D.I.C.E Awards", n:3, note:"بهترین RPG" },
        { src:"سایر رسانه‌ها", n:134, note:"رسانه‌های مختلف" }
      ]
    },
    { year:2013, title:"The Last of Us", awards:257, dev:"Naughty Dog", genre:"اکشن-ماجراجویی",
      metacritic:95, opencritic:95,
      desc:"داستان جوئل و الی در آمریکای پس از شیوع قارچی مرگبار.",
      why:"روایت احساسی بی‌نظیر، رابطه جوئل و الی و پایانی که سال‌ها درباره‌اش بحث شد.",
      rivals:[
        { title:"Grand Theft Auto V", awards:158, metacritic:97 },
        { title:"BioShock Infinite", awards:55, metacritic:94 },
        { title:"Tomb Raider", awards:25, metacritic:86 },
        { title:"Super Mario 3D World", awards:18, metacritic:93 }
      ],
      awards_list:[
        { src:"The Game Awards", n:3, note:"بهترین بازی سال" },
        { src:"BAFTA Games", n:5, note:"بهترین بازی، بهترین داستان" },
        { src:"D.I.C.E Awards", n:4, note:"بهترین بازی سال" },
        { src:"سایر رسانه‌ها", n:245, note:"رکورد سال 2013" }
      ]
    },
    { year:2012, title:"The Walking Dead: A Telltale Series", awards:75, dev:"Telltale Games", genre:"ماجراجویی روایی",
      metacritic:89, opencritic:84,
      desc:"داستان لی اورت و کلیمنتاین در دنیای مرده‌های متحرک.",
      why:"روایت احساسی و سیستم انتخاب‌هایی که نشان می‌دهد هر تصمیم چه بهایی دارد.",
      rivals:[
        { title:"Journey", awards:78, metacritic:92 },
        { title:"Dishonored", awards:42, metacritic:91 },
        { title:"Mass Effect 3", awards:32, metacritic:93 },
        { title:"Borderlands 2", awards:22, metacritic:89 }
      ],
      awards_list:[
        { src:"The Game Awards", n:2, note:"بهترین بازی سال" },
        { src:"BAFTA Games", n:2, note:"بهترین داستان" },
        { src:"سایر رسانه‌ها", n:71, note:"رسانه‌های بین‌المللی" }
      ]
    },
    { year:2011, title:"The Elder Scrolls V: Skyrim", awards:229, dev:"Bethesda", genre:"Action RPG",
      metacritic:94, opencritic:93,
      desc:"ماجراجویی در سرزمین اسکایریم با اژدهایان، جادو و آزادی عمل بی‌نظیر.",
      why:"دنیای باز غنی، آزادی انتخاب کامل و مود‌پذیری که بازی را برای نسل‌ها زنده نگه داشت.",
      rivals:[
        { title:"Portal 2", awards:102, metacritic:95 },
        { title:"Batman: Arkham City", awards:55, metacritic:96 },
        { title:"Uncharted 3", awards:42, metacritic:92 },
        { title:"Dark Souls", awards:28, metacritic:89 }
      ],
      awards_list:[
        { src:"The Game Awards", n:3, note:"بهترین بازی سال، بهترین RPG" },
        { src:"BAFTA Games", n:3, note:"بهترین بازی" },
        { src:"سایر رسانه‌ها", n:223, note:"رسانه‌های جهانی" }
      ]
    },
    { year:2010, title:"Red Dead Redemption", awards:111, dev:"Rockstar Games", genre:"اکشن-ماجراجویی",
      metacritic:95, opencritic:94,
      desc:"داستان جان مارستون، یاغی سابقی که باید اعضای گنگ سابقش را شکار کند.",
      why:"بازسازی بی‌نقص غرب وحشی، دنیای زنده و داستانی که پایانش در تاریخ بازی‌ها ماندگار شد.",
      rivals:[
        { title:"Mass Effect 2", awards:118, metacritic:96 },
        { title:"God of War III", awards:42, metacritic:92 },
        { title:"Halo: Reach", awards:32, metacritic:91 },
        { title:"Super Mario Galaxy 2", awards:28, metacritic:97 }
      ],
      awards_list:[
        { src:"BAFTA Games", n:3, note:"بهترین بازی سال" },
        { src:"سایر رسانه‌ها", n:108, note:"رسانه‌های مختلف" }
      ]
    },
    { year:2009, title:"Uncharted 2: Among Thieves", awards:115, dev:"Naughty Dog", genre:"اکشن-ماجراجویی",
      metacritic:96, opencritic:96,
      desc:"ماجراجویی نیت دریک برای یافتن گنج شامبالا.",
      why:"صحنه‌های اکشن سینمایی و روایتی که بازی‌ها را به سطح فیلم‌های هالیوودی نزدیک کرد.",
      rivals:[
        { title:"Batman: Arkham Asylum", awards:55, metacritic:91 },
        { title:"Call of Duty: Modern Warfare 2", awards:42, metacritic:94 },
        { title:"Assassin's Creed II", awards:32, metacritic:90 },
        { title:"Left 4 Dead 2", awards:22, metacritic:89 }
      ],
      awards_list:[
        { src:"BAFTA Games", n:4, note:"بهترین بازی سال" },
        { src:"سایر رسانه‌ها", n:111, note:"رسانه‌های بین‌المللی" }
      ]
    },
    { year:2008, title:"Fallout 3", awards:70, dev:"Bethesda", genre:"Action RPG",
      metacritic:93, opencritic:92,
      desc:"ماجراجویی در پایتخت ویران‌شده آمریکا پس از جنگ هسته‌ای.",
      why:"دنیای پس از آخرالزمان با آزادی عمل بی‌نظیر و انتخاب‌هایی که واقعاً وزن داشتند.",
      rivals:[
        { title:"Grand Theft Auto IV", awards:78, metacritic:98 },
        { title:"Gears of War 2", awards:32, metacritic:93 },
        { title:"Metal Gear Solid 4", awards:28, metacritic:94 },
        { title:"Little Big Planet", awards:22, metacritic:95 }
      ],
      awards_list:[
        { src:"BAFTA Games", n:2, note:"بهترین بازی" },
        { src:"سایر رسانه‌ها", n:68, note:"رسانه‌های مختلف" }
      ]
    },
    { year:2007, title:"BioShock", awards:60, dev:"2K Games", genre:"FPS روایی",
      metacritic:96, opencritic:95,
      desc:"ورود به شهر زیرآبی Rapture و مواجهه با اندرو رایان.",
      why:"روایت فلسفی بی‌نظیر، فضاسازی آرت‌دکو و پیچشی که به یکی از مشهورترین لحظات تاریخ بازی‌ها تبدیل شد.",
      rivals:[
        { title:"Mass Effect", awards:42, metacritic:91 },
        { title:"Call of Duty 4: Modern Warfare", awards:38, metacritic:94 },
        { title:"Assassin's Creed", awards:22, metacritic:81 },
        { title:"Halo 3", awards:18, metacritic:94 }
      ],
      awards_list:[
        { src:"BAFTA Games", n:3, note:"بهترین بازی سال" },
        { src:"سایر رسانه‌ها", n:57, note:"رسانه‌های بین‌المللی" }
      ]
    },
    { year:2006, title:"The Elder Scrolls IV: Oblivion", awards:55, dev:"Bethesda", genre:"Action RPG",
      metacritic:94, opencritic:93,
      desc:"ماجراجویی در سرزمین سیرودیل برای بستن دروازه‌های Oblivion.",
      why:"دنیای باز باورنکردنی برای زمان خودش و آزادی عملی که بازیکن را در دنیا غرق می‌کرد.",
      rivals:[
        { title:"Gears of War", awards:42, metacritic:94 },
        { title:"Wii Sports", awards:22, metacritic:76 },
        { title:"Final Fantasy XII", awards:18, metacritic:92 },
        { title:"Okami", awards:15, metacritic:93 }
      ],
      awards_list:[
        { src:"سایر رسانه‌ها", n:55, note:"رسانه‌های مختلف" }
      ]
    },
    { year:2005, title:"Resident Evil 4", awards:50, dev:"Capcom", genre:"Survival Horror",
      metacritic:96, opencritic:95,
      desc:"لیون کندی در ماموریتی برای نجات دختر رئیس‌جمهور از یک فرقه مرموز.",
      why:"بازتعریف ژانر وحشت و اکشن با دوربین پشت شانه و ریتم بی‌نقص.",
      rivals:[
        { title:"God of War", awards:42, metacritic:94 },
        { title:"Shadow of the Colossus", awards:25, metacritic:91 },
        { title:"Call of Duty 2", awards:18, metacritic:89 },
        { title:"F.E.A.R.", awards:12, metacritic:88 }
      ],
      awards_list:[
        { src:"سایر رسانه‌ها", n:50, note:"رسانه‌های بین‌المللی" }
      ]
    },
    { year:2004, title:"Half-Life 2", awards:45, dev:"Valve", genre:"FPS",
      metacritic:96, opencritic:95,
      desc:"بازگشت گوردون فریمن برای مبارزه با امپراتوری Combine.",
      why:"انقلاب در فیزیک بازی، روایت بدون کات‌سین و طراحی مرحله بی‌نظیر.",
      rivals:[
        { title:"Grand Theft Auto: San Andreas", awards:42, metacritic:95 },
        { title:"Metal Gear Solid 3", awards:28, metacritic:91 },
        { title:"Halo 2", awards:22, metacritic:95 },
        { title:"World of Warcraft", awards:18, metacritic:93 }
      ],
      awards_list:[
        { src:"سایر رسانه‌ها", n:45, note:"رسانه‌های مختلف" }
      ]
    },
    { year:2003, title:"Star Wars: Knights of the Old Republic", awards:40, dev:"BioWare", genre:"RPG",
      metacritic:94, opencritic:92,
      desc:"ماجراجویی RPG در دنیای جنگ ستارگان، 4000 سال قبل از فیلم‌ها.",
      why:"روایت عمیق، سیستم انتخاب بین روشنایی و تاریکی و یکی از بزرگترین پیچش‌های تاریخ بازی‌ها.",
      rivals:[
        { title:"Prince of Persia: The Sands of Time", awards:22, metacritic:92 },
        { title:"Halo: Combat Evolved", awards:18, metacritic:97 },
        { title:"Splinter Cell", awards:12, metacritic:93 },
        { title:"Max Payne 2", awards:8, metacritic:86 }
      ],
      awards_list:[
        { src:"سایر رسانه‌ها", n:40, note:"رسانه‌های بین‌المللی" }
      ]
    }
];

/* ---------- DOM ---------- */
function $(id) { return document.getElementById(id); }

var dom = {
    grid:        $('gamesGrid'),
    empty:       $('emptyState'),
    count:       $('resultCount'),
    search:      $('searchInput'),
    searchBox:   document.querySelector('.search-box'),
    favFilter:   $('favFilterBtn'),
    favTop:      $('favoritesBtn'),
    favBadge:    $('favBadge'),
    scrollBar:   $('scrollBar'),
    topBtn:      $('backToTop'),
    ovl:         $('modalOverlay'),
    ovlBd:       $('modalBackdrop'),
    modalBody:   $('modalContent'),
    modalClose:  $('modalClose'),
    themeBtn:    $('themeToggle'),
    themeVeil:   $('themeTransition'),
    header:      $('siteHeader'),
    toast:       $('toast'),
    randomBtn:   $('randomBtn'),
    settingsBtn: $('settingsBtn'),
    devBadge:    $('devBadge'),
    devTier:     $('devTier'),
    adminPanel:  $('adminPanel'),
    adminVeil:   $('adminVeil'),
    adminClose:  $('adminClose'),
    userPanel:   $('userPanel'),
    userVeil:    $('userVeil'),
    userClose:   $('userClose'),
    copyModal:   $('copyModal'),
    copyOverlay: $('copyModalOverlay'),
    copyClose:   $('copyModalClose')
};

/* ---------- Storage ---------- */
var DB = {
    get: function(k, fb) {
        try { var v = localStorage.getItem(k); return v === null ? fb : v; }
        catch (e) { return fb; }
    },
    set: function(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del: function(k) { try { localStorage.removeItem(k); } catch (e) {} },
    json: function(k, fb) {
        try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; }
        catch (e) { return fb; }
    }
};

/* ---------- State ---------- */
var S = {
    q: '',
    year: 'all',
    sort: 'year-desc',
    favOnly: false,
    favs: DB.json('goty.favs', []),
    theme: DB.get('goty.theme', 'dark'),
    accent: DB.get('goty.accent', 'cyan'),
    fontScale: +DB.get('goty.fontScale', 1),
    blur: +DB.get('goty.blur', 30),
    animSpeed: +DB.get('goty.animSpeed', 1),
    perfTier: DB.get('goty.perfTier', 'auto'),
    autoPerf: DB.get('goty.autoPerf', 'true') === 'true',
    fxBackground: DB.get('goty.fxBackground', 'true') === 'true',
    fxStretch: DB.get('goty.fxStretch', 'true') === 'true',
    fxCardBlur: DB.get('goty.fxCardBlur', 'true') === 'true',
    fxHeartParticles: DB.get('goty.fxHeartParticles', 'true') === 'true',
    fxBloom: DB.get('goty.fxBloom', 'true') === 'true',
    smoothScroll: DB.get('goty.smoothScroll', 'true') === 'true',
    showScrollBar: DB.get('goty.showScrollBar', 'true') === 'true'
};

var ACCENTS = {
    cyan:   { a: '#00f0ff', b: '#ff2bd6' },
    pink:   { a: '#ff2bd6', b: '#a855f7' },
    lime:   { a: '#7dff6b', b: '#00f0ff' },
    orange: { a: '#ff8b3d', b: '#ff2bd6' },
    purple: { a: '#a855f7', b: '#3b82f6' },
    warn:   { a: '#ffd93d', b: '#ff8b3d' }
};

var TIERS = ['ultra-low', 'low', 'mid-low', 'mid', 'high', 'ultra'];

/* =========================================
   DEVICE DETECTION
   ========================================= */
function detectGPU() {
    try {
        var canvas = document.createElement('canvas');
        var gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return { renderer: 'none', vendor: 'none' };
        var dbg = gl.getExtension('WEBGL_debug_renderer_info');
        return {
            renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : 'unknown',
            vendor: dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL) : 'unknown'
        };
    } catch (e) { return { renderer: 'unknown', vendor: 'unknown' }; }
}

function analyzeGPU(gpu) {
    var r = (gpu.renderer || '').toLowerCase();
    if (r.indexOf('intel') > -1 && (r.indexOf('hd graphics') > -1 || r.indexOf('uhd graphics') > -1 || r.indexOf('iris') > -1)) return -2;
    if (r.indexOf('intel') > -1) return -1;
    if (r.indexOf('apple m') > -1) return 3;
    if (r.indexOf('rtx 4') > -1 || r.indexOf('rtx 3') > -1) return 4;
    if (r.indexOf('rtx') > -1) return 3;
    if (r.indexOf('gtx 16') > -1 || r.indexOf('gtx 10') > -1) return 2;
    if (r.indexOf('radeon rx 7') > -1 || r.indexOf('radeon rx 6') > -1) return 3;
    if (r.indexOf('radeon') > -1) return 1;
    if (r.indexOf('adreno 7') > -1 || r.indexOf('adreno 6') > -1) return 1;
    if (r.indexOf('mali-g7') > -1 || r.indexOf('mali-g8') > -1) return 1;
    if (r.indexOf('mali') > -1 || r.indexOf('adreno') > -1) return -1;
    if (r.indexOf('powervr') > -1) return -2;
    if (r.indexOf('swiftshader') > -1 || r.indexOf('llvmpipe') > -1) return -4;
    return 0;
}

function analyzeScreen() {
    var w = screen.width, h = screen.height;
    var dpr = window.devicePixelRatio || 1;
    var pixels = w * h * dpr;
    if (pixels > 3840 * 2160) return 3;
    if (pixels > 2560 * 1440) return 2;
    if (pixels > 1920 * 1080) return 1;
    if (pixels > 1280 * 720)  return 0;
    return -1;
}

function detectTier() {
    var score = 0;
    var cores = navigator.hardwareConcurrency || 2;
    var ram = navigator.deviceMemory || 4;
    var isTouch = matchMedia('(hover: none)').matches || navigator.maxTouchPoints > 1;
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var gpu = detectGPU();
    var gpuScore = analyzeGPU(gpu);
    var scrScore = analyzeScreen();

    if (cores >= 12) score += 4;
    else if (cores >= 8) score += 3;
    else if (cores >= 6) score += 2;
    else if (cores >= 4) score += 1;
    else if (cores <= 2) score -= 1;

    if (ram >= 16) score += 4;
    else if (ram >= 8) score += 3;
    else if (ram >= 4) score += 2;
    else if (ram >= 2) score += 1;
    else score -= 1;

    score += gpuScore;
    score += scrScore;

    if (isTouch) score -= 1;
    else score += 1;

    if (reduce) score -= 4;

    if (navigator.connection && navigator.connection.saveData) score -= 2;

    if (navigator.connection) {
        var et = navigator.connection.effectiveType;
        if (et === 'slow-2g' || et === '2g') score -= 2;
        else if (et === '3g') score -= 1;
    }

    var tier;
    if (score <= -4) tier = 'ultra-low';
    else if (score <= 0) tier = 'low';
    else if (score <= 3) tier = 'mid-low';
    else if (score <= 6) tier = 'mid';
    else if (score <= 10) tier = 'high';
    else tier = 'ultra';

    return {
        tier: tier, score: score, cores: cores, ram: ram,
        isTouch: isTouch, reduce: reduce,
        gpu: gpu.renderer, gpuVendor: gpu.vendor, gpuScore: gpuScore,
        screenScore: scrScore, width: screen.width, height: screen.height,
        dpr: window.devicePixelRatio || 1, ua: navigator.userAgent
    };
}

function benchmarkFPS(duration) {
    return new Promise(function(resolve) {
        var frames = 0;
        var start = performance.now();
        function loop() {
            frames++;
            if (performance.now() - start < duration) requestAnimationFrame(loop);
            else resolve(Math.round(frames / (duration / 1000)));
        }
        requestAnimationFrame(loop);
    });
}

var deviceInfo = null;
var measuredFPS = 0;

function applyTier(tier) {
    document.documentElement.dataset.perf = tier;
    if (dom.devTier) dom.devTier.textContent = tier.toUpperCase();
    if (dom.devBadge) dom.devBadge.dataset.tier = tier;
}

function initPerf() {
    deviceInfo = detectTier();

    if (deviceInfo.isTouch) document.documentElement.classList.add('is-touch');

    var tier;
    if (S.autoPerf) tier = deviceInfo.tier;
    else tier = S.perfTier === 'auto' ? deviceInfo.tier : S.perfTier;
    applyTier(tier);

    setTimeout(function() {
        benchmarkFPS(1200).then(function(fps) {
            measuredFPS = fps;
            if (S.autoPerf && fps < 30 && deviceInfo.tier !== 'ultra-low') {
                var idx = TIERS.indexOf(deviceInfo.tier);
                if (idx > 0) {
                    deviceInfo.tier = TIERS[idx - 1];
                    applyTier(deviceInfo.tier);
                }
            }
        });
    }, 2000);
}

/* =========================================
   APPLY USER SETTINGS
   ========================================= */
function applySettings() {
    var r = document.documentElement;
    var acc = ACCENTS[S.accent] || ACCENTS.cyan;

    r.style.setProperty('--accent', acc.a);
    r.style.setProperty('--accent2', acc.b);
    r.style.setProperty('--font-scale', S.fontScale);
    r.style.setProperty('--blur-strength', S.blur + 'px');
    r.style.setProperty('--anim-speed', S.animSpeed);

    var theme = S.theme;
    if (theme === 'auto') {
        var h = new Date().getHours();
        theme = (h >= 7 && h < 19) ? 'light' : 'dark';
    }
    r.classList.toggle('light-theme', theme === 'light');
    if (dom.themeBtn) {
        dom.themeBtn.querySelector('.theme-icon').textContent = theme === 'light' ? '☀️' : '🌙';
    }

    var fx = document.querySelector('.fx');
    if (fx) fx.style.display = S.fxBackground ? '' : 'none';

    if (dom.scrollBar) dom.scrollBar.style.display = S.showScrollBar ? '' : 'none';

    r.classList.toggle('no-stretch', !S.fxStretch);
    r.classList.toggle('no-card-blur', !S.fxCardBlur);
    r.classList.toggle('no-heart-particles', !S.fxHeartParticles);
    r.classList.toggle('no-bloom', !S.fxBloom);
}

/* =========================================
   STRETCH EFFECT
   ========================================= */
var Stretch = (function() {
    var DAMP = 0.35, MAX = 1.6;
    var BACK = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
    var sels = ['.card-fav', '.icon-btn', '.pill-btn', '.act-btn', '.dd-trigger', '.year-cell', '.dev-badge', '.tile', '.swatch', '.admin-btn'];

    function bind(el) {
        if (el._stretch) return;
        el._stretch = true;
        el.classList.add('stretch');

        var sx = 0, sy = 0, pid = null, drag = false, raf = null;

        function down(e) {
            if (el.disabled || pid !== null) return;
            if (!S.fxStretch) return;
            var tier = document.documentElement.dataset.perf;
            if (tier === 'ultra-low' || tier === 'low') return;
            pid = e.pointerId;
            sx = e.clientX;
            sy = e.clientY;
            drag = true;
            el.classList.add('dragging');
            el.setPointerCapture(pid);
            el.style.transition = 'none';
        }

        function move(e) {
            if (!drag || e.pointerId !== pid) return;
            var dx = e.clientX - sx, dy = e.clientY - sy;
            function k(v) { return v * DAMP / (1 + Math.abs(v) * 0.008); }
            var rx = k(dx), ry = k(dy);
            var stX = 1 + Math.abs(rx) / 400, stY = 1 + Math.abs(ry) / 400;
            var sq = 1 - Math.min(Math.abs(rx + ry) / 1200, 0.15);
            var fx2 = Math.min(stX, MAX) * sq, fy = Math.min(stY, MAX) * sq;
            var rec = el.getBoundingClientRect();
            el.style.setProperty('--gx', ((e.clientX - rec.left) / rec.width * 100) + '%');
            el.style.setProperty('--gy', ((e.clientY - rec.top) / rec.height * 100) + '%');
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(function() {
                el.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0) scale(' + fx2 + ',' + fy + ')';
            });
        }

        function up(e) {
            if (!drag || e.pointerId !== pid) return;
            drag = false;
            el.classList.remove('dragging');
            if (raf) cancelAnimationFrame(raf);
            el.style.transition = 'transform .7s ' + BACK;
            el.style.transform = 'translate3d(0,0,0) scale(1,1)';
            setTimeout(function() {
                el.style.transition = '';
                el.style.transform = '';
                el.style.removeProperty('--gx');
                el.style.removeProperty('--gy');
            }, 700);
            try { el.releasePointerCapture(pid); } catch (err) {}
            pid = null;
        }

        el.addEventListener('pointerdown', down);
        el.addEventListener('pointermove', move);
        el.addEventListener('pointerup', up);
        el.addEventListener('pointercancel', up);
        el.addEventListener('lostpointercapture', up);
    }

    function scan() {
        sels.forEach(function(s) {
            document.querySelectorAll(s).forEach(bind);
        });
    }

    function watch() {
        new MutationObserver(function() {
            sels.forEach(function(s) {
                document.querySelectorAll(s + ':not(.stretch)').forEach(bind);
            });
        }).observe(document.body, { childList: true, subtree: true });
    }

    return { scan: scan, watch: watch };
})();

/* ---------- Helpers ---------- */
function esc(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
}
function scoreCls(n) {
    if (n >= 90) return 's-green';
    if (n >= 80) return 's-yellow';
    if (n >= 70) return 's-orange';
    return 's-red';
}

var toastT;
function toast(msg) {
    dom.toast.textContent = msg;
    dom.toast.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function() { dom.toast.classList.remove('show'); }, 2200);
}

function isFav(g) { return S.favs.indexOf(g.year) > -1; }

function syncBadge() {
    var n = S.favs.length;
    dom.favBadge.textContent = n;
    dom.favBadge.classList.toggle('show', n > 0);
}

/* ---------- Fav ---------- */
function toggleFav(g, srcEl) {
    var i = S.favs.indexOf(g.year);
    var was = i > -1;
    if (was) S.favs.splice(i, 1);
    else S.favs.push(g.year);
    DB.set('goty.favs', JSON.stringify(S.favs));
    syncBadge();

    if (S.favOnly && was && srcEl) {
        var c = srcEl.closest('.card');
        if (c) { c.classList.add('removing'); setTimeout(render, 680); return; }
    }
    if (S.favOnly) render();
}

function favPop(btn) {
    btn.classList.remove('tapped');
    void btn.offsetWidth;
    btn.classList.add('tapped');
    setTimeout(function() { btn.classList.remove('tapped'); }, 800);

    var rip = document.createElement('span');
    rip.className = 'fav-ripple';
    btn.appendChild(rip);
    setTimeout(function() { rip.remove(); }, 850);

    if (!S.fxHeartParticles) return;
    var tier = document.documentElement.dataset.perf;
    var n = 6;
    if (tier === 'ultra-low' || tier === 'low') n = 0;
    else if (tier === 'mid-low') n = 2;
    else if (tier === 'mid') n = 4;
    else if (tier === 'ultra') n = 10;

    for (var i = 0; i < n; i++) {
        var p = document.createElement('span');
        var a = (Math.PI * 2 * i) / n;
        var d = 26 + Math.random() * 14;
        p.style.cssText = 'position:absolute;top:50%;left:50%;width:5px;height:5px;border-radius:50%;background:' + (i % 2 ? '#ff2bd6' : '#00f0ff') + ';pointer-events:none;box-shadow:0 0 8px currentColor;z-index:2;--tx:' + (Math.cos(a) * d) + 'px;--ty:' + (Math.sin(a) * d) + 'px;animation:favParticle .7s cubic-bezier(.16,1,.3,1) forwards;';
        btn.appendChild(p);
        setTimeout(function(el) { return function() { el.remove(); }; }(p), 750);
    }
}

/* ---------- Dropdowns ---------- */
var ddCfg = {
    year: {
        opts: [],
        val: 'all',
        onPick: function(v) { S.year = v; render(); }
    },
    sort: {
        opts: [
            { v: 'year-desc', t: 'جدیدترین' },
            { v: 'year-asc', t: 'قدیمی‌ترین' },
            { v: 'awards-desc', t: 'بیشترین جایزه' },
            { v: 'awards-asc', t: 'کمترین جایزه' },
            { v: 'metacritic-desc', t: 'بالاترین متاکریتیک' }
        ],
        val: 'year-desc',
        onPick: function(v) { S.sort = v; render(); }
    }
};

function initDD() {
    var years = [];
    games.forEach(function(g) { if (years.indexOf(g.year) === -1) years.push(g.year); });
    years.sort(function(a, b) { return b - a; });

    ddCfg.year.opts = [{ v: 'all', t: 'همه سال‌ها' }];
    years.forEach(function(y) { ddCfg.year.opts.push({ v: String(y), t: String(y) }); });

    document.querySelectorAll('.dropdown').forEach(function(dd) {
        var key = dd.dataset.dropdown;
        var trig = dd.querySelector('.dd-trigger');
        var menu = dd.querySelector('.dd-menu');
        var txt = dd.querySelector('.dd-text') || dd.querySelector('span');
        var cfg = ddCfg[key];

        function paint() {
            menu.innerHTML = '';
            cfg.opts.forEach(function(o, i) {
                var b = document.createElement('button');
                b.type = 'button';
                b.className = 'dd-option' + (o.v === cfg.val ? ' active' : '');
                b.setAttribute('role', 'option');
                b.style.setProperty('--i', i);
                b.textContent = o.t;
                b.addEventListener('click', function(e) {
                    e.stopPropagation();
                    cfg.val = o.v;
                    txt.textContent = o.t;
                    cfg.onPick(o.v);
                    paint();
                    closeDD(dd);
                });
                menu.appendChild(b);
            });
        }
        paint();
        var cur = cfg.opts.find(function(o) { return o.v === cfg.val; });
        if (cur) txt.textContent = cur.t;

        trig.addEventListener('click', function(e) {
            e.stopPropagation();
            var open = dd.classList.contains('open');
            closeAllDD();
            if (!open) {
                dd.classList.add('open');
                trig.classList.add('open');
                trig.setAttribute('aria-expanded', 'true');
                menu.classList.add('open');
            }
        });
    });
    document.addEventListener('click', closeAllDD);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeAllDD(); });
}

function closeDD(dd) {
    dd.classList.remove('open');
    dd.querySelector('.dd-trigger').classList.remove('open');
    dd.querySelector('.dd-trigger').setAttribute('aria-expanded', 'false');
    dd.querySelector('.dd-menu').classList.remove('open');
}
function closeAllDD() {
    document.querySelectorAll('.dropdown.open').forEach(closeDD);
}

/* ---------- Filter ---------- */
function getList() {
    var q = S.q.toLowerCase().trim();
    var out = games.filter(function(g) {
        if (S.year !== 'all' && g.year !== +S.year) return false;
        if (q && !(g.title.toLowerCase().indexOf(q) > -1 || g.dev.toLowerCase().indexOf(q) > -1 || g.genre.toLowerCase().indexOf(q) > -1)) return false;
        if (S.favOnly && !isFav(g)) return false;
        return true;
    });
    switch (S.sort) {
        case 'year-asc': out.sort(function(a, b) { return a.year - b.year; }); break;
        case 'awards-desc': out.sort(function(a, b) { return b.awards - a.awards; }); break;
        case 'awards-asc': out.sort(function(a, b) { return a.awards - b.awards; }); break;
        case 'metacritic-desc': out.sort(function(a, b) { return b.metacritic - a.metacritic; }); break;
        default: out.sort(function(a, b) { return b.year - a.year; });
    }
    return out;
}

/* ---------- Card ---------- */
function makeCard(g, i) {
    var c = document.createElement('article');
    c.className = 'card';
    c.setAttribute('role', 'listitem');
    c.dataset.year = g.year;
    c.style.animationDelay = (i * 40) + 'ms';

    var on = isFav(g);
    c.innerHTML =
        '<div class="card-top">' +
            '<span class="card-year">' + g.year + '</span>' +
            '<button class="card-fav ' + (on ? 'on' : '') + '" data-year="' + g.year + '" aria-label="علاقه‌مندی">&hearts;</button>' +
        '</div>' +
        '<h3 class="card-title">' + esc(g.title) + '</h3>' +
        '<div class="card-tags">' +
            '<span class="tag">' + esc(g.genre) + '</span>' +
            '<span class="tag">' + esc(g.dev) + '</span>' +
        '</div>' +
        '<div class="card-scores">' +
            '<div class="score"><span class="score-lbl">Metacritic</span><span class="score-num ' + scoreCls(g.metacritic) + '">' + g.metacritic + '</span></div>' +
            '<div class="score"><span class="score-lbl">OpenCritic</span><span class="score-num ' + scoreCls(g.opencritic) + '">' + g.opencritic + '</span></div>' +
        '</div>' +
        '<div class="card-awards">' +
            '<span class="award-icon">🏆</span>' +
            '<span><strong>' + g.awards + '</strong> جایزه</span>' +
        '</div>' +
        '<div class="card-hint">برای جزئیات کلیک کن</div>';

    c.addEventListener('click', function(e) {
        if (e.target.closest('.card-fav')) return;
        openModal(g);
    });

    var fb = c.querySelector('.card-fav');
    fb.addEventListener('click', function(e) {
        e.stopPropagation();
        favPop(fb);
        var before = isFav(g);
        toggleFav(g, fb);
        fb.classList.toggle('on', !before);
        toast(before ? '«' + g.title + '» از علاقه‌مندی حذف شد' : '«' + g.title + '» به علاقه‌مندی اضافه شد');
    });

    return c;
}

function render() {
    var list = getList();
    dom.grid.innerHTML = '';
    dom.count.textContent = list.length;
    if (!list.length) { dom.empty.hidden = false; return; }
    dom.empty.hidden = true;

    var frag = document.createDocumentFragment();
    list.forEach(function(g, i) { frag.appendChild(makeCard(g, i)); });
    dom.grid.appendChild(frag);
}

/* ---------- Modal ---------- */
var lastFocus = null;
var closing = false;

function openModal(g) {
    if (closing) return;
    lastFocus = document.activeElement;
    var on = isFav(g);

    var rivalsHTML = g.rivals.map(function(r, i) {
        var cls = i === 0 ? '' : 'r' + (i + 1);
        return '<div class="rival">' +
            '<div class="rival-rank ' + cls + '">' + (i + 2) + '</div>' +
            '<div class="rival-info">' +
                '<div class="rival-title">' + esc(r.title) + '</div>' +
                '<div class="rival-meta"><span>🏆 ' + r.awards + ' جایزه</span><span>⭐ متا ' + r.metacritic + '</span></div>' +
            '</div>' +
        '</div>';
    }).join('');

    var yearsHTML = games
        .filter(function(x) { return x.year !== g.year; })
        .sort(function(a, b) { return b.year - a.year; })
        .map(function(x) {
            return '<button class="year-cell" data-year="' + x.year + '">' +
                '<span class="year-num">' + x.year + '</span>' +
                '<span class="year-title">' + esc(x.title) + '</span>' +
            '</button>';
        }).join('');

    var awardsHTML = g.awards_list.map(function(a) {
        return '<div class="award-row">' +
            '<div class="award-info"><div class="award-src">' + esc(a.src) + '</div><div class="award-note">' + esc(a.note) + '</div></div>' +
            '<div class="award-cnt">' + a.n + ' جایزه</div>' +
        '</div>';
    }).join('');

    dom.modalBody.innerHTML =
        '<div class="modal-head">' +
            '<span class="modal-year">' + g.year + '</span>' +
            '<h2 class="modal-title grad-text">' + esc(g.title) + '</h2>' +
            '<div class="modal-tags"><span class="modal-tag">' + esc(g.genre) + '</span><span class="modal-tag">' + esc(g.dev) + '</span></div>' +
            '<div class="modal-scores">' +
                '<div class="score-box"><span class="score-box-lbl">METACRITIC</span><span class="score-box-num ' + scoreCls(g.metacritic) + '">' + g.metacritic + '</span></div>' +
                '<div class="score-box"><span class="score-box-lbl">OPENCRITIC</span><span class="score-box-num ' + scoreCls(g.opencritic) + '">' + g.opencritic + '</span></div>' +
                '<div class="score-box"><span class="score-box-lbl">جوایز</span><span class="score-box-num s-green">' + g.awards + '</span></div>' +
            '</div>' +
        '</div>' +
        '<div class="section"><h3 class="section-title">درباره بازی</h3><p class="section-text">' + esc(g.desc) + '</p></div>' +
        '<div class="section"><h3 class="section-title">چرا برنده شد؟</h3><div class="why-box">' + esc(g.why) + '</div></div>' +
        '<div class="section"><h3 class="section-title">تفکیک جوایز (' + g.awards + ' جایزه)</h3>' +
            '<div class="awards-list">' + awardsHTML + '</div>' +
        '</div>' +
        '<div class="section"><h3 class="section-title">رقبای اصلی در ' + g.year + '</h3><div class="rivals">' + rivalsHTML + '</div></div>' +
        '<div class="section"><h3 class="section-title">برندگان سایر سال‌ها</h3><div class="year-grid">' + yearsHTML + '</div></div>' +
        '<div class="modal-actions">' +
            '<button class="act-btn primary" id="mFav"><span>&hearts;</span><span>' + (on ? 'حذف از علاقه‌مندی' : 'افزودن به علاقه‌مندی') + '</span></button>' +
            '<button class="act-btn" id="mCopy"><span>🔗</span><span>کپی لینک</span></button>' +
        '</div>';

    dom.ovl.hidden = false;
    dom.ovl.classList.remove('closing');
    document.body.style.overflow = 'hidden';

    document.getElementById('mFav').addEventListener('click', function(e) {
        var before = isFav(g);
        toggleFav(g);
        e.currentTarget.querySelector('span:last-child').textContent = before ? 'افزودن به علاقه‌مندی' : 'حذف از علاقه‌مندی';
        render();
        toast(before ? 'از علاقه‌مندی حذف شد' : 'به علاقه‌مندی اضافه شد');
    });

    document.getElementById('mCopy').addEventListener('click', function() {
        var url = location.origin + location.pathname + '#' + g.year;
        var fb = function() {
            var ta = document.createElement('textarea');
            ta.value = url;
            ta.style.cssText = 'position:fixed;opacity:0;';
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); toast('لینک کپی شد'); }
            catch (e) { toast('کپی نشد'); }
            ta.remove();
        };
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(url).then(function() { toast('لینک کپی شد'); }).catch(fb);
        } else fb();
    });

    dom.modalBody.querySelectorAll('.year-cell').forEach(function(b) {
        b.addEventListener('click', function() {
            var y = +b.dataset.year;
            var x = games.find(function(t) { return t.year === y; });
            if (x) { dom.modalBody.scrollTop = 0; openModal(x); }
        });
    });

    setTimeout(function() { dom.modalClose.focus(); }, 100);
}

function closeModal() {
    if (closing) return;
    closing = true;
    dom.ovl.classList.add('closing');
    setTimeout(function() {
        dom.ovl.hidden = true;
        dom.ovl.classList.remove('closing');
        document.body.style.overflow = '';
        closing = false;
        if (lastFocus) lastFocus.focus();
    }, 350);
}

/* ---------- Theme toggle ---------- */
function flipTheme() {
    var cur = S.theme === 'auto'
        ? (document.documentElement.classList.contains('light-theme') ? 'light' : 'dark')
        : S.theme;
    var next = cur === 'dark' ? 'light' : 'dark';
    S.theme = next;
    DB.set('goty.theme', next);

    dom.themeVeil.classList.add('on');
    setTimeout(function() { applySettings(); }, 320);
    setTimeout(function() { dom.themeVeil.classList.remove('on'); }, 550);
    setTimeout(function() { toast(next === 'light' ? 'حالت روشن ☀️' : 'حالت تاریک 🌙'); }, 600);

    document.querySelectorAll('#uTheme .tile').forEach(function(t) {
        t.classList.toggle('on', t.dataset.theme === next);
    });
}

/* ---------- Counter ---------- */
function countUp(el) {
    var to = +el.dataset.count;
    var dur = 1600;
    var start = performance.now();
    function frame(now) {
        var p = Math.min((now - start) / dur, 1);
        var e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(to * e).toLocaleString('fa-IR');
        if (p < 1) requestAnimationFrame(frame);
        else el.textContent = to.toLocaleString('fa-IR');
    }
    requestAnimationFrame(frame);
}

/* =========================================
   COPYRIGHT MODAL
   ========================================= */
var Copyright = (function() {
    function open() {
        if (!dom.copyOverlay) return;
        dom.copyOverlay.hidden = false;
        requestAnimationFrame(function() { dom.copyOverlay.classList.add('on'); });
    }
    function close() {
        if (!dom.copyOverlay) return;
        dom.copyOverlay.classList.remove('on');
        setTimeout(function() { dom.copyOverlay.hidden = true; }, 350);
    }
    function bind() {
        document.querySelectorAll('[data-open-copyright]').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                open();
            });
        });
        if (dom.copyClose) dom.copyClose.addEventListener('click', close);
        if (dom.copyOverlay) dom.copyOverlay.addEventListener('click', function(e) {
            if (e.target === dom.copyOverlay) close();
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && dom.copyOverlay && !dom.copyOverlay.hidden) close();
        });
    }
    return { bind: bind, open: open, close: close };
})();

/* =========================================
   PANEL MANAGER
   ========================================= */
var Panel = (function() {
    function open(which) {
        if (which === 'admin') {
            dom.adminPanel.classList.add('on');
            dom.adminVeil.classList.add('on');
            paintAdmin();
        } else {
            dom.userPanel.classList.add('on');
            dom.userVeil.classList.add('on');
            paintUser();
        }
        setTimeout(function() {
            var target = which === 'admin' ? dom.adminPanel : dom.userPanel;
            var btn = target.querySelector('.panel-close');
            if (btn) btn.focus();
        }, 200);
    }

    function close(which) {
        if (which === 'admin') {
            dom.adminPanel.classList.remove('on');
            dom.adminVeil.classList.remove('on');
        } else {
            dom.userPanel.classList.remove('on');
            dom.userVeil.classList.remove('on');
        }
    }

    function switchTab(panel, name) {
        var root = panel === 'admin' ? dom.adminPanel : dom.userPanel;
        root.querySelectorAll('.p-tab').forEach(function(t) { t.classList.toggle('on', t.dataset.tab === name); });
        root.querySelectorAll('.pane').forEach(function(p) { p.classList.toggle('on', p.dataset.pane === name); });
    }

    function paintAdmin() {
        var tot = games.length;
        var sum = games.reduce(function(s, g) { return s + g.awards; }, 0);
        var avg = Math.round(games.reduce(function(s, g) { return s + g.metacritic; }, 0) / tot);
        $('aStatGames').textContent = tot.toLocaleString('fa-IR');
        $('aStatAwards').textContent = sum.toLocaleString('fa-IR');
        $('aStatAvg').textContent = avg.toLocaleString('fa-IR');
        $('aStatFavs').textContent = S.favs.length.toLocaleString('fa-IR');

        if (deviceInfo) {
            var gpuShort = (deviceInfo.gpu || '').slice(0, 60);
            $('aDevInfo').innerHTML =
                'Tier: ' + deviceInfo.tier.toUpperCase() + '<br>' +
                'Score: ' + deviceInfo.score + '<br>' +
                'Cores: ' + deviceInfo.cores + '<br>' +
                'RAM: ' + deviceInfo.ram + ' GB<br>' +
                'GPU score: ' + deviceInfo.gpuScore + '<br>' +
                'Screen score: ' + deviceInfo.screenScore + '<br>' +
                'Touch: ' + (deviceInfo.isTouch ? 'yes' : 'no') + '<br>' +
                'FPS: ' + (measuredFPS || '...') + '<br>' +
                'Screen: ' + deviceInfo.width + '×' + deviceInfo.height + ' @' + deviceInfo.dpr + 'x<br>' +
                'GPU: ' + gpuShort;
        }

        var cur = document.documentElement.dataset.perf;
        document.querySelectorAll('#aPerfTiles .tile').forEach(function(t) { t.classList.toggle('on', t.dataset.tier === cur); });
        $('aAutoPerf').classList.toggle('on', S.autoPerf);
        $('aAutoPerf').setAttribute('aria-checked', S.autoPerf);

        paintAdminList();
    }

    function paintAdminList() {
        var box = $('aList');
        var q = ($('aSearch').value || '').toLowerCase().trim();
        var list = games.filter(function(g) {
            return !q || g.title.toLowerCase().indexOf(q) > -1 || String(g.year).indexOf(q) > -1;
        }).sort(function(a, b) { return b.year - a.year; });

        if (!list.length) {
            box.innerHTML = '<div class="admin-hint">چیزی پیدا نشد.</div>';
            return;
        }
        box.innerHTML = '';
        list.forEach(function(g) {
            var row = document.createElement('div');
            row.className = 'admin-item';
            row.innerHTML =
                '<span class="admin-item-year">' + g.year + '</span>' +
                '<span class="admin-item-name">' + esc(g.title) + '</span>' +
                '<span class="admin-item-score ' + scoreCls(g.metacritic) + '">' + g.metacritic + '</span>' +
                '<button class="admin-item-btn" data-a="edit" title="ویرایش">✎</button>' +
                '<button class="admin-item-btn del" data-a="del" title="حذف">✕</button>';

            row.querySelector('[data-a="edit"]').addEventListener('click', function() { loadForm(g); });
            row.querySelector('[data-a="del"]').addEventListener('click', function() {
                if (!confirm('«' + g.title + '» حذف بشه؟')) return;
                var i = games.indexOf(g);
                if (i > -1) games.splice(i, 1);
                paintAdminList();
                paintAdmin();
                render();
                toast('حذف شد');
            });
            box.appendChild(row);
        });
    }

    function paintUser() {
        document.querySelectorAll('#uColors .swatch').forEach(function(s) { s.classList.toggle('on', s.dataset.color === S.accent); });
        document.querySelectorAll('#uTheme .tile').forEach(function(t) { t.classList.toggle('on', t.dataset.theme === S.theme); });
        $('uFont').value = Math.round(S.fontScale * 100);
        $('uFontVal').textContent = Math.round(S.fontScale * 100) + '%';
        $('uBlur').value = S.blur;
        $('uBlurVal').textContent = S.blur + 'px';
        $('uAnim').value = Math.round(S.animSpeed * 100);
        $('uAnimVal').textContent = S.animSpeed.toFixed(1) + 'x';

        var cur = document.documentElement.dataset.perf;
        document.querySelectorAll('#uPerfTiles .tile').forEach(function(t) { t.classList.toggle('on', t.dataset.tier === cur); });
        $('uFXBackground').classList.toggle('on', S.fxBackground);
        $('uFXStretch').classList.toggle('on', S.fxStretch);
        $('uFXCardBlur').classList.toggle('on', S.fxCardBlur);
        $('uFXHeartParticles').classList.toggle('on', S.fxHeartParticles);
        $('uFXBloom').classList.toggle('on', S.fxBloom);
        $('uSmooth').classList.toggle('on', S.smoothScroll);
        $('uScrollBar').classList.toggle('on', S.showScrollBar);
    }

    function loadForm(g) {
        var f = $('aForm');
        f.title.value = g ? g.title : '';
        f.year.value = g ? g.year : '';
        f.dev.value = g ? g.dev : '';
        f.genre.value = g ? g.genre : '';
        f.awards.value = g ? g.awards : '';
        f.metacritic.value = g ? g.metacritic : '';
        f.opencritic.value = g ? g.opencritic : '';
        f.desc.value = g ? g.desc : '';
        f.why.value = g ? g.why : '';
        $('aFormTitle').textContent = g ? 'ویرایش: ' + g.title : 'افزودن بازی جدید';
        switchTab('admin', 'edit');
    }

    function clearForm() {
        $('aForm').reset();
        $('aFormTitle').textContent = 'افزودن بازی جدید';
    }

    function saveForm(e) {
        e.preventDefault();
        var f = e.target;
        var year = +f.year.value;
        if (!f.title.value.trim() || !year) { toast('عنوان و سال الزامیست'); return; }
        var data = {
            year: year,
            title: f.title.value.trim(),
            dev: f.dev.value.trim() || '—',
            genre: f.genre.value.trim() || '—',
            awards: +f.awards.value || 0,
            metacritic: +f.metacritic.value || 0,
            opencritic: +f.opencritic.value || 0,
            desc: f.desc.value.trim() || '',
            why: f.why.value.trim() || '',
            rivals: [],
            awards_list: []
        };
        var i = games.findIndex(function(g) { return g.year === year; });
        if (i > -1) {
            data.rivals = games[i].rivals || [];
            data.awards_list = games[i].awards_list || [];
            games[i] = data;
            toast('ذخیره شد');
        } else {
            games.push(data);
            games.sort(function(a, b) { return b.year - a.year; });
            toast('بازی اضافه شد');
        }
        paintAdmin();
        render();
        clearForm();
        switchTab('admin', 'list');
    }

    function exportData() {
        var payload = {
            v: 3,
            exported: new Date().toISOString(),
            settings: {
                theme: S.theme, accent: S.accent, fontScale: S.fontScale, blur: S.blur,
                animSpeed: S.animSpeed, perfTier: S.perfTier, autoPerf: S.autoPerf,
                fxBackground: S.fxBackground, fxStretch: S.fxStretch, fxCardBlur: S.fxCardBlur,
                fxHeartParticles: S.fxHeartParticles, fxBloom: S.fxBloom,
                smoothScroll: S.smoothScroll, showScrollBar: S.showScrollBar
            },
            favorites: S.favs,
            games: games
        };
        var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'goty-backup-' + Date.now() + '.json';
        a.click();
        URL.revokeObjectURL(url);
        toast('خروجی گرفته شد');
    }

    function importData(file) {
        var r = new FileReader();
        r.onload = function() {
            try {
                var data = JSON.parse(r.result);
                if (!Array.isArray(data.games)) throw new Error('ساختار نامعتبر');
                games.length = 0;
                data.games.forEach(function(g) { games.push(g); });
                games.sort(function(a, b) { return b.year - a.year; });
                if (Array.isArray(data.favorites)) {
                    S.favs = data.favorites;
                    DB.set('goty.favs', JSON.stringify(S.favs));
                    syncBadge();
                }
                if (data.settings) {
                    Object.keys(data.settings).forEach(function(k) { S[k] = data.settings[k]; });
                }
                applySettings();
                paintAdmin();
                render();
                toast('بازیابی انجام شد');
            } catch (err) {
                console.error(err);
                toast('فایل نامعتبره');
            }
        };
        r.readAsText(file);
    }

    function resetAll() {
        if (!confirm('همه چیز به حالت اول برگرده؟')) return;
        Object.keys(localStorage).filter(function(k) { return k.indexOf('goty.') === 0; }).forEach(DB.del);
        location.reload();
    }

    function measureFPS() {
        var out = $('aFpsOut');
        out.textContent = 'در حال اندازه‌گیری...';
        var frames = 0;
        var start = performance.now();
        var dur = 2500;
        function loop() {
            frames++;
            if (performance.now() - start < dur) requestAnimationFrame(loop);
            else {
                var fps = Math.round(frames / (dur / 1000));
                var verdict = fps >= 55 ? 'عالی ✨' : fps >= 40 ? 'خوب ✅' : fps >= 25 ? 'قابل قبول ⚠️' : 'ضعیف ❌';
                out.innerHTML = 'FPS: <strong style="color:#00f0ff">' + fps + '</strong> — ' + verdict + '<br>' +
                    'Tier: ' + document.documentElement.dataset.perf + '<br>' +
                    'Frames: ' + frames + ' در ' + (dur / 1000) + ' ثانیه';
            }
        }
        requestAnimationFrame(loop);
    }

    function bind() {
        dom.adminVeil.addEventListener('click', function() { close('admin'); });
        dom.adminClose.addEventListener('click', function() { close('admin'); });
        dom.userVeil.addEventListener('click', function() { close('user'); });
        dom.userClose.addEventListener('click', function() { close('user'); });

        dom.adminPanel.querySelectorAll('.p-tab').forEach(function(t) {
            t.addEventListener('click', function() { switchTab('admin', t.dataset.tab); });
        });
        dom.userPanel.querySelectorAll('.p-tab').forEach(function(t) {
            t.addEventListener('click', function() { switchTab('user', t.dataset.tab); });
        });

        $('aForm').addEventListener('submit', saveForm);
        $('aClear').addEventListener('click', clearForm);
        $('aNew').addEventListener('click', function() { clearForm(); switchTab('admin', 'edit'); });
        $('aSearch').addEventListener('input', paintAdminList);

        document.querySelectorAll('#aPerfTiles .tile').forEach(function(t) {
            t.addEventListener('click', function() {
                var tier = t.dataset.tier;
                S.perfTier = tier;
                S.autoPerf = false;
                DB.set('goty.perfTier', tier);
                DB.set('goty.autoPerf', 'false');
                applyTier(tier);
                paintAdmin();
                toast('سطح: ' + tier.toUpperCase());
            });
        });

        var autoSw = $('aAutoPerf');
        autoSw.addEventListener('click', function() {
            S.autoPerf = !S.autoPerf;
            DB.set('goty.autoPerf', S.autoPerf);
            initPerf();
            paintAdmin();
            toast(S.autoPerf ? 'تشخیص خودکار روشن' : 'تشخیص خودکار خاموش');
        });

        $('aMeasure').addEventListener('click', measureFPS);
        $('aExport').addEventListener('click', exportData);

        var impIn = $('aImportInput');
        $('aImport').addEventListener('click', function() { impIn.click(); });
        impIn.addEventListener('change', function(e) {
            var f = e.target.files[0];
            if (f) importData(f);
            impIn.value = '';
        });
        $('aReset').addEventListener('click', resetAll);

        document.querySelectorAll('#uColors .swatch').forEach(function(s) {
            s.addEventListener('click', function() {
                S.accent = s.dataset.color;
                DB.set('goty.accent', S.accent);
                applySettings();
                paintUser();
            });
        });

        document.querySelectorAll('#uTheme .tile').forEach(function(t) {
            t.addEventListener('click', function() {
                S.theme = t.dataset.theme;
                DB.set('goty.theme', S.theme);
                applySettings();
                paintUser();
            });
        });

        var fontSl = $('uFont');
        fontSl.addEventListener('input', function(e) {
            S.fontScale = +e.target.value / 100;
            $('uFontVal').textContent = e.target.value + '%';
            document.documentElement.style.setProperty('--font-scale', S.fontScale);
        });
        fontSl.addEventListener('change', function() { DB.set('goty.fontScale', S.fontScale); });

        var blurSl = $('uBlur');
        blurSl.addEventListener('input', function(e) {
            S.blur = +e.target.value;
            $('uBlurVal').textContent = S.blur + 'px';
            document.documentElement.style.setProperty('--blur-strength', S.blur + 'px');
        });
        blurSl.addEventListener('change', function() { DB.set('goty.blur', S.blur); });

        var animSl = $('uAnim');
        animSl.addEventListener('input', function(e) {
            S.animSpeed = +e.target.value / 100;
            $('uAnimVal').textContent = S.animSpeed.toFixed(1) + 'x';
            document.documentElement.style.setProperty('--anim-speed', S.animSpeed);
        });
        animSl.addEventListener('change', function() { DB.set('goty.animSpeed', S.animSpeed); });

        document.querySelectorAll('#uPerfTiles .tile').forEach(function(t) {
            t.addEventListener('click', function() {
                var tier = t.dataset.tier;
                S.perfTier = tier;
                S.autoPerf = false;
                DB.set('goty.perfTier', tier);
                DB.set('goty.autoPerf', 'false');
                applyTier(tier);
                paintUser();
                toast('سطح: ' + tier.toUpperCase());
            });
        });

        function mkToggle(id, key, cb) {
            var el = $(id);
            el.addEventListener('click', function() {
                S[key] = !S[key];
                DB.set('goty.' + key, S[key]);
                el.classList.toggle('on', S[key]);
                el.setAttribute('aria-checked', S[key]);
                if (cb) cb();
            });
        }
        mkToggle('uFXBackground', 'fxBackground', applySettings);
        mkToggle('uFXStretch', 'fxStretch', applySettings);
        mkToggle('uFXCardBlur', 'fxCardBlur', applySettings);
        mkToggle('uFXHeartParticles', 'fxHeartParticles', applySettings);
        mkToggle('uFXBloom', 'fxBloom', applySettings);
        mkToggle('uSmooth', 'smoothScroll', function() {
            document.documentElement.style.scrollBehavior = S.smoothScroll ? 'smooth' : 'auto';
        });
        mkToggle('uScrollBar', 'showScrollBar', applySettings);

        $('uResetSettings').addEventListener('click', function() {
            if (!confirm('تنظیمات به حالت اول برگرده؟')) return;
            S.accent = 'cyan';
            S.fontScale = 1;
            S.blur = 30;
            S.animSpeed = 1;
            S.theme = 'dark';
            S.autoPerf = true;
            S.perfTier = 'auto';
            S.fxBackground = true;
            S.fxStretch = true;
            S.fxCardBlur = true;
            S.fxHeartParticles = true;
            S.fxBloom = true;
            S.smoothScroll = true;
            S.showScrollBar = true;
            ['accent','fontScale','blur','animSpeed','theme','autoPerf','perfTier',
             'fxBackground','fxStretch','fxCardBlur','fxHeartParticles','fxBloom',
             'smoothScroll','showScrollBar'].forEach(function(k) {
                DB.set('goty.' + k, k === 'perfTier' ? 'auto' : (typeof S[k] === 'boolean' ? String(S[k]) : S[k]));
            });
            applySettings();
            initPerf();
            paintUser();
            toast('تنظیمات بازنشانی شد');
        });

        $('uClearCache').addEventListener('click', function() {
            if (!confirm('حافظه پاک بشه؟ علاقه‌مندی‌ها و تنظیمات از بین می‌رن!')) return;
            Object.keys(localStorage).filter(function(k) { return k.indexOf('goty.') === 0; }).forEach(DB.del);
            location.reload();
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (dom.adminPanel.classList.contains('on')) close('admin');
                else if (dom.userPanel.classList.contains('on')) close('user');
            }
        });
    }

    return { bind: bind, open: open, close: close };
})();

/* =========================================
   MAIN EVENTS
   ========================================= */
function bindMain() {
    dom.search.addEventListener('focus', function() { dom.searchBox.classList.add('open'); });
    dom.search.addEventListener('blur', function() {
        setTimeout(function() { dom.searchBox.classList.remove('open'); }, 150);
    });

    var sT;
    dom.search.addEventListener('input', function(e) {
        clearTimeout(sT);
        var v = e.target.value;
        if (v.trim() === '@admin' || v.trim() === '@مدیر') {
            dom.search.value = '';
            dom.search.blur();
            setTimeout(function() { Panel.open('admin'); }, 200);
            return;
        }
        sT = setTimeout(function() { S.q = v; render(); }, 150);
    });

    dom.searchBox.addEventListener('mousemove', function(e) {
        var tier = document.documentElement.dataset.perf;
        if (tier === 'ultra-low' || tier === 'low') return;
        var r = dom.searchBox.getBoundingClientRect();
        dom.searchBox.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        dom.searchBox.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });

    function flipFav() {
        S.favOnly = !S.favOnly;
        dom.favFilter.classList.toggle('on', S.favOnly);
        render();
    }
    dom.favFilter.addEventListener('click', flipFav);
    dom.favTop.addEventListener('click', function() {
        flipFav();
        if (S.favOnly) {
            var c = document.querySelector('.controls');
            if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    dom.modalClose.addEventListener('click', closeModal);
    dom.ovlBd.addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !dom.ovl.hidden) closeModal();
        if (e.key === '/' && document.activeElement !== dom.search && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            dom.search.focus();
        }
    });

    dom.topBtn.addEventListener('click', function() {
        dom.themeVeil.classList.add('on');
        setTimeout(function() { window.scrollTo({ top: 0, behavior: 'auto' }); }, 320);
        setTimeout(function() { dom.themeVeil.classList.remove('on'); }, 600);
    });

    var rafScroll = null;
    window.addEventListener('scroll', function() {
        if (rafScroll) return;
        rafScroll = requestAnimationFrame(function() {
            var y = scrollY;
            var tot = document.documentElement.scrollHeight - innerHeight;
            if (S.showScrollBar) dom.scrollBar.style.width = (y / tot * 100) + '%';
            dom.topBtn.classList.toggle('show', y > 500);
            dom.header.classList.toggle('stuck', y > 40);
            rafScroll = null;
        });
    }, { passive: true });

    dom.themeBtn.addEventListener('click', flipTheme);
    dom.settingsBtn.addEventListener('click', function() { Panel.open('user'); });

    dom.devBadge.addEventListener('click', function() {
        Panel.open('user');
        setTimeout(function() {
            dom.userPanel.querySelectorAll('.p-tab').forEach(function(t) { t.classList.toggle('on', t.dataset.tab === 'perf'); });
            dom.userPanel.querySelectorAll('.pane').forEach(function(p) { p.classList.toggle('on', p.dataset.pane === 'perf'); });
        }, 200);
    });

    dom.randomBtn.addEventListener('click', function() {
        var pool = getList();
        var p = pool.length ? pool : games;
        var g = p[Math.floor(Math.random() * p.length)];
        toast('🎲 ' + g.title + ' (' + g.year + ')');
        setTimeout(function() { openModal(g); }, 350);
    });

    document.addEventListener('visibilitychange', function() {
        var fx = document.querySelectorAll('.dance-floor, .beam, .orb, .brand-mark, .heart');
        fx.forEach(function(el) { el.style.animationPlayState = document.hidden ? 'paused' : 'running'; });
    });
}

/* =========================================
   BOOT
   ========================================= */
function boot() {
    initPerf();
    applySettings();
    initDD();
    syncBadge();
    render();
    Stretch.scan();
    Stretch.watch();
    Panel.bind();
    Copyright.bind();
    bindMain();

    document.documentElement.style.scrollBehavior = S.smoothScroll ? 'smooth' : 'auto';

    document.querySelectorAll('[data-count]').forEach(countUp);

    if (location.hash) {
        var y = +location.hash.slice(1);
        var g = games.find(function(t) { return t.year === y; });
        if (g) setTimeout(function() { openModal(g); }, 400);
    }

    setInterval(function() {
        if (S.autoPerf && deviceInfo) applyTier(deviceInfo.tier);
    }, 30000);

    console.log('%c🎮 GOTY Archive v3.1', 'color:#00f0ff;font-weight:bold;font-size:13px');
    console.log('%c⚙ admin → @admin  ·  settings → 🎨  ·  device → click badge', 'color:#a855f7;font-size:11px');
    console.log('%c© 2025 LLzi — All Rights Reserved', 'color:#ff2bd6;font-size:11px');
}

boot();