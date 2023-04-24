import { ReducerOffersActionTypes } from "./reducerOffers";

export function setOffers(offers: string[]) {
  return { type: ReducerOffersActionTypes.setOffers, payload: offers };
}

function setLoading(loading: boolean) {
    return { type: ReducerOffersActionTypes.setLoading, payload: loading };
}

function setError(error: string) {
  return { type: ReducerOffersActionTypes.setError, payload: error };
}

const sheetId = "1BIay3Xqs1P2xGhX5kBEweAFTQHBivTa4to6_4Vpvu2Y";
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = "user-data";
const query = encodeURIComponent("Select *");
const url = `${base}&sheet=${sheetName}&tq=${query}&callback=googleDocCallback`;
let data = ["1FIT_", "1INCH_", "3COMMAS_", "ALFACAPITAL_", "ALLGODSACADEMY_", "ANIMALGARDEN_", "ANON_", "ARENAOFVALOR_", "APTEKARU_", "ARBUZ_", "BEBAKIDS_", "BINOMO_", "BLOODSTRIKE_", "SBERMARKET_", "CHRONICLEOFINFINITY_", "CHRONICLES_", "CITYDRIVE_", "COA_", "DELIVERYCLUB_", "DEMONHUNTER_", "ROBOCASH_", "DOMINO_", "DOZARPLATI_", "DREAM_", "EAPTEKA_", "EDADIL_", "YAEDA_", "ERAOFCONQUEST_", "FAIRYAWAKEN_", "FARFETCH_", "FOXLEGENDS_", "FXPRO_", "LOTR_", "GA_CRM_", "GASPROMBANK_", "GETTRANSFER_", "IDLE_", "GIRLSANDHUNTER_", "GLORIAJEANS_", "GOC_", "GOK_", "GOLDAPPLE_", "GON_", "GULLIVER_", "HAPDAY_", "HHUNTER_", "HOFF_", "HOLODILNIK_", "HONKAI_", "HOTS_", "HUOBI_", "IMMORTALAWAKENING_", "INDRIVER_", "INVESTIDEI_", "IQOPTION_", "JOOM_", "KASSIR_", "KINOPOISK_", "KISSOFWAR_", "KLUBMASTEROV_", "KNIGAGEROEV_", "KRESLA_", "YAMARKET_", "LEGENDOFHEROES_", "LENTA_", "LETYSHOPS_", "LEVELKITCHEN_", "LIKEE_", "LOAL_", "MARIOBERLUCCI_", "MARVELSNAP_", "METEUM_", "METRO_", "MIGOLIVE_", "MIJA_", "MOMLIFE_", "MONEYMAN_", "MONSTERTRICK_", "MOVIEHUNT_", "NATIONALLOTTERY_", "NUTSON_", "OCTAFX_", "OLYMP_", "ONFY_", "OPERA_", "OZON_", "PATHOFIMMORTALS_", "PEREKRESTOK_", "PHEMEX_SELF_", "PINEMELON_", "PLUSCITY_", "PUBG_", "RABOTARU_", "RACINGSTORY_", "REBOFCHAOS_", "RENDEZVOUS_", "ROMANCECLUB_", "SBERMEGAMARKET_", "SHEIN_", "SOLITAIRE_", "SOLITER_", "SSUNDAY_", "STARMAKER_", "STREAMBET_", "TALESNOIR_", "TANKFORCE_", "THEANTS_", "THESWORD_", "TIGGY_", "UBER_", "UKRZOLOTO_", "UNACASH_", "UTEKA_", "VIJU_", "VSEMAYKI_", "VYGODA_", "WOW_", "YABROWSER_", "YALAVKA_", "YALLAMARKET_", "YANDEXDRIVE_", "YANDEXFUEL_", "YANDEXGO_", "YANDEXKEYBOARD_", "YANDEXMAPS_", "YANDEXMUSIC_", "YANDEXRABOTA_", "YANDEXSEARCH_", "YANGODELI_", "YAPPY_", "YASHEDEVRUM_", "ZAIMER_", "ZAYMIGO_", "ZOMBIESIEGE_", "DOLYAME_", "YGO_", "TINKOFF_INVEST_", "PROFI_", "RIDA_", "TINKOFFBLACK_", "INV_TINKOFF_INVEST"]


//@ts-ignore
window.googleDocCallback = function () { return true; };

export function fetchOffers() {
  return dispatch => {
    // setLoading(true)
    // fetch(url)
    //   .then((res) => res.text())
    //   .then((rep) => {
    //     const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
    //     jsonData.table.rows.forEach((row) => {
    //       data = []
    //       data.push(row.c[0].v);
    //       console.log(row.c[0].v);
    //     });
    //   }).catch((err) => setError(err.message)).finally(() => {{setLoading(false)}});
    
    dispatch(setOffers(data));
  };
}
