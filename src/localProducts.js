import headphoneImg1 from "../src/assets/sony-headphone.jpeg";
import headphoneImg2 from "../src/assets/noise-headphone.jpg";
import headphoneImg3 from "../src/assets/sennheiser.jpg";
import headphoneImg4 from "../src/assets/razer-headphone.jpg";
import headphoneImg5 from "../src/assets/philips.webp";
import headphoneImg6 from "../src/assets/brows-headphone.webp";
import headphoneImg7 from "../src/assets/apple-headphone.jpg";

import watchImg1 from "../src/assets/apple-watch.jpeg";
import watchImg2 from "../src/assets/Garmin-watch.webp";
import watchImg3 from "../src/assets/Huawei-watch.webp";
import watchImg4 from "../src/assets/google-watch.jpg";
import watchImg5 from "../src/assets/amazfit.webp";
import watchImg6 from "../src/assets/motorola-watch.jpg";

import speakerImg1 from "../src/assets/jbl-speaker.jpeg";
import speakerImg2 from "../src/assets/marshall.jpg";
import speakerImg3 from "../src/assets/zebronics-speaker.jpg";
import speakerImg4 from "../src/assets/soundcore.jpg";
import speakerImg5 from "../src/assets/Portronics.webp";
import speakerImg6 from "../src/assets/boat-speaker.jpg";

import mouseImg1 from "../src/assets/logitech-mouse.jpeg";
import mouseImg2 from "../src/assets/dell-mouse.jpg";
import mouseImg3 from "../src/assets/ant-mouse.jpg";
import mouseImg4 from "../src/assets/asus.jpg";
import mouseImg5 from "../src/assets/lenovo.jpg";
import mouseImg6 from "../src/assets/Redragon.jpg";

import consoleImg1 from "../src/assets/sony-console.jpg";
import consoleImg2 from "../src/assets/NewWorld Nintendo.jpg";
import consoleImg3 from "../src/assets/microsoft-console.webp";
import consoleImg4 from "../src/assets/valve-console.jpg";
import consoleImg5 from "../src/assets/anbernic.webp";
import consoleImg6 from "../src/assets/powkiddy.webp";


import monitorImg1 from "../src/assets/samsung-monitor.webp";
import monitorImg2 from "../src/assets/lg-montor.webp";
import monitorImg3 from "../src/assets/dell-monitor.webp";
import monitorImg4 from "../src/assets/asus-monitor.webp";
import monitorImg5 from "../src/assets/acer-monitor.webp";
import monitorImg6 from "../src/assets/benq-monitor.webp";

import printerImg1 from "../src/assets/hp-printer.webp";
import printerImg2 from "../src/assets/canon-printer.webp";
import printerImg3 from "../src/assets/epson-printer.webp";
import printerImg4 from "../src/assets/brother-printer.webp";
import printerImg5 from "../src/assets/hp-printer1.webp";
import printerImg6 from "../src/assets/canon-printer2.webp";


import tabletImg1 from "../src/assets/apple-tablet.webp";
import tabletImg2 from "../src/assets/samsung-tablet.webp";
import tabletImg3 from "../src/assets/oneplus-tablet.webp";
import tabletImg4 from "../src/assets/xiaomi.webp";
import tabletImg5 from "../src/assets/lenovo-tablet.webp";
import tabletImg6 from "../src/assets/google-tablet.webp";


import cameraImg1 from "../src/assets/cannon-camera.webp";
import cameraImg2 from "../src/assets/sony-camera.webp";
import cameraImg3 from "../src/assets/nikon-camera.webp";
import cameraImg4 from "../src/assets/pansonic-camera.webp";
import cameraImg5 from "../src/assets/fuji-camera.webp";
import cameraImg6 from "../src/assets/gopro-camera.webp";

import applianceImg1 from "../src/assets/robot-home.webp";
import applianceImg2 from "../src/assets/lg-home.webp";
import applianceImg3 from "../src/assets/kitchen-home.webp";
import applianceImg4 from "../src/assets/breville-home.webp";
import applianceImg5 from "../src/assets/philips-home.webp";
import applianceImg6 from "../src/assets/agaro-home.webp";
import applianceImg7 from "../src/assets/foodsaver-home.webp";
import applianceImg8 from "../src/assets/cosori-home.webp";
import applianceImg9 from "../src/assets/zojirushi-home.webp";
import applianceImg10 from "../src/assets/brita-home.webp";

















const localProducts = [
  //   -------------------Headphones-------------------

    {
      id: 1,
      title: "Sony Headphones",
      price: 29999,
      discount: 10,
      category: "Headphones",
      brand: "Sony",
      model: "WH-1000XM4",
      description:
        "Industry-leading noise cancellation and immersive sound experience.",
      image: headphoneImg1,
    },
    {
      id: 2,
      title: "Noise Master",
      price: 11999,
      discount: 8,
      category: "Headphones",
      brand: "Master Buds Max",
      model: "TM4",
      description:
        "Tuned with Sound by Bose: Experience high quality, balanced sound with deep bass, clear mids, and crisp highs for clarity that’s unparalleled.",
      image: headphoneImg2,
    },

    {
      id: 3,
      title: "Sennheiser ",
      price: 20999,
      discount: 44,
      category: "Headphones",
      brand: "Master Buds Max",
      model: "HD 599",
      description:
        "GERMAN DESIGN & ENGINEERING – Precision-built for private, reference-grade listening in real-world environments.",
      image: headphoneImg3,
    },

    {
      id: 4,
      title: "Razer Kraken  ",
      price: 30999,
      discount: 22,
      category: "Headphones",
      brand: "Razer ",
      model: "V4 Wireless ",
      description:
        "3 CONNECTIVITY MODES — On your PC, console or phone, enjoy total audio immersion in any situation..",
      image: headphoneImg4,
    },
    {
      id: 5,
      title: "Philips",
      price: 9999,
      discount: 12,
      category: "Headphones",
      brand: "Philips ",
      model: "H5205  ",
      description:
        "HERE COMES THE BASS: Pronounced beats. Stronger vibes. These wireless over-ear headphones boast a BASS boost button for deeper bass at a touch. Powerful 40mm drivers bring the best out of your favorite soundtracks.",
      image: headphoneImg5,
    },
    {
      id: 6,
      title: "Bowers & Wilkins ",
      price: 89999,
      discount: 5,
      category: "Headphones",
      brand: "Bowers & Wilkins  ",
      model: "B&W Px8/T",
      description:
        "Hybrid Noise Cancelling.Real Leather & Aluminum Die Cast Arm.Built-in USB-DAC",
      image: headphoneImg6,
    },
    {
      id: 7,
      title: "Apple AirPods Max ",
      price: 55999,
      discount: 3,
      category: "Headphones",
      brand: "Apple",
      model: "Wireless Over-Ear",
      description:
        "ULTIMATE OVER-EAR LISTENING EXPERIENCE — Apple-designed dynamic driver provides high-fidelity audio.",
      image: headphoneImg7,
    },

    // ----------------------Watch----------------
    {
      id: 8,
      title: "Apple Watch Series 8",
      price: 41999,
      discount: 5,
      category: "Smartwatches",
      brand: "Apple",
      model: "Series 8",
      description: "Advanced health tracking and seamless iPhone integration.",
      image: watchImg1,
    },

    {
      id: 9,
      title: "Garmin Venu",
      price: 50999,
      discount: 11,
      category: "Smartwatches",
      brand: "Garmin",
      model: "Venu 3s",
      description:
        "Designed with a bright, colorful display, get a more complete picture of your health, thanks to battery life of up to 10 days in smartwatch mode..",
      image: watchImg2,
    },

    {
      id: 10,
      title: "Huawei ",
      price: 34999,
      discount: 21,
      category: "Smartwatches",
      brand: "Huawei",
      model: "Huawei D2",
      description:
        "Wrist-based Ambulatory Blood Pressure Monitoring】Start a 24-hour auto-monitoring plan anytime, even while you're asleep.",
      image: watchImg3,
    },

    {
      id: 11,
      title: "Google Pixel ",
      price: 29999,
      discount: 2,
      category: "Smartwatches",
      brand: "Google",
      model: "Google Pixel",
      description:
        "The Google Pixel Watch has a beautiful circular, domed design and new experience with Wear OS by Google, so itÂ’s easy to get help at a glance.",
      image: watchImg4,
    },

    {
      id: 12,
      title: "Amazfit  ",
      price: 19999,
      discount: 4,
      category: "Smartwatches",
      brand: "Amazfitle",
      model: " T-Rex 3",
      description:
        "Large, Bright Display: The AMOLED display can reach peak brightness of 2,000 nits; read your maps and workout data easily in any light.",
      image: watchImg5,
    },
    {
      id: 13,
      title: "Motorola  ",
      price: 15999,
      discount: 4,
      category: "Smartwatches",
      brand: "Motorola",
      model: "Moto Watch 120",
      description:
        "Premium Style and Comfort - Experience the perfect blend of premium style and all-day comfort, making the moto watch 120 an ideal accessory for any occasion.",
      image: watchImg6,
    },

    // ----------------------Speaker----------------

    {
      id: 3,
      title: "Logitech MX Master 3S Mouse",
      price: 7999,
      discount: 15,
      category: "Accessories",
      brand: "Logitech",
      model: "MX Master 3S",
      description: "Ergonomic wireless mouse with fast scrolling and precision sensor.",
    },
      {
        id: 14,
        title: "JBL Speaker",
        price: 5399,
        discount: 8,
        category: "Speakers",
        brand: "JBL",
        model: "AC3",
        description: "Powerful Speaker with bass.",
        image: speakerImg1,
      },

       {
        id: 15,
        title: "Marshall  Speaker",
        price: 28399,
        discount: 8,
        category: "Speakers",
        brand: "Marshall",
        model: "Acton III 60 ",
        description: "RE-ENGINEERED WIDER STEREO SOUNDSTAGE: Generation III has tweeters angled outwards and updated waveguides to deliver a consistently solid sound that is so wide it chases you around the room.",
        image: speakerImg2,
      },
      {
        id: 16,
        title: "ZEBRONICS",
        price: 35999,
        discount: 3,
        category: "Speakers",
        brand: "ZEBRONICS",
        model: "Studio X One",
        description: "Powerful output: Enjoy your party and vibe with the ZEB-StudioX One portable BT speaker, capable of delivering an impressive 240W output power.",
        image: speakerImg3,
      },

      {
        id: 17,
        title: "Soundcore ",
        price: 12999,
        discount: 5,
        category: "Speakers",
        brand: "Soundcore  ",
        model: "Rave Neo 2",
        description: "Blast Your Music with 80W: Give your guests unforgettable music with 80W of stereo sound..",
        image: speakerImg4,
      }
  ,
      {
        id: 18,
        title: "Portronics  ",
        price: 2999,
        discount: 5,
        category: "Speakers",
        brand: "Portronics   ",
        model: "Harmony Mini 25W",
        description: " Powerful Sound:Experience immersive audio with 25 watts of powerful sound. Indulge in an unforgettable sonic experience with rich bass and crystal-clear highs.",
        image: speakerImg5,
      }
      ,
      {
        id: 19,
        title: "boAt   ",
        price: 12999,
        discount: 2,
        category: "Speakers",
        brand: "boAt    ",
        model: "Partypal 300/320",
        description: "120 W boAt Signature Sound: Delve into the audio with the impactful 120 W boAt Signature Sound of the PartyPal 300 Speaker. Onscreen visuals will feel realistic with the enhanced audio of this speaker.",
        image: speakerImg6,
      }

    // ----------------------Mouse----------------
   ,{
      id: 20,
      title: "Logitech Wireless",
      price: 799,
      discount:10,
      category: "Mouse",
      brand: "Logitech",
      description: "Ergonomic wireless mouse with long battery life.",
      image: mouseImg1,
    },
    {
      id: 21,
      title: "Dell Alienware",
      price: 6799,
      discount: 5,
      category: "Mouse",
      brand: "Dell",
      description: " Seven programmable buttons and 3D-sculpted thumb grips paired with a slimmer, more symmetrical design for an enhanced, ambidextrous grip.",
      image: mouseImg2,
    },
    {
      id: 22,
      title: "Ant GM610 7D",
      price: 1109,
      discount: 4,
      category: "Mouse",
      brand: "Ant Esports",
      description: "Translucent LED Backlight Mouse - The fully illuminated Ant Esports GM610 Gaming mouse with transparent housing design gives you a visual experience beyond your imagination.",
      image: mouseImg3,
    },
    {
      id: 23,
      title: "Asus",
      price: 39109,
      discount: 24,
      category: "Mouse",
      brand: "Asus",
      description: "ULTIMATE ACCURACY - A highly tuned 19,000 dpi optical sensor delivers unrivaled accuracy to give you the precision needed to take down opponents.; DUAL-MODE CONNECTIVITY - Dual-mode connectivity lets you play your way.",
      image: mouseImg4,
    },
    {
      id: 24,
      title: "Lenovo Yoga Pro",
      price: 3109,
      discount: 33,
      category: "Mouse",
      brand: "Lenovo",
      description: "Sublime design meets human-centered engineering with our Yoga Pro Mouse. Its perfect symmetry and thumb rest placement deliver an experience tuned for comfort and balance.",
      image: mouseImg5,
    },
     {
      id: 25,
      title: "Redragon Wireless Gaming Mouse",
      price: 10009,
      discount: 22,
      category: "Mouse",
      brand: "Redragon ",
      description: "WIRELESS FOR BOUNDLESS WINNING: Redragon wireless gaming mouse with 2.4Ghz nano receiver offers you the purest mouse moving experience and hype your KDA rise again.",
      image: mouseImg6,
  },

  // --------------consoles--------

  {
    id: 26,
    title: "Sony Playstation5 Console",
    price: 61109,
    discount: 12,
    category: "Consoles",
    brand: "Sony",
    description:
      "Slim Design: With PS5, players get powerful gaming technology packed inside a sleek and compact console design.",
    image: consoleImg1,
  },

  {
    id: 27,
    title: "New World R36S Retro Game Console",
    price: 4009,
    discount: 22,
    category: "Consoles",
    brand: "Sony ",
    description:
      "Ultra-compact size and old style design, it is very convenient whether you carry it with you during business trips, travel or camping.",
    image: consoleImg2,
  },

  {
    id: 28,
    title: "Microsoft Xbox Series X",
    price: 52999,
    discount: 10,
    category: "Consoles",
    brand: "Microsoft",
    description:
      "Powerful next-gen console delivering true 4K gaming with fast load times.",
    image: consoleImg3,
  },

  {
    id: 29,
    title: "Steam Deck 512GB Handheld Console",
    price: 45999,
    discount: 8,
    category: "Consoles",
    brand: "Valve",
    description:
      "Portable PC gaming console with AMD APU and 512GB SSD for smooth gameplay.",
    image: consoleImg4,
  },
  {
    id: 30,
    title: "Anbernic RG405M Handheld Console",
    price: 18999,
    discount: 18,
    category: "Consoles",
    brand: "Anbernic",
    description:
      "Retro handheld console with 4-inch IPS screen and Android 12 support for emulation.",
    image: consoleImg5,
  },

  {
    id: 32,
    title: "Powkiddy RGB30 Retro Handheld Console",
    price: 15999,
    discount: 15,
    category: "Consoles",
    brand: "Powkiddy",
    description:
      "Compact retro handheld console with 4:3 display ratio and strong emulation performance.",
    image: consoleImg6,
  },


// ------------------Monitors---------------
{
  id: 32,
  title: "Samsung Odyssey G5 27-inch Curved Gaming Monitor",
  price: 22999,
  discount: 18,
  category: "Monitors",
  brand: "Samsung",
  description: "27-inch QHD 144Hz curved gaming monitor with 1ms response time and HDR10 support.",
  image: monitorImg1,
},

{
  id: 33,
  title: "LG Ultragear 24GN600 Full HD Gaming Monitor",
  price: 14999,
  discount: 12,
  category: "Monitors",
  brand: "LG",
  description: "24-inch 144Hz gaming monitor with AMD FreeSync and 1ms response time.",
  image: monitorImg2,
},

{
  id: 34,
  title: "Dell S2721HN 27-inch IPS Monitor",
  price: 17999,
  discount: 10,
  category: "Monitors",
  brand: "Dell",
  description: "27-inch FHD monitor with slim bezels and ComfortView technology for eye comfort.",
  image: monitorImg3,
},

{
  id: 35,
  title: "ASUS TUF VG259QR 25-inch Gaming Monitor",
  price: 21999,
  discount: 15,
  category: "Monitors",
  brand: "ASUS",
  description: "25-inch IPS 165Hz monitor with G-SYNC compatibility and ELMB blur reduction.",
  image: monitorImg4,
},

{
  id: 36,
  title: "Acer Nitro XV272U 27-inch QHD Monitor",
  price: 26999,
  discount: 20,
  category: "Monitors",
  brand: "Acer",
  description: "QHD IPS display with 170Hz refresh rate and VESA DisplayHDR 400 certification.",
  image: monitorImg5,
},

{
  id: 37,
  title: "BenQ EW3270U 32-inch 4K HDR Monitor",
  price: 35999,
  discount: 25,
  category: "Monitors",
  brand: "BenQ",
  description: "32-inch 4K UHD monitor with HDR and eye-care technology for professionals and gamers.",
  image: monitorImg6,
},


// ------------------Printers---------------

{
  id: 38,
  title: "HP Smart Tank 790 All-in-One Printer",
  price: 24999,
  discount: 10,
  category: "Printers",
  brand: "HP",
  description: "Wireless color printer with auto duplex printing and voice-activated control.",
  image: printerImg1,
},
{
  id: 39,
  title: "Canon PIXMA G7070 Wi-Fi Ink Tank Printer",
  price: 29990,
  discount: 12,
  category: "Printers",
  brand: "Canon",
  description: "High-yield ink tank printer with duplex printing and wireless connectivity.",
  image: printerImg2,
},
{
  id: 40,
  title: "Epson EcoTank L15150 A3 Duplex Printer",
  price: 68999,
  discount: 15,
  category: "Printers",
  brand: "Epson",
  description: "Heavy-duty A3 printer with low running cost and ultra-high page yield.",
  image: printerImg3,
},
{
  id: 41,
  title: "Brother HL-L8360CDW Color Laser Printer",
  price: 39999,
  discount: 8,
  category: "Printers",
  brand: "Brother",
  description: "Fast color laser printer ideal for offices, featuring Wi-Fi and duplex printing.",
  image: printerImg4,
},
{
  id: 42,
  title: "HP LaserJet Pro M454dn Color Printer",
  price: 51999,
  discount: 10,
  category: "Printers",
  brand: "HP",
  description: "Professional-grade color laser printer with Ethernet and high print speed.",
  image: printerImg5,
},
{
  id: 43,
  title: "Canon imageCLASS MF445dw Laser Printer",
  price: 45999,
  discount: 9,
  category: "Printers",
  brand: "Canon",
  description: "Multifunction laser printer with fast duplex printing and touchscreen control.",
  image: printerImg6,
},



// ---------------------Tablet---------------------

{
  id: 44,
  title: "I-Pad Pro 11-inch (M4)",
  price: 89999,
  discount: 15,
  category: "Tablet",
  brand: "Apple",
  description: "Ultra-thin tablet with a stunning OLED display and powerful M4 chip.",
  image: tabletImg1,
},

{
  id: 45,
  title: "Galaxy Tab S10 Ultra",
  price: 11099,
  discount: 7,
  category: "Tablet",
  brand: "Samsung",
  description: "Premium large-screen tablet with S Pen support and DeX mode for desktop experience.",
  image: tabletImg2,
},

{
  id: 46,
  title: "Oneplus Pad Go",
  price: 15549,
  discount: 6,
  category: "Tablet",
  brand: "Oneplus",
  description: "Portable 2-in-1 tablet running Windows, perfect for note-taking and light work.",
  image: tabletImg3,
},

{
  id: 47,
  title: "Xiaomi pad 7",
  price: 31149,
  discount: 11,
  category: "Tablet",
  brand: "Xiomi",
  description: "Affordable 10-inch HD tablet optimized for streaming and reading.",
  image: tabletImg4,
},

{
  id: 48,
  title: "Yoga Tab P3",
  price: 55499,
  discount: 2,
  category: "Tablet",
  brand: "Lenovo",
  description: "Multimedia tablet with built-in kickstand and quad JBL speaker system.",
  image: tabletImg5,
},

{
  id: 49,
  title: "Pixel Tablet 2",
  price: 51199,
  discount: 5,
  category: "Tablet",
  brand: "Google",
  description: "Tablet with charging speaker dock that doubles as a smart home hub.",
  image: tabletImg6,
},


// ---------------------Camera---------------------

{
  id: 50,
  title: "EOS R6 Mark III Mirrorless",
  price: 161499,
  discount: 0.10, 
  category: "Camera",
  brand: "Canon",
  description: "Full-frame mirrorless camera excelling in low light with advanced subject tracking. It shoots stunning 4K video at 60fps with no crop.",
  image: cameraImg1,
},

{
  id: 51,
  title: "Alpha 7S V Body",
  price: 115599,
  discount: 1,
  category: "Camera",
  brand: "Sony",
  description: "A videographer's powerhouse designed for extreme low-light performance and dynamic range. Features 16-bit raw video output via HDMI.",
  image: cameraImg2,
},

{
  id: 52,
  title: "D7500 20.9MP Digital SLR Camera",
  price: 76599,
  discount: 5, // 5% discount
  category: "Camera",
  brand: "Nikon",
  description: "High-resolution camera built for both stills and video professionals. Its robust autofocus system tracks faces, animals, and vehicles reliably.",
  image: cameraImg3,
},

{
  id: 53,
  title: "Lumix ZS99 Point",
  price: 100199,
  discount: 0, // No discount
  category: "Camera",
  brand: "Panasonic",
  description: "Compact hybrid camera specializing in cinematic video features like V-Log and waveform monitoring. Offers great portability without sacrificing image quality.",
  image: cameraImg4,
},

{
  id: 54,
  title: "X100 VI Digital Camera",
  price: 1599,
  discount: 0.08, // 8% discount
  category: "Camera",
  brand: "Fujifilm",
  description: "Iconic digital camera with a retro design and fixed 23mm lens. Features a beautiful hybrid viewfinder and advanced film simulations.",
  image: cameraImg5,
},

{
  id: 55,
  title: "Hero 13 Black",
  price: 499,
  discount: 0.12, // 12% discount
  category: "Camera",
  brand: "GoPro",
  description: "The ultimate action camera, waterproof up to 33ft, offering HyperSmooth stabilization and 8x slow motion video capture.",
  image: cameraImg6,
},

//------------------------- Home Appliance-------------------------

{
  id: 56,
  title: "MegaClean Robot Vacuum",
  price: 14599,
  discount: 15, 
  category: "Appliance",
  brand: "iRobot",
  description: "Self-emptying robot vacuum with smart mapping technology and powerful suction. Ideal for pet hair and navigating multi-level homes.",
  image: applianceImg1,
},

{
  id: 57,
  title: "InstaCool Air Conditioner 1.5 Ton",
  price: 41450,
  discount: 10, 
  category: "Appliance",
  brand: "LG",
  description: "Smart inverter split AC with dual rotary compressor for rapid cooling. Features Wi-Fi control and low-noise operation.",
  image: applianceImg2,
},

{
  id: 58,
  title: "ChefMaster Stand Mixer 7L",
  price: 19349,
  discount: 5,
  category: "Appliance",
  brand: "KitchenAid",
  description: "Heavy-duty stand mixer with 10 speeds and a large capacity stainless steel bowl. Essential tool for serious baking and cooking.",
  image: applianceImg3,
},

{
  id: 59,
  title: "FreshBlend Juicer XL",
  price: 20199,
  discount: 10, // 20% discount
  category: "Appliance",
  brand: "Breville",
  description: "High-speed centrifugal juicer with an extra-wide feed chute, minimizing prep time. Easy to clean and handles whole fruits.",
  image: applianceImg4,
},

{
  id: 60,
  title: "UltraSteam Garment Steamer",
  price: 3119,
  discount: 2, // No discount
  category: "Appliance",
  brand: "Philips",
  description: "Professional handheld garment steamer ready in 60 seconds. Provides continuous steam to quickly smooth out wrinkles and sanitize fabrics.",
  image: applianceImg5,
},

{
  id: 61,
  title: "CoffeeMatic Espresso Machine",
  price: 9799,
  discount: 6, // 12% discount
  category: "Appliance",
  brand: "Agaro",
  description: "Automatic bean-to-cup espresso machine with integrated grinder and milk frother. Allows personalized control over coffee strength and temperature.",
  image: applianceImg6,
},

{
  id: 62,
  title: "FoodSaver Vacuum Sealer",
  price: 159,
  discount: 0.10, // 10% discount
  category: "Appliance",
  brand: "FoodSaver",
  description: "Automatic vacuum sealing system to keep food fresh up to five times longer. Includes integrated bag cutter and roll storage.",
  image: applianceImg7,
},

{
  id: 63,
  title: "Digital Air Fryer Pro 5.8 QT",
  price: 129,
  discount: 0.25, // 25% discount
  category: "Appliance",
  brand: "COSORI",
  description: "Large capacity air fryer with 11 preset cooking functions and rapid air circulation technology. Uses 85% less oil than traditional frying.",
  image: applianceImg8,
},

{
  id: 64,
  title: "Multi-Function Rice Cooker",
  price: 89,
  discount: 0.05, // 5% discount
  category: "Appliance",
  brand: "Zojirushi",
  description: "Micro-computerized rice cooker with specialized settings for various rice types, including sushi and brown rice. Keeps food warm automatically.",
  image: applianceImg9,
},

{
  id: 65,
  title: "AquaPure Water Filter Pitcher",
  price: 35,
  discount: 0.0, // No discount
  category: "Appliance",
  brand: "Brita",
  description: "Large capacity water filter pitcher reducing chlorine and heavy metals. Features an electronic indicator for filter replacement reminders.",
  image: applianceImg10,
},



];
export default localProducts;
