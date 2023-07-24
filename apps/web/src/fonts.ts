import type { NextFont } from "next/dist/compiled/@next/font";
import {
    Advent_Pro,
    Akshar,
    Albert_Sans,
    Alegreya,
    Alexandria,
    Alkatra,
    Alumni_Sans,
    Andada_Pro,
    Anek_Bangla,
    Anek_Devanagari,
    Anek_Gujarati,
    Anek_Gurmukhi,
    Anek_Kannada,
    Anek_Latin,
    Anek_Malayalam,
    Anek_Odia,
    Anek_Tamil,
    Anek_Telugu,
    Antonio,
    Anuphan,
    Anybody,
    Archivo_Narrow,
    Archivo,
    Arima,
    Arimo,
    Asap,
    Assistant,
    Azeret_Mono,
    Ballet,
    Baloo_2,
    Baloo_Bhai_2,
    Baloo_Bhaijaan_2,
    Baloo_Bhaina_2,
    Baloo_Chettan_2,
    Baloo_Da_2,
    Baloo_Paaji_2,
    Baloo_Tamma_2,
    Baloo_Tammudu_2,
    Baloo_Thambi_2,
    Besley,
    Big_Shoulders_Display,
    Big_Shoulders_Inline_Display,
    Big_Shoulders_Inline_Text,
    Big_Shoulders_Stencil_Display,
    Big_Shoulders_Stencil_Text,
    Big_Shoulders_Text,
    Bitter,
    Bodoni_Moda,
    Brygada_1918,
    Cabin,
    Cairo_Play,
    Cairo,
    Catamaran,
    Caveat,
    Changa,
    Chivo_Mono,
    Chivo,
    Cinzel,
    Climate_Crisis,
    Comfortaa,
    Comme,
    Commissioner,
    Cormorant,
    Crimson_Pro,
    Cuprum,
    Dancing_Script,
    Domine,
    Dosis,
    DynaPuff,
    EB_Garamond,
    Eczar,
    El_Messiri,
    Encode_Sans_SC,
    Encode_Sans,
    Epilogue,
    Exo_2,
    Exo,
    Expletus_Sans,
    Familjen_Grotesk,
    Faustina,
    Figtree,
    Finlandica,
    Fira_Code,
    Foldit,
    Frank_Ruhl_Libre,
    Fraunces,
    Fredoka,
    Gantari,
    Gemunu_Libre,
    Genos,
    Georama,
    Glory,
    Gluten,
    Golos_Text,
    Grandstander,
    Grenze_Gotisch,
    Hahmlet,
    Hanken_Grotesk,
    Hepta_Slab,
    Ibarra_Real_Nova,
    Imbue,
    Inconsolata,
    Inter_Tight,
    Inter,
    JetBrains_Mono,
    Josefin_Sans,
    Jost,
    Jura,
    Kantumruy_Pro,
    Karla,
    Kreon,
    Kufam,
    Kumbh_Sans,
    Labrada,
    League_Gothic,
    League_Spartan,
    Lemonada,
    Lexend_Deca,
    Lexend_Exa,
    Lexend_Giga,
    Lexend_Mega,
    Lexend_Peta,
    Lexend_Tera,
    Lexend_Zetta,
    Lexend,
    Libre_Bodoni,
    Libre_Franklin,
    Literata,
    Lora,
    M_PLUS_1_Code,
    M_PLUS_1,
    M_PLUS_2,
    M_PLUS_Code_Latin,
    Manrope,
    Manuale,
    Marhey,
    Markazi_Text,
    Martian_Mono,
    Maven_Pro,
    Merienda,
    Merriweather_Sans,
    Mohave,
    Montagu_Slab,
    Montserrat,
    Mulish,
    Murecho,
    MuseoModerno,
    Nabla,
    Newsreader,
    Noto_Naskh_Arabic,
    Noto_Nastaliq_Urdu,
    Noto_Rashi_Hebrew,
    Noto_Sans_Adlam_Unjoined,
    Noto_Sans_Adlam,
    Noto_Sans_Armenian,
    Noto_Sans_Balinese,
    Noto_Sans_Bamum,
    Noto_Sans_Bassa_Vah,
    Noto_Sans_Bengali,
    Noto_Sans_Canadian_Aboriginal,
    Noto_Sans_Cham,
    Noto_Sans_Cherokee,
    Noto_Sans_Devanagari,
    Noto_Sans_Display,
    Noto_Sans_Ethiopic,
    Noto_Sans_Georgian,
    Noto_Sans_Gujarati,
    Noto_Sans_Gurmukhi,
    Noto_Sans_Hanifi_Rohingya,
    Noto_Sans_Hebrew,
    Noto_Sans_Javanese,
    Noto_Sans_JP,
    Noto_Sans_Kannada,
    Noto_Sans_Kayah_Li,
    Noto_Sans_Khmer,
    Noto_Sans_Lao_Looped,
    Noto_Sans_Lao,
    Noto_Sans_Lisu,
    Noto_Sans_Malayalam,
    Noto_Sans_Medefaidrin,
    Noto_Sans_Meetei_Mayek,
    Noto_Sans_Mono,
    Noto_Sans_New_Tai_Lue,
    Noto_Sans_Ol_Chiki,
    Noto_Sans_Oriya,
    Noto_Sans_Sinhala,
    Noto_Sans_Sora_Sompeng,
    Noto_Sans_Sundanese,
    Noto_Sans_Symbols,
    Noto_Sans_Syriac,
    Noto_Sans_Tai_Tham,
    Noto_Sans_Tamil,
    Noto_Sans_Tangsa,
    Noto_Sans_Telugu,
    Noto_Sans_Thaana,
    Noto_Sans_Thai,
    Noto_Serif_Armenian,
    Noto_Serif_Bengali,
    Noto_Serif_Devanagari,
    Noto_Serif_Display,
    Noto_Serif_Ethiopic,
    Noto_Serif_Georgian,
    Noto_Serif_Gujarati,
    Noto_Serif_Gurmukhi,
    Noto_Serif_Hebrew,
    Noto_Serif_HK,
    Noto_Serif_Kannada,
    Noto_Serif_Khmer,
    Noto_Serif_Khojki,
    Noto_Serif_Lao,
    Noto_Serif_Malayalam,
    Noto_Serif_Oriya,
    Noto_Serif_Sinhala,
    Noto_Serif_Tamil,
    Noto_Serif_Telugu,
    Noto_Serif_Thai,
    Noto_Serif_Tibetan,
    Noto_Serif_Toto,
    Nunito_Sans,
    Nunito,
    Open_Sans,
    Oswald,
    Outfit,
    Overpass_Mono,
    Overpass,
    Oxanium,
    Pathway_Extreme,
    Petrona,
    Phudu,
    Piazzolla,
    Playfair_Display,
    Plus_Jakarta_Sans,
    Podkova,
    Poltawski_Nowy,
    Pontano_Sans,
    Public_Sans,
    Quicksand,
    Radio_Canada,
    Raleway,
    Rasa,
    Readex_Pro,
    Recursive,
    Red_Hat_Display,
    Red_Hat_Mono,
    Red_Hat_Text,
    Red_Rose,
    Reem_Kufi_Fun,
    Reem_Kufi,
    Roboto_Flex,
    Roboto_Mono,
    Roboto_Serif,
    Roboto_Slab,
    Rokkitt,
    Rosario,
    Rubik,
    Ruda,
    Saira,
    Sansita_Swashed,
    Schibsted_Grotesk,
    Shantell_Sans,
    Signika_Negative,
    Signika,
    Smooch_Sans,
    Sofia_Sans_Condensed,
    Sofia_Sans_Extra_Condensed,
    Sofia_Sans_Semi_Condensed,
    Sofia_Sans,
    Sono,
    Sora,
    Source_Code_Pro,
    Source_Sans_3,
    Source_Serif_4,
    Space_Grotesk,
    Spline_Sans_Mono,
    Spline_Sans,
    Stick_No_Bills,
    STIX_Two_Text,
    Syne,
    Texturina,
    Tourney,
    Trispace,
    Truculenta,
    Unbounded,
    Urbanist,
    Varta,
    Vazirmatn,
    Vollkorn,
    Work_Sans,
    Yaldevi,
    Yanone_Kaffeesatz,
    Yrsa,
    Ysabeau,
} from "next/font/google";

const adventPro = Advent_Pro({ subsets: ["latin-ext"] });
const akshar = Akshar({ subsets: ["latin-ext"] });
const albertSans = Albert_Sans({ subsets: ["latin-ext"] });
const alegreya = Alegreya({ subsets: ["latin-ext"] });
const alexandria = Alexandria({ subsets: ["latin-ext"] });
const alkatra = Alkatra({ subsets: ["latin-ext"] });
const alumniSans = Alumni_Sans({ subsets: ["latin-ext"] });
const andadaPro = Andada_Pro({ subsets: ["latin-ext"] });
const anekBangla = Anek_Bangla({ subsets: ["latin-ext"] });
const anekDevanagari = Anek_Devanagari({ subsets: ["latin-ext"] });
const anekGujarati = Anek_Gujarati({ subsets: ["latin-ext"] });
const anekGurmukhi = Anek_Gurmukhi({ subsets: ["latin-ext"] });
const anekKannada = Anek_Kannada({ subsets: ["latin-ext"] });
const anekLatin = Anek_Latin({ subsets: ["latin-ext"] });
const anekMalayalam = Anek_Malayalam({ subsets: ["latin-ext"] });
const anekOdia = Anek_Odia({ subsets: ["latin-ext"] });
const anekTamil = Anek_Tamil({ subsets: ["latin-ext"] });
const anekTelugu = Anek_Telugu({ subsets: ["latin-ext"] });
const antonio = Antonio({ subsets: ["latin-ext"] });
const anuphan = Anuphan({ subsets: ["latin-ext"] });
const anybody = Anybody({ subsets: ["latin-ext"] });
const archivoNarrow = Archivo_Narrow({ subsets: ["latin-ext"] });
const archivo = Archivo({ subsets: ["latin-ext"] });
const arima = Arima({ subsets: ["latin-ext"] });
const arimo = Arimo({ subsets: ["latin-ext"] });
const asap = Asap({ subsets: ["latin-ext"] });
const assistant = Assistant({ subsets: ["latin-ext"] });
const azeretMono = Azeret_Mono({ subsets: ["latin-ext"] });
const ballet = Ballet({ subsets: ["latin-ext"] });
const baloo2 = Baloo_2({ subsets: ["latin-ext"] });
const balooBhai2 = Baloo_Bhai_2({ subsets: ["latin-ext"] });
const balooBhaijaan2 = Baloo_Bhaijaan_2({ subsets: ["latin-ext"] });
const balooBhaina2 = Baloo_Bhaina_2({ subsets: ["latin-ext"] });
const balooChettan2 = Baloo_Chettan_2({ subsets: ["latin-ext"] });
const balooDa2 = Baloo_Da_2({ subsets: ["latin-ext"] });
const balooPaaji2 = Baloo_Paaji_2({ subsets: ["latin-ext"] });
const balooTamma2 = Baloo_Tamma_2({ subsets: ["latin-ext"] });
const balooTammudu2 = Baloo_Tammudu_2({ subsets: ["latin-ext"] });
const balooThambi2 = Baloo_Thambi_2({ subsets: ["latin-ext"] });
const besley = Besley({ subsets: ["latin-ext"] });
const bigShouldersDisplay = Big_Shoulders_Display({ subsets: ["latin-ext"] });
// prettier-ignore
const bigShouldersInlineDisplay = Big_Shoulders_Inline_Display({ subsets: ["latin-ext"] });
// prettier-ignore
const bigShouldersInlineText = Big_Shoulders_Inline_Text({ subsets: ["latin-ext"] });
// prettier-ignore
const bigShouldersStencilDisplay = Big_Shoulders_Stencil_Display({ subsets: ["latin-ext"] });
// prettier-ignore
const bigShouldersStencilText = Big_Shoulders_Stencil_Text({ subsets: ["latin-ext"] });
const bigShouldersText = Big_Shoulders_Text({ subsets: ["latin-ext"] });
const bitter = Bitter({ subsets: ["latin-ext"] });
const bodoniModa = Bodoni_Moda({ subsets: ["latin-ext"] });
const brygada1918 = Brygada_1918({ subsets: ["latin-ext"] });
const cabin = Cabin({ subsets: ["latin-ext"] });
const cairoPlay = Cairo_Play({ subsets: ["latin-ext"] });
const cairo = Cairo({ subsets: ["latin-ext"] });
const catamaran = Catamaran({ subsets: ["latin-ext"] });
const caveat = Caveat({ subsets: ["latin-ext"] });
const changa = Changa({ subsets: ["latin-ext"] });
const chivoMono = Chivo_Mono({ subsets: ["latin-ext"] });
const chivo = Chivo({ subsets: ["latin-ext"] });
const cinzel = Cinzel({ subsets: ["latin-ext"] });
const climateCrisis = Climate_Crisis({ subsets: ["latin-ext"] });
const comfortaa = Comfortaa({ subsets: ["latin-ext"] });
const comme = Comme({ subsets: ["latin-ext"] });
const commissioner = Commissioner({ subsets: ["latin-ext"] });
const cormorant = Cormorant({ subsets: ["latin-ext"] });
const crimsonPro = Crimson_Pro({ subsets: ["latin-ext"] });
const cuprum = Cuprum({ subsets: ["latin-ext"] });
const dancingScript = Dancing_Script({ subsets: ["latin-ext"] });
const domine = Domine({ subsets: ["latin-ext"] });
const dosis = Dosis({ subsets: ["latin-ext"] });
const dynaPuff = DynaPuff({ subsets: ["latin-ext"] });
const ebGaramond = EB_Garamond({ subsets: ["latin-ext"] });
const eczar = Eczar({ subsets: ["latin-ext"] });
const elMessiri = El_Messiri({ subsets: ["latin-ext"] });
const encodeSansSc = Encode_Sans_SC({ subsets: ["latin-ext"] });
const encodeSans = Encode_Sans({ subsets: ["latin-ext"] });
const epilogue = Epilogue({ subsets: ["latin-ext"] });
const exo2 = Exo_2({ subsets: ["latin-ext"] });
const exo = Exo({ subsets: ["latin-ext"] });
const expletusSans = Expletus_Sans({ subsets: ["latin-ext"] });
const familjenGrotesk = Familjen_Grotesk({ subsets: ["latin-ext"] });
const faustina = Faustina({ subsets: ["latin-ext"] });
const figtree = Figtree({ subsets: ["latin-ext"] });
const finlandica = Finlandica({ subsets: ["latin-ext"] });
const firaCode = Fira_Code({ subsets: ["latin-ext"] });
const foldit = Foldit({ subsets: ["latin-ext"] });
const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ["latin-ext"] });
const fraunces = Fraunces({ subsets: ["latin-ext"] });
const fredoka = Fredoka({ subsets: ["latin-ext"] });
const gantari = Gantari({ subsets: ["latin-ext"] });
const gemunuLibre = Gemunu_Libre({ subsets: ["latin-ext"] });
const genos = Genos({ subsets: ["latin-ext"] });
const georama = Georama({ subsets: ["latin-ext"] });
const glory = Glory({ subsets: ["latin-ext"] });
const gluten = Gluten({ subsets: ["latin-ext"] });
const golosText = Golos_Text({ subsets: ["latin-ext"] });
const grandstander = Grandstander({ subsets: ["latin-ext"] });
const grenzeGotisch = Grenze_Gotisch({ subsets: ["latin-ext"] });
const hahmlet = Hahmlet({ subsets: ["latin-ext"] });
const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin-ext"] });
const heptaSlab = Hepta_Slab({ subsets: ["latin-ext"] });
const ibarraRealNova = Ibarra_Real_Nova({ subsets: ["latin-ext"] });
const imbue = Imbue({ subsets: ["latin-ext"] });
const inconsolata = Inconsolata({ subsets: ["latin-ext"] });
const interTight = Inter_Tight({ subsets: ["latin-ext"] });
const inter = Inter({ subsets: ["latin-ext"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin-ext"] });
const josefinSans = Josefin_Sans({ subsets: ["latin-ext"] });
const jost = Jost({ subsets: ["latin-ext"] });
const jura = Jura({ subsets: ["latin-ext"] });
const kantumruyPro = Kantumruy_Pro({ subsets: ["latin-ext"] });
const karla = Karla({ subsets: ["latin-ext"] });
const kreon = Kreon({ subsets: ["latin-ext"] });
const kufam = Kufam({ subsets: ["latin-ext"] });
const kumbhSans = Kumbh_Sans({ subsets: ["latin-ext"] });
const labrada = Labrada({ subsets: ["latin-ext"] });
const leagueGothic = League_Gothic({ subsets: ["latin-ext"] });
const leagueSpartan = League_Spartan({ subsets: ["latin-ext"] });
const lemonada = Lemonada({ subsets: ["latin-ext"] });
const lexendDeca = Lexend_Deca({ subsets: ["latin-ext"] });
const lexendExa = Lexend_Exa({ subsets: ["latin-ext"] });
const lexendGiga = Lexend_Giga({ subsets: ["latin-ext"] });
const lexendMega = Lexend_Mega({ subsets: ["latin-ext"] });
const lexendPeta = Lexend_Peta({ subsets: ["latin-ext"] });
const lexendTera = Lexend_Tera({ subsets: ["latin-ext"] });
const lexendZetta = Lexend_Zetta({ subsets: ["latin-ext"] });
const lexend = Lexend({ subsets: ["latin-ext"] });
const libreBodoni = Libre_Bodoni({ subsets: ["latin-ext"] });
const libreFranklin = Libre_Franklin({ subsets: ["latin-ext"] });
const literata = Literata({ subsets: ["latin-ext"] });
const lora = Lora({ subsets: ["latin-ext"] });
const mplus1Code = M_PLUS_1_Code({ subsets: ["latin-ext"] });
const mplus1 = M_PLUS_1({ subsets: ["latin-ext"] });
const mplus2 = M_PLUS_2({ subsets: ["latin-ext"] });
const mplusCodeLatin = M_PLUS_Code_Latin({ subsets: ["latin-ext"] });
const manrope = Manrope({ subsets: ["latin-ext"] });
const manuale = Manuale({ subsets: ["latin-ext"] });
const marhey = Marhey({ subsets: ["latin-ext"] });
const markaziText = Markazi_Text({ subsets: ["latin-ext"] });
const martianMono = Martian_Mono({ subsets: ["latin-ext"] });
const mavenPro = Maven_Pro({ subsets: ["latin-ext"] });
const merienda = Merienda({ subsets: ["latin-ext"] });
const merriweatherSans = Merriweather_Sans({ subsets: ["latin-ext"] });
const mohave = Mohave({ subsets: ["latin-ext"] });
const montaguSlab = Montagu_Slab({ subsets: ["latin-ext"] });
const montserrat = Montserrat({ subsets: ["latin-ext"] });
const mulish = Mulish({ subsets: ["latin-ext"] });
const murecho = Murecho({ subsets: ["latin-ext"] });
const museoModerno = MuseoModerno({ subsets: ["latin-ext"] });
const nabla = Nabla({ subsets: ["latin-ext"] });
const newsreader = Newsreader({ subsets: ["latin-ext"] });
const notoNaskhArabic = Noto_Naskh_Arabic({ subsets: ["latin-ext"] });
const notoNastaliqUrdu = Noto_Nastaliq_Urdu({ subsets: ["latin-ext"] });
const notoRashiHebrew = Noto_Rashi_Hebrew({ subsets: ["latin-ext"] });
// prettier-ignore
const notoSansAdlamUnjoined = Noto_Sans_Adlam_Unjoined({ subsets: ["latin-ext"] });
const notoSansAdlam = Noto_Sans_Adlam({ subsets: ["latin-ext"] });
const notoSansArmenian = Noto_Sans_Armenian({ subsets: ["latin-ext"] });
const notoSansBalinese = Noto_Sans_Balinese({ subsets: ["latin-ext"] });
const notoSansBamum = Noto_Sans_Bamum({ subsets: ["latin-ext"] });
const notoSansBassaVah = Noto_Sans_Bassa_Vah({ subsets: ["latin-ext"] });
const notoSansBengali = Noto_Sans_Bengali({ subsets: ["latin-ext"] });
// prettier-ignore
const notoSansCanadianAboriginal = Noto_Sans_Canadian_Aboriginal({ subsets: ["latin-ext"] });
const notoSansCham = Noto_Sans_Cham({ subsets: ["latin-ext"] });
const notoSansCherokee = Noto_Sans_Cherokee({ subsets: ["latin-ext"] });
const notoSansDevanagari = Noto_Sans_Devanagari({ subsets: ["latin-ext"] });
const notoSansDisplay = Noto_Sans_Display({ subsets: ["latin-ext"] });
const notoSansEthiopic = Noto_Sans_Ethiopic({ subsets: ["latin-ext"] });
const notoSansGeorgian = Noto_Sans_Georgian({ subsets: ["latin-ext"] });
const notoSansGujarati = Noto_Sans_Gujarati({ subsets: ["latin-ext"] });
const notoSansGurmukhi = Noto_Sans_Gurmukhi({ subsets: ["latin-ext"] });
// prettier-ignore
const notoSansHanifiRohingya = Noto_Sans_Hanifi_Rohingya({ subsets: ["latin-ext"] });
const notoSansHebrew = Noto_Sans_Hebrew({ subsets: ["latin-ext"] });
const notoSansJavanese = Noto_Sans_Javanese({ subsets: ["latin-ext"] });
const notoSansJp = Noto_Sans_JP({ subsets: ["latin-ext"] });
const notoSansKannada = Noto_Sans_Kannada({ subsets: ["latin-ext"] });
const notoSansKayahLi = Noto_Sans_Kayah_Li({ subsets: ["latin-ext"] });
const notoSansKhmer = Noto_Sans_Khmer({ subsets: ["latin-ext"] });
const notoSansLaoLooped = Noto_Sans_Lao_Looped({ subsets: ["latin-ext"] });
const notoSansLao = Noto_Sans_Lao({ subsets: ["latin-ext"] });
const notoSansLisu = Noto_Sans_Lisu({ subsets: ["latin-ext"] });
const notoSansMalayalam = Noto_Sans_Malayalam({ subsets: ["latin-ext"] });
const notoSansMedefaidrin = Noto_Sans_Medefaidrin({ subsets: ["latin-ext"] });
const notoSansMeeteiMayek = Noto_Sans_Meetei_Mayek({ subsets: ["latin-ext"] });
const notoSansMono = Noto_Sans_Mono({ subsets: ["latin-ext"] });
const notoSansNewTaiLue = Noto_Sans_New_Tai_Lue({ subsets: ["latin-ext"] });
const notoSansOlChiki = Noto_Sans_Ol_Chiki({ subsets: ["latin-ext"] });
const notoSansOriya = Noto_Sans_Oriya({ subsets: ["latin-ext"] });
const notoSansSinhala = Noto_Sans_Sinhala({ subsets: ["latin-ext"] });
const notoSansSoraSompeng = Noto_Sans_Sora_Sompeng({ subsets: ["latin-ext"] });
const notoSansSundanese = Noto_Sans_Sundanese({ subsets: ["latin-ext"] });
const notoSansSymbols = Noto_Sans_Symbols({ subsets: ["latin-ext"] });
const notoSansSyriac = Noto_Sans_Syriac({ subsets: ["latin-ext"] });
const notoSansTaiTham = Noto_Sans_Tai_Tham({ subsets: ["latin-ext"] });
const notoSansTamil = Noto_Sans_Tamil({ subsets: ["latin-ext"] });
const notoSansTangsa = Noto_Sans_Tangsa({ subsets: ["latin-ext"] });
const notoSansTelugu = Noto_Sans_Telugu({ subsets: ["latin-ext"] });
const notoSansThaana = Noto_Sans_Thaana({ subsets: ["latin-ext"] });
const notoSansThai = Noto_Sans_Thai({ subsets: ["latin-ext"] });
const notoSerifArmenian = Noto_Serif_Armenian({ subsets: ["latin-ext"] });
const notoSerifBengali = Noto_Serif_Bengali({ subsets: ["latin-ext"] });
const notoSerifDevanagari = Noto_Serif_Devanagari({ subsets: ["latin-ext"] });
const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin-ext"] });
const notoSerifEthiopic = Noto_Serif_Ethiopic({ subsets: ["latin-ext"] });
const notoSerifGeorgian = Noto_Serif_Georgian({ subsets: ["latin-ext"] });
const notoSerifGujarati = Noto_Serif_Gujarati({ subsets: ["latin-ext"] });
const notoSerifGurmukhi = Noto_Serif_Gurmukhi({ subsets: ["latin-ext"] });
const notoSerifHebrew = Noto_Serif_Hebrew({ subsets: ["latin-ext"] });
const notoSerifHk = Noto_Serif_HK({ subsets: ["latin-ext"] });
const notoSerifKannada = Noto_Serif_Kannada({ subsets: ["latin-ext"] });
const notoSerifKhmer = Noto_Serif_Khmer({ subsets: ["latin-ext"] });
const notoSerifKhojki = Noto_Serif_Khojki({ subsets: ["latin-ext"] });
const notoSerifLao = Noto_Serif_Lao({ subsets: ["latin-ext"] });
const notoSerifMalayalam = Noto_Serif_Malayalam({ subsets: ["latin-ext"] });
const notoSerifOriya = Noto_Serif_Oriya({ subsets: ["latin-ext"] });
const notoSerifSinhala = Noto_Serif_Sinhala({ subsets: ["latin-ext"] });
const notoSerifTamil = Noto_Serif_Tamil({ subsets: ["latin-ext"] });
const notoSerifTelugu = Noto_Serif_Telugu({ subsets: ["latin-ext"] });
const notoSerifThai = Noto_Serif_Thai({ subsets: ["latin-ext"] });
const notoSerifTibetan = Noto_Serif_Tibetan({ subsets: ["latin-ext"] });
const notoSerifToto = Noto_Serif_Toto({ subsets: ["latin-ext"] });
const nunitoSans = Nunito_Sans({ subsets: ["latin-ext"] });
const nunito = Nunito({ subsets: ["latin-ext"] });
const openSans = Open_Sans({ subsets: ["latin-ext"] });
const oswald = Oswald({ subsets: ["latin-ext"] });
const outfit = Outfit({ subsets: ["latin-ext"] });
const overpassMono = Overpass_Mono({ subsets: ["latin-ext"] });
const overpass = Overpass({ subsets: ["latin-ext"] });
const oxanium = Oxanium({ subsets: ["latin-ext"] });
const pathwayExtreme = Pathway_Extreme({ subsets: ["latin-ext"] });
const petrona = Petrona({ subsets: ["latin-ext"] });
const phudu = Phudu({ subsets: ["latin-ext"] });
const piazzolla = Piazzolla({ subsets: ["latin-ext"] });
const playfairDisplay = Playfair_Display({ subsets: ["latin-ext"] });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin-ext"] });
const podkova = Podkova({ subsets: ["latin-ext"] });
const poltawskiNowy = Poltawski_Nowy({ subsets: ["latin-ext"] });
const pontanoSans = Pontano_Sans({ subsets: ["latin-ext"] });
const publicSans = Public_Sans({ subsets: ["latin-ext"] });
const quicksand = Quicksand({ subsets: ["latin-ext"] });
const radioCanada = Radio_Canada({ subsets: ["latin-ext"] });
const raleway = Raleway({ subsets: ["latin-ext"] });
const rasa = Rasa({ subsets: ["latin-ext"] });
const readexPro = Readex_Pro({ subsets: ["latin-ext"] });
const recursive = Recursive({ subsets: ["latin-ext"] });
const redHatDisplay = Red_Hat_Display({ subsets: ["latin-ext"] });
const redHatMono = Red_Hat_Mono({ subsets: ["latin-ext"] });
const redHatText = Red_Hat_Text({ subsets: ["latin-ext"] });
const redRose = Red_Rose({ subsets: ["latin-ext"] });
const reemKufiFun = Reem_Kufi_Fun({ subsets: ["latin-ext"] });
const reemKufi = Reem_Kufi({ subsets: ["latin-ext"] });
const robotoFlex = Roboto_Flex({ subsets: ["latin-ext"] });
const robotoMono = Roboto_Mono({ subsets: ["latin-ext"] });
const robotoSerif = Roboto_Serif({ subsets: ["latin-ext"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin-ext"] });
const rokkitt = Rokkitt({ subsets: ["latin-ext"] });
const rosario = Rosario({ subsets: ["latin-ext"] });
const rubik = Rubik({ subsets: ["latin-ext"] });
const ruda = Ruda({ subsets: ["latin-ext"] });
const saira = Saira({ subsets: ["latin-ext"] });
const sansitaSwashed = Sansita_Swashed({ subsets: ["latin-ext"] });
const schibstedGrotesk = Schibsted_Grotesk({ subsets: ["latin-ext"] });
const shantellSans = Shantell_Sans({ subsets: ["latin-ext"] });
const signikaNegative = Signika_Negative({ subsets: ["latin-ext"] });
const signika = Signika({ subsets: ["latin-ext"] });
const smoochSans = Smooch_Sans({ subsets: ["latin-ext"] });
const sofiaSansCondensed = Sofia_Sans_Condensed({ subsets: ["latin-ext"] });
// prettier-ignore
const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({ subsets: ["latin-ext"] });
// prettier-ignore
const sofiaSansSemiCondensed = Sofia_Sans_Semi_Condensed({ subsets: ["latin-ext"] });
const sofiaSans = Sofia_Sans({ subsets: ["latin-ext"] });
const sono = Sono({ subsets: ["latin-ext"] });
const sora = Sora({ subsets: ["latin-ext"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin-ext"] });
const sourceSans3 = Source_Sans_3({ subsets: ["latin-ext"] });
const sourceSerif4 = Source_Serif_4({ subsets: ["latin-ext"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin-ext"] });
const splineSansMono = Spline_Sans_Mono({ subsets: ["latin-ext"] });
const splineSans = Spline_Sans({ subsets: ["latin-ext"] });
const stickNoBills = Stick_No_Bills({ subsets: ["latin-ext"] });
const stixTwoText = STIX_Two_Text({ subsets: ["latin-ext"] });
const syne = Syne({ subsets: ["latin-ext"] });
const texturina = Texturina({ subsets: ["latin-ext"] });
const tourney = Tourney({ subsets: ["latin-ext"] });
const trispace = Trispace({ subsets: ["latin-ext"] });
const truculenta = Truculenta({ subsets: ["latin-ext"] });
const unbounded = Unbounded({ subsets: ["latin-ext"] });
const urbanist = Urbanist({ subsets: ["latin-ext"] });
const varta = Varta({ subsets: ["latin-ext"] });
const vazirmatn = Vazirmatn({ subsets: ["latin-ext"] });
const vollkorn = Vollkorn({ subsets: ["latin-ext"] });
const workSans = Work_Sans({ subsets: ["latin-ext"] });
const yaldevi = Yaldevi({ subsets: ["latin-ext"] });
const yanoneKaffeesatz = Yanone_Kaffeesatz({ subsets: ["latin-ext"] });
const yrsa = Yrsa({ subsets: ["latin-ext"] });
const ysabeau = Ysabeau({ subsets: ["latin-ext"] });

export interface Font {
    name: string;
    css: NextFont;
    category: string;
}

// prettier-ignore
export const fonts: Font[] = [
    { name: "Advent Pro", css: adventPro, category: "sans-serif" },
    { name: "Akshar", css: akshar, category: "sans-serif" },
    { name: "Albert Sans", css: albertSans, category: "sans-serif" },
    { name: "Alegreya", css: alegreya, category: "serif" },
    { name: "Alexandria", css: alexandria, category: "sans-serif" },
    { name: "Alkatra", css: alkatra, category: "display" },
    { name: "Alumni Sans", css: alumniSans, category: "sans-serif" },
    { name: "Andada Pro", css: andadaPro, category: "serif" },
    { name: "Anek Bangla", css: anekBangla, category: "sans-serif" },
    { name: "Anek Devanagari", css: anekDevanagari, category: "sans-serif" },
    { name: "Anek Gujarati", css: anekGujarati, category: "sans-serif" },
    { name: "Anek Gurmukhi", css: anekGurmukhi, category: "sans-serif" },
    { name: "Anek Kannada", css: anekKannada, category: "sans-serif" },
    { name: "Anek Latin", css: anekLatin, category: "sans-serif" },
    { name: "Anek Malayalam", css: anekMalayalam, category: "sans-serif" },
    { name: "Anek Odia", css: anekOdia, category: "sans-serif" },
    { name: "Anek Tamil", css: anekTamil, category: "sans-serif" },
    { name: "Anek Telugu", css: anekTelugu, category: "sans-serif" },
    { name: "Antonio", css: antonio, category: "sans-serif" },
    { name: "Anuphan", css: anuphan, category: "sans-serif" },
    { name: "Anybody", css: anybody, category: "display" },
    { name: "Archivo Narrow", css: archivoNarrow, category: "sans-serif" },
    { name: "Archivo", css: archivo, category: "sans-serif" },
    { name: "Arima", css: arima, category: "display" },
    { name: "Arimo", css: arimo, category: "sans-serif" },
    { name: "Asap", css: asap, category: "sans-serif" },
    { name: "Assistant", css: assistant, category: "sans-serif" },
    { name: "Azeret Mono", css: azeretMono, category: "monospace" },
    { name: "Ballet", css: ballet, category: "handwriting" },
    { name: "Baloo 2", css: baloo2, category: "display" },
    { name: "Baloo Bhai 2", css: balooBhai2, category: "display" },
    { name: "Baloo Bhaijaan 2", css: balooBhaijaan2, category: "display" },
    { name: "Baloo Bhaina 2", css: balooBhaina2, category: "display" },
    { name: "Baloo Chettan 2", css: balooChettan2, category: "display" },
    { name: "Baloo Da 2", css: balooDa2, category: "display" },
    { name: "Baloo Paaji 2", css: balooPaaji2, category: "display" },
    { name: "Baloo Tamma 2", css: balooTamma2, category: "display" },
    { name: "Baloo Tammudu 2", css: balooTammudu2, category: "display" },
    { name: "Baloo Thambi 2", css: balooThambi2, category: "display" },
    { name: "Besley", css: besley, category: "serif" },
    { name: "Big Shoulders Display", css: bigShouldersDisplay, category: "display" },
    { name: "Big Shoulders Inline Display", css: bigShouldersInlineDisplay, category: "display" },
    { name: "Big Shoulders Inline Text", css: bigShouldersInlineText, category: "display" },
    { name: "Big Shoulders Stencil Display", css: bigShouldersStencilDisplay, category: "display" },
    { name: "Big Shoulders Stencil Text", css: bigShouldersStencilText, category: "display" },
    { name: "Big Shoulders Text", css: bigShouldersText, category: "display" },
    { name: "Bitter", css: bitter, category: "serif" },
    { name: "Bodoni Moda", css: bodoniModa, category: "serif" },
    { name: "Brygada 1918", css: brygada1918, category: "serif" },
    { name: "Cabin", css: cabin, category: "sans-serif" },
    { name: "Cairo Play", css: cairoPlay, category: "sans-serif" },
    { name: "Cairo", css: cairo, category: "sans-serif" },
    { name: "Catamaran", css: catamaran, category: "sans-serif" },
    { name: "Caveat", css: caveat, category: "handwriting" },
    { name: "Changa", css: changa, category: "sans-serif" },
    { name: "Chivo Mono", css: chivoMono, category: "monospace" },
    { name: "Chivo", css: chivo, category: "sans-serif" },
    { name: "Cinzel", css: cinzel, category: "serif" },
    { name: "Climate Crisis", css: climateCrisis, category: "display" },
    { name: "Comfortaa", css: comfortaa, category: "display" },
    { name: "Comme", css: comme, category: "sans-serif" },
    { name: "Commissioner", css: commissioner, category: "sans-serif" },
    { name: "Cormorant", css: cormorant, category: "serif" },
    { name: "Crimson Pro", css: crimsonPro, category: "serif" },
    { name: "Cuprum", css: cuprum, category: "sans-serif" },
    { name: "Dancing Script", css: dancingScript, category: "handwriting" },
    { name: "Domine", css: domine, category: "serif" },
    { name: "Dosis", css: dosis, category: "sans-serif" },
    { name: "DynaPuff", css: dynaPuff, category: "display" },
    { name: "EB Garamond", css: ebGaramond, category: "serif" },
    { name: "Eczar", css: eczar, category: "serif" },
    { name: "El Messiri", css: elMessiri, category: "sans-serif" },
    { name: "Encode Sans SC", css: encodeSansSc, category: "sans-serif" },
    { name: "Encode Sans", css: encodeSans, category: "sans-serif" },
    { name: "Epilogue", css: epilogue, category: "sans-serif" },
    { name: "Exo 2", css: exo2, category: "sans-serif" },
    { name: "Exo", css: exo, category: "sans-serif" },
    { name: "Expletus Sans", css: expletusSans, category: "display" },
    { name: "Familjen Grotesk", css: familjenGrotesk, category: "sans-serif" },
    { name: "Faustina", css: faustina, category: "serif" },
    { name: "Figtree", css: figtree, category: "sans-serif" },
    { name: "Finlandica", css: finlandica, category: "sans-serif" },
    { name: "Fira Code", css: firaCode, category: "monospace" },
    { name: "Foldit", css: foldit, category: "display" },
    { name: "Frank Ruhl Libre", css: frankRuhlLibre, category: "serif" },
    { name: "Fraunces", css: fraunces, category: "serif" },
    { name: "Fredoka", css: fredoka, category: "sans-serif" },
    { name: "Gantari", css: gantari, category: "sans-serif" },
    { name: "Gemunu Libre", css: gemunuLibre, category: "sans-serif" },
    { name: "Genos", css: genos, category: "sans-serif" },
    { name: "Georama", css: georama, category: "sans-serif" },
    { name: "Glory", css: glory, category: "sans-serif" },
    { name: "Gluten", css: gluten, category: "display" },
    { name: "Golos Text", css: golosText, category: "sans-serif" },
    { name: "Grandstander", css: grandstander, category: "display" },
    { name: "Grenze Gotisch", css: grenzeGotisch, category: "display" },
    { name: "Hahmlet", css: hahmlet, category: "serif" },
    { name: "Hanken Grotesk", css: hankenGrotesk, category: "sans-serif" },
    { name: "Hepta Slab", css: heptaSlab, category: "serif" },
    { name: "Ibarra Real Nova", css: ibarraRealNova, category: "serif" },
    { name: "Imbue", css: imbue, category: "serif" },
    { name: "Inconsolata", css: inconsolata, category: "monospace" },
    { name: "Inter Tight", css: interTight, category: "sans-serif" },
    { name: "Inter", css: inter, category: "sans-serif" },
    { name: "JetBrains Mono", css: jetBrainsMono, category: "monospace" },
    { name: "Josefin Sans", css: josefinSans, category: "sans-serif" },
    { name: "Jost", css: jost, category: "sans-serif" },
    { name: "Jura", css: jura, category: "sans-serif" },
    { name: "Kantumruy Pro", css: kantumruyPro, category: "sans-serif" },
    { name: "Karla", css: karla, category: "sans-serif" },
    { name: "Kreon", css: kreon, category: "serif" },
    { name: "Kufam", css: kufam, category: "sans-serif" },
    { name: "Kumbh Sans", css: kumbhSans, category: "sans-serif" },
    { name: "Labrada", css: labrada, category: "serif" },
    { name: "League Gothic", css: leagueGothic, category: "sans-serif" },
    { name: "League Spartan", css: leagueSpartan, category: "sans-serif" },
    { name: "Lemonada", css: lemonada, category: "display" },
    { name: "Lexend Deca", css: lexendDeca, category: "sans-serif" },
    { name: "Lexend Exa", css: lexendExa, category: "sans-serif" },
    { name: "Lexend Giga", css: lexendGiga, category: "sans-serif" },
    { name: "Lexend Mega", css: lexendMega, category: "sans-serif" },
    { name: "Lexend Peta", css: lexendPeta, category: "sans-serif" },
    { name: "Lexend Tera", css: lexendTera, category: "sans-serif" },
    { name: "Lexend Zetta", css: lexendZetta, category: "sans-serif" },
    { name: "Lexend", css: lexend, category: "sans-serif" },
    { name: "Libre Bodoni", css: libreBodoni, category: "serif" },
    { name: "Libre Franklin", css: libreFranklin, category: "sans-serif" },
    { name: "Literata", css: literata, category: "serif" },
    { name: "Lora", css: lora, category: "serif" },
    { name: "M PLUS 1 Code", css: mplus1Code, category: "sans-serif" },
    { name: "M PLUS 1", css: mplus1, category: "sans-serif" },
    { name: "M PLUS 2", css: mplus2, category: "sans-serif" },
    { name: "M PLUS Code Latin", css: mplusCodeLatin, category: "sans-serif" },
    { name: "Manrope", css: manrope, category: "sans-serif" },
    { name: "Manuale", css: manuale, category: "serif" },
    { name: "Marhey", css: marhey, category: "display" },
    { name: "Markazi Text", css: markaziText, category: "serif" },
    { name: "Martian Mono", css: martianMono, category: "monospace" },
    { name: "Maven Pro", css: mavenPro, category: "sans-serif" },
    { name: "Merienda", css: merienda, category: "handwriting" },
    { name: "Merriweather Sans", css: merriweatherSans, category: "sans-serif" },
    { name: "Mohave", css: mohave, category: "sans-serif" },
    { name: "Montagu Slab", css: montaguSlab, category: "serif" },
    { name: "Montserrat", css: montserrat, category: "sans-serif" },
    { name: "Mulish", css: mulish, category: "sans-serif" },
    { name: "Murecho", css: murecho, category: "sans-serif" },
    { name: "MuseoModerno", css: museoModerno, category: "display" },
    { name: "Nabla", css: nabla, category: "display" },
    { name: "Newsreader", css: newsreader, category: "serif" },
    { name: "Noto Naskh Arabic", css: notoNaskhArabic, category: "serif" },
    { name: "Noto Nastaliq Urdu", css: notoNastaliqUrdu, category: "serif" },
    { name: "Noto Rashi Hebrew", css: notoRashiHebrew, category: "serif" },
    { name: "Noto Sans Adlam Unjoined", css: notoSansAdlamUnjoined, category: "sans-serif" },
    { name: "Noto Sans Adlam", css: notoSansAdlam, category: "sans-serif" },
    { name: "Noto Sans Armenian", css: notoSansArmenian, category: "sans-serif" },
    { name: "Noto Sans Balinese", css: notoSansBalinese, category: "sans-serif" },
    { name: "Noto Sans Bamum", css: notoSansBamum, category: "sans-serif" },
    { name: "Noto Sans Bassa Vah", css: notoSansBassaVah, category: "sans-serif" },
    { name: "Noto Sans Bengali", css: notoSansBengali, category: "sans-serif" },
    { name: "Noto Sans Canadian Aboriginal", css: notoSansCanadianAboriginal, category: "sans-serif" },
    { name: "Noto Sans Cham", css: notoSansCham, category: "sans-serif" },
    { name: "Noto Sans Cherokee", css: notoSansCherokee, category: "sans-serif" },
    { name: "Noto Sans Devanagari", css: notoSansDevanagari, category: "sans-serif" },
    { name: "Noto Sans Display", css: notoSansDisplay, category: "sans-serif" },
    { name: "Noto Sans Ethiopic", css: notoSansEthiopic, category: "sans-serif" },
    { name: "Noto Sans Georgian", css: notoSansGeorgian, category: "sans-serif" },
    { name: "Noto Sans Gujarati", css: notoSansGujarati, category: "sans-serif" },
    { name: "Noto Sans Gurmukhi", css: notoSansGurmukhi, category: "sans-serif" },
    { name: "Noto Sans Hanifi Rohingya", css: notoSansHanifiRohingya, category: "sans-serif" },
    { name: "Noto Sans Hebrew", css: notoSansHebrew, category: "sans-serif" },
    { name: "Noto Sans Javanese", css: notoSansJavanese, category: "sans-serif" },
    { name: "Noto Sans JP", css: notoSansJp, category: "sans-serif" },
    { name: "Noto Sans Kannada", css: notoSansKannada, category: "sans-serif" },
    { name: "Noto Sans Kayah Li", css: notoSansKayahLi, category: "sans-serif" },
    { name: "Noto Sans Khmer", css: notoSansKhmer, category: "sans-serif" },
    { name: "Noto Sans Lao Looped", css: notoSansLaoLooped, category: "sans-serif" },
    { name: "Noto Sans Lao", css: notoSansLao, category: "sans-serif" },
    { name: "Noto Sans Lisu", css: notoSansLisu, category: "sans-serif" },
    { name: "Noto Sans Malayalam", css: notoSansMalayalam, category: "sans-serif" },
    { name: "Noto Sans Medefaidrin", css: notoSansMedefaidrin, category: "sans-serif" },
    { name: "Noto Sans Meetei Mayek", css: notoSansMeeteiMayek, category: "sans-serif" },
    { name: "Noto Sans Mono", css: notoSansMono, category: "monospace" },
    { name: "Noto Sans New Tai Lue", css: notoSansNewTaiLue, category: "sans-serif" },
    { name: "Noto Sans Ol Chiki", css: notoSansOlChiki, category: "sans-serif" },
    { name: "Noto Sans Oriya", css: notoSansOriya, category: "sans-serif" },
    { name: "Noto Sans Sinhala", css: notoSansSinhala, category: "sans-serif" },
    { name: "Noto Sans Sora Sompeng", css: notoSansSoraSompeng, category: "sans-serif" },
    { name: "Noto Sans Sundanese", css: notoSansSundanese, category: "sans-serif" },
    { name: "Noto Sans Symbols", css: notoSansSymbols, category: "sans-serif" },
    { name: "Noto Sans Syriac", css: notoSansSyriac, category: "sans-serif" },
    { name: "Noto Sans Tai Tham", css: notoSansTaiTham, category: "sans-serif" },
    { name: "Noto Sans Tamil", css: notoSansTamil, category: "sans-serif" },
    { name: "Noto Sans Tangsa", css: notoSansTangsa, category: "sans-serif" },
    { name: "Noto Sans Telugu", css: notoSansTelugu, category: "sans-serif" },
    { name: "Noto Sans Thaana", css: notoSansThaana, category: "sans-serif" },
    { name: "Noto Sans Thai", css: notoSansThai, category: "sans-serif" },
    { name: "Noto Serif Armenian", css: notoSerifArmenian, category: "serif" },
    { name: "Noto Serif Bengali", css: notoSerifBengali, category: "serif" },
    { name: "Noto Serif Devanagari", css: notoSerifDevanagari, category: "serif" },
    { name: "Noto Serif Display", css: notoSerifDisplay, category: "serif" },
    { name: "Noto Serif Ethiopic", css: notoSerifEthiopic, category: "serif" },
    { name: "Noto Serif Georgian", css: notoSerifGeorgian, category: "serif" },
    { name: "Noto Serif Gujarati", css: notoSerifGujarati, category: "serif" },
    { name: "Noto Serif Gurmukhi", css: notoSerifGurmukhi, category: "serif" },
    { name: "Noto Serif Hebrew", css: notoSerifHebrew, category: "serif" },
    { name: "Noto Serif HK", css: notoSerifHk, category: "serif" },
    { name: "Noto Serif Kannada", css: notoSerifKannada, category: "serif" },
    { name: "Noto Serif Khmer", css: notoSerifKhmer, category: "serif" },
    { name: "Noto Serif Khojki", css: notoSerifKhojki, category: "serif" },
    { name: "Noto Serif Lao", css: notoSerifLao, category: "serif" },
    { name: "Noto Serif Malayalam", css: notoSerifMalayalam, category: "serif" },
    { name: "Noto Serif Oriya", css: notoSerifOriya, category: "serif" },
    { name: "Noto Serif Sinhala", css: notoSerifSinhala, category: "serif" },
    { name: "Noto Serif Tamil", css: notoSerifTamil, category: "serif" },
    { name: "Noto Serif Telugu", css: notoSerifTelugu, category: "serif" },
    { name: "Noto Serif Thai", css: notoSerifThai, category: "serif" },
    { name: "Noto Serif Tibetan", css: notoSerifTibetan, category: "serif" },
    { name: "Noto Serif Toto", css: notoSerifToto, category: "serif" },
    { name: "Nunito Sans", css: nunitoSans, category: "sans-serif" },
    { name: "Nunito", css: nunito, category: "sans-serif" },
    { name: "Open Sans", css: openSans, category: "sans-serif" },
    { name: "Oswald", css: oswald, category: "sans-serif" },
    { name: "Outfit", css: outfit, category: "sans-serif" },
    { name: "Overpass Mono", css: overpassMono, category: "monospace" },
    { name: "Overpass", css: overpass, category: "sans-serif" },
    { name: "Oxanium", css: oxanium, category: "display" },
    { name: "Pathway Extreme", css: pathwayExtreme, category: "sans-serif" },
    { name: "Petrona", css: petrona, category: "serif" },
    { name: "Phudu", css: phudu, category: "display" },
    { name: "Piazzolla", css: piazzolla, category: "serif" },
    { name: "Playfair Display", css: playfairDisplay, category: "serif" },
    { name: "Plus Jakarta Sans", css: plusJakartaSans, category: "sans-serif" },
    { name: "Podkova", css: podkova, category: "serif" },
    { name: "Poltawski Nowy", css: poltawskiNowy, category: "serif" },
    { name: "Pontano Sans", css: pontanoSans, category: "sans-serif" },
    { name: "Public Sans", css: publicSans, category: "sans-serif" },
    { name: "Quicksand", css: quicksand, category: "sans-serif" },
    { name: "Radio Canada", css: radioCanada, category: "sans-serif" },
    { name: "Raleway", css: raleway, category: "sans-serif" },
    { name: "Rasa", css: rasa, category: "serif" },
    { name: "Readex Pro", css: readexPro, category: "sans-serif" },
    { name: "Recursive", css: recursive, category: "sans-serif" },
    { name: "Red Hat Display", css: redHatDisplay, category: "sans-serif" },
    { name: "Red Hat Mono", css: redHatMono, category: "monospace" },
    { name: "Red Hat Text", css: redHatText, category: "sans-serif" },
    { name: "Red Rose", css: redRose, category: "display" },
    { name: "Reem Kufi Fun", css: reemKufiFun, category: "sans-serif" },
    { name: "Reem Kufi", css: reemKufi, category: "sans-serif" },
    { name: "Roboto Flex", css: robotoFlex, category: "sans-serif" },
    { name: "Roboto Mono", css: robotoMono, category: "monospace" },
    { name: "Roboto Serif", css: robotoSerif, category: "serif" },
    { name: "Roboto Slab", css: robotoSlab, category: "serif" },
    { name: "Rokkitt", css: rokkitt, category: "serif" },
    { name: "Rosario", css: rosario, category: "sans-serif" },
    { name: "Rubik", css: rubik, category: "sans-serif" },
    { name: "Ruda", css: ruda, category: "sans-serif" },
    { name: "Saira", css: saira, category: "sans-serif" },
    { name: "Sansita Swashed", css: sansitaSwashed, category: "display" },
    { name: "Schibsted Grotesk", css: schibstedGrotesk, category: "sans-serif" },
    { name: "Shantell Sans", css: shantellSans, category: "display" },
    { name: "Signika Negative", css: signikaNegative, category: "sans-serif" },
    { name: "Signika", css: signika, category: "sans-serif" },
    { name: "Smooch Sans", css: smoochSans, category: "sans-serif" },
    { name: "Sofia Sans Condensed", css: sofiaSansCondensed, category: "sans-serif" },
    { name: "Sofia Sans Extra Condensed", css: sofiaSansExtraCondensed, category: "sans-serif" },
    { name: "Sofia Sans Semi Condensed", css: sofiaSansSemiCondensed, category: "sans-serif" },
    { name: "Sofia Sans", css: sofiaSans, category: "sans-serif" },
    { name: "Sono", css: sono, category: "sans-serif" },
    { name: "Sora", css: sora, category: "sans-serif" },
    { name: "Source Code Pro", css: sourceCodePro, category: "monospace" },
    { name: "Source Sans 3", css: sourceSans3, category: "sans-serif" },
    { name: "Source Serif 4", css: sourceSerif4, category: "serif" },
    { name: "Space Grotesk", css: spaceGrotesk, category: "sans-serif" },
    { name: "Spline Sans Mono", css: splineSansMono, category: "monospace" },
    { name: "Spline Sans", css: splineSans, category: "sans-serif" },
    { name: "Stick No Bills", css: stickNoBills, category: "sans-serif" },
    { name: "STIX Two Text", css: stixTwoText, category: "serif" },
    { name: "Syne", css: syne, category: "sans-serif" },
    { name: "Texturina", css: texturina, category: "serif" },
    { name: "Tourney", css: tourney, category: "display" },
    { name: "Trispace", css: trispace, category: "sans-serif" },
    { name: "Truculenta", css: truculenta, category: "sans-serif" },
    { name: "Unbounded", css: unbounded, category: "display" },
    { name: "Urbanist", css: urbanist, category: "sans-serif" },
    { name: "Varta", css: varta, category: "sans-serif" },
    { name: "Vazirmatn", css: vazirmatn, category: "sans-serif" },
    { name: "Vollkorn", css: vollkorn, category: "serif" },
    { name: "Work Sans", css: workSans, category: "sans-serif" },
    { name: "Yaldevi", css: yaldevi, category: "sans-serif" },
    { name: "Yanone Kaffeesatz", css: yanoneKaffeesatz, category: "sans-serif" },
    { name: "Yrsa", css: yrsa, category: "serif" },
    { name: "Ysabeau", css: ysabeau, category: "sans-serif" },
];
