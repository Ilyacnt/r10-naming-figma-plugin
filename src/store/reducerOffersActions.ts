import { ReducerOffersActionTypes } from './reducerOffers'

export function setOffers(offers: string[]) {
  return { type: ReducerOffersActionTypes.setOffers, payload: offers }
}

function setLoading(loading: boolean) {
  return { type: ReducerOffersActionTypes.setLoading, payload: loading }
}

function setError(error: string) {
  return { type: ReducerOffersActionTypes.setError, payload: error }
}

let data = [
  '1FIT_',
  '1INCH_',
  '3COMMAS_',
  'ALFACAPITAL_',
  'ALLGODSACADEMY_',
  'ANIMALGARDEN_',
  'ANON_',
  'ARENAOFVALOR_',
  'APTEKARU_',
  'ARBUZ_',
  'BEBAKIDS_',
  'BINOMO_',
  'BLOODSTRIKE_',
  'SBERMARKET_',
  'CHRONICLEOFINFINITY_',
  'CHRONICLES_',
  'CITYDRIVE_',
  'COA_',
  'DELIVERYCLUB_',
  'DEMONHUNTER_',
  'ROBOCASH_',
  'DOMINO_',
  'DOZARPLATI_',
  'DREAM_',
  'EAPTEKA_',
  'EDADIL_',
  'YAEDA_',
  'ERAOFCONQUEST_',
  'FAIRYAWAKEN_',
  'FARFETCH_',
  'FOXLEGENDS_',
  'FXPRO_',
  'LOTR_',
  'GASPROMBANK_',
  'GETTRANSFER_',
  'IDLE_',
  'GIRLSANDHUNTER_',
  'GLORIAJEANS_',
  'GOC_',
  'GOK_',
  'GOLDAPPLE_',
  'GON_',
  'GULLIVER_',
  'HAPDAY_',
  'HHUNTER_',
  'HOFF_',
  'HOLODILNIK_',
  'HONKAI_',
  'HOTS_',
  'HUOBI_',
  'IMMORTALAWAKENING_',
  'INDRIVER_',
  'INVESTIDEI_',
  'IQOPTION_',
  'JOOM_',
  'KASSIR_',
  'KINOPOISK_',
  'KISSOFWAR_',
  'KLUBMASTEROV_',
  'KNIGAGEROEV_',
  'KRESLA_',
  'YAMARKET_',
  'LEGENDOFHEROES_',
  'LENTA_',
  'LETYSHOPS_',
  'LEVELKITCHEN_',
  'LIKEE_',
  'LOAL_',
  'MARIOBERLUCCI_',
  'MARVELSNAP_',
  'METEUM_',
  'METRO_',
  'MIGOLIVE_',
  'MIJA_',
  'MOMLIFE_',
  'MONEYMAN_',
  'MONSTERTRICK_',
  'MOVIEHUNT_',
  'NATIONALLOTTERY_',
  'NUTSON_',
  'OCTAFX_',
  'OLYMP_',
  'ONFY_',
  'OPERA_',
  'OZON_',
  'PATHOFIMMORTALS_',
  'PEREKRESTOK_',
  'PINEMELON_',
  'PLUSCITY_',
  'PUBG_',
  'RABOTARU_',
  'RACINGSTORY_',
  'REBOFCHAOS_',
  'RENDEZVOUS_',
  'ROMANCECLUB_',
  'SBERMEGAMARKET_',
  'SHEIN_',
  'SOLITAIRE_',
  'SOLITER_',
  'SSUNDAY_',
  'STARMAKER_',
  'STREAMBET_',
  'TALESNOIR_',
  'TANKFORCE_',
  'THEANTS_',
  'THESWORD_',
  'TIGGY_',
  'UBER_',
  'UKRZOLOTO_',
  'UNACASH_',
  'UTEKA_',
  'VIJU_',
  'VSEMAYKI_',
  'VYGODA_',
  'WOW_',
  'YABROWSER_',
  'YALAVKA_',
  'YALLAMARKET_',
  'YANDEXDRIVE_',
  'YANDEXFUEL_',
  'YANDEXGO_',
  'YANDEXKEYBOARD_',
  'YANDEXMAPS_',
  'YANDEXMUSIC_',
  'YANDEXRABOTA_',
  'YANDEXSEARCH_',
  'YANGODELI_',
  'YAPPY_',
  'YASHEDEVRUM_',
  'ZAIMER_',
  'ZAYMIGO_',
  'ZOMBIESIEGE_',
  'DOLYAME_',
  'YGO_',
  'TINKOFF_INVEST_',
  'PROFI_',
  'RIDA_',
  'TINKOFFBLACK_',
  'INV_',
  'DODO_',
  'TECHNOPARK_',
  'ORBY_',
  'GOK_',
  'GOS_',
  'DRAGONCONTRACT_',
  'DRAGONHUNTER_',
  'DEMONHUNTER_',
  'GIRLSANDHUNTER_',
  'IMMORTALAWAKENING_',
  'KISSOFWAR_',
  'SHERRY_',
]

//@ts-ignore
window.googleDocCallback = function () {
  return true
}

export function fetchOffers() {
  return (dispatch) => {
    parent.postMessage({ pluginMessage: { type: 'fetchOffers' } }, '*')
    // await doc.useServiceAccountAuth({
    //   client_email: "aftereffectsplugin@aftereffects-integration.iam.gserviceaccount.com",
    //   private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDVhg2LMdoUSell\nPjXUvTAkYPs9pfDejPc4l4Aj6m3HgbyrXKfBLresutC8qU7lGEUbvIwxJfhvQsSS\n9H5R7Q1lmB+QR+5UR6TqgHIBh/GY7Bn2FiqoshEVF5yIqty3QcZicvR1NXKbYs0Z\n1CuB/lgrvqWx5jcuknwkPJ14NsfSnDys4/aNzUlH5vzBiGHN3JuzKaGzkXo8q5/6\nqJTNJxCrTl3XTyEiHZK5kn6IV54+BiptOY4kfWuI4gNc3untJ4fCyyEW5k3OZs8F\nMLVeLoc3rKXV6UCFu5YVS+Kju+3JbfTfnWTfnC0hyqY50mXzChcX7qJ1lMZAWyFL\n2GTHFnpxAgMBAAECggEANV1XyLRYo+32DETgSM9QtyLa3+U3fjOefPEWSEOolK5m\n1DAnyAcQRjX5gdFRw72NVhmJMyZhgRMflHfRE1Iq4TuEFff4R22ReL9J3vqWJelK\nMsAHANriHJKmX1zOpWlltsiyspF9V3r5ti0aA5bo++PdvwjBvVzEdH0GwRr11Xuc\nNjPNb+eYlPqqayOk1LlgdcLeJkgRMdwT4jfy9cfZYbYvPioDrgwHkB3DwgE4fmQc\nVQvc1x1Mi6uMA9TMYgJmDFEQF2f46re1NkQKAmLomoA53QTwYUnYtgY/VtAQgH1Q\nemo3z5F49yu9dq4XonxGJ72JMwWoYSTXHA5fytUwLQKBgQD4OodkfuWu5vRt7m/L\nvh9gIhW6px3F3c1haVeyQ+zBq7+8mkEPQIZ0oxqX63sEgrsNY7+4EmmblbonSyDY\nrr417HI9cZQhw0WrvSUxB5oMqZRRHZAMNEhtdHSHjrYEoIS0lwKKJMcyn6acDrxp\nBAGdKl4XNDsM92r5mBSQfgDVTQKBgQDcNV/8wP6wJUMjNuO+QkAmi/c2Rrwp1+Ei\nzxIjKhsDBqzkqqotF11FWsypaD3H80bZ09wT0MBoHpK2QmxtVAPMEo7qBesWGb25\nL0asoN5SE3PpD2B0QkkggsFJ/YONOd8+q5FqIFRg1ClOBXD4bWM4GZ8MkrdVoFXD\nOrjpFMzXtQKBgCwFBRmXP1gC8PnFvOGet6WupbfSBv+d09wgeELOtN+re3cQy9TO\nlol8myyxv8EPBejb9ZXI/h1vMfHh6tNCOc0KP0ASMjjCjkpkYoINXQ49zGWOHotr\ngiSW8EtRzYmIhcAYv4SL/R9HHJ60JklhQoACkWkABDDKd5gHli4BilhJAoGBAIi+\nmGnDiyTlLsjaWBiY2W9WcWCCEmzFgyfzgKbXiciaR5kEJgM0RBZCaV81vU/CUZgJ\nCNxBQIonmiGWI/DMQENkrtzCahbiSz+JDRE8IHLFY7AxfUsUsoZ+y/rfc+aqLmij\nb/yAMQWkGjY6CMosW3XF60+KeFCy7S7780HCSeYVAoGAQpbwqUfLk5YOo3U5jXSW\nNPCpEIeZqyK+dysEqK4Aq3PWJFvIziYkggz64YU5cSQHH9vb3/3I1hZoL55zn2bX\n5EyEQkuQDLzNuyRl67W0IJ96qQ0dLuUsB3JPJqozy4wLVUnVns6F6nrAsE8sHRp3\nRGBjBr0vyyPZtBAQsXdsGJc=\n-----END PRIVATE KEY-----\n",
    // });

    // await doc.loadInfo(); // loads document properties and worksheets
    // console.log(doc.title);

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

    dispatch(setOffers(data))
  }
}
